"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  AlertTriangle,
  ArrowRight,
  Banknote,
  CheckCircle2,
  Clock,
  FileText,
  Handshake,
  RefreshCw,
  ShieldCheck,
  Truck,
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const timelineSteps = [
  { icon: FileText, title: "Request Received", desc: "Customer submits refund request with details" },
  { icon: RefreshCw, title: "Verification", desc: "We verify the claim against your product records" },
  { icon: CheckCircle2, title: "Approval", desc: "Refund is approved or escalated for review" },
  { icon: Banknote, title: "Settlement", desc: "Amount settled after deducting applicable fees" },
];

const refundConditions = [
  { icon: Truck, title: "Damaged in Transit", desc: "Full refund if item arrived damaged due to packaging issues.", color: "text-red-500 bg-red-100 dark:bg-red-900/20" },
  { icon: RefreshCw, title: "Wrong Item Shipped", desc: "Full refund when incorrect product was dispatched.", color: "text-orange-500 bg-orange-100 dark:bg-orange-900/20" },
  { icon: CheckCircle2, title: "Defective Product", desc: "Full refund for manufacturing defects within 30 days.", color: "text-yellow-500 bg-yellow-100 dark:bg-yellow-900/20" },
  { icon: Handshake, title: "Customer Change of Mind", desc: "Partial refund (minus restocking fee) if returned unopened.", color: "text-blue-500 bg-blue-100 dark:bg-blue-900/20" },
];

const VendorRefundPoliciesPage = () => {
  return (
    <div className="pb-20">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600/10 via-background to-blue-600/5 pt-16 pb-12">
        <div className="max-w-[1100px] mx-auto px-default text-center">
          <motion.div {...fadeUp}>
            <span className="inline-flex items-center gap-2 text-sm font-medium text-primary bg-primary/10 rounded-full px-4 py-1.5 mb-4">
              <ShieldCheck className="w-4 h-4" /> Vendor Refund Policies
            </span>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Vendor Refund Policies{" "}
              <span className="inline-block animate-heartbeat">💼</span>
            </h1>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
              Understand your responsibilities, refund timelines, and settlement
              rules as a vendor on QubimallShop.
            </p>
            <Button size="lg" className="mt-8 gap-2" asChild>
              <a href="/contact"><FileText className="w-4 h-4" /> Contact Support</a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Policy Overview */}
      <section className="max-w-[1100px] mx-auto px-default mt-12">
        <motion.div {...fadeUp}>
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-2">
            Policy Overview 📋
          </h2>
          <p className="text-center text-muted-foreground mb-8">
            Key guidelines every vendor should know.
          </p>
        </motion.div>
        <div className="grid gap-6 sm:grid-cols-3">
          {[
            { title: "Vendor Responsibilities", items: ["Ensure accurate product descriptions", "Package items securely for transit", "Respond to refund requests within 48 hrs", "Maintain adequate stock levels"] },
            { title: "Refund Eligibility", items: ["Items must be returned within 30 days", "Products must be in original condition", "Custom/personalized items are exempt", "Proof of purchase is required"] },
            { title: "Return Handling", items: ["Vendor pays return shipping for defects", "Customer pays for change-of-mind returns", "Inspect returns within 3 business days", "Issue replacement or accept return"] },
          ].map((section, i) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4">{section.title}</h3>
                  <ul className="space-y-2">
                    {section.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Refund Process Timeline */}
      <section className="max-w-[1100px] mx-auto px-default mt-16">
        <motion.div {...fadeUp}>
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-2">
            Refund Process Timeline ⏳
          </h2>
          <p className="text-center text-muted-foreground mb-8">
            From request to settlement &mdash; here&apos;s how it works.
          </p>
        </motion.div>
        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2" />
          <div className="grid gap-6 md:grid-cols-4 relative">
            {timelineSteps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.15 }}
                className="relative"
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <step.icon className="w-7 h-7 text-primary" />
                    </div>
                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold mx-auto mb-3">
                      {i + 1}
                    </div>
                    <h3 className="font-semibold">{step.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{step.desc}</p>
                  </CardContent>
                </Card>
                {i < timelineSteps.length - 1 && (
                  <ArrowRight className="hidden md:block absolute top-1/2 -right-3 w-6 h-6 text-primary -translate-y-1/2 z-10" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Refund Conditions */}
      <section className="max-w-[1100px] mx-auto px-default mt-16">
        <motion.div {...fadeUp}>
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-2">
            Refund Conditions 🏷️
          </h2>
          <p className="text-center text-muted-foreground mb-8">
            Different scenarios and how they are handled.
          </p>
        </motion.div>
        <div className="grid gap-6 sm:grid-cols-2">
          {refundConditions.map((cond, i) => (
            <motion.div
              key={cond.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <Card className="h-full hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                <CardContent className="p-6 flex gap-4 items-start">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${cond.color}`}>
                    <cond.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{cond.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{cond.desc}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Settlement Rules */}
      <section className="max-w-[1100px] mx-auto px-default mt-16">
        <motion.div {...fadeUp}>
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-2">
            Settlement Rules 💰
          </h2>
          <p className="text-center text-muted-foreground mb-8">
            How refunds affect your payouts.
          </p>
        </motion.div>
        <div className="grid gap-6 sm:grid-cols-3">
          {[
            { icon: Clock, title: "Processing Timelines", desc: "Refunds are processed within 7-10 business days after the returned item is received and inspected.", color: "border-l-blue-500" },
            { icon: RefreshCw, title: "Commission Adjustments", desc: "Platform commissions on refunded orders will be reversed. No commission is charged on the refunded amount.", color: "border-l-orange-500" },
            { icon: Banknote, title: "Payment Reversals", desc: "Refund amounts are deducted from your next payout cycle. Chargebacks may incur additional fees.", color: "border-l-green-500" },
          ].map((rule, i) => (
            <motion.div
              key={rule.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <Card className={`h-full border-l-4 ${rule.color} hover:shadow-md transition-shadow`}>
                <CardContent className="p-6">
                  <rule.icon className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-semibold">{rule.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{rule.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Important Notes */}
      <section className="max-w-[1100px] mx-auto px-default mt-16">
        <motion.div {...fadeUp}>
          <Card className="border-yellow-200 dark:border-yellow-800 bg-yellow-50 dark:bg-yellow-950/20">
            <CardContent className="p-6 flex gap-4 items-start">
              <AlertTriangle className="w-6 h-6 text-yellow-600 shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg">Important Notes</h3>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  <li>• Refund policies may vary by product category. Review your category-specific agreement.</li>
                  <li>• Repeated refund requests on your products may affect your vendor rating and visibility.</li>
                  <li>• Fraudulent refund claims will be investigated and may result in account suspension.</li>
                  <li>• For disputes, you can escalate to our mediation team within 14 days of the refund decision.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </section>
    </div>
  );
};

export default VendorRefundPoliciesPage;
