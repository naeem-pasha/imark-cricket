"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import logo from "../../public/IMarkPlace_Final_Vector_Web_Logo.png";

export function MobileNav() {
  return (
    <div className="flex flex-col space-y-4">
      <Link href="/" className="flex items-center space-x-2">
        <Image src={logo} alt="logo" height={100} width={100} />
      </Link>
      {/* <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="getting-started">
          <AccordionTrigger>Getting Started</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col space-y-2">
              <Link
                href="/docs"
                className="text-muted-foreground hover:underline"
              >
                Introduction
              </Link>
              <Link
                href="/docs/installation"
                className="text-muted-foreground hover:underline"
              >
                Installation
              </Link>
              <Link
                href="/docs/primitives/typography"
                className="text-muted-foreground hover:underline"
              >
                Typography
              </Link>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="components">
          <AccordionTrigger>Components</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col space-y-2">
              <Link
                href="/docs/primitives/alert-dialog"
                className="text-muted-foreground hover:underline"
              >
                Alert Dialog
              </Link>
              <Link
                href="/docs/primitives/hover-card"
                className="text-muted-foreground hover:underline"
              >
                Hover Card
              </Link>
              <Link
                href="/docs/primitives/progress"
                className="text-muted-foreground hover:underline"
              >
                Progress
              </Link>
              <Link
                href="/docs/primitives/scroll-area"
                className="text-muted-foreground hover:underline"
              >
                Scroll Area
              </Link>
              <Link
                href="/docs/primitives/tabs"
                className="text-muted-foreground hover:underline"
              >
                Tabs
              </Link>
              <Link
                href="/docs/primitives/tooltip"
                className="text-muted-foreground hover:underline"
              >
                Tooltip
              </Link>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Link href="/docs" passHref>
        <Button variant="ghost" className="w-full justify-start">
          Documentation
        </Button>
      </Link> */}
    </div>
  );
}
