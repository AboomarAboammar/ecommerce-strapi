import React from 'react';
import './erorr.css';

const ErrorPage = () => {
  return (
    <div className="error-container">
      <div className="error-message">
        <h1>Oops!</h1>
        <p>Something went wrong.</p>
        <button onClick={() => window.location.reload()}>Try Again</button>
      </div>
    </div>
  );
};

export default ErrorPage;
