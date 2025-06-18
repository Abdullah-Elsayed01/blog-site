import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import HomePage from "./pages/homePage";
import BlogsPage from "./pages/BlogsPage";
import AuthorPage from "./pages/AuthorPage";
import PostDisplay from "./components/post-display/postDisplay";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <div className='body-wrapper '>
      <Header />
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/blogs' element={<BlogsPage />} />
          <Route path='/blogs/:id' element={<PostDisplay />} />
          <Route path='/author' element={<AuthorPage />}/>
          <Route path='/*' element={<NotFoundPage />}/>
        </Routes>
      <Footer />
    </div>
  )
}

export default App
