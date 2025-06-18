import Posts from '../components/posts/Posts'

export default function HomePage() {
  return (
    <main>
      <div className="landing w-full text-center border-y-2">
        <div className="landing-container container relative w-[70%]! max-w-[700px] p-7 sm:my-[2.9rem] my-[1.9rem] z-1000 bg-[#ffffff] italic shadow-[-7px_9px_3px_3px] rounded-3xl">
          <p className="landing-container-quote px-1 mb-2 text-xl font-bold text-center">Great <span className='text-custom-blue'>Minds</span> Think Alike</p>
          <span className="landing-container-author absolute text-sm text-grey-200 text-right">- John doe</span>
        </div>
      </div>
      <div className="posts-section-title my-3 mx-1 text-md font-bold container">
        Recent Posts
      </div>
      <div className="posts-section-posts-wrapper">
        <Posts />      
      </div>
    </main>
  )
}