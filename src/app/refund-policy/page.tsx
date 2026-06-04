import { BreadcrumbJsonLd, WebPageJsonLd } from "@/components/JsonLd";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy",
  description:
    "Qubimall's refund and return policy. Learn about eligibility, timelines, and the refund process.",
};

const RefundPolicyPage = () => {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Refund Policy", url: "/refund-policy" },
        ]}
      />
      <WebPageJsonLd
        title="Refund Policy | Qubimall"
        description="Qubimall refund and return policy."
        url="/refund-policy"
      />
      <div className="max-w-[900px] mx-auto pt-10 pb-20 px-default">
        <h1 className="text-center font-semibold text-3xl md:text-5xl">
          Refund Policy
        </h1>

        <div className="mt-10 space-y-8">
          <section>
            <h2 className="font-semibold text-xl mb-2">Return Eligibility</h2>
            <p className="text-muted-foreground leading-relaxed">
              Items can be returned within 30 days of delivery if they are
              unused, in original packaging, and in the same condition as
              received. The following items are eligible:
            </p>
            <ul className="mt-3 space-y-1 text-muted-foreground text-sm list-disc pl-5">
              <li>Damaged or defective products</li>
              <li>Wrong item shipped</li>
              <li>Incomplete orders</li>
            </ul>
          </section>

          <section>
            <h2 className="font-semibold text-xl mb-2">
              Non-Returnable Items
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              The following items cannot be returned:
            </p>
            <ul className="mt-3 space-y-1 text-muted-foreground text-sm list-disc pl-5">
              <li>Digital products and software</li>
              <li>Personalized or custom-made items</li>
              <li>Perishable goods</li>
              <li>Gift cards</li>
            </ul>
          </section>

          <section>
            <h2 className="font-semibold text-xl mb-2">
              Refund Process
            </h2>
            <ol className="mt-3 space-y-2 text-muted-foreground text-sm list-decimal pl-5">
              <li>Submit a refund request from your account orders page</li>
              <li>Our team reviews your request within 48 hours</li>
              <li>If approved, you will receive return shipping instructions</li>
              <li>Once the item is received and inspected, your refund is processed</li>
            </ol>
          </section>

          <section>
            <h2 className="font-semibold text-xl mb-2">Refund Timeline</h2>
            <p className="text-muted-foreground leading-relaxed">
              Refunds are processed within 7-10 business days after we receive
              and inspect your return. The amount will be credited to your
              original payment method.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-xl mb-2">Shipping Costs</h2>
            <p className="text-muted-foreground leading-relaxed">
              We cover return shipping costs for damaged or incorrect items.
              For change-of-mind returns, the return shipping cost will be
              deducted from the refund amount.
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default RefundPolicyPage;
