import Carousel from 'mock/CarouselData';

export default function Main() {
  return (
    <>
      <div className="flex content-center">
        <h1 className="flex-1 text-center">LATEST MODELS</h1>
      </div>
      <div className="flex content-center">
        <h2 className="flex-1 text-center">LATEST MODELS</h2>
      </div>
      <div className="flex content-center">
        <Carousel />
      </div>
    </>

  );
}
