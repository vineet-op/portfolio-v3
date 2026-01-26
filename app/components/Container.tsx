export default function Container({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={`h-screen items-center bg-primary text-white
    w-5xl mx-auto ${className}`}
    >
      {children}
    </div>
  );
}