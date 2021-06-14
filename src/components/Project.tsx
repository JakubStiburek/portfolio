import Header from "./Header";

interface ProjectProps {
  title: string,
  description: string,
  stack: string[],
  link?: string,
}

const Project = ({ title, description, stack, link, }: ProjectProps ) => {
  const listStack = () => {
    return stack.map((s, index) => <li key={index} className="highlight">{s}</li>);
  }
  return (
    <div>
      <Header size={3} text={title} />
      <p>{description}</p>
      <ul className="wrapper-project-stack wrapper-flex">
        {listStack()}
      </ul>
      <a href={link} className="highlight" >View the code</a>
    </div>
  )
}

export default Project;
