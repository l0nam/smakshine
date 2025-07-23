"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button, buttonVariants } from "../ui/button";
import Link from "next/link";

export default function MainSection() {
  return (
    <section className="w-full border-b border-accent/50 min-h-screen flex items-center py-20">
      <div className="text-center lg:text-left container">
        <motion.div
          initial={{ filter: "blur(10px)", opacity: 0, y: 15 }}
          animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="flex items-center lg:justify-start justify-center gap-2 select-none"
        >
          <h1 className="text-5xl font-bold text-transparent bg-gradient-to-r from-yellow-500 via-orange-500 to-pink-500 bg-clip-text">
            SmakShine
          </h1>

          <Image
            src={"/icon.svg"}
            width={40}
            height={40}
            alt="icon"
            className="rounded-[10px]"
          />
        </motion.div>

        <div className="mt-2 lg:max-w-2xl text-foreground/80 text-lg font-medium">
          {"Бесплатный ванильный Minecraft проект с элементами РП. Мы — уникальный проект и не только интереснейшим местом для знакомств и веселья, но проектом, судьбу которого вершат игроки."
            .split(" ")
            .map((word, index) => (
              <motion.span
                key={index}
                initial={{ filter: "blur(10px)", opacity: 0, y: 15 }}
                animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 + index * 0.03 }}
                className="inline-block whitespace-pre"
              >
                {word + " "}
              </motion.span>
            ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0)" }}
          transition={{ duration: 0.5, delay: 0.85 }}
          className="space-x-2"
        >
          <Link
            href="https://discord.com/invite/W9DzB68tMB"
            target="_blank"
            className={`${buttonVariants({ variant: "default" })} mt-6`}
          >
            Присоединяйся к нам
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
