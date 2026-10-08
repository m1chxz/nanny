export default function Logo({ light = false }) {
  return (
    <span className={`logo ${light ? "logo--light" : ""}`}>
      <svg className="logo__mark" viewBox="0 0 64 64" aria-hidden="true">
        <rect width="64" height="64" rx="18" />
        <path d="M32 47S16 38 16 26a9 9 0 0116-5.6A9 9 0 0148 26c0 12-16 21-16 21z" />
      </svg>
      <span className="logo__text">Nanny</span>
    </span>
  );
}
