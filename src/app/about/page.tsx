import { BreadcrumbJsonLd, OrganizationJsonLd, WebPageJsonLd } from "@/components/JsonLd";
import { Metadata } from "next";
import { Shield, ShoppingBag, Truck, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Qubimall - a modern e-commerce platform built with Next.js and secure cloud infrastructure. We prioritize user privacy, secure browsing, and transparent shopping experiences.",
  openGraph: {
    title: "About Qubimall",
    description:
      "Learn about Qubimall - a modern e-commerce platform built with Next.js and secure cloud infrastructure.",
  },
};

const AboutPage = () => {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "About Us", url: "/about" },
        ]}
      />
      <OrganizationJsonLd />
      <WebPageJsonLd
        title="About Qubimall"
        description="Learn about Qubimall - a modern e-commerce platform."
        url="/about"
      />

      <div className="pb-20">
        <section className="bg-gradient-to-br from-blue-600/10 via-background to-blue-600/5 pt-16 pb-12">
          <div className="max-w-[900px] mx-auto px-default text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              About Qubimall
            </h1>
            <p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">
              Qubimall is a modern e-commerce platform built with Next.js and
              secure cloud infrastructure. We prioritize user privacy, secure
              browsing, and transparent shopping experiences.
            </p>
          </div>
        </section>

        <section className="max-w-[1100px] mx-auto px-default mt-12">
          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
              <p className="text-muted-foreground leading-relaxed">
                Founded with a vision to make online shopping accessible,
                secure, and enjoyable for everyone, Qubimall brings together a
                curated selection of products across fashion, electronics, home
                decor, beauty, books, groceries, and more.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                We partner with trusted manufacturers and vendors to ensure
                every product meets our quality standards. From the latest
                gadgets to everyday essentials, we strive to offer the best
                value to our customers.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To provide a seamless, secure, and delightful shopping
                experience that empowers customers to find exactly what they
                need, when they need it.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                We are committed to transparency, data privacy, and building a
                platform that our users can trust.
              </p>
            </div>
          </div>
        </section>

        <section className="max-w-[1100px] mx-auto px-default mt-16">
          <h2 className="text-2xl font-semibold text-center mb-8">
            Why Choose Qubimall?
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: ShoppingBag, title: "Curated Products", desc: "Handpicked quality items across multiple categories." },
              { icon: Shield, title: "Secure Shopping", desc: "SSL encrypted checkout with multiple payment options." },
              { icon: Truck, title: "Fast Delivery", desc: "Reliable shipping partners for timely delivery." },
              { icon: Users, title: "24/7 Support", desc: "Dedicated customer service team ready to help." },
            ].map((item) => (
              <div key={item.title} className="border rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-[900px] mx-auto px-default mt-16">
          <div className="border rounded-lg p-8 bg-muted/30">
            <h2 className="text-2xl font-semibold mb-4">Trust & Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              Qubimall is built on modern, secure infrastructure. We use
              industry-standard encryption, secure payment gateways, and follow
              best practices for data protection. Your privacy and security are
              our top priorities.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>✓ SSL/TLS encrypted connections</li>
              <li>✓ Secure payment processing</li>
              <li>✓ GDPR-compliant data practices</li>
              <li>✓ Regular security audits</li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPage;
