import React from 'react';

const NewsItem = ({ title, description, imageUrl, newsUrl, author, date }) => {
  return (
    <div>
      <div className="card">
        <img src={imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-body-secondary">
              By {!author ? 'Unknown' : author} on {new Date(date).toUTCString()}
            </small>
          </p>
          <a href={newsUrl} rel="noreferrer" target='_blank' className="btn btn-sm btn-dark">
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
