import { Header } from "@/components/header";

export default function InfoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <div className="pt-16">{children}</div>
    </>
  );
}
