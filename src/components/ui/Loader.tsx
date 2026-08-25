export default function Loader({
  text = "Loading data...",
}: {
  text?: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
      <div className="relative flex items-center justify-center">
        {/* Outer glowing ring */}
        <div className="w-12 h-12 rounded-full border-4 border-purple-500/20 animate-pulse"></div>
        {/* Inner spinning ring */}
        <div className="absolute w-12 h-12 rounded-full border-4 border-purple-600 border-t-transparent animate-spin"></div>
        {/* Center dot */}
        <div className="absolute w-3 h-3 bg-purple-600 rounded-full animate-ping"></div>
      </div>
      <p className="text-xs font-semibold tracking-wider text-purple-400 uppercase animate-pulse">
        {text}
      </p>
    </div>
  );
}
