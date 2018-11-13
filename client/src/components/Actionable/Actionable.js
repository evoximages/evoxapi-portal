import React from 'react';
import './Actionable.css';

const Actionable = () => {
  return (
    <section className="container flex flex-responsive justify-between align-center text-center bg-svg">
      <div className="tagline-wrapper">
        <h2 className="text-white">The future of automotive imagery</h2>
        <h4 className="tagline text-white text-muted">
          Complete. Easy. Powerful.
        </h4>
      </div>
      <div className="call-to-action-wrapper flex flex-responsive justify-between">
        <span className="btn-signup btn-br bg-primary text-white upper btn-shadow">
          <a className="btn" href="/signup">
            Get started
          </a>
        </span>
        {/* <span className="btn-sales btn-br bg-white upper btn-shadow">
          <a className="btn" href="/sales">
            Contact Sales
          </a>
        </span> */}
      </div>
    </section>
  );
};

export default Actionable;
