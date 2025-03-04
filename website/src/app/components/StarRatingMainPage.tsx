import { Star, StarHalf} from 'lucide-react';

// Star Rating Component
export const StarRatingMainPage = ({ score }: { score: number }) => {
  const fullStars = Math.floor(score);
  const hasHalfStar = score % 1 >= 0.5;

  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, index) => {
        if (index < fullStars) {
          return <Star key={index} className="text-yellow-500 fill-yellow-500" size={20} />;
        }
        if (index === fullStars && hasHalfStar) {
          return <StarHalf key={index} className="text-yellow-500" size={20} />;
        }
        return <Star key={index} className="text-gray-300" size={20} />;
      })}
    </div>
  );
};