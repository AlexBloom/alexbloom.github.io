export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto">
      <div className="max-w-[960px] mx-auto px-6 py-8">
        <p className="text-xs text-muted-foreground">
          © {year} Alex Bloom • <a href="/img/airborne.jpg" target="_blank">Send it responsibly.</a>
        </p>
      </div>
    </footer>
  );
}
