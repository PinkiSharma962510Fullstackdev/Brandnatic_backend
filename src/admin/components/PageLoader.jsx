export default function PageLoader() {
  return (
    <div className="fixed inset-0 z-[9999] bg-black flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="flex gap-2">
          <span className="w-3 h-10 bg-cyan-400 animate-pulse"></span>
          <span className="w-3 h-14 bg-cyan-400 animate-pulse delay-150"></span>
          <span className="w-3 h-10 bg-cyan-400 animate-pulse delay-300"></span>
        </div>
        <p className="text-gray-400 text-sm tracking-widest uppercase">
          Loading…
        </p>
      </div>
    </div>
  );
}

