import { Link } from "react-router-dom";

export default function Navigation({ className }) {
  return (
    <nav>
      <ul
        className={`navigation flex ${className ? "flex-col" : "align-center justify-between"}`}
      >
        <Link to="/blog-site" className="">
          Home
        </Link>
        <Link to="/blogs">Blogs</Link>
        <Link to="/author">Author</Link>
      </ul>
    </nav>
  );
}
