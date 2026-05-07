import { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyContact from "@/components/StickyContact";
import BottomNav from "@/components/BottomNav";

type PageLayoutProps = {
  children: ReactNode;
};

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className="min-h-screen bg-background pb-16 sm:pb-0 flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <StickyContact />
      <BottomNav />
    </div>
  );
};

export default PageLayout;
