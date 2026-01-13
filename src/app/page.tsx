export default function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background p-6 text-foreground">
      <div className="w-full max-w-xl space-y-3 text-center">
        <h1 className="text-3xl font-semibold tracking-tight">Try</h1>
        <p className="text-sm text-black/70 dark:text-white/70">
          Edit <span className="font-medium text-foreground">src/app/page.tsx</span> to get started.
        </p>
      </div>
    </main>
  );
}
