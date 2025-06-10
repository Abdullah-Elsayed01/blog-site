// import articles from '../../../articles.json';
// const article1 = articles[0];
export default function Post() {
  return (
    <>
      <article className="post w-full
      flex mb-3 hover cursor-pointer rounded-md">
        <div className="post-img w-auto min-w-[30%] bg-[url(https://www.planetware.com/wpimages/2020/02/norway-in-pictures-beautiful-places-to-photograph-lofoten.jpg)] bg-cover bg-center">
        {/* <img className='w-full h-full object-contain' src="https://www.planetware.com/wpimages/2020/02/norway-in-pictures-beautiful-places-to-photograph-lofoten.jpg" alt="nature-picture" /> */}
        </div>
        <div className="post-info w-full p-2">
          <p className="post-title font-bold ">The Impact of Technology on the Workplace: How Technology is Changing.</p>
          <div className="post-details text-grey-100 text-xs align-center">
            <div className="post-details-publish-date">2020-06-09</div>
          </div>
        </div>
      </article>
    </>
  )
}
      // <article className="post p-3 mb-3 mx-auto w-[250px] border border-grey-100/50 rounded-md">
      //   <div className="post-img">
      //     <img className='rounded mb-4' src="https://www.planetware.com/wpimages/2020/02/norway-in-pictures-beautiful-places-to-photograph-lofoten.jpg" alt="nature-picture" />
      //   </div>
      //   <div className="post-info @sm:bg-red-100">
      //     <span className="post-category font-[500] tracking-wide text-xs ml-4 p-1 bg-blue-100 text-white! rounded-sm">Technology</span>
      //     <div className="post-title font-bold text-lg">The Impact of Technology on the Workplace: How Technology is Changing.</div>
      //     <div className="post-details text-grey-100 text-xs flex justify-between align-center">
      //       <div className="post-details-publish-date">2020-06-09</div>
      //       <div className="post-details-full-post cursor-pointer font-bold text-sm text-blue-100">See More</div>
      //     </div>
      //   </div>
      // </article>