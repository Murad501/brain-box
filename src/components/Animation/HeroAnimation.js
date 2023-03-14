const { default: Lottie } = require("react-lottie");
import animationData from '../Animation/HeroAnimation.json'

function HeroAnimation() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };
  
    return <Lottie id='lottie-icon' options={defaultOptions} style={{width: '100%'}} />;
  }

  export default HeroAnimation;