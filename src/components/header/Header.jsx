import Navigation from "../navigation-links/Navigation"
export default function Header() {
  return(
    <header className='flex-between-center container'>
      <h1 className='text-lg md:text-2xl font-bold cursor-pointer'>John Doe</h1>
      <Navigation />
    </header>
  )
}