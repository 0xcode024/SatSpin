import { useEffect, useState } from "react";
import ButtonDefault from "../Buttons/ButtonDefault";
import InputBox from "./InputBox";
import ProfileImage from "./ProfileImage";
import adm from "@/assets/images/profile/adm.png";
import { useLaserEyes } from "@omnisat/lasereyes";
import { BASE_URL } from "@/constants/config";
import axios from "axios";
import { getJWT, isTokenExpired } from "@/utils/token";
import { JWT_COOKIE } from "@/constants/auth.constants";
const ProfileInfo = () => {
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const { paymentAddress, signMessage, paymentPublicKey, address, publicKey } =
    useLaserEyes();
  useEffect(() => {
    const fetchData = async () => {
      if (!paymentAddress) return;
      const response = await axios
        .get(`${BASE_URL}api/users/info/${paymentAddress}`)
        .then((res) => {
          return res.data;
        })
        .catch((err) => console.error("Error fetching points:", err));
      setUsername(response.username);
      setPhoneNumber(response.phoneNumber);
      setEmail(response.email);
      const date = new Date(response.dateOfBirth);
      setDateOfBirth(date.toISOString().split("T")[0]);
    };
    fetchData();
  }, [paymentAddress]);

  const sign = async (message: string) => {
    try {
      const result = sessionStorage.getItem(JWT_COOKIE);
      if (result != null) {
        if (!isTokenExpired(result)) {
          return;
        }
      }
      const signature = await signMessage(message, paymentAddress);

      const data = {
        paymentAddress: paymentAddress,
        paymentPubkey: paymentPublicKey,
        message: message,
        signature: signature,
        userInfo: {
          username: "",
          balance: {
            btc: 0,
            inscriptions: [],
            runes: [],
          },
          paymentAddress: paymentAddress,
          paymentPubkey: paymentPublicKey,
          ordinalAddress: address,
          ordinalPubkey: publicKey,
        },
      };

      const response = await axios
        .post(`${BASE_URL}api/auth/login`, { ...data })
        .then((res) => {
          return res.data;
        });
      sessionStorage.setItem(JWT_COOKIE, response.token);
      const jwt = sessionStorage.getItem(JWT_COOKIE);
    } catch (error) {}
  };
  const updateProfile = async () => {
    let token = await getJWT();
    if (token == null || isTokenExpired(token)) {
      await sign("Sat Spin: Test Message");
      token = sessionStorage.getItem(JWT_COOKIE);
    }

    const response = await axios
      .put(
        `${BASE_URL}api/users/info`,
        {
          username,
          phoneNumber,
          email,
          dateOfBirth,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        return res.data;
      })
      .catch((err) => console.error("Error fetching points:", err));

    if (response) {
      alert("updated the profile");
    }
  };

  return (
    <div className="w-full rounded-3xl bg-bgColor7 px-4 py-4 md:py-10 lg:px-8 lg:py-20 2xl:w-[55%]">
      <ProfileImage image={adm} />
      <div className="grid grid-cols-1 gap-3 py-10 lg:grid-cols-2 lg:gap-4 lg:py-20">
        <InputBox
          value={username}
          setValue={setUsername}
          name="Display Name"
          placeholder=""
        />
        <InputBox
          value={phoneNumber}
          setValue={setPhoneNumber}
          name="Phone Number"
          placeholder=""
        />
        <InputBox
          value={email}
          setValue={setEmail}
          name="Your email"
          placeholder=""
        />
        <div className="hidden lg:block"></div>
        <InputBox
          value={dateOfBirth}
          setValue={setDateOfBirth}
          name="Date of Birth"
          placeholder="YYYY-MM-DD"
        />
        <div className="mr-[10%] flex items-center justify-center py-2 lg:items-end lg:justify-end lg:py-0">
          <ButtonDefault
            label="Confirm"
            customClasses="w-[80%] lg:h-[50%] bg-bgColor5 text-black font-bold lg:text-md text-xs sm:text-sm h-full"
            onClick={() => updateProfile()}
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
