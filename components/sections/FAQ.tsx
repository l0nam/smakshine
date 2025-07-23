"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { FaDiscord, FaVk } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { RiTelegram2Fill } from "react-icons/ri";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const items = [
  {
    title: "Обязательна ли лицензия?",
    content:
      "Нет, лицензия не требуется. Можно играть с пиратского издания игры",
  },
  {
    title: "Какая версия на сервере?",
    content: "На сервер можно зайти, используя версии 1.21-1.21.x",
  },
  {
    title: "Как попасть на сервер?",
    content:
      "На сервер можно попасть как по анкете, так и по проходке. Мы тщательно рассматриваем анкеты и фильтруем нежелательных игроков. Срок рассмотрения анкеты — до 24 часов. Покупая проходку, ты получаешь доступ моментально",
  },
  {
    title: "Какой средний онлайн?",
    content: "Средний онлайн составляет XXX человек в день. Рекорд — XXX",
  },
  {
    title: "Можно ли играть с Bedrock?",
    content: "Нет, играть не телефоне можно только используя PojavLauncher",
  },
  {
    title: "Часто ли бывают вайпы?",
    content: "Хз, пишите сами ;)",
  },
];

const icons = [
  {
    icon: <FaDiscord className="size-10" />,
    title: "Discord",
    content: "Общайтесь с игроками",
    href: "https://discord.gg/W9DzB68tMB",
  },
  {
    icon: <RiTelegram2Fill className="size-10" />,
    title: "Telegram",
    content: "Узнайте о новостях",
    href: "https://t.me/Smak_Shine",
  },
  {
    icon: <FaVk className="size-10" />,
    title: "VK",
    content: "Узнавайте о новостях",
    href: "https://vk.com/smak_shine",
  },
  {
    icon: <IoMail className="size-10" />,
    title: "Email",
    content: "Свяжитесь с нами",
    href: "mailto:smakshine@gmail.com",
  },
];

const firstRow = icons.slice(0, 2);
const secondRow = icons.slice(2);

export function FAQ() {
  return (
    <section className="container py-20">
      <div className="w-full text-center lg:text-start">
        <h1 className="text-5xl max-w-lg inline-block font-bold">Часто задаваемые вопросы</h1>
        <p className="mt-2 lg:max-w-2xl text-foreground/80 text-lg font-medium">
          Вопросы, которые могут возникнуть у вас
        </p>
      </div>

      <div className="mt-4 flex gap-4 lg:flex-col xl:flex-row flex-col">
        <Accordion type="single" collapsible className="w-full">
          {items.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="lg:px-4"
            >
              <AccordionTrigger className="text-lg cursor-pointer font-medium">
                {item.title}
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 font-medium text-lg text-foreground/80">
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {item.content}
                </motion.div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="flex flex-col lg:flex-row xl:flex-col gap-3 w-full">
          <div className="flex gap-3 w-full">
            {firstRow.map((card) => (
              <Link
                href={card.href}
                key={card.href}
                className="group w-full"
                target="_blank"
              >
                <Card className="h-full shadow-none">
                  <CardHeader>
                    <CardTitle>{card.icon}</CardTitle>
                    <CardAction>
                      <ArrowUpRight className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-150" />
                    </CardAction>
                  </CardHeader>
                  <CardContent>
                    <h2 className="text-2xl font-semibold">{card.title}</h2>
                    <p>{card.content}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="flex gap-3 w-full">
            {secondRow.map((card) => (
              <Link
                href={card.href}
                key={card.href}
                className="group w-full"
                target="_blank"
              >
                <Card className="h-full shadow-none">
                  <CardHeader>
                    <CardTitle>{card.icon}</CardTitle>
                    <CardAction>
                      <ArrowUpRight className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-150" />
                    </CardAction>
                  </CardHeader>
                  <CardContent>
                    <h2 className="text-2xl font-semibold">{card.title}</h2>
                    <p>{card.content}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
