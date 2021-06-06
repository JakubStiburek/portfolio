import Header from "./Header";
import StackIcons from "./StackIcons";
import LearnIcons from "./LearnIcons";

const Stack = () => {
  return (
    <div className="header-wrapper">
      <Header size={2} text="I work with:" />
      <StackIcons />
      <Header size={3} text="I want to learn:" />
      <LearnIcons />
    </div>
  )
};

export default Stack;
