import logo from "@/assets/images/black_logo.png";

interface AboutProps {
  customClasses: string;
}
const About = ({ customClasses }: AboutProps) => {
  return (
    <div
      className={`lg:text-md flex flex-col items-center border-b border-borderColor2 py-[50px] text-center text-[10px] text-white sm:text-xs md:text-sm lg:text-tColor4 ${customClasses}`}
    >
      <div className="flex gap-1 md:gap-2 lg:gap-4">
        <div>Home</div>
        <div className="">|</div>
        <div>About US</div>
        <div className="">|</div>
        <div>Games</div>
        <div className="">|</div>
        <div>Promotions</div>
        <div className="">|</div>
        <div>Contact US</div>
        <div className="">|</div>
        <div>FAQ</div>
      </div>
      <div className="flex gap-1 md:gap-2 lg:gap-4">
        <div>Privacy Policy</div>
        <div className="">|</div>
        <div>Terms & Conditions</div>
        <div className="">|</div>
        <div>Cookie Policy</div>
        <div className="">|</div>
        <div>Responsible Gaming</div>
      </div>
    </div>
  );
};

export default About;
