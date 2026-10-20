import * as Slider from '@/components/ui/slider';

export function SliderDemo() {
  return (
    <div className='w-full max-w-xs'>
      <Slider.Root defaultValue={[33]} max={100} step={1}>
        <Slider.Thumb />
      </Slider.Root>
    </div>
  );
}
