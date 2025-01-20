const Toogle = () => {
  return (
    <label className="relative inline-block h-[40px] w-[63px] rounded-lg border-[5px] border-bgColor11 bg-bgColor10">
      <input type="checkbox" className="peer hidden" />
      <span className="bg-bgColor13  peer-checked:bg-bgColor14 absolute -left-[5px] -top-[5px] h-[40px]  w-[33px] transform rounded-lg border-[5px] border-bgColor11 transition-transform peer-checked:translate-x-[30px]"></span>
    </label>
  );
};

export default Toogle;
