import Navigation from "../navigation-links/Navigation"
export default function footer() {
  return(
    <footer className="bg-grey-100/15">
      <div className="footer-container w-full container flex flex-col sm:flex-row sm:justify-between items-center align-start">
        <div className="contact">
          <h5 className="text-blue-100 text-md">About</h5>
          <div className="about">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste aliquam quibusdam minima ad cum. Aut, cupiditate!</div>
          <div className="email">info@jstemplate.com</div>
          <div className="phone">013-5846-581</div>
        </div>
        <div className="categories text-blue-100">
          <h5>Navigation</h5>
          <Navigation design={'footer'}/>
        </div>
      </div>
    </footer>
  )
}