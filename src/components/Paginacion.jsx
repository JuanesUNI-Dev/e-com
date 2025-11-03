export default function Pagination() {
  const pages = [1, 2, 3];

  return (
    <div className="flex items-center justify-center gap-2 mt-10">
      
      <button
        className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition"
      >
        <span className="material-symbols-outlined text-gray-500">
          chevron_left
        </span>
      </button>
      {pages.map((page, i) => (
        <button
          key={i}
          className={`w-10 h-10 flex items-center justify-center rounded-full text-sm transition
            ${page === 1 
              ? "bg-black text-white font-semibold" 
              : "hover:bg-gray-100 text-gray-700"
            }`}
        >
          {page}
        </button>
      ))}

      <span className="w-10 h-10 flex items-center justify-center text-gray-400">
        …
      </span>

      <button
        className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition"
      >
        <span className="material-symbols-outlined text-gray-500">
          chevron_right
        </span>
      </button>
    </div>
  );
}
