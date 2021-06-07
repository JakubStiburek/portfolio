import Header from "./Header";

const Project = () => {
  return (
    <div className="wrapper">
      <Header size={2} text={"Projects:"} />
      <div>
        <p>Have a look at what kind of <text className="highlight">personal</text> or <text className="highlight">professional</text> projects I have worked on.</p>
      </div>
    </div>
  )
};

export default Project;
