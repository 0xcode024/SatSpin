import React, { useEffect, useState } from "react";
import Item from "@/assets/images/item.png";
import UTXO from "@/assets/images/utxo.png";
import { useSatAddress } from "../../context/SatAddressContext";
import { toast } from "sonner";
import { validate } from "bitcoin-address-validation";

interface Customer {
  lowestSatIndex?: number; // Use optional chaining if this property might not exist
  utxo?: string; // Add other properties as needed
  utxoValue?: number; // Add other properties as needed
}

const Table: React.FC = () => {
  const { satAddress } = useSatAddress();
  const [otherSat, setOtherSat] = useState<Customer[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {
    const fetchSats = async () => {
      if (satAddress === "") {
        toast.error("Please input BTC Address!");
      } else if (validate(satAddress)) {
        try {
          const response = await fetch(
            `https://api-prod.magisat.io/profile/safe-utxos?walletAddress=${satAddress}`,
            {
              method: "GET",
              headers: {},
            }
          );

          if (!response.ok) {
            throw new Error("Network response was not ok");
          }

          const data = await response.json();
          console.log("other", data); // Handle the fetched data as needed

          // Accumulate items into an array
          const newOtherSat = data.results.map((item: any) => item);
          setOtherSat(newOtherSat); // Set the state once with the new array
          console.log("Updated otherSat:", newOtherSat); // Log the new state
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    };

    fetchSats();
  }, [satAddress]);

  // Calculate the total number of pages
  const totalPages = Math.ceil(otherSat.length / itemsPerPage);

  // Get the items for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = otherSat.slice(startIndex, startIndex + itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="mx-auto ">
      <div className="dark:bg-gray-800 dark:border-gray-700 w-[800px] bg-[#161515] p-4 shadow-md sm:p-8">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex flex-row">
            <h3 className="text-gray-900 text-xl font-bold leading-none dark:text-white">
              Item
            </h3>
            <h3 className="text-gray-900 ml-16 text-xl font-bold leading-none dark:text-white">
              Name
            </h3>
          </div>
          <a
            href="#"
            className="text-blue-600 dark:text-blue-500 text-sm font-medium hover:underline"
          >
            UTXO size
          </a>
        </div>
        <div className="flow-root">
          <ul
            role="list"
            className="divide-gray-600 dark:divide-gray-700 divide-y"
          >
            {currentItems.length > 0 ? (
              currentItems.map((customer, index) => (
                <li key={index} className="py-3 sm:py-4">
                  <div className="flex items-center space-x-3 justify-between">
                    <div className="flex flex-row gap-2">
                      <div className="flex flex-shrink-0">
                        <img
                          className="h-10 w-12 rounded-full"
                          src={Item} // Ensure 'Item' is defined and is a valid image source
                          alt="Customer Avatar" // Provide a meaningful alt text
                        />
                      </div>
                      <div className="flex-2 min-w-0">
                        <p className="text-gray-900 truncate text-sm font-medium text-white">
                          Common-Safe to spend
                        </p>
                        <p className="text-gray-500 dark:text-gray-400 truncate text-sm">
                          {customer.lowestSatIndex}
                        </p>
                      </div>
                    </div>
                    <div className="text-gray-900 ml-auto flex items-center text-base font-semibold text-white">
                      <img src={UTXO} alt="UTXO" />
                      {customer.utxoValue}
                    </div>
                  </div>
                </li>
              ))
            ) : (
              <li className="text-gray-500 py-3 sm:py-4">No data available.</li>
            )}
          </ul>
        </div>
        <div className="flex justify-between mt-4">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
          >
            Previous
          </button>
          <span className="self-center text-gray-900">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Table;
