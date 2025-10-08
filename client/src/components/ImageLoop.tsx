import { useAnimationContext } from '@/contexts/AnimationContext';

// Image loop images
const imageLoop1 = 'https://res.cloudinary.com/dvksdguxi/image/upload/v1759907953/loop1_nqrc5r.jpg';
const imageLoop2 = 'https://res.cloudinary.com/dvksdguxi/image/upload/v1759907954/loop2_b6fs2m.jpg';
const imageLoop3 = 'https://res.cloudinary.com/dvksdguxi/image/upload/v1759907954/loop3_pyuurc.jpg';
const imageLoop4 = 'https://res.cloudinary.com/dvksdguxi/image/upload/v1759907953/loop_krg0hs.jpg';

const ImageLoop = () => {
  const { animationsEnabled } = useAnimationContext();
  const images = [
    imageLoop1,
    imageLoop2,
    imageLoop3,
    imageLoop4,
    imageLoop1,
    imageLoop2,
    imageLoop3,
    imageLoop4,
    imageLoop1
  ];

  return (
    <section id="slideshow" className="image-loop-section section-hard-blue w-full overflow-hidden py-4">
      <div className="image-loop-container">
        <div className={`${animationsEnabled ? 'image-loop-track' : 'image-loop-track-static'}`}>
          {/* First set of images */}
          {images.map((image, index) => (
            <div key={`set1-${index}`} className="image-loop-item">
              <img
                src={image}
                alt={`Ernesto Andrei & Sam Carmela moment ${index + 1}`}
                className="image-loop-img"
                loading="lazy"
                data-testid={`img-loop-${index + 1}`}
              />
            </div>
          ))}
          {/* Duplicate set for seamless looping */}
          {images.map((image, index) => (
            <div key={`set2-${index}`} className="image-loop-item">
              <img
                src={image}
                alt={`Ernesto Andrei & Sam Carmela moment ${index + 1} duplicate`}
                className="image-loop-img"
                loading="lazy"
                data-testid={`img-loop-dup-${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageLoop;
