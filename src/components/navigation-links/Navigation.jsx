import { Link } from "react-router-dom";

export default function Navigation ({design}) {
  return (
    <ul className={`navigation flex ${design ? 'flex-col': 'align-center justify-between'}`}>
      <Link to="/" className="">Home</Link>
      <Link to="/blogs">Blogs</Link>
      <Link to="/author">Author</Link>
    </ul>
  )
}