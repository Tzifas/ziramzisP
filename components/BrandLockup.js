import Image from 'next/image';

export default function BrandLockup({ className = '', priority = false }) {
  return (
    <div className={`brand-lockup ${className}`}>
      <Image
        src="/brand/wordmark.jpg"
        alt="Ziramzis — Busy Bee Studio"
        width={200}
        height={48}
        priority={priority}
        style={{ objectFit: 'contain', maxWidth: '100%', height: 'auto' }}
      />
    </div>
  );
}
