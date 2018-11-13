import React from 'react';
import './Main.css';
import Actionable from '../Actionable/Actionable';
const Main = () => {
  return (
    <main className="Main">
      <Actionable />
      <div className="hero container">
        <div className="title-wrapper">
          <h1 className="text-bold">Vehicle spotlight</h1>
        </div>
        <div className="hero-wrapper flex flex-wrap align-center justify-around">
          <div className="hero img-container">
            <img
              className="hero_img max-width-100"
              src="https://dbhdyzvm8lm25.cloudfront.net/exterior_vr_gear/MY2019/AIL12862_2048/AIL12862_left_250.png"
              alt=""
            />
          </div>
          <div className="hero info-container">
            <h3 className="text-bold">BMW i8</h3>
            <span className="text-muted subtitle">Tera World</span>
            <br />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste sit
              excepturi, dolorem labore qui impedit consectetur velit magni?
              Nisi aliquam earum fuga sint. Esse corrupti ex laudantium eum ab
              optio. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
