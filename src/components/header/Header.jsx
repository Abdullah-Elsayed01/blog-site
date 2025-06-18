import Navigation from "../navigation-links/Navigation"
export default function Header() {
  return(
    <header className='header container flex-between-center mb-auto'>
      <h1 style={{fontSize : 'min(8.5vw, 2.5rem)'}} className='header-logo font-bold cursor-pointer'>John Doe</h1>
      <Navigation />
    </header>
  )
}