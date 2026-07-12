export default function PageLoader() {
  return (
    <div
      className="mx-auto flex min-h-[50vh] w-full max-w-7xl items-center px-6 py-16 text-sm font-medium text-[var(--color-text-secondary)]"
      role="status"
      aria-live="polite"
    >
      Loading page...
    </div>
  );
}
