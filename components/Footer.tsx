"use client";

import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-muted/20 border-t border-muted">
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Левая часть */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold text-foreground">SmakShine</h2>
          <p className="text-sm text-muted-foreground">
            © 2022-{new Date().getFullYear()} Все права защищены
          </p>
        </div>

        {/* Навигация */}
        <nav className="flex gap-6 text-sm font-medium">
          <Link href="/about" className="hover:text-primary transition-colors">
            О нас
          </Link>
          <Link href="/rules" className="hover:text-primary transition-colors">
            Правила
          </Link>
          <Link
            href="/support"
            className="hover:text-primary transition-colors"
          >
            Поддержка
          </Link>
        </nav>

        {/* Соцсети */}
        <div className="flex gap-4">
          <Link href="https://youtube.com" target="_blank" aria-label="YouTube">
            <Youtube className="w-5 h-5 hover:text-red-600 transition-colors" />
          </Link>
          <Link
            href="https://instagram.com"
            target="_blank"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5 hover:text-pink-500 transition-colors" />
          </Link>
          <Link
            href="https://twitter.com"
            target="_blank"
            aria-label="Twitter"
          >
            <Twitter className="w-5 h-5 hover:text-sky-500 transition-colors" />
          </Link>
          <Link
            href="https://facebook.com"
            target="_blank"
            aria-label="Facebook"
          >
            <Facebook className="w-5 h-5 hover:text-blue-600 transition-colors" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
