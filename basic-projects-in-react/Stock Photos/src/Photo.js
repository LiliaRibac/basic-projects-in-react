import React from 'react';

const Photo = ({
  urls: { regular },
  alt_description,
  likes,
  user: {
    name,
    portfolio_url,
    rofile_image,
    profile_image: { medium },
  },
}) => {
  return (
    <article className="photo">
      <img src={regular} alt={alt_description} />
      <div className="photo-info">
        <div>
          <h4>{name}</h4>
          <p>{likes} likes</p>
          <a href={portfolio_url}>
            <img src={medium} alt={name} className="user-img" />
          </a>
        </div>
      </div>
    </article>
  );
};

export default Photo;
