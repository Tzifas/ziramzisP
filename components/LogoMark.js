import Image from 'next/image';

export default function LogoMark({ size = 38, className = '' }) {
  return (
    <span
      className={`logo-mark ${className}`}
      style={{ display: 'inline-flex', width: size, height: size, flex: '0 0 auto' }}
      aria-hidden="true"
    >
      <Image
        src="/brand/mark.jpg"
        alt=""
        width={size}
        height={size}
        sizes={`${size}px`}
        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
      />
    </span>
  );
}
