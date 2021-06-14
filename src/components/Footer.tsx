import Header from "./Header";

const Footer = () => {
  return (
    <div className="wrapper">
      <div>
        <Header size={3} text="Contacts:" />
        <ul className="footer-list">
          <li key="f0">Jakub Stibůrek</li>
          <li key="f1">stiburekj@seznam.cz</li>
          <li key="f2"><a href="https://www.linkedin.com/in/jakub-stib%C5%AFrek-6bb7571a3/" className="highlight">LinkedIn</a></li>
          <li key="f3"><a href="https://github.com/JakubStiburek" className="highlight">GitHub</a></li>
          <li key="f4"><a href="https://gitlab.com/JakubStiburek" className="highlight">GitLab</a> </li>
          <li key="f5"><a href="https://drive.google.com/file/d/1-wX1YUuUvTQArcn_FNjvS1U_08JlYoPW/view?usp=sharing" className="highlight">CV</a> </li>
        </ul>
        <hr className="dotted-divider"/>
        <p>Jakub Stibůrek &copy; 2021</p>
      </div>
    </div>
  )
};

export default Footer;
