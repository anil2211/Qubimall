import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policies",
  description:
    "Read how QubimallShop collects, uses, and protects your personal information.",
};

const PrivacyPoliciesPage = () => {
  return (
    <div className="max-w-[900px] mx-auto pt-10 pb-20 px-default">
      <h1 className="text-center font-semibold text-3xl md:text-5xl">
        Privacy Policies
      </h1>

      <div className="mt-10 space-y-8">
        <section>
          <h2 className="font-semibold text-xl mb-2">
            Information We Collect
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            When you register an account or place an order, we collect personal
            details such as your name, email address, shipping address, and
            payment information. We also gather browsing data through cookies to
            improve your shopping experience.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-xl mb-2">
            How We Use Your Information
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Your data is used to process orders, personalise your experience,
            send occasional updates (with your consent), and improve our
            platform. We never sell your personal information to third parties.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-xl mb-2">Data Protection</h2>
          <p className="text-muted-foreground leading-relaxed">
            We implement industry-standard security measures including SSL
            encryption, secure payment gateways, and regular security audits to
            safeguard your data against unauthorised access.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-xl mb-2">Your Rights</h2>
          <p className="text-muted-foreground leading-relaxed">
            You have the right to access, correct, or delete your personal data
            at any time. You can manage your preferences in your account
            settings or contact us at{" "}
            <a
              href="mailto:support@qubimall.com"
              className="text-primary hover:underline"
            >
              support@qubimall.com
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-xl mb-2">Policy Updates</h2>
          <p className="text-muted-foreground leading-relaxed">
            This policy may be updated periodically. Any changes will be posted
            on this page with a revised date. We encourage you to review this
            page regularly.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPoliciesPage;
