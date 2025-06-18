import Navigation from "../navigation-links/Navigation"
export default function footer() {
  return(
    <footer className="footer bg-custom-grey/15 mt-auto">
      <div className="footer-container w-full container flex flex-col sm:flex-row sm:justify-between align-start *:*:w-[200px] *:*:py-2 *:*:text-sm">
        <div className="footer-container-contact">
          <h5 className="footer-container-contact-section-about-title text-custom-blue text-md">About</h5>
          <div className="footer-container-contact-section-about-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste aliquam quibusdam minima ad cum. Aut, cupiditate!</div>
          <div className="footer-container-contact-section-about-email">info@jstemplate.com</div>
          <div className="footer-container-contact-section-about-phone">013-5846-581</div>
        </div>
        <div className="footer-container-contact-section-categories text-custom-blue">
          <h5 className="footer-container-contact-section-categories-title">Navigation</h5>
          <Navigation design={'footer'}/>
        </div>
      </div>
    </footer>
  )
}