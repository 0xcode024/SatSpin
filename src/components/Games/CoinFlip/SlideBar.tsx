const SlideBar = () => {
  return (
    <div className="bg-gray-100 flex">
      <div className="text-lg xl:text-sm 2xl:text-lg">3x</div>
      <div className="w-full px-4">
        <input
          type="range"
          min="1"
          max="100"
          defaultValue="10"
          //   className="from-blue-500 h-3 w-full appearance-none rounded bg-gradient-to-r via-purple-500 to-green-500 transition-opacity duration-200 hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-green-500"
          className="h-[7px] w-full appearance-none rounded bg-gradient-to-r from-bgColor14 via-bitcoin-orange to-bgColor13 transition-opacity duration-200 hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-green-500"
          id="myRange"
        />
      </div>
      <style>
        {`
        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 32px;
          height: 32px;
          background-color: #1F1F1F;
          border: 5px solid #383838;
          cursor: pointer;
          border-radius: 15%;
        }

        input[type="range"]::-moz-range-thumb {
          width: 32px;
          height: 32px;
          background-color: #1F1F1F;
          border: 5px solid #383838;
          cursor: pointer;
          border-radius: 15%;
        }
      `}
      </style>
    </div>
  );
};

export default SlideBar;
