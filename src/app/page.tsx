import { OrganizationJsonLd, WebSiteJsonLd, WebPageJsonLd } from "@/components/JsonLd";
import BannerSlider from "@/components/BannerSlider";
import BekaryCategories from "@/components/BekaryCategories";
import BooksCategory from "@/components/BooksCategory";
import FeaturedProducts from "@/components/FeaturedProducts";
import ShopCategories from "@/components/ShopCategories";
import HeroSlider from "@/components/heros/HeroSlider";
import { Shield, Truck, RotateCcw, Clock } from "lucide-react";

const heroImages = [
  {
    bgImg: "/heroImages/clothing1.png",
  },
  {
    bgImg: "/heroImages/gadget1.png",
  },
  {
    bgImg: "/heroImages/makeup2.png",
  },
  {
    bgImg: "/heroImages/furniture1.png",
  },
  {
    bgImg: "/heroImages/clothing2.png",
  },
  {
    bgImg: "/heroImages/book1.png",
  },
  {
    bgImg: "/heroImages/clothing3.png",
  },
  {
    bgImg: "/heroImages/grocery.png",
  },
];

const banners = [
  {
    img: "/bannerImages/banner1.png",
  },
  {
    img: "/bannerImages/banner2.png",
  },
  {
    img: "/bannerImages/banner3.png",
  },
  {
    img: "/bannerImages/banner4.png",
  },
  {
    img: "/bannerImages/banner5.png",
  },
];

const trustFeatures = [
  { icon: Shield, title: "Secure Payments", desc: "SSL encrypted checkout with multiple payment options including UPI, cards & net banking." },
  { icon: Truck, title: "Fast Delivery", desc: "Free shipping on orders above ₹499. Track your order in real-time." },
  { icon: RotateCcw, title: "Easy Returns", desc: "30-day hassle-free return policy. Refund processed within 7-10 business days." },
  { icon: Clock, title: "24/7 Support", desc: "Our dedicated support team is always ready to help you." },
];

export default function Home({
  searchParams,
}: {
  searchParams: {
    featured: string;
  };
}) {
  return (
    <main>
      <OrganizationJsonLd />
      <WebSiteJsonLd />
      <WebPageJsonLd
        title="Qubimall - Your One-Stop Shopping Destination"
        description="Shop the latest trends in fashion, electronics, home decor, beauty, books, groceries and more."
      />
      <HeroSlider heroImages={heroImages} />
      <BannerSlider bannerImages={banners} />
      <ShopCategories />
      <BooksCategory />
      <BekaryCategories />

      <section className="container py-16">
        <h2 className="text-3xl font-bold text-center mb-10">
          Why Shop at Qubimall?
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trustFeatures.map((feature) => (
            <div key={feature.title} className="border rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-lg">{feature.title}</h3>
              <p className="text-muted-foreground text-sm mt-2">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <FeaturedProducts featured={searchParams.featured} />
    </main>
  );
}
