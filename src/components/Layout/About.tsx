import logo from "@/assets/images/black_logo.png";

const About = () => {
  return (
    <div className="bg-bgColor3 border-borderColor2 text-tColor4 flex flex-col items-center border-b py-[50px]">
      <div className="flex gap-4">
        <div>Home</div>
        <div>|</div>
        <div>About US</div>
        <div>|</div>
        <div>Games</div>
        <div>|</div>
        <div>Promotions</div>
        <div>|</div>
        <div>Contact US</div>
        <div>|</div>
        <div>FAQ</div>
      </div>
      <div className="flex gap-4">
        <div>Privacy Policy</div>
        <div>|</div>
        <div>Terms & Conditions</div>
        <div>|</div>
        <div>Cookie Policy</div>
        <div>|</div>
        <div>Responsible Gaming</div>
      </div>
    </div>
  );
};

export default About;
