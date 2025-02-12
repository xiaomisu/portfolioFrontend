import Image from "next/image";
import Hero from "../../public/hero.png";

import React from "react";

export default function Home() {
  return (
    <div className="flex items-center space-x-24 ">
      <div className="flex-1 flex flex-col space-y-12">
        <h1
          className="text-7xl font-bold leading-tight"
          style={{
            background:
              "linear-gradient(to bottom, #194c33, #bbb)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Better design for your digital products.
        </h1>
        <p className="text-xl font-light">
          Turning your Idea into Reality. We bring
          together the teams from the global tech
          industry.
        </p>
        {/*<Button url="/portfolio" text="See Our Works"/>*/}
      </div>
      <div className="flex-1 flex flex-col space-y-12">
        <Image
          src={Hero}
          alt=""
          className="w-full h-auto object-contain"
        />
      </div>
    </div>
  );
}

// 使用getServerSideProps获取数据
