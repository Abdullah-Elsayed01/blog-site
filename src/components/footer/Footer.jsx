import Navigation from "../navigation-links/Navigation";
export default function footer() {
  return (
    <footer className="footer bg-border-muted text-white">
      <div className="footer-container w-full container flex flex-col sm:flex-row sm:justify-between align-start *:*:w-[200px] *:*:py-2 ">
        <div className="footer-container-contact">
          <h5 className="footer-container-contact-section-about-title font-bold">
            About
          </h5>
          <div className="footer-container-contact-section-about-content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
            aliquam quibusdam minima ad cum. Aut, cupiditate!
          </div>
          <div className="footer-container-contact-section-about-email">
            info@jstemplate.com
          </div>
          <div className="footer-container-contact-section-about-phone">
            013-584-5810
          </div>
        </div>
        <div className="footer-container-contact-section-categories">
          <h5 className="footer-container-contact-section-categories-title font-bold">
            Navigation
          </h5>
          <Navigation className={"footer text-muted"} />
        </div>
      </div>
    </footer>
  );
}
