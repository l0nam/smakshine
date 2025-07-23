import Link from "next/link";
import { buttonVariants } from "../ui/button";

export const BeautyCard = () => {
  return (
    <>
      <section className="bg-radial-[at_50%_100%] from-amber-300 via-amber-500 to-amber-700 to-90% text-white py-12 sm:py-20 md:py-32 lg:py-40 xl:py-60 flex flex-col items-center container rounded-[10px]">
        <h1 className="mb-2 md:mb-4 font-bold text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-8xl text-center">
          Чего ты ждёшь?
        </h1>
        <p className="mb-4 md:mb-8 text-lg sm:text-2xl md:text-3xl text-center">
          Стань частью SmakShine уже сейчас!
        </p>
        <Link
          href="https://discord.com/invite/W9DzB68tMB"
          target="_blank"
          className={`bg-white text-black hover:bg-white/90 hover:text-black ${buttonVariants(
            { variant: "default" }
          )}`}
        >
          Присоединяйся к нам
        </Link>
      </section>
    </>
  );
};
