import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Resort Details",
  description: "Explore our resort accommodations and amenities",
};

export default function ResortLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { resort: string };
}) {
  return (
    <>
      <Header resort={params.resort} />
      {children}
      <Footer resort={params.resort} />
    </>
  );
} 