// Compact Rating Component
export const RatingMainPage = ({ 
  label, 
  value, 
  onChange 
}: { 
  label: string, 
  value: number, 
  onChange: (value: number) => void 
}) => {
  return (
    <div className="flex flex-col items-center space-y-2">
      <label className="text-sm text-gray-300">{label}</label>
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((rating) => (
          <button
            key={rating}
            onClick={() => onChange(rating)}
            className={`
              w-8 h-8 rounded-full 
              transition-all duration-200 
              flex items-center justify-center
              ${value === rating 
                ? 'bg-blue-600 text-white scale-110' 
                : 'bg-gray-700 text-gray-400 hover:bg-gray-600'}
            `}
          >
            {rating}
          </button>
        ))}
      </div>
    </div>
  );
};