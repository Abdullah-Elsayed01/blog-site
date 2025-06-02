import Navigation from "../navigation-links/Navigation"
export default function Header() {
  return(
    <header className='flex justify-between items-center'>
      <h1 className='text-md'>John Doe</h1>
      <Navigation />
    </header>
  )
}