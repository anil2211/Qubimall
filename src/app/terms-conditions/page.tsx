import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Review the terms and conditions governing the use of QubimallShop.",
};

const TermsConditionsPage = () => {
  return (
    <div className="max-w-[900px] mx-auto pt-10 pb-20 px-default">
      <h1 className="text-center font-semibold text-3xl md:text-5xl">
        Terms & Conditions
      </h1>

      <div className="mt-10 space-y-8">
        <section>
          <h2 className="font-semibold text-xl mb-2">Acceptance of Terms</h2>
          <p className="text-muted-foreground leading-relaxed">
            By accessing or using QubimallShop, you agree to be bound by these
            terms. If you do not agree with any part, you should not use our
            services.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-xl mb-2">Account Registration</h2>
          <p className="text-muted-foreground leading-relaxed">
            You are responsible for maintaining the confidentiality of your
            account credentials and for all activities under your account.
            You must provide accurate and complete information during
            registration.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-xl mb-2">Orders & Payments</h2>
          <p className="text-muted-foreground leading-relaxed">
            All orders are subject to availability and confirmation. We reserve
            the right to cancel any order due to pricing errors, stock
            unavailability, or suspected fraud. Payments are processed securely
            through trusted third-party gateways.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-xl mb-2">
            Shipping & Returns
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Estimated delivery times are provided at checkout. Returns are
            accepted within 30 days of delivery for unused items in original
            packaging. Custom and perishable items are non-returnable.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-xl mb-2">
            Intellectual Property
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            All content on this platform — including logos, images, text, and
            software — is the property of QubimallShop or its licensors and
            may not be reproduced without written permission.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-xl mb-2">
            Limitation of Liability
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            QubimallShop shall not be liable for any indirect, incidental, or
            consequential damages arising from the use of our platform or
            products.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-xl mb-2">Contact</h2>
          <p className="text-muted-foreground leading-relaxed">
            For any questions regarding these terms, reach out to us at{" "}
            <a
              href="mailto:support@qubimall.com"
              className="text-primary hover:underline"
            >
              support@qubimall.com
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsConditionsPage;
