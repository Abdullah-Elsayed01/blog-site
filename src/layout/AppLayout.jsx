import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { Outlet } from "react-router-dom";

export default function AppLayout({ children }) {
  return (
    <div className="body-wrapper">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
