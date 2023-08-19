import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Footer() {
  return (
    <footer>
      <div className="container mx-auto">
        <div className="grid tab:grid-cols-3 lap:grid-cols-4 gap-8">
          <First />
          <Second />
          <Third />
          <Four />
        </div>
      </div>
    </footer>
  );
}
function First() {
  return (
    <div className="first-f">
      <div className="img-container">
        <img src={"./sandbox-home/logo/logo-light.png"} alt="light-logo" />
      </div>
      <ul className="first-info my-5">
        <li>© 2023 Sandbox.</li>
        <li>All rights reserved.</li>
      </ul>
      <div className="footer-icons flex  gap-4">
        <FontAwesomeIcon icon="fa-brands fa-twitter" />
        <FontAwesomeIcon icon="fa-brands fa-facebook-f" />
        <FontAwesomeIcon icon="fa-brands fa-instagram" />
        <FontAwesomeIcon icon="fa-brands fa-youtube" />
      </div>
    </div>
  );
}
function Second() {
  return (
    <div className="second-f">
      <h1>Get in Touch</h1>
      <ul className="my-5">
        <li>Moonshine St. 14/05 Light City, London, United Kingdom</li>
      </ul>
      <ul>
        <li>
          <a>info@email.com</a>
        </li>
        <li>
          <a>00 (123) 456 78 90</a>
        </li>
      </ul>
    </div>
  );
}
function Third() {
  const arr = [
    "About Us",
    "Our Story",
    "Projects",
    "Terms of Use",
    "Privacy Policy",
  ];
  return (
    <div className="third-f">
      <h1>Learn More</h1>
      <ul className="my-5">
        {arr.map((e) => {
          return (
            <li key={e}>
              <a>{e}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
function Four() {
  return (
    <div className="four-f">
      <h1>Our Newsletter</h1>
      <ul className="my-5">
        <li>
          Subscribe to our newsletter to get our news & deals delivered to you.
        </li>{" "}
      </ul>

      <div className="email">
        <label>
          <p>Email Address</p>
          <input />
        </label>
        <button>Join</button>
      </div>
    </div>
  );
}
