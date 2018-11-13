import React from 'react';
import './Actionable.css';

const Actionable = () => {
  return (
    <section className="container flex flex-responsive justify-between align-center text-center">
      <div className="tagline-wrapper">
        <h2>Driving the future of applications</h2>
        <h4 className="tagline text-muted">Innovation in automotive imagery</h4>
      </div>
      <div className="call-to-action-wrapper flex flex-responsive justify-between">
        <span className="btn-signup btn-br bg-black text-white upper btn-shadow">
          <a className="btn" href="/signup">
            Create Free Account
          </a>
        </span>
        <span className="btn-sales btn-br bg-white upper btn-shadow">
          <a className="btn" href="/sales">
            Contact Sales
          </a>
        </span>
      </div>
    </section>
  );
};

export default Actionable;
