import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
const HomePage = lazy(() => import("./pages/HomePage"));
const BlogsPage = lazy(() => import("./pages/BlogsPage"));
const AuthorPage = lazy(() => import("./pages/AuthorPage"));
const SinglePostDisplay = lazy(
  () => import("./components/post/SinglePostDisplay")
);
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));
import { ArticlesContext } from "./contexts/ArticlesContext";
import articles from "../articles.json";
function App() {
  return (
    <div className="body-wrapper ">
      <Header />
      <ArticlesContext.Provider value={articles}>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Routes>
            <Route path="/blog-site" element={<HomePage />} />
            <Route path="/blog-site/blogs" element={<BlogsPage />} />
            <Route
              path="/blog-site/blogs/:id"
              element={<SinglePostDisplay />}
            />
            <Route path="/blog-site/author" element={<AuthorPage />} />
            <Route path="/*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </ArticlesContext.Provider>
      <Footer />
    </div>
  );
}

export default App;
