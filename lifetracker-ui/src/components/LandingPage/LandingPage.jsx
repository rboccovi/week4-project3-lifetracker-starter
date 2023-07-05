import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="hero-section">
       <div className="Heroimage"></div>
        {/* <img src="https://i.pinimg.com/474x/c9/83/c2/c983c2102c754209012ced504c53c569.jpg" alt="Hero Image" /> */}
      <h1>Welcome to My LifeTracker </h1>
      <p>Your Health Matters.
        Lets Make it Easy.
      </p>

      <div className="tiles">
        <div className="Tile">
          <p className="title">Fitness</p>
          <div className="image">
            <img src="https://i.pinimg.com/474x/fe/a2/06/fea2062a6dfc12792b07dcf294f57aaf.jpg" />
          </div>



        </div>
        <div className="Tile">
          <p className="title">Nutrition</p>
          <div className="image">
            <img src="https://i.pinimg.com/474x/cc/00/15/cc0015f1e368f7cd99ea25264fe0ed34.jpg"  />
          </div>


        </div>
        <div className="Tile">
          <p className="title">Sleep</p>
          <div className="image">
            <img src="https://i.pinimg.com/474x/45/7e/f0/457ef0cae4cac192be02393f39a1e34c.jpg" />
          </div>



          
        </div>
        <div className="Tile">
          <p className="title">Planner</p>
          <div className="image">
            <img src="https://i.pinimg.com/736x/a6/b3/e2/a6b3e24add52ca10b8d87243aaafa9af.jpg"  />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
