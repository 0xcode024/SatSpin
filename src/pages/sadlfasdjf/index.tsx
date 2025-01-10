import { useState, useMemo } from "react";
import { validate } from "bitcoin-address-validation";
import { toast } from "sonner";
import { tooltips } from "@/constants/expaindata";

import Epic from "@/assets/icons/RareSats/Epic.png";
import Alpha from "@/assets/icons/RareSats/Alpha.png";
import Pali_1D from "@/assets/icons/RareSats/1D Pali.png";
import Pali_2D from "@/assets/icons/RareSats/2D Pali.png";
import Pali_3D from "@/assets/icons/RareSats/3D Pali.png";
import B666_Pali from "@/assets/icons/RareSats/B666 Pali.png";
import BlackRare from "@/assets/icons/RareSats/Black Rare.png";
import BlackEpic from "@/assets/icons/RareSats/Black Epic.png";
import BlackUncommon from "@/assets/icons/RareSats/Black Uncommon.png";
import Block9450X from "@/assets/icons/RareSats/Block 9 450x.png";
import Block9 from "@/assets/icons/RareSats/Block 9.png";
import Block78 from "@/assets/icons/RareSats/Block 78.png";
import Block286 from "@/assets/icons/RareSats/Block 286.png";
import Block666 from "@/assets/icons/RareSats/Block 666.png";
import FibonacciSequence from "@/assets/icons/RareSats/Fibonacci Sequence.png";
import Legacy from "@/assets/icons/RareSats/Legacy.png";
import NakamotoPalindrome from "@/assets/icons/RareSats/Nakamoto Palindrome.png";
import PaliBlockPalindrome from "@/assets/icons/RareSats/PaliBlock Palindrome.png";
import PizzaPalindrome from "@/assets/icons/RareSats/Pizza Palindrome.png";
import RodarmorName from "@/assets/icons/RareSats/Rodarmor Name.png";
import SequencePali from "@/assets/icons/RareSats/Sequence Pali.png";
import Silkroad from "@/assets/icons/RareSats/Silkroad.png";
import VintagePalindrome from "@/assets/icons/RareSats/Vintage Palindrome.png";
import Hitman from "@/assets/icons/RareSats/Hitman.png";
import Jpeg from "@/assets/icons/RareSats/JPEG.png";
import Nakamoto from "@/assets/icons/RareSats/Nakamoto.png";
import Omega from "@/assets/icons/RareSats/Omega.png";
import Rare from "@/assets/icons/RareSats/Rare.png";
import Palindrome from "@/assets/icons/RareSats/Palindrome.png";
import PerfectPalinception from "@/assets/icons/RareSats/Perfect Palinception.png";
import Pizza from "@/assets/icons/RareSats/Pizza.png";
import Uncommon from "@/assets/icons/RareSats/Uncommon.png";
import Vintage from "@/assets/icons/RareSats/Vintage.png";
import UniformPalincetion from "@/assets/icons/RareSats/Unifrom Palinception.png";
import Refresh from "@/assets/images/refresh.svg";
import Copy from "@/assets/images/copy.svg";
import OOF from "@/assets/images/oof.png";
import { useAuth } from "@/context/AuthContext";

export default function dddHome() {
  const [searchAddress, setSearchAddress] = useState("");
  const [filteredDisplay, setFilteredDisplay] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const { isSearchActive, setIsSearchActive } = useAuth();

  const itemsPerPage = 18;

  const typeIcons: { [key: string]: any } = {
    epic: Epic,
    alpha: Alpha,
    pali_1d: Pali_1D,
    pali_2d: Pali_2D,
    pali_3d: Pali_3D,
    b666_pali: B666_Pali,
    blackepic: BlackEpic,
    fibonaccisequence: FibonacciSequence,
    black_rare: BlackRare,
    black_uncommon: BlackUncommon,
    paliblockpalindrome: PaliBlockPalindrome,
    pizzapalindrome: PizzaPalindrome,
    rodarmorname: RodarmorName,
    sequencepali: SequencePali,
    silkroad: Silkroad,
    vintagepalindrome: VintagePalindrome,
    legacy: Legacy,
    nakamotopalindrome: NakamotoPalindrome,
    block9450x: Block9450X,
    block9: Block9,
    block78: Block78,
    block286: Block286,
    block666: Block666,
    hitman: Hitman,
    jpeg: Jpeg,
    nakamoto: Nakamoto,
    omega: Omega,
    rare: Rare,
    palindrome: Palindrome,
    perfect_palinception: PerfectPalinception,
    pizza: Pizza,
    uncommon: Uncommon,
    vintage: Vintage,
    uniform_palinception: UniformPalincetion,
  };

  function renderRareSatsDisplay(rareSats: any) {
    return rareSats.map((item: any) => {
      const sat = item.sats[0];
      if (!sat) return null;
      return (
        <>
          <div className="rounded-lg border border-[#21252C] bg-[#14161A] text-white">
            <div>
              <div className="mb-2 flex flex-col items-center rounded-t-md bg-[#21252C]">
                <div className="mb-2 mt-8 h-16 w-16">
                  <img
                    src={typeIcons[sat.types[0]]}
                    alt={sat.types[0]}
                    className="ml-2 inline h-16 w-16"
                  />
                </div>
                <div className="my-2 flex justify-center text-2xl text-red-500">
                  {sat.types.map((type: any, idx: any) =>
                    idx !== 0 ? (
                      <img
                        key={idx}
                        src={typeIcons[type]}
                        alt={type}
                        className="inline h-6 w-6"
                      />
                    ) : (
                      <div className="inline h-6 w-6"></div>
                    )
                  )}
                </div>
              </div>

              <div className="p-4">
                <div className="text-start text-xl font-semibold">
                  {sat.types[0]}
                </div>
                <div className="text-gray-400 text-sm">
                  {sat.sat[0] != sat.sat[1] ? (
                    <div className="flex justify-start gap-1 text-[12px]">
                      <div>{sat.sat[0]}</div>
                      <div> - </div>
                      <div>{sat.sat[1]}</div>
                    </div>
                  ) : (
                    <div>{sat.sat[0]}</div>
                  )}
                </div>
                <div className="mt-4 grid w-full grid-cols-2 gap-2 text-[12px]">
                  <div className="rounded-bl-3xl border border-[#265a8a] bg-[#111E25] p-2 text-center">
                    <div className="text-gray-500">BlockHeight</div>
                    <div className="text-white">{sat.block}</div>
                  </div>
                  <div className="rounded-br-3xl border border-[#265a8a] bg-[#111E25] p-2 text-center">
                    <div className="text-gray-500">BlockTime</div>
                    <div className="text-white">{sat.time.split("T")[0]}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    });
  }

  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredDisplay.slice(startIndex, endIndex);
  }, [currentPage, filteredDisplay]);

  const filteredContent = useMemo(() => {
    return renderRareSatsDisplay(paginatedData);
  }, [paginatedData]);

  const totalPages = Math.ceil(filteredDisplay.length / itemsPerPage);

  const handlePreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const handleSearchRareSat = async () => {
    if (searchAddress === "") {
      toast.error("Please input BTC Address!");
      setIsSearchActive(false);
    } else {
      if (validate(searchAddress)) {
        const response = await fetch(
          `https://gw.sating.io/api/account/sats/${searchAddress}`,
          {
            method: "GET",
            headers: {},
          }
        );
        const data = await response.json();

        const typesToFilter = Object.keys(typeIcons);

        const tempFilteredTypes: { [key: string]: any[] } = {};
        typesToFilter.forEach((type) => (tempFilteredTypes[type] = []));

        data.forEach((item: any) => {
          if (item.sats && item.sats.length > 0) {
            item.sats.forEach((sat: any) => {
              typesToFilter.forEach((type) => {
                if (sat.types && sat.types.includes(type)) {
                  tempFilteredTypes[type].push(item);
                }
              });
            });
          } else {
            console.log(`Data does not have sats or sats is empty`);
          }
        });

        const allData = Object.values(tempFilteredTypes).flat();
        setFilteredDisplay(allData);
        setCurrentPage(1);
        setIsSearchActive(true);
      } else {
        toast.error("This Address is not a valid BTC address!");
      }
    }
  };

  const handleInputAddress = (event: any) => {
    setSearchAddress(event?.target.value);
  };

  return (
    <div className="mt-10">
      <div className="flex items-center justify-center px-40 text-[150px] font-bold italic text-[#f53dc7]">
        RARE SATS
      </div>
      <div>
        <div className="mx-40 flex justify-center">
          <div className="border-gray-700 flex w-1/2 items-center overflow-hidden rounded-full border bg-dark">
            <input
              className="text-gray-400 flex-grow bg-dark px-10 py-4 focus:outline-none"
              placeholder="Input the BTC address..."
              type="text"
              onChange={handleInputAddress}
            />
            <div className="pr-2">
              <button
                className="rounded-full bg-blue-gray-800 px-4 py-2 text-white hover:bg-blue-gray-700 focus:outline-none"
                onClick={handleSearchRareSat}
              >
                CHECK
              </button>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <div className="mx-40 flex flex-wrap justify-center gap-4 ">
            {Object.keys(typeIcons).map((key) => (
              <div key={key} className="icon-container">
                <img src={typeIcons[key]} alt={key} className="h-12 w-12" />
                <div
                  className="tooltip"
                  dangerouslySetInnerHTML={{ __html: tooltips[key] }}
                />
              </div>
            ))}
          </div>
          {isSearchActive && (
            <div>
              <div className="mx-40 my-5 rounded-xl bg-[#262626] p-8">
                <div>
                  <div className="flex items-center justify-start">
                    <p className="text-[24px] font-bold">Address</p>
                    <span className="clear-bnt">
                      <Refresh />
                    </span>
                  </div>
                  <div className="mt-4 flex items-center justify-start gap-4">
                    <div>{searchAddress}</div>
                    <div>
                      <Copy />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mx-10">
                {filteredDisplay.length == 0 ? (
                  <div className="mt-4 text-center font-bold italic">
                    <div className="text-[64px] text-[#f53dc7]">
                      OOF - Keep Hunting
                    </div>
                    <div className="mt-4 text-[24px]">
                      Nothing here, who knows maybe your next try will be
                      victorious!
                    </div>
                    <div className="mt-4">
                      <img
                        src={OOF}
                        className="ml-[720px] flex flex-row justify-center"
                      />
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="mt-4 text-center font-bold italic">
                      <div className="text-[64px] text-[#f53dc7]">
                        CONGRATULATIONS!
                      </div>
                      <div className="mt-4 text-[24px]">
                        You found some special sats! Lets see what you
                        discovers...
                      </div>
                    </div>
                    <div>
                      <div className="mt-10 grid grid-cols-6 gap-4">
                        {filteredContent}
                      </div>
                      <div className="mt-4 flex items-center justify-center">
                        <button
                          className="bg-gray-700 hover:bg-gray-600 rounded-lg px-4 py-2 text-white disabled:opacity-50"
                          onClick={handlePreviousPage}
                          disabled={currentPage === 1}
                        >
                          Previous
                        </button>
                        <span className="mx-4 text-white">
                          Page {currentPage} of {totalPages}
                        </span>
                        <button
                          className="bg-gray-700 hover:bg-gray-600 rounded-lg px-4 py-2 text-white disabled:opacity-50"
                          onClick={handleNextPage}
                          disabled={currentPage === totalPages}
                        >
                          Next
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
