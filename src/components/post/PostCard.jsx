import { useNavigate } from "react-router-dom";

export default function PostCard({ content }) {
  const { id, title, image, created_at, category } = content;
  const navigate = useNavigate();
  return (
    <>
      <article
        onClick={() => navigate(`/blogs/${id}`)}
        className="post group flex w-full mb-3 bg-bg cursor-pointer rounded-md shadow-lg"
      >
        <div
          className="post-img w-auto min-w-[30%] bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div className="post-info flex flex-col p-2 w-full *:my-3">
          <p className="post-info-title flex-1 text-md font-bold group-hover:underline group-hover:underline-offset-1">
            {title}
          </p>
          <span className="post-info-category w-[fit-content] p-025 font-[500] text-xs text-primary bg-primary/15 rounded-sm">
            {category}
          </span>
          <div className="post-info-publish-date text-xs text-text-muted">
            {created_at.split("T")[0]}
          </div>
        </div>
      </article>
    </>
  );
}
