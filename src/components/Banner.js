import React from "react";
import Image from "next/image";
import banner from "../../public/SportsBanner.png";

const Banner = () => {
  return (
    <a
      href="https://imarkplace.com/FaizanSports/collection?product_list_limit=96"
      target="_blank"
    >
      <Image src={banner} alt="Banner" className="rounded-lg" />
    </a>
  );
};

export default Banner;
