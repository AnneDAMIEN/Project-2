import nightsky from "../assets/images/nightsky.jpg"
import logo600 from "../assets/images/logo600.png"
import "./LandingPage.scss";

function WelcomeCard() {
  return (
    <>
      <img
        className="welcomeImage"
        src={nightsky}
        alt=""
      />
      <img
        className="welcomeLogo"
        src={logo600}
        alt=""
      />
      <p className="description">
        View art from anywhere, everywhere, you can browse the art on display
        and click on the images to view them in details and learn more about the
        selected artworks, you can also use the filters to browse through the
        different categories.
      </p>
    </>
  );
}

export default WelcomeCard;
