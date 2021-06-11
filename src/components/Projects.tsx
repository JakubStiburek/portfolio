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
        <Project title="Robe lighting" description="At the internship at Appio Digital I have worked on two commercial projects. One of them was an ecommerce solution (merchandise eshop) for one of the world-wide biggest show lighting company. I contributed by setting up forms and connecting them to API endpoints." stack={["Typescript", "Next.js", "Formik", "Anolis ui"]} link={"https://gitlab.com/robe-lighting/ecommerce"} />
        <Project title={"SoS 21"} description={"Another internship project I worked on was an overview of projects of Karel Janeček a famous mathematician. Here I have also worked on forms."} stack={["TypeScript", "Next.js", "SWR", "Formik"]} link={"https://gitlab.com/kj-21/sos-21"} />
        <Project title={"Custom Flashcards"} description={"One of my firs projects after I learnt JavaScript. I have used only vanilla JS and basic CSS, HTML. A user can create flashcards which have text on both sides and are turnable. Users can also choose from color combinations. The purpose of flashcards is to learn and practice vocabulary. After the user learns a word, they can delete the card."} stack={["JavaScript", "HTML", "CSS"]} link={"https://github.com/JakubStiburek/CustomFlashCards"} />
      </div>
    </div>
  )
};

export default Projects;
