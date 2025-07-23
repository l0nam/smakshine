import Image from "next/image";
import Link from "next/link";
import { FaDiscord, FaVk } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { RiTelegram2Fill } from "react-icons/ri";
import { buttonVariants } from "./ui/button";

export const Footer = () => {
  const icons = [
    {
      icon: <FaDiscord />,
      href: "https://discord.gg/W9DzB68tMB",
    },
    {
      icon: <RiTelegram2Fill />,
      href: "https://t.me/Smak_Shine",
    },
    {
      icon: <FaVk />,
      href: "https://vk.com/smak_shine",
    },
    {
      icon: <IoMail />,
      href: "mailto:smakshine@gmail.com",
    },
  ];

  return (
    <footer className="bg-accent/50 mt-20 w-full border-t border-accent/50">
      <div className="container w-full my-10 flex flex-col lg:flex-row items-center lg:justify-between">
        <div>
          <Link href="/" className="select-none flex items-center justify-center lg:justify-start space-x-2">
            <Image
              src="/icon.svg"
              width={44}
              height={44}
              alt="SmakShine"
              className="rounded-[10px]"
            />
            <p className="text-lg font-semibold">SmakShine</p>
          </Link>

          <p className="text-foreground/80 mt-2">
            Сервер для комфортной игры
          </p>
        </div>

        <div className="flex gap-0.5 lg:mt-0 mt-6">
          {icons.map((icon, index) => (
            <Link
              href={icon.href}
              target="_blank"
              className={buttonVariants({ variant: "ghost" })}
              key={index}
            >
              {icon.icon}
            </Link>
          ))}
        </div>
      </div>

      <p className="text-center text-sm pb-4">
        &copy; 2022-2025 Smak Shine, Inc
      </p>
    </footer>
  );
};
