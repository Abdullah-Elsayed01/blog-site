export default function Navigation ({design}) {
  return (
    <ul className={`flex justify-between items-center ${design ? 'flex-col': ''}`}>
      <li>Home</li>
      <li>Blogs</li>
      <li>Author</li>
    </ul>
  )
}