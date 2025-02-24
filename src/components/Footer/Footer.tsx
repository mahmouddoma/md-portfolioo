function Footer() {
  return (
    <footer className="bg-dark text-light py-4 mt-auto">
      <div className="container">
        <div className="row">
          {/* Company Info */}
          <div className="col-md-4">
            <h5>About Us</h5>
            <p>
              We provide high-quality services and innovative solutions to meet
              your needs.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="text-light text-decoration-none">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-light text-decoration-none">
                  About
                </a>
              </li>
              <li>
                <a href="/services" className="text-light text-decoration-none">
                  Services
                </a>
              </li>
              <li>
                <a href="/contact" className="text-light text-decoration-none">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <p>Email: support@example.com</p>
            <p>Phone: +123 456 7890</p>
            <p>Location: Cairo, Egypt</p>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="text-center mt-3">
          <a href="#" className="text-light mx-2">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="#" className="text-light mx-2">
            <i className="bi bi-twitter"></i>
          </a>
          <a href="#" className="text-light mx-2">
            <i className="bi bi-instagram"></i>
          </a>
          <a href="#" className="text-light mx-2">
            <i className="bi bi-linkedin"></i>
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center mt-3">
          <p>
            &copy; {new Date().getFullYear()} Your Company. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
