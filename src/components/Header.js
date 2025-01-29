"use client";

import React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { NavigationMenuComponent } from "./Navigation-menu";
import { MobileNav } from "./mobile-Nav";
import Image from "next/image";
import logo from "../../public/IMarkPlace_Final_Vector_Web_Logo.png";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center  m-auto">
        <div className=" md:flex items-center  m-auto justify-center ">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Image src={logo} alt="logo" height={100} width={100} />
          </Link>
        </div>

        {/* Temparary Commit Scale in the future then show the more options */}

        {/* Visible on lg screens and larger */}
        {/* <div className="hidden md:flex items-center  m-auto justify-center ">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Image src={logo} alt="logo" height={100} width={100} />
          </Link>
          <NavigationMenuComponent />
        </div> */}

        {/* Visible on md screens and smaller */}
        {/* <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="ml-10 p-4 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
            >
              <Menu className="w-8 h-8" />{" "}
              Adjust size with Tailwind utilities
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0">
            <MobileNav />
          </SheetContent>
        </Sheet> */}
      </div>
    </header>
  );
}
