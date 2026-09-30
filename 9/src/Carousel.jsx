import React from 'react';
import cn from 'classnames';

// BEGIN (write your solution here)
const Carousel = ({ images }) => {
  const [active, setActive] = React.useState(0);
  const move = (step) => setActive((index) => (index + step + images.length) % images.length);
  return (
    <div id="carousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {images.map((src, index) => (
          <div key={index} className={cn('carousel-item', { active: index === active })}>
            <img alt="" className="d-block w-100" src={src} />
          </div>
        ))}
      </div>
      <button className="carousel-control-prev" data-bs-target="#carousel" type="button" data-bs-slide="prev" onClick={() => move(-1)}>
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" data-bs-target="#carousel" type="button" data-bs-slide="next" onClick={() => move(1)}>
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
// END
