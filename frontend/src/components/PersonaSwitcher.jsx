function PersonaSwitcher({ personas, active, onSwitch }) {
  return (
    <div className="flex space-x-2 bg-pink-100/60 p-1.5 rounded-full border border-pink-200 shadow-inner">
      {personas.map((p) => (
        <button
          key={p.id}
          onClick={() => onSwitch(p)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
            active.id === p.id
              ? 'bg-white text-pink-500 shadow-md scale-105'
              : 'text-pink-300 hover:text-pink-500 hover:bg-pink-200/50'
          }`}
        >
          {p.name}
        </button>
      ))}
    </div>
  )
}

export default PersonaSwitcher