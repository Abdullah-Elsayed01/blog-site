import './Header.module.css';
export default function Header() {
  return(
    <header className='flex justify-between items-center'>
      <h1 className='name'>John Doe</h1>
      <ul className='flex justify-between items-center'>
        <li>Home</li>
        <li>Blogs</li>
        <li>Author</li>
      </ul>
    </header>
  )
}