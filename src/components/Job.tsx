import Header from "./Header";

interface JobProps {
  title: string,
  description: string,
}

const Job = ({title, description}: JobProps) => {
  return (
    <div>
      <Header size={3} text={title} />
      <p>{description}</p>
    </div>
  )
};

export default Job;
