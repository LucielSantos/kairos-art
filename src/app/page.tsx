import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ChevronRight,
  Gift,
  Home,
  Mail,
  MapPin,
  Package,
  Phone,
  ShoppingBag,
} from "lucide-react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ProductsSection from "./components/ProductsSection";
import WhyChooseSection from "./components/WhyChooseSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import FooterSection from "./components/Footer";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex min-h-screen flex-col">
        <Header />

        <main className="flex-1">
          <HeroSection />

          <ProductsSection />

          <WhyChooseSection />

          <AboutSection />

          <ContactSection />
        </main>

        <FooterSection />
      </div>
    </div>
  );
}
