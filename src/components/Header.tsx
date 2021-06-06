
interface HeaderProps {
  size: number,
  text: string,
}

const Header = ({size, text}: HeaderProps) => {
  const renderHeader = () => {
    if(size === 1) {
      return <h1 className="header">{text}</h1>
    } else if (size === 2) {
      return <h2 className="small-header">{text}</h2>
    } else {
      return <h3 className="smaller-header">{text}</h3>
    }
  }
  return (
    <div>
      {renderHeader()}
    </div>
  )
};

export default Header;
