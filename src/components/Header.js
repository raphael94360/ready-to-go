import fusee from "../assets/fusee.png"

const Header = props => {
  return (
    <>
      <header className="header">
        <img alt="logo" src={fusee} />
        <h1>{props.title}</h1>
      </header>
    </>
  )
}

export default Header
