import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import fs from "fs";
import path from "path";
import { mdxComponents } from "@/mdx-components";
import { Metadata } from "next";

type Props = {
  params: {
    id: string;
  };
};

export async function generateStaticParams() {
  const dir = path.join(process.cwd(), "content", "seasons");
  const files = await fs.promises.readdir(dir);
  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => ({ id: file.replace(/\.mdx$/, "") }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: `Сезон ${params.id}`,
  };
}

export default async function SeasonPage({ params }: Props) {
  const { id } = params; // Удаляем await, так как params — это объект
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
