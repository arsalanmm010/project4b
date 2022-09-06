import img from "./img.png";
import { Button } from "@mui/material";
import useWebAnimations from "@wellyshen/use-web-animations";

const Main = () => {
  const { ref } = useWebAnimations({
    keyframes: {
      transform: [
        "translateX(200px)",
        "translateY(-200px)",
        "translateX(-200px)",
        "translateY(200px)",
        "translateX(200px)",
      ],
    },
    animationOptions: {
      duration: 3000,
      iterations: Infinity,
      direction: "alternate",
      easing: "ease-in-out",
    },
  });

  return (
    <div>
      <div className="main">
        <h2>Your web prescence just got so much better</h2>
        <p>
          Your company’s website isn’t just a digital business card or a few
          brush strokes here and there. It’s an essential sales channel, and it
          has rules. You need it to survive in the jungle of business.
        </p>
      </div>
      <div className="btn">
        <Button variant="contained">WORK WITH US</Button>
        <Button variant="outlined">View our projects</Button>
      </div>
      <div>
        <img src={img} alt="company logo" ref={ref} />
      </div>
    </div>
  );
};

export default Main;
