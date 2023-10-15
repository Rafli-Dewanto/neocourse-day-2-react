export function SkeletonText() {
  return (
    <div className="w-full animate-pulse sm:w-96">
      <div className="mb-4 h-4 w-full rounded-full bg-gray-200"></div>
      <div className="mb-4 h-4 w-full rounded-full bg-gray-200"></div>
      <div className="mb-4 h-4 w-full rounded-full bg-gray-200"></div>
      <div className="mb-4 h-4 w-full rounded-full bg-gray-200"></div>
      <div className="mb-4 h-4 w-full rounded-full bg-gray-200"></div>
      <div className="mb-4 h-4 w-full rounded-full bg-gray-200"></div>
    </div>
  );
}
export function SkeletonButton() {
  return (
    <div className="mt-8 max-w-sm animate-pulse">
      <div
        className="absolute bottom-4
      right-4 h-8 w-28 rounded-full
      bg-lochmara-500 px-4 py-2
      font-semibold text-white
      hover:bg-lochmara-600
      active:bg-lochmara-700
      "
      ></div>
    </div>
  );
}
