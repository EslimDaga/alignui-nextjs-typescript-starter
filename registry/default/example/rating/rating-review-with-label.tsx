import * as LinkButton from '@/components/ui/link-button';
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
      <div className='flex flex-col gap-2'>
        <StarRating rating={0.5} />
        <div className='flex gap-1'>
          <span className='text-paragraph-sm text-text-strong-950'>
            0.5 ∙ 5.2K Ratings
          </span>
          <LinkButton.Root size='medium' variant='gray' underline>
            18 reviews
          </LinkButton.Root>
        </div>
      </div>

      <div className='flex flex-wrap items-center gap-2'>
        <HeartRating rating={4.5} />
        <div className='flex gap-1 whitespace-nowrap'>
          <span className='text-paragraph-sm text-text-strong-950'>
            4.5 ∙ 5.2K Ratings
          </span>
          <LinkButton.Root size='medium' variant='gray' underline>
            18 reviews
          </LinkButton.Root>
        </div>
      </div>
    </div>
  );
}
