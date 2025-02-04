export function LoadingSpinner() {
  return (
    <div className="text-center py-12">
      <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-200 border-t-blue-600 mx-auto" />
      <p className="mt-4 text-gray-600 font-medium">Loading videos...</p>
    </div>
  );
}