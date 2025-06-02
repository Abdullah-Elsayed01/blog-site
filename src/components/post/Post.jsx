// import articles from '../../../articles.json';
// const article1 = articles[0];
export default function Post() {
  return (
    <>
      <article className="mb-3 post mx-auto min-w-[250px] max-w-[300px] border border-grey-100/50 rounded-md">
        <div className="post-img">
          <img className='rounded-md' src="https://www.planetware.com/wpimages/2020/02/norway-in-pictures-beautiful-places-to-photograph-lofoten.jpg" alt="nature-picture" />
        </div>
        <span className="post-category font-[500] text-xs ml-6 p-1 text-blue-100 rounded-sm bg-grey-100/25 ">Technology</span>
        <div className="post-title font-[500] text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing.</div>
        <div className="post-info text-grey-100 text-xs flex justify-between align-center">
          <div className="post-info-publish-date">2020-06-09</div>
          <div className="post-info-full-post cursor-pointer font-[500] text-sm text-blue-100">See More</div>
        </div>
      </article>
    </>
  )
}