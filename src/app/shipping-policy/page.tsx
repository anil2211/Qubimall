import { BreadcrumbJsonLd, WebPageJsonLd } from "@/components/JsonLd";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shipping Policy",
  description:
    "Learn about Qubimall's shipping policy including delivery timelines, shipping charges, and order tracking information.",
};

const ShippingPolicyPage = () => {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Shipping Policy", url: "/shipping-policy" },
        ]}
      />
      <WebPageJsonLd
        title="Shipping Policy | Qubimall"
        description="Qubimall shipping policy including delivery timelines, charges and tracking."
        url="/shipping-policy"
      />
      <div className="max-w-[900px] mx-auto pt-10 pb-20 px-default">
        <h1 className="text-center font-semibold text-3xl md:text-5xl">
          Shipping Policy
        </h1>

        <div className="mt-10 space-y-8">
          <section>
            <h2 className="font-semibold text-xl mb-2">Delivery Timeline</h2>
            <p className="text-muted-foreground leading-relaxed">
              We strive to process and ship all orders within 24-48 hours of
              placement. Estimated delivery times vary based on your location:
            </p>
            <ul className="mt-3 space-y-2 text-muted-foreground text-sm list-disc pl-5">
              <li>Metro cities: 2-4 business days</li>
              <li>Tier 2 cities: 3-6 business days</li>
              <li>Remote areas: 5-8 business days</li>
            </ul>
          </section>

          <section>
            <h2 className="font-semibold text-xl mb-2">Shipping Charges</h2>
            <p className="text-muted-foreground leading-relaxed">
              We offer free shipping on orders above ₹499. A nominal shipping
              fee of ₹49 is applicable on orders below this threshold.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-xl mb-2">Order Tracking</h2>
            <p className="text-muted-foreground leading-relaxed">
              Once your order is shipped, you will receive a tracking number
              via email and SMS. You can track your order status in real-time
              from your account dashboard under My Orders.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-xl mb-2">
              International Shipping
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Currently, we ship within India only. International shipping will
              be available soon.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-xl mb-2">
              Shipping Partners
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We partner with trusted logistics providers including Delhivery,
              Blue Dart, and India Post to ensure reliable and timely delivery
              of your orders.
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default ShippingPolicyPage;
