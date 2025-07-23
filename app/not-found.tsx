import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Ghost } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-background text-foreground transition-colors duration-300">
      <div className="text-center max-w-md p-6">
        <Ghost className="w-16 h-16 text-muted-foreground animate-pulse mx-auto mb-6" />
        <h1 className="text-3xl font-bold mb-2">404 — Страница не найдена</h1>
        <p className="text-muted-foreground mb-6">
          Возможно, вы ввели неправильный адрес или страница была удалена.
        </p>
        <Link className={buttonVariants({ variant: "primary" })} href="/">
          Вернуться на главную
        </Link>
      </div>
    </main>
  );
}
