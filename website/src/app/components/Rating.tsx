
// Rating component for visualizing scores
export const Rating = ({ score, label }: { score: number, label: string }) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span 
          key={i} 
          className={`text-xl ${i < score ? 'text-yellow-500' : 'text-gray-700'}`}
        >
          ★
        </span>
      );
    }
    
    return (
      <div className="flex flex-col items-center">
        <div className="flex">{stars}</div>
        <span className="text-xs mt-1 text-gray-300">{label}</span>
      </div>
    );
  };