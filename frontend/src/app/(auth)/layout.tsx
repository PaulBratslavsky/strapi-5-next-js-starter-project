export default function AuthLayoutRoute({ children }: {
  readonly children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-muted">
      {children}
    </div>
  );
}