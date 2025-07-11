"use client";

import Link from "next/link";
import React from "react";

type PlayLinkProps = {
  className?: string;
  text?: string;
  icon?: React.ReactNode;
};

export default function PlayLink({ className = "" , text, icon}: PlayLinkProps) {
  return (
    <Link
      href="/auth/discord/login"
      className={`flex items-center gap-3 px-4 py-2.5 rounded-[10px] select-none font-semibold bg-primary text-white ${className}`}
    >
      {icon}
      {text ?? "Играть"}
    </Link>
  );
}
