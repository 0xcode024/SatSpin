import About from "./About";
import Follow from "./Follow";
import LogoFooter from "./LogoFooter";

const BaseFooter = () => {
  return (
    <div>
      <Follow />
      <LogoFooter />
      <About />
    </div>
  );
};
export default BaseFooter;
