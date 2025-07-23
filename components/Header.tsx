"use client";
import Image from "next/image";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";

export function useHasMounted() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return mounted;
}

export const Header = ({
  seasonLinks,
}: {
  seasonLinks: { name: string; href: string }[];
}) => {
  const path = usePathname();
  const hasMounted = useHasMounted();
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  // Close Sheet when path changes
  useEffect(() => {
    setIsSheetOpen(false);
  }, [path]);

  const HeaderLinks = [
    { label: "Главная", href: "/" },
    { label: "Вики", href: "https://wiki.smakshine.com/" },
    { label: "Сезоны", href: "/seasons" },
  ];

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{
          delay: 0.5,
          duration: 8,
          repeatType: "mirror",
          repeat: Infinity,
          repeatDelay: 3,
        }}
        className="fixed top-0 z-10 pointer-events-none left-1/2 -translate-x-1/2 w-[650px] h-[100px] bg-gradient-to-r from-yellow-500 via-orange-500 to-pink-500 blur-3xl"
      />

      <header className="fixed top-5 left-1/2 -translate-x-1/2 w-full container border border-accent bg-accent/50 rounded-[14px] z-50 backdrop-blur-xl">
        {/* Desktop Header */}
        <nav className="hidden lg:flex items-center justify-between px-4 py-3">
          <div className="flex items-center">
            <Link href="/" className="mr-3">
              <Image
                src="/icon.svg"
                width={44}
                height={44}
                alt="SmakShine"
                className="rounded-[10px]"
              />
            </Link>

            <NavigationMenu viewport={false}>
              <NavigationMenuList key={path}>
                {HeaderLinks.map((link, index) => (
                  <NavigationMenuItem key={index}>
                    {link.label === "Сезоны" ? (
                      <>
                        <NavigationMenuTrigger>
                          {link.label}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul key={index * index}>
                            {seasonLinks.map((subLink) => (
                              <li key={subLink.href}>
                                <NavigationMenuLink asChild>
                                  <Link
                                    href={subLink.href}
                                    className={`${
                                      path === subLink.href
                                        ? buttonVariants({ variant: "default" })
                                        : buttonVariants({ variant: "ghost" })
                                    } w-full flex items-start`}
                                  >
                                    {subLink.name}
                                  </Link>
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <NavigationMenuLink
                        asChild
                        className={navigationMenuTriggerStyle()}
                      >
                        <Link
                          href={link.href}
                          className={`${
                            path === link.href
                              ? buttonVariants({ variant: "default" })
                              : buttonVariants({ variant: "ghost" })
                          }`}
                        >
                          {link.label}
                        </Link>
                      </NavigationMenuLink>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="flex items-center gap-1.5">
            <Link
              href="https://discord.com/invite/W9DzB68tMB"
              target="_blank"
              className={buttonVariants({ variant: "primary" })}
            >
              Начать играть
            </Link>
            {hasMounted && <ThemeToggle />}
          </div>
        </nav>

        {/* Mobile Header */}
        <div className="flex lg:hidden items-center justify-between px-4 py-3">
          <Link href="/" className="flex items-center">
            <Image
              src="/icon.svg"
              width={36}
              height={36}
              alt="SmakShine"
              className="rounded-[8px]"
            />
          </Link>

          <div className="flex items-center gap-2">
            {hasMounted && <ThemeToggle />}
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu />
                </Button>
              </SheetTrigger>
              <SheetContent side="top" className="w-full h-screen p-6">
                <SheetTitle className="flex items-center gap-2 pb-4 border-b border-accent">
                  <Image
                    src="/icon.svg"
                    width={36}
                    height={36}
                    alt="SmakShine"
                    className="rounded-[8px]"
                  />
                  <span className="text-lg font-semibold">SmakShine</span>
                </SheetTitle>
                <nav className="flex flex-col gap-0.5 mt-6">
                  {HeaderLinks.map((link, index) => (
                    <Link
                      key={index}
                      href={link.href}
                      className={`${
                        path === link.href
                          ? buttonVariants({ variant: "default" })
                          : buttonVariants({ variant: "ghost" })
                      } w-full justify-center`}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <Button variant="primary" className="w-full mt-4">
                    Начать играть
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  );
};
