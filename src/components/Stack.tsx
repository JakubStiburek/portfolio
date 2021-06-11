import Header from "./Header";
import StackIcons from "./StackIcons";
import LearnIcons from "./LearnIcons";

const Stack = () => {
  return (
    <div className="wrapper">
      <Header size={2} text="I work with:" />
      <StackIcons />
      <Header size={2} text="Want to learn:" />
      <LearnIcons />
    </div>
  )
};

export default Stack;
