export default function HomePage() {
  return (
    <main style={{
      minHeight: '100svh',
      display: 'grid',
      placeItems: 'center',
      padding: '2rem'
    }}>
      <div>
        <h1 style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)', marginBottom: '0.75rem' }}>Your site is live</h1>
        <p style={{ color: 'var(--muted-foreground)' }}>
          Deployed to <a href="https://agentic-8cd6b077.vercel.app" target="_blank" rel="noreferrer">agentic-8cd6b077.vercel.app</a>
        </p>
      </div>
    </main>
  );
}
