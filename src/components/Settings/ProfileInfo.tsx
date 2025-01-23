import ButtonDefault from "../Buttons/ButtonDefault";
import InputBox from "./InputBox";
import ProfileImage from "./ProfileImage";
import adm from "@/assets/images/profile/adm.png";
const ProfileInfo = () => {
  return (
    <div className="w-full rounded-3xl bg-bgColor7 px-4 py-4 md:py-10 lg:px-8 lg:py-20 2xl:w-[55%]">
      <ProfileImage image={adm} />
      <div className="grid grid-cols-1 gap-3 py-10 lg:grid-cols-2 lg:gap-4 lg:py-20">
        <InputBox name="Display Name" />
        <InputBox name="Phone Number" />
        <InputBox name="Your email" />
        <div className="hidden lg:block"></div>
        <InputBox name="Date of Birth" />
        <div className="mr-[10%] flex items-center justify-center py-2 lg:items-end lg:justify-end lg:py-0">
          <ButtonDefault
            label="Confirm"
            customClasses="w-[80%] lg:h-[50%] bg-bgColor5 text-black font-bold lg:text-md text-xs sm:text-sm h-full"
            onClick={() => {}}
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
