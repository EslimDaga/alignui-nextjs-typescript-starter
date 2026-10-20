import {
  SVGHeartFill,
  SVGHeartHalf,
  SVGHeartLine,
  SVGStarFill,
  SVGStarHalf,
  SVGStarLine,
} from '@/components/ui/svg-rating-icons';

function StarRating({ rating }: { rating: number }) {
  const getStarIcon = (i: number) => {
    if (rating >= i + 1) {
      return <SVGStarFill className='size-5 text-yellow-500' key={i} />;
    } else if (rating >= i + 0.5) {
      return <SVGStarHalf className='size-5 text-yellow-500' key={i} />;
    }
    return <SVGStarLine className='size-5 text-stroke-sub-300' key={i} />;
  };

  return (
    <div className='flex gap-0.5'>
      {Array.from({ length: 5 }, (_, i) => getStarIcon(i))}
    </div>
  );
}

function HeartRating({ rating }: { rating: number }) {
  const getHeartIcon = (i: number) => {
    if (rating >= i + 1) {
      return <SVGHeartFill className='size-5 text-red-500' key={i} />;
    } else if (rating >= i + 0.5) {
      return <SVGHeartHalf className='size-5 text-red-500' key={i} />;
    }
    return <SVGHeartLine className='size-5 text-stroke-sub-300' key={i} />;
  };

  return (
    <div className='flex gap-0.5'>
      {Array.from({ length: 5 }, (_, i) => getHeartIcon(i))}
    </div>
  );
}

export function RatingReviewDemo() {
  return (
    <div className='flex flex-col items-center gap-6'>
      <StarRating rating={4.5} />
      <StarRating rating={3} />

      <HeartRating rating={0.5} />
      <HeartRating rating={5} />
    </div>
  );
}
