import React from "react";
import { Link } from "react-router-dom";
import apiImage from "../assets/api-backend.png";

function Api() {
  return (
    <div id="news-api">
      <section id="api-description">
      <h3>NC-News-API</h3>
      <h5>
        A PSQL backend server, I used this API for my nc-news front end project
      </h5>
      <h6>Built using JavaScript, express.js, PostgreSQL, Jest, Supertest</h6>
        <Link
          id="live-api"
          to="https://taryns-news.onrender.com/api"
          target="_blank"
        >
          Live
        </Link>
        <Link
          id="github-api"
          to="https://github.com/tarynCodes/news-api-project"
          target="_blank"
        >
          Github
        </Link>
      </section>
      <img src={apiImage} id="newsImage"></img>
    </div>
  );
}

export default Api;
