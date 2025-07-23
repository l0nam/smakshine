"use client";
import { Marquee } from "@/components/ui/marquee";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Images = [
  "/images/seasons/image1.png",
  "/images/seasons/image1.png",
  "/images/seasons/image1.png",
  "/images/seasons/image1.png",
  "/images/seasons/image1.png",
  "/images/seasons/image1.png",
];

const ReviewCard = ({
  img,
  onClick,
}: {
  img: string;
  onClick: (img: string) => void;
}) => {
  return (
    <div
      className="relative w-[400px] h-[200px] cursor-pointer"
      onClick={() => onClick(img)}
    >
      <Image
        src={img}
        alt="Фото"
        fill
        className="object-cover rounded-[10px]"
      />
    </div>
  );
};

const firstRow = Images.slice(0, Images.length / 2);
const secondRow = Images.slice(Images.length / 2);

export function ImageSlider() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const closeModal = () => setSelectedImg(null);

  return (
    <section className="py-20">
      <div className="container text-center lg:text-left">
        <h1 className="text-5xl font-bold">А вот и наш сервер</h1>
        <p className="mt-2 text-foreground/80 text-lg font-medium">
          Здесь можно посмотреть скриншоты нашего прекрасного сервера
        </p>
      </div>

      <div className="relative mt-4 flex w-full flex-col items-center justify-center overflow-hidden">
        <Marquee pauseOnHover className="[--duration:40s]">
          {firstRow.map((image, index) => (
            <ReviewCard key={index} img={image} onClick={setSelectedImg} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:40s]">
          {secondRow.map((image, index) => (
            <ReviewCard key={index} img={image} onClick={setSelectedImg} />
          ))}
        </Marquee>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background lg:block hidden"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background lg:block hidden"></div>
      </div>

      {/* Модалка с изображением */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="relative w-auto max-w-4xl max-h-[90vh]"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImg}
                alt="Просмотр фото"
                width={1200}
                height={800}
                className="object-contain rounded-xl w-full h-auto max-h-[90vh]"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
