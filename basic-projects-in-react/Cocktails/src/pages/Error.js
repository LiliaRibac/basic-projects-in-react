import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <section className="error-page section">
      <div className="error-container">
        <h1>oops!</h1>
        <img
          className="errorImg"
          src="https://media.giphy.com/media/3CfAKeVE6CTQs/giphy.gif"
          alt=""
        />
        <Link to="/" className="btn">
          back home
        </Link>
      </div>
    </section>
  );
};

export default Error;
