import { ReactNode } from "react";
import TopHeader from "./TopHeader";
import MainNav from "./MainNav";
import Footer from "./Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Layout = ({ children }: { children: ReactNode }) => (
  <div className="flex flex-col min-h-screen">
    <TopHeader />
    <MainNav />
    <main className="flex-1">{children}</main>
    <Footer />
    <WhatsAppButton />
  </div>
);

export default Layout;
