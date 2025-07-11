"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { House, Info, BookOpen, Scroll, Play } from "lucide-react";
import ThemeToggleBtn from "./ThemeToggleBtn";
import PlayLink from "./PlayLink";

const HeaderLinks = [
  {
    name: "Главная",
    href: "/",
    icon: <House className="w-5 h-5" />,
  },
  {
    name: "Вики",
    href: "/wiki",
    icon: <BookOpen className="w-5 h-5" />,
  },
  {
    name: "Сезоны",
    href: "/seasons",
    icon: <Scroll className="w-5 h-5" />,
    dropdown: [
      { label: "Сезон 1", href: "/seasons", targetId: "season1" },
      { label: "Сезон 2", href: "/seasons", targetId: "season2" },
      { label: "Сезон 3", href: "/seasons", targetId: "season3" },
      { label: "Сезон 4", href: "/seasons", targetId: "season4" },
    ],
  },
  {
    name: "О сервере",
    href: "/about",
    icon: <Info className="w-5 h-5" />,
  },
];

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const hoverTimeout = useRef<NodeJS.Timeout | null>(null);

  const [hoveredDropdown, setHoveredDropdown] = useState<number | null>(null);
  const [deferredScroll, setDeferredScroll] = useState<{
    href: string;
    targetId: string;
  } | null>(null);
  const shouldDropdownOpen = (linkHref: string, dropdown?: any[]) => {
    return (
      Array.isArray(dropdown) && dropdown.length > 0 && pathname !== linkHref
    );
  };

  // Скролл после перехода
  useEffect(() => {
    if (deferredScroll && pathname === deferredScroll.href) {
      setTimeout(() => {
        const el = document.getElementById(deferredScroll.targetId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
        setDeferredScroll(null);
      }, 10000);
    }
  }, [pathname, deferredScroll]);

  // Закрывать dropdown при смене маршрута
  useEffect(() => {
    setHoveredDropdown(null);
  }, [pathname]);

  const handleDropdownClick = (
    e: React.MouseEvent,
    href: string,
    targetId: string
  ) => {
    e.preventDefault();

    if (pathname === href) {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      setDeferredScroll({ href, targetId });
      router.push(href);
    }
  };

  return (
    <>
      <motion.div
        initial={{ backgroundPosition: "0% 50%" }}
        animate={{ backgroundPosition: "100% 50%" }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
        className="absolute z-[-1] pointer-events-none w-[600px] h-[100px] top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[100px] opacity-60"
        style={{
          backgroundImage: "linear-gradient(270deg, oklch(79.5% 0.184 86.047), oklch(70.5% 0.213 47.604), oklch(70.5% 0.213 47.604))",
          backgroundSize: "600% 600%",
        }}
      />

      <header className="hidden lg:block fixed w-full top-8 z-50">
        <div className="container">
          <div className="flex bg-white/80 justify-between items-center w-full p-1.5 rounded-[14px] backdrop-blur">
            <nav className="items-center flex space-x-1 relative">
              {HeaderLinks.map((link, index) => {
                const isActive = pathname === link.href;
                const hasDropdown = shouldDropdownOpen(
                  link.href,
                  link.dropdown
                );

                return (
                  <div
                    key={index}
                    className="relative nav-item"
                    onMouseEnter={() => {
                      if (hasDropdown) {
                        if (hoverTimeout.current)
                          clearTimeout(hoverTimeout.current);
                        setHoveredDropdown(index);
                      }
                    }}
                    onMouseLeave={() => {
                      if (hasDropdown) {
                        hoverTimeout.current = setTimeout(() => {
                          setHoveredDropdown((prev) =>
                            prev === index ? null : prev
                          );
                        }, 200);
                      }
                    }}
                  >
                    <Link
                      href={link.href}
                      className={`flex items-center gap-3 px-4 py-2.5 rounded-[14px] font-semibold transition-colors ${
                        isActive
                          ? "bg-foreground text-background"
                          : "text-black/80 hover:bg-foreground hover:text-background"
                      }`}
                    >
                      {link.icon}
                      {link.name}
                    </Link>

                    <AnimatePresence>
                      {hasDropdown && hoveredDropdown === index && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-0 mt-[10px] shadow rounded-[10px] bg-white/80 p-1.5 z-50 backdrop-blur-md"
                        >
                          {link.dropdown?.map((item, idx) => (
                            <a
                              key={idx}
                              href={`${item.href}#${item.targetId}`}
                              onClick={(e) => {
                                handleDropdownClick(
                                  e,
                                  item.href,
                                  item.targetId
                                );
                              }}
                              className="block px-4 py-2.5 rounded-[10px] text-black/80 font-semibold duration-300 hover:bg-foreground w-40 hover:text-background transition-all"
                            >
                              {item.label}
                            </a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </nav>

            <div className="flex items-center gap-2">
              <PlayLink icon={<Play className="w-5 h-5" />} />
              <ThemeToggleBtn />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
