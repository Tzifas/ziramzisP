export default function BrandLockup({ className = '', priority = false }) {
  return (
    <img
      src="/brand/wordmark.jpg"
      alt="Ziramzis — Busy Bee Studio"
      className={`brand-lockup ${className}`}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
    />
  );
}
