import logo from "@/assets/images/black_logo.png";

interface AboutProps {
  customClasses: string;
}
const About = ({ customClasses }: AboutProps) => {
  return (
    <div
      className={`flex flex-col items-center border-b border-borderColor2  py-[50px] text-center text-tColor4 ${customClasses}`}
    >
      <div className="block gap-4 lg:flex">
        <div>Home</div>
        <div className="hidden lg:block">|</div>
        <div>About US</div>
        <div className="hidden lg:block">|</div>
        <div>Games</div>
        <div className="hidden lg:block">|</div>
        <div>Promotions</div>
        <div className="hidden lg:block">|</div>
        <div>Contact US</div>
        <div className="hidden lg:block">|</div>
        <div>FAQ</div>
      </div>
      <div className="block gap-4 lg:flex">
        <div>Privacy Policy</div>
        <div className="hidden lg:block">|</div>
        <div>Terms & Conditions</div>
        <div className="hidden lg:block">|</div>
        <div>Cookie Policy</div>
        <div className="hidden lg:block">|</div>
        <div>Responsible Gaming</div>
      </div>
    </div>
  );
};

export default About;
