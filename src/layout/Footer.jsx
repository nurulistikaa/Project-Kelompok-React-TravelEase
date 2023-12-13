import "../assets/css/FooterStyles.css";

function Footer () {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>TravelEase</h1>
          <p>Choose your favourite destination.</p>
        </div>
        <div>
          <a href="/">
            <i className="fa-brands fa-github-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-instagram-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-facebook-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-twitter-square"></i>
          </a>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h4>Page</h4>
          <a href="/about">About</a>
          <a href="/service">Services</a>
          <a href="/articles">Articles</a>
        </div>
        <div>
          <h4>Help</h4>
          <a href="/">Support</a>
          <a href="/">Contact Us</a>
        </div>
        <div>
          <h4>Others</h4>
          <a href="/">Terms of Services</a>
          <a href="/">Privacy Policy</a>
          <a href="/">CopyrightⒸ2023 TravelEase</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
