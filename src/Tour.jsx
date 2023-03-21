import { useState } from "react";

const Tour = ({ id, image, info, name, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <article className="single-tour">
      <img src={image} alt={name} className="img" />
      <div className="tour-info">
        <h5>{name}</h5>
        <p className="tour-price">${price}</p>
        <p>
          {readMore ? info : `${info.substring(0, 200)}. . . `}
          <button
            type="button"
            className="info-btn"
            onClick={() => {
              setReadMore(!readMore);
            }}
          >
            {readMore ? " showless" : " read more"}
          </button>
        </p>
        <button
          type="button"
          className="btn btn-block"
          onClick={() => {
            removeTour(id);
          }}
        >
          remove tour
        </button>
      </div>
    </article>
  );
};
export default Tour;
