interface InputBoxProps {
  name: string;
}
const InputBox = ({ name }: InputBoxProps) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="text-tColor7">{name}</div>
      <div>
        <input className="bg-bgColor10 w-[90%] rounded-md p-2.5"></input>
      </div>
    </div>
  );
};

export default InputBox;
