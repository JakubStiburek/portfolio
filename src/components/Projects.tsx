import Header from "./Header";
import Project from "./Project";

const Projects = () => {
  return (
    <div className="wrapper">
      <Header size={2} text={"Projects:"} />
      <div>
        <p>Have a look at what kind of <text className="highlight">personal</text> or <text className="highlight">professional</text> projects I have worked on.</p>
        <Project title="This very site" description="Having a place to show what I have done so far is handy but mainly I wanted to practice mobile first approach and responsive design." stack={["Typescript", "React", "CSS", "HTML"]} link="https://github.com/JakubStiburek/portfolio" />
        <Project title="Todo list app" description="A todo app is a perfect way to show that you can do a full CRUD operation cycle. I used a free public mock API endpoint for this app. My main goal was to create a logic that can be reused in a greater app. Thus the looks of the app are very basic. For login check out the endpoint /users in the code. Password is always password."  stack={["JavaScript", "React", "CSS", "HTML"]} link="https://github.com/JakubStiburek/todolist" />
      </div>
    </div>
  )
};

export default Projects;
