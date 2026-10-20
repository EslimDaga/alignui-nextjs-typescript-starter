import * as Slider from '@/components/ui/slider';

export function SliderRange() {
  return (
    <div className='w-full max-w-xs'>
      <Slider.Root defaultValue={[300, 450]} min={0} max={600} step={1}>
        <Slider.Thumb />
        <Slider.Thumb />
      </Slider.Root>
    </div>
  );
}
