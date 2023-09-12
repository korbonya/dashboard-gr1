export default function StatsCard() {
  return (
    <div className="w-full bg-slate-100 px-4 py-2 rounded-md shadow">
      <h1 className="font-light text-sm">StatsCard</h1>
      <div className="flex items-center space-x-2 mt-4">
        <div className="w-8 h-8 bg-orange-100 grid place-items-center rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
          />
        </svg>
        </div>

        <span className="text-3xl font-bold">45</span>
      </div>
    </div>
  );
}
