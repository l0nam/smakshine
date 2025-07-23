"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const values = [
  {
    title: "Креатив и атмосфера",
    desc: "Мы строим не просто дома — мы создаём живой мир, в котором приятно жить и играть.",
    image: "/images/about/build.png"
  },
  {
    title: "Игра с душой",
    desc: "Каждый игрок — часть общей истории. Мы поддерживаем тех, кто играет с теплом и идеей.",
    image: "/images/about/community.png"
  },
  {
    title: "Без токсичности",
    desc: "Сервер — безопасное пространство. Мы уважаем границы, стараемся быть добрыми и честными.",
    image: "/images/about/peace.png"
  }
];

export default function AboutPage() {
  return (
    <main className="min-h-screen px-6 py-16 bg-gradient-to-b from-white to-rose-50">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold text-gray-800 mb-4"
        >
          Кто мы такие?
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-gray-600"
        >
          SmakShine — это не просто сервер. Это тёплое сообщество, где ценят идеи, стиль и настроение.
        </motion.p>
      </div>

      <div className="grid gap-12 md:grid-cols-2 max-w-5xl mx-auto">
        {values.map((v, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden shadow-lg">
              <Image
                src={v.image}
                alt={v.title}
                width={600}
                height={300}
                className="object-cover w-full h-48"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{v.title}</h3>
                <p className="text-gray-600">{v.desc}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="text-center mt-24 max-w-xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Хочешь стать частью SmakShine?</h2>
        <p className="text-gray-600 mb-6">
          Мы ищем не просто игроков, а тех, кто готов творить вместе. Всё начинается с уважения.
        </p>
        <a
          href="/join"
          className="inline-block px-6 py-3 bg-rose-500 text-white font-medium rounded-xl hover:bg-rose-600 transition"
        >
          Присоединиться
        </a>
      </motion.div>
    </main>
  );
}