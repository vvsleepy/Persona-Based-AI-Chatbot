function SuggestionChips({ suggestions, onSelect }) {
  if (!suggestions || suggestions.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2 mt-4 justify-center">
      {suggestions.map((text, idx) => (
        <button
          key={idx}
          onClick={() => onSelect(text)}
          className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-colors shadow-sm"
        >
          {text}
        </button>
      ))}
    </div>
  )
}

export default SuggestionChips
