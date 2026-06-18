"use client";

import { Menu } from "lucide-react";
import { MouseEvent, useState } from "react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navigation = [
  { label: "About", href: "#about" },
  { label: "Skill", href: "#skill" },
  { label: "Projects", href: "#projects" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  function handleMobileNavigation(
    event: MouseEvent<HTMLAnchorElement>,
    href: string,
  ) {
    event.preventDefault();
    setIsOpen(false);

    window.setTimeout(() => {
      const target = document.querySelector(href);
      target?.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", href);
    }, 200);
  }

  return (
    <header className="absolute top-4 z-50 w-full px-4 sm:px-6 lg:top-8">
      <nav className="mx-auto flex w-full max-w-3xl items-center justify-between rounded-full bg-[#002c32] px-5 py-3 sm:px-6 md:w-fit md:max-w-none md:gap-5 lg:gap-8 xl:gap-10">
        <a href="#home" className="text-lg font-bold text-white sm:text-xl">
          Edwin
        </a>

        <div className="hidden items-center gap-5 md:flex lg:gap-8 xl:gap-10">
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-white transition-colors hover:text-[#20a4b8]"
            >
              {item.label}
            </a>
          ))}
        </div>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger
            aria-label="Open navigation menu"
            className="rounded-md p-1 text-white md:hidden"
          >
            <Menu className="size-7" />
          </SheetTrigger>

          <SheetContent
            side="right"
            className="inset-y-5 right-4 h-[calc(100%-2.5rem)] w-[calc(100%-2rem)] rounded-[28px] border border-white/10 bg-[#001b20]/70 text-white shadow-2xl backdrop-blur-2xl sm:max-w-md"
          >
            <SheetHeader>
              <SheetTitle asChild>
                <a
                  href="#home"
                  className="w-fit text-left text-3xl font-bold text-white"
                  onClick={(event) => handleMobileNavigation(event, "#home")}
                >
                  Edwin
                </a>
              </SheetTitle>
              <SheetDescription className="sr-only">
                Portfolio navigation
              </SheetDescription>
            </SheetHeader>

            <div className="flex flex-col gap-5 px-4 pt-5">
              {navigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="rounded-lg py-2 text-2xl transition-colors hover:text-[#20a4b8]"
                  onClick={(event) =>
                    handleMobileNavigation(event, item.href)
                  }
                >
                  {item.label}
                </a>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
};

export default Navbar;
