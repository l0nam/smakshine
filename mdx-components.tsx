import Link from "next/link";
import Image from "next/image";
import React, { ComponentPropsWithoutRef } from "react";
import { highlight } from "sugar-high";
import { ComponentProps } from "react";

import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";

const Icon = ({
  name,
  ...props
}: { name: keyof typeof Icons } & React.SVGProps<SVGSVGElement>) => {
  const LucideIcon = Icons[name] as LucideIcon | undefined;
  if (!LucideIcon) {
    console.warn(`Icon "${name}" not found in lucide-react`);
    return null;
  }
  return <LucideIcon {...props} />;
};

type HeadingProps = ComponentPropsWithoutRef<"h1">;
type NextImageProps = ComponentProps<typeof Image>;
type ParagraphProps = ComponentPropsWithoutRef<"p">;
type ListProps = ComponentPropsWithoutRef<"ul">;
type ListItemProps = ComponentPropsWithoutRef<"li">;
type AnchorProps = ComponentPropsWithoutRef<"a">;
type BlockquoteProps = ComponentPropsWithoutRef<"blockquote">;

const components = {
  Image: (props: NextImageProps) => {
    const src = typeof props.src === "string" ? props.src : "";
    const height = props.height ?? 300;
    const width = props.width ?? 800;

    if (src) {
      return (
        <Image
          {...props}
          src={src}
          width={width}
          height={height}
          className={`my-3 object-cover ${props.className ?? ""}`}
          alt={props.alt ?? ""}
        />
      );
    }

    // Отображаем иконку по умолчанию, если src не указан
    return (
      <div className={`w-[${width}px] my-3 rounded-[10px] animate-pulse bg-accent/20 h-[${height}px]`} />
    );
  },
  Icon,
  h1: (props: HeadingProps) => (
    <h1 className="font-medium pt-12 mb-0 text-3xl" {...props} />
  ),
  h2: (props: HeadingProps) => (
    <h2 className="font-medium mt-8 mb-3 text-2xl" {...props} />
  ),
  h3: (props: HeadingProps) => (
    <h3 className="font-medium mt-8 mb-3 text-xl" {...props} />
  ),
  h4: (props: HeadingProps) => (
    <h4 className="font-medium text-lg" {...props} />
  ),
  p: (props: ParagraphProps) => <p className="leading-snug" {...props} />,
  ol: (props: ListProps) => (
    <ol className="list-decimal pl-5 space-y-2" {...props} />
  ),
  ul: (props: ListProps) => (
    <ul className="list-disc pl-5 space-y-1" {...props} />
  ),
  li: (props: ListItemProps) => <li className="pl-1" {...props} />,
  em: (props: ComponentPropsWithoutRef<"em">) => (
    <em className="font-medium" {...props} />
  ),
  strong: (props: ComponentPropsWithoutRef<"strong">) => (
    <strong className="font-medium" {...props} />
  ),
  a: ({ href, children, ...props }: AnchorProps) => {
    const className = "";
    if (href?.startsWith("/")) {
      return (
        <Link
          href={href}
          className={`${className} text-primary underline-offset-4 hover:underline`}
          {...props}
        >
          {children}
        </Link>
      );
    }
    if (href?.startsWith("#")) {
      return (
        <Link
          href={href}
          className={`${className} text-primary underline-offset-4 hover:underline`}
          {...props}
        >
          {children}
        </Link>
      );
    }
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${className} text-primary underline-offset-4 hover:underline`}
        {...props}
      >
        {children}
      </a>
    );
  },
  code: ({ children, ...props }: ComponentPropsWithoutRef<"code">) => {
    const codeHTML = highlight(children as string);
    return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
  },
  Table: ({ data }: { data: { headers: string[]; rows: string[][] } }) => (
    <table>
      <thead>
        <tr>
          {data.headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.rows.map((row, index) => (
          <tr key={index}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  ),
  blockquote: (props: BlockquoteProps) => (
    <blockquote
      className="ml-[0.075em] border-l-3 border-gray-300 pl-4 dark:border-zinc-600"
      {...props}
    />
  ),
};

declare global {
  type MDXProvidedComponents = typeof components;
}

export function useMDXComponents(): MDXProvidedComponents {
  return components;
}


export const mdxComponents = components;