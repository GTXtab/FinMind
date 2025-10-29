export const ComponentLoader = () => (
  <div className="flex min-h-screen w-full flex-col items-center justify-center bg-gray-50">
    <div
      className="h-36 w-36 animate-spin rounded-full border-4 border-gray-300 border-t-blue-600"
      role="status"
      aria-label="Loading..."
    />

    <p className="mt-4 text-lg font-medium text-gray-700">Loading...</p>
  </div>
);
