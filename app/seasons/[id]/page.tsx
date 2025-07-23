import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import fs from "fs";
import path from "path";
import { mdxComponents } from "@/mdx-components";
import { Metadata } from "next";
import { use } from "react";

export async function generateStaticParams() {
  const dir = path.join(process.cwd(), "content", "seasons");
  const files = await fs.promises.readdir(dir);
  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => ({ id: file.replace(/\.mdx$/, "") }));
}

export default async function SeasonPage({params}: {params: Promise<{ id: string }>}) {
  const { id } = use(params);
  const filePath = path.join(process.cwd(), "content", "seasons", `${id}.mdx`);

  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const mdxContent = await fs.promises.readFile(filePath, "utf8");

  return (
    <article className="prose mx-auto px-4 py-6">
      <MDXRemote source={mdxContent} components={mdxComponents} />
    </article>
  );
}