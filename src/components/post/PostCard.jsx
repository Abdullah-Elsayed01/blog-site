import { useNavigate } from "react-router-dom";

export default function PostCard({ content }) {
  const { id, title, image, created_at, category } = content;
  const navigate = useNavigate();
  return (
    <>
      <article
        onClick={() => navigate(`/blogs/${id}`)}
        className="post flex w-full mb-3 hover cursor-pointer rounded-md"
      >
        <div
          className="post-img w-auto min-w-[30%] bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div className="post-info flex flex-col p-2 w-full *:my-3">
          <p
            className={`post-info-title flex-1 font-bold ${window.location.pathname === "/" ? "text-[min(4vw,1.125rem)]" : "text-lg"}`}
          >
            {title}
          </p>
          <span className="post-info-category w-[fit-content] p-1 font-[500] text-xs text-white bg-custom-blue rounded-sm">
            {category}
          </span>
          <div className="post-info-publish-date text-sm">
            {created_at.split("T")[0]}
          </div>
        </div>
      </article>
    </>
  );
}
