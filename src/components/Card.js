import React from "react";
import { Link } from 'react-router-dom';

function Card(props) {
  return (
    <>
      <div className="post-preview">
        <Link to={`/event/${props.id}`}>
          <h2 className="post-title">
           {props.title}
          </h2>
        </Link>
        <p className="post-meta">
          Posted by
          <a href="#">{props.author}</a>
          on {props.date}
        </p>
      </div>
      <hr />
    </>
  );
}

export default Card;
