import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Posts from "./components/posts/Posts";
function App() {
  return (
    <div className="container min-md:w-[75%] mx-auto px-1">
      <Header />
      <div className="landing">
        <div className="quote-container container p-7 relative">
          <p className="quote text-2xl mb-2">Great <span>Minds</span> Think Alike</p>
          <span className="author absolute text-sm text-grey-200">- John doe</span>
        </div>
      </div>
      <Posts iterate={4}/>
      <Footer />
    </div>
  )
}

export default App
