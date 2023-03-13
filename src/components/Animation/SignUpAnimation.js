const { default: Lottie } = require("react-lottie");
import animationData from '../Animation/SignUpAnimation.json'

function SignUpAnimation() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };
  
    return <Lottie id='lottie-icon' options={defaultOptions} height={400} width={400} />;
  }

  export default SignUpAnimation;