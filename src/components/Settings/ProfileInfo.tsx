import ButtonDefault from "../Buttons/ButtonDefault";
import InputBox from "./InputBox";
import ProfileImage from "./ProfileImage";
import adm from "@/assets/images/profile/adm.png";
const ProfileInfo = () => {
  return (
    <div className="w-[55%] rounded-3xl bg-bgColor7 px-8 py-20">
      <ProfileImage image={adm} />
      <div className="grid grid-cols-2 gap-4 py-20">
        <InputBox name="Display Name" />
        <InputBox name="Phone Number" />
        <InputBox name="Your email" />
        <div></div>
        <InputBox name="Date of Birth" />
        <div className="mr-[10%] flex items-end justify-end">
          <ButtonDefault
            label="Confirm"
            customClasses="w-[60%] h-[50%] bg-bgColor5 text-black font-bold text-sm"
            onClick={() => {}}
          ></ButtonDefault>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
