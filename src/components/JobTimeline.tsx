import Job from "./Job"
import Header from "./Header";

const JobTimeline = () => {
  return (
    <div className="wrapper">
      <div className="timeline">
        <Header size={2} text="Experience:" />
        <div>
          <span className="timeline-dot">III</span>
          <Job title="Your company" description="I'm currently looking for a Junior position as a FE developer. I'm driven by passion because I have learnt to do all of this by myself, so if you are looking for someone like me - you have found me." />
        </div>
        <div>
          <span className="timeline-dot">II</span>
          <Job title="Internship at Appio Digital" description="My first experience in a digital agency. In roughly a month I got the chance to learn TypeScript and Next.js and mainly get my hands on real products. For the first time I saw how a real developer job looks like. I worked here on two projects which you can check out below."/>
        </div>
        <div>
          <span className="timeline-dot">I</span>
          <Job title="Software tester at Valeo" description="During my gap year in between high school and college I worked for half a year as a software tester or in their words a validator. It wasn't a coding job per se because I worked in a company specific environment but I was a part of an interesting project - self-driving car system called SCALA." />
        </div>
      </div>
    </div>
  )
};

export default JobTimeline;
