import LogoMark from './LogoMark';

export default function PageShell({ children }) {
  return (
    <div className="bg-dark text-white overflow-hidden">
      <header className="sticky top-0 z-40" style={{
        background: 'rgba(5,10,24,0.92)',
        backdropFilter: 'blur(14px)',
        borderBottom: '1px solid rgba(245,200,66,0.14)',
      }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3" aria-label="Back to the Ziramzis home page">
            <LogoMark size={36} id="pshdr" />
            <span className="font-black tracking-widest gradient-text">ZIRAMZIS</span>
          </a>
          <a href="/" className="inline-flex items-center gap-2 text-sm font-bold" style={{ color: 'var(--cyan-mid)' }}>
            ← Back to the hive
          </a>
        </div>
      </header>
      {children}
    </div>
  );
}
