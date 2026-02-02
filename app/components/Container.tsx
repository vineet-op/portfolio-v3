export default function Container({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <div className="relative grid min-h-screen w-full lg:w-6xl lg:mx-auto overflow-x-hidden grid-cols-[0.5rem_0.75rem_1fr_0.75rem_0.5rem] sm:grid-cols-[1fr_1rem_minmax(0,1200px)_1rem_1fr] md:grid-cols-[1fr_2rem_minmax(0,1200px)_2rem_1fr] lg:grid-cols-[1fr_2.5rem_minmax(0,1400px)_2.5rem_1fr] grid-rows-[1fr_1px_auto_1px_1fr] bg-background [--pattern-fg:var(--color-border)]">
      {/* Left decorative column with diagonal pattern */}
      <div className="relative -right-px col-start-2 row-span-full row-start-1 border-x border-dashed border-border bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)] bg-size-[6px_6px] sm:bg-size-[8px_8px] md:bg-size-[10px_10px] bg-fixed"></div>

      {/* Right decorative column with diagonal pattern */}
      <div className="relative -left-px col-start-4 row-span-full row-start-1 border-x border-dashed border-border bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)] bg-size-[6px_6px] sm:bg-size-[8px_8px] md:bg-size-[10px_10px] bg-fixed"></div>



      {/* Main content area */}
      <div className={`col-start-3 row-start-3 h-full min-h-svh items-center bg-background [--pattern-fg:var(--color-border)]text-foreground w-full overflow-hidden ${className || ''}`}>
        {children}
      </div>
    </div>
  );
}