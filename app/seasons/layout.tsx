import "@/app/styles/mdx.css";

export default function SeasonsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="container my-24">{children}</div>;
}
