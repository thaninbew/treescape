import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Resort Details",
  description: "Explore our resort accommodations and amenities",
};

export default async function ResortLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ resort: string }>;
}) {
  const { resort } = await params;
  
  return (
    <>
      <Header resort={resort} />
      {children}
      <Footer resort={resort} />
    </>
  );
} 