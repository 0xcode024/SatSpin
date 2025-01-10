import React from "react";
import { validate } from "bitcoin-address-validation";
import { toast } from "sonner";
import { useInscriptions } from "../../context/InscriptionsContext";
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
import { useSatAddress } from "../../context/SatAddressContext";

const SearchComponent: React.FC = () => {
  const { inscriptions, setInscriptions } = useInscriptions();
  const { satAddress, setSatAddress } = useSatAddress();
  const handleInputAddress = (event: any) => {
    setSatAddress(event?.target.value);
  };
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

  const handleSearchSats = async () => {
    if (satAddress === "") {
      toast.error("Please input BTC Address!");
    } else {
      if (validate(satAddress)) {
        try {
          const response = await fetch(
            `https://api-prod.magisat.io/profile/inscriptions?walletAddress=${satAddress}`,
            {
              method: "GET",
              headers: {},
            }
          );
          const response1 = await fetch(
            `https://gw.sating.io/api/account/sats/${satAddress}`,
            {
              method: "GET",
              headers: {},
            }
          );
          const data1 = await response1.json();
          console.log("11", data1);
          const typesToFilter = Object.keys(typeIcons);

          const tempFilteredTypes: { [key: string]: any[] } = {};
          typesToFilter.forEach((type) => (tempFilteredTypes[type] = []));

          data1.forEach((item: any) => {
            if (item.sats && item.sats.length > 0) {
              item.sats.forEach((sat: any) => {
                typesToFilter.forEach((type) => {
                  if (sat.types && sat.types.includes(type)) {
                    tempFilteredTypes[type].push(item);
                    console.log(tempFilteredTypes);
                  }
                });
              });
            } else {
              console.log(`Data does not have sats or sats is empty`);
            }
          });

          if (!response.ok) {
            throw new Error("Network response was not ok");
          }

          const data = await response.json();
          console.log(data);
          const newInscriptions: string[] = []; // Ensure this is an array of strings

          data.results.forEach((item: any) => {
            if (item.includedInCollections) {
              item.includedInCollections.forEach((index: any) => {
                // Check if inscriptionId is empty and set it to '1' if it
                // console.log(index);
                const inscriptionId = index.inscriptionId;
                newInscriptions.push(inscriptionId);
              });
            }
          });

          // Update the state with the new inscriptions
          setInscriptions((prevInscriptions) => [
            ...prevInscriptions,
            ...newInscriptions,
          ]);

          // Log the updated inscriptions to verify
          console.log("Updated Inscriptions:", [
            ...inscriptions,
            ...newInscriptions,
          ]);
        } catch (error) {
          console.error("Error fetching data:", error);
          toast.error("Failed to fetch inscriptions. Please try again.");
        }
      } else {
        toast.error("This Address is not a valid BTC address!");
      }
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div className="flex w-full max-w-[600px] rounded-full bg-[#0d1829] px-2">
        <button className="flex cursor-pointer self-center bg-[#0d1829] p-1">
          <svg
            width="30px"
            height="30px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0" />
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g id="SVGRepo_iconCarrier">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.567 9.8895C12.2495 8.90124 12.114 7.5637 11.247 6.7325C10.3679 5.88806 9.02339 5.75928 7.99998 6.4215C7.57983 6.69308 7.25013 7.0837 7.05298 7.5435C6.85867 7.99881 6.80774 8.50252 6.90698 8.9875C7.00665 9.47472 7.25054 9.92071 7.60698 10.2675C7.97021 10.6186 8.42786 10.8563 8.92398 10.9515C9.42353 11.049 9.94062 11.0001 10.413 10.8105C10.8798 10.6237 11.2812 10.3033 11.567 9.8895Z"
                stroke="#ff5c5c"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.433 17.8895C11.7504 16.9012 11.886 15.5637 12.753 14.7325C13.6321 13.8881 14.9766 13.7593 16 14.4215C16.4202 14.6931 16.7498 15.0837 16.947 15.5435C17.1413 15.9988 17.1922 16.5025 17.093 16.9875C16.9933 17.4747 16.7494 17.9207 16.393 18.2675C16.0298 18.6186 15.5721 18.8563 15.076 18.9515C14.5773 19.0481 14.0614 18.9988 13.59 18.8095C13.1222 18.6234 12.7197 18.3034 12.433 17.8895V17.8895Z"
                stroke="#ff5c5c"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 7.75049C11.5858 7.75049 11.25 8.08627 11.25 8.50049C11.25 8.9147 11.5858 9.25049 12 9.25049V7.75049ZM19 9.25049C19.4142 9.25049 19.75 8.9147 19.75 8.50049C19.75 8.08627 19.4142 7.75049 19 7.75049V9.25049ZM6.857 9.25049C7.27121 9.25049 7.607 8.9147 7.607 8.50049C7.607 8.08627 7.27121 7.75049 6.857 7.75049V9.25049ZM5 7.75049C4.58579 7.75049 4.25 8.08627 4.25 8.50049C4.25 8.9147 4.58579 9.25049 5 9.25049V7.75049ZM12 17.2505C12.4142 17.2505 12.75 16.9147 12.75 16.5005C12.75 16.0863 12.4142 15.7505 12 15.7505V17.2505ZM5 15.7505C4.58579 15.7505 4.25 16.0863 4.25 16.5005C4.25 16.9147 4.58579 17.2505 5 17.2505V15.7505ZM17.143 15.7505C16.7288 15.7505 16.393 16.0863 16.393 16.5005C16.393 16.9147 16.7288 17.2505 17.143 17.2505V15.7505ZM19 17.2505C19.4142 17.2505 19.75 16.9147 19.75 16.5005C19.75 16.0863 19.4142 15.7505 19 15.7505V17.2505ZM12 9.25049H19V7.75049H12V9.25049ZM6.857 7.75049H5V9.25049H6.857V7.75049ZM12 15.7505H5V17.2505H12V15.7505ZM17.143 17.2505H19V15.7505H17.143V17.2505Z"
                fill="#ff5c5c"
              />
            </g>
          </svg>
        </button>

        <input
          type="text"
          className="flex w-full bg-[#0d1829] bg-transparent pl-2 text-[#cccccc] outline-0"
          placeholder="Search..."
          onChange={handleInputAddress}
        />
        <button
          type="submit"
          className="relative rounded-full bg-[#0d1829] p-2"
          onClick={handleSearchSats}
        >
          <svg
            width="30px"
            height="30px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0" />
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g id="SVGRepo_iconCarrier">
              <path
                d="M14.9536 14.9458L21 21M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                stroke="#999"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SearchComponent;
