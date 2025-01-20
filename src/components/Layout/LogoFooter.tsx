import logo from "@/assets/images/black_logo.png";

interface LogoFooterProps {
  customClasses: string;
}
const LogoFooter = ({ customClasses }: LogoFooterProps) => {
  return (
    <div
      className={`flex items-center justify-center border-b border-borderColor2  py-[50px] ${customClasses}`}
    >
      <img src={logo} alt="logo" width="110px"></img>
    </div>
  );
};

export default LogoFooter;
