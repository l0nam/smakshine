import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import fs from "fs";
import path from "path";

import { useMDXComponents } from "@/mdx-components"; // ⬅️ подключаем твои компоненты

export async function generateStaticParams() {
  const dir = path.join(process.cwd(), "content", "seasons");
  const files = await fs.promises.readdir(dir);
  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => ({ id: file.replace(/\.mdx$/, "") }));
}

export default async function SeasonPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const filePath = path.join(process.cwd(), "content", "seasons", `${id}.mdx`);

  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const mdxContent = await fs.promises.readFile(filePath, "utf8");
  const components = useMDXComponents();

  return (
    <article className="prose mx-auto px-4 py-6">
      <MDXRemote source={mdxContent} components={components} />
    </article>
  );
}
