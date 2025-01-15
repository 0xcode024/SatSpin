interface ProfileImageProps {
  image: any;
}
const ProfileImage = ({ image }: ProfileImageProps) => {
  return (
    <div className="flex items-center gap-4">
      <div>
        <img src={image} width="85px"></img>
      </div>
      <div className="text-bgColor5">Edit Photo</div>
    </div>
  );
};

export default ProfileImage;
