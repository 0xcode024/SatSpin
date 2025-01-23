interface InputBoxProps {
  name: string;
}
const InputBox = ({ name }: InputBoxProps) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="lg:text-md text-xs text-tColor7 sm:text-sm">{name}</div>
      <div>
        <input className="w-full rounded-md bg-bgColor10 p-2.5 lg:w-[90%]"></input>
      </div>
    </div>
  );
};

export default InputBox;
