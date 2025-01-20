import About from "./About";
import Follow from "./Follow";
import LogoFooter from "./LogoFooter";

const BaseFooter = () => {
  return (
    <div>
      <Follow />
      <LogoFooter customClasses="bg-bgColor3" />
      <About customClasses="bg-bgColor3" />
    </div>
  );
};
export default BaseFooter;
