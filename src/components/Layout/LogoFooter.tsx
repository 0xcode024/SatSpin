import logo from "@/assets/images/black_logo.png";

const LogoFooter = () => {
  return (
    <div className="bg-bgColor3 border-borderColor2 flex items-center justify-center border-b py-[50px]">
      <img src={logo} alt="logo" width="110px"></img>
    </div>
  );
};

export default LogoFooter;
