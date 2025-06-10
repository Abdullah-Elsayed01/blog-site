import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Posts from "./components/posts/Posts";
function App() {
  return (
    <div>
      <Header />
      <div className="landing">
        <div className="quote-container w-[70%]! max-w-[700px] bg-[#ffffff] italic container p-7 relative sm:my-[2.9rem] my-[1.9rem]">
          <p className="quote px-1 text-[min(6vw,2rem)] mb-2 font-bold text-center">Great <span>Minds</span> Think Alike</p>
          <span className="author absolute text-sm text-grey-200 text-right ">- John doe</span>
        </div>
      </div>
      <Posts iterate={4} />
      <Footer />
    </div>
  )
}

export default App
