import Header from "./Header";
import React from "react";

const Home = () => {
  return (
    <div className="wrapper">
      <div>
        <span className="dot"/>
        <Header size={1} text="Jakub Stiburek"/>
      </div>
      <div>
        <p>
          ✋ Hi. I’m a self-taught web developer based in <text className="highlight">Prague</text>.
          I like working with <text className="highlight">JavaScript</text>, <text className="highlight">TypeScript</text>, <text className="highlight">React</text> and <text className="highlight">Next.js</text>
        </p>
        <p>
          This site serves as my portfolio and as a <text className="highlight">mobile first</text> development practice.
        </p>
        <p>
          Browse through my projects, go visit my <a href="https://github.com/JakubStiburek" className="highlight">GitHub</a>, download my <a href="https://drive.google.com/file/d/1-wX1YUuUvTQArcn_FNjvS1U_08JlYoPW/view?usp=sharing" className="highlight">CV</a> or <a href= "mailto: stiburekj@seznam.cz" className="highlight">email</a> me.
        </p>
        <p>
          Have a nice stay.
        </p>
      </div>
    </div>
  )
};

export default Home;
