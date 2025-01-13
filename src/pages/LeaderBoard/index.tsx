import ProfileCard from "@/components/LeaderBoard/ProfileCard";
import adm from "@/assets/images/profile/adm.png";
import eve from "@/assets/images/profile/eve.png";
import delta from "@/assets/images/profile/delta.png";
import devon from "@/assets/images/profile/devon.png";
import ronald from "@/assets/images/profile/ronald.png";
import eleanor from "@/assets/images/profile/eleanor.png";
import savannah from "@/assets/images/profile/savannah.png";
import wade0 from "@/assets/images/profile/wade0.png";
import wade1 from "@/assets/images/profile/wade1.png";
import wade2 from "@/assets/images/profile/wade2.png";
import wade3 from "@/assets/images/profile/wade3.png";
import wade4 from "@/assets/images/profile/wade4.png";
import wade5 from "@/assets/images/profile/wade5.png";
import wade6 from "@/assets/images/profile/wade6.png";
import wade7 from "@/assets/images/profile/wade7.png";
import wade8 from "@/assets/images/profile/wade8.png";
import square from "@/assets/images/square.png";

import ProfileItem from "@/components/LeaderBoard/ProfileItem";
import BaseFooter from "@/components/Layout/BaseFooter";

export default function LeaderBoard() {
  const profiles = [
    {
      ranking: 3,
      name: "adm23",
      avatar: adm,
      arrow: true,
      point: 10000,
    },
    {
      ranking: 1,
      name: "eve231",
      avatar: eve,
      arrow: true,
      point: 200000,
    },
    {
      ranking: 2,
      name: "delta1",
      avatar: delta,
      arrow: true,
      point: 50000,
    },
    {
      ranking: 4,
      name: "Devon Lane",
      avatar: devon,
      arrow: true,
      point: 3768,
    },
    {
      ranking: 5,
      name: "Ronald",
      avatar: ronald,
      arrow: false,
      point: 3578,
    },
    {
      ranking: 6,
      name: "Eleanor Pena",
      avatar: eleanor,
      arrow: true,
      point: 3576,
    },
    {
      ranking: 7,
      name: "Svannah",
      avatar: savannah,
      arrow: false,
      point: 3125,
    },
    {
      ranking: 8,
      name: "Wade Warren",
      avatar: wade0,
      arrow: true,
      point: 2857,
    },
    {
      ranking: 9,
      name: "Wade Warren",
      avatar: wade1,
      arrow: true,
      point: 2857,
    },
    {
      ranking: 10,
      name: "Wade Warren",
      avatar: wade2,
      arrow: true,
      point: 2857,
    },
    {
      ranking: 11,
      name: "Wade Warren",
      avatar: wade3,
      arrow: true,
      point: 2857,
    },
    {
      ranking: 12,
      name: "Wade Warren",
      avatar: wade4,
      arrow: true,
      point: 2857,
    },
    {
      ranking: 13,
      name: "Wade Warren",
      avatar: wade5,
      arrow: true,
      point: 2857,
    },
    {
      ranking: 14,
      name: "Wade Warren",
      avatar: wade6,
      arrow: true,
      point: 2857,
    },
  ];
  return (
    <div className=" pl-[50px] pt-[118px]">
      <div className="">
        <div
          className="relative flex flex-col items-center gap-2 pb-8"
          style={{
            backgroundImage: `url(${square}), radial-gradient(circle, #292219, #111111)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundBlendMode: "blend", // or another blend mode
          }}
        >
          <div className="mt-32 font-space text-3xl font-bold text-tColor5">
            LEADER BOARD
          </div>
          <div className="h-[2px] w-[90%] bg-bgColor5"></div>
          <div className="justify-between gap-10 lg:flex">
            {profiles.map(
              (profile, key) =>
                key < 3 && (
                  <ProfileCard
                    name={profile.name}
                    point={profile.point}
                    ranking={profile.ranking}
                    avatar={profile.avatar}
                    arrow={profile.arrow}
                    customClasses=""
                  />
                )
            )}
          </div>
        </div>
        <div className="flex w-[100%] flex-col items-center gap-4 bg-bgColor8 py-6">
          {profiles.map(
            (profile, key) =>
              key > 2 && (
                <ProfileItem
                  key={key}
                  ranking={profile.ranking}
                  avatar={profile.avatar}
                  name={profile.name}
                  point={profile.point}
                  arrow={profile.arrow}
                  customClasses=""
                />
              )
          )}
        </div>
      </div>
      <BaseFooter />
    </div>
  );
}
