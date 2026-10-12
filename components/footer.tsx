export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto">
      <div className="w-full max-w-[40em] mx-auto px-6 py-8">
        <p className="text-xs text-muted-foreground">
          © {year} Alex Bloom • Send it responsibly.
        </p>
      </div>
    </footer>
  );
}
