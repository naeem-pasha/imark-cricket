"use client";

import Link from "next/link";
import { ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import logo from "../../public/IMarkPlace_Final_Vector_Web_Logo.png";
export function Footer() {
  const footerLinks = {
    mobileApps: [
      {
        label: "Imarkplace",
        href: "https://play.google.com/store/apps/details?id=com.hannan.imark&pcampaignid=web_share",
        icon: "📱",
      },
    ],
    social: [
      {
        label: "facebook",
        href: "https://www.facebook.com/Imarkplace1",
        icon: "📘",
      },
      {
        label: "youtube",
        href: "https://www.youtube.com/@iMarkPlace",
        icon: "📺",
      },
    ],
    company: [
      { label: "Careers", href: "#" },
      { label: "Advertise", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Use", href: "#" },
    ],
  };

  return (
    <footer className="bg-[#4a4a4a] text-white mt-auto">
      <div className="container mx-auto">
        {/* Logo Section */}
        <div className="flex justify-center">
          <Link
            href="/"
            className="text-2xl font-bold tracking-tight hover:text-gray-200 transition-colors"
          >
            <Image
              src={logo}
              alt="logo"
              height={200}
              width={200}
              className="mt-3"
            />
          </Link>
        </div>
        <div className="flex flex-wrap justify-between p-8 gap-8">
          {/* Mobile & Apps Section */}
          <div className="flex flex-col items-center w-full sm:w-auto sm:items-start">
            <h3 className="text-[15px] font-semibold mb-4 uppercase tracking-wide">
              Mobile Site & Apps
            </h3>
            <ul className="space-y-3">
              {footerLinks.mobileApps.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-[14px] text-gray-300 hover:text-white transition-colors"
                  >
                    <span className="w-4 h-4 flex items-center justify-center">
                      {link.icon}
                    </span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links Section */}
          <div className="flex flex-col items-center w-full sm:w-auto sm:items-start">
            <h3 className="text-[15px] font-semibold mb-4 uppercase tracking-wide">
              Follow Us On
            </h3>
            <ul className="space-y-3">
              {footerLinks.social.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-[14px] text-gray-300 hover:text-white transition-colors"
                  >
                    <span className="w-4 h-4 flex items-center justify-center">
                      {link.icon}
                    </span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Section */}
          <div className="flex flex-col items-center w-full sm:w-auto sm:items-start">
            <h3 className="text-[15px] font-semibold mb-4 uppercase tracking-wide">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-[14px] text-gray-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-600 px-8 py-4">
          <p className="text-center text-[12px] text-gray-400">
            © {new Date().getFullYear()} imarkplace.com, Times Internet Limited.
            All rights reserved{" "}
          </p>
        </div>
      </div>
    </footer>
  );
}
