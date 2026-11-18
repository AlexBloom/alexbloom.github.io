import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

function walk(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const filename = path.join(directory, entry.name);
    return entry.isDirectory() ? walk(filename) : [filename];
  });
}

async function main() {
  const images = walk('public').filter((filename) =>
    /\.(jpe?g|png|gif)$/i.test(filename) &&
    !/\/(originals|src)\//.test(filename) &&
    !/^public\/(apple|android|ms-icon|favicon)/.test(filename)
  );
  const replacements = [];
  let before = 0;
  let after = 0;
  for (const filename of images) {
    // Retain the extension to avoid collisions between e.g. logo.jpg and logo.png.
    const destination = `${filename}.webp`;
    const source = await sharp(filename, { animated: true }).metadata();
    await sharp(filename, { animated: true })
      .rotate()
      .webp({ quality: 85, effort: 5 })
      .toFile(destination);
    const output = await sharp(destination, { animated: true }).metadata();
    if ((source.pages ?? 1) !== (output.pages ?? 1)) {
      throw new Error(`Animation frame count changed: ${filename}`);
    }
    if (source.hasAlpha && !output.hasAlpha) {
      const stats = await sharp(filename).stats();
      if (!stats.isOpaque) throw new Error(`Transparency lost: ${filename}`);
    }
    before += fs.statSync(filename).size;
    after += fs.statSync(destination).size;
    const url = filename.slice('public'.length);
    replacements.push([url, `${url}.webp`]);
    if (filename.startsWith('public/img/vibes/')) replacements.push([path.basename(filename), `${path.basename(filename)}.webp`]);
  }

  const files = ['app', 'components', 'content', 'lib'].flatMap(walk)
    .filter((filename) => /\.(tsx?|jsx?|css|json|mdx?)$/.test(filename));
  let updated = 0;
  for (const filename of files) {
    const source = fs.readFileSync(filename, 'utf8');
    let output = source;
    for (const [from, to] of replacements) {
      for (const [oldUrl, newUrl] of [[from, to], [encodeURI(from), encodeURI(to)]]) {
        // Match complete URLs, including optional queries, without modifying .webp references.
        const escaped = oldUrl.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        output = output.replace(new RegExp(`${escaped}(?=["'\x60\\s)\\]?#]|$)`, 'g'), newUrl);
      }
    }
    if (output !== source) {
      fs.writeFileSync(filename, output);
      updated++;
    }
  }
  console.log(JSON.stringify({ converted: images.length, updatedFiles: updated, sourceMB: +(before / 1048576).toFixed(2), webpMB: +(after / 1048576).toFixed(2), savingsPercent: +((1 - after / before) * 100).toFixed(1) }));
}

main().catch((error) => { console.error(error); process.exitCode = 1; });
