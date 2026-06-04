"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import {
  ArrowDown,
  Banknote,
  CheckCircle2,
  Clock,
  FileText,
  Headphones,
  RefreshCw,
  Search,
  ShoppingBag,
  Truck,
  XCircle,
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const eligibleItems = [
  { icon: CheckCircle2, title: "Damaged Products", desc: "Item arrived broken or damaged due to inadequate packaging." },
  { icon: CheckCircle2, title: "Wrong Item Received", desc: "You received a different product than what you ordered." },
  { icon: CheckCircle2, title: "Defective Items", desc: "Product has manufacturing defects or does not function as advertised." },
  { icon: CheckCircle2, title: "Incomplete Order", desc: "Missing items from your shipment." },
];

const nonEligibleItems = [
  { icon: XCircle, title: "Digital Products", desc: "Software, e-books, and downloadable content." },
  { icon: XCircle, title: "Personalized Items", desc: "Custom-made or engraved products." },
  { icon: XCircle, title: "Perishable Goods", desc: "Food items, flowers, and other perishables." },
  { icon: XCircle, title: "Gift Cards", desc: "Purchased gift cards and store credit vouchers." },
];

const workflowSteps = [
  { icon: ShoppingBag, title: "Purchase", desc: "You place an order on QubimallShop" },
  { icon: FileText, title: "Refund Request", desc: "Submit a refund request from your orders page" },
  { icon: RefreshCw, title: "Review", desc: "Our team reviews your request within 48 hours" },
  { icon: CheckCircle2, title: "Approval", desc: "Request approved and return instructions sent" },
  { icon: Clock, title: "Money Returned", desc: "Refund credited to your account within 7-10 days" },
];

const faqRefund = [
  { q: "How long does it take to get my refund?", a: "Once we receive your return, refunds are processed within 7-10 business days. The amount is credited to your original payment method." },
  { q: "Can I exchange an item instead of refund?", a: "Yes! You can request an exchange for a different size or color. If the item is out of stock, we'll issue a full refund." },
  { q: "Who pays the return shipping?", a: "We cover return shipping for damaged or incorrect items. For change-of-mind returns, the shipping cost is deducted from your refund." },
  { q: "What if my refund is delayed?", a: "If it's been more than 14 business days, please contact our support team at support@qubimall.com and we'll investigate immediately." },
];

const CustomerRefundPoliciesPage = () => {
  return (
    <div className="pb-20">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600/10 via-background to-blue-600/5 pt-16 pb-12">
        <div className="max-w-[1100px] mx-auto px-default text-center">
          <motion.div {...fadeUp}>
            <span className="inline-flex items-center gap-2 text-sm font-medium text-primary bg-primary/10 rounded-full px-4 py-1.5 mb-4">
              <RefreshCw className="w-4 h-4" /> Customer Refund Policies
            </span>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Hassle-Free Refunds{" "}
              <span className="inline-block animate-heartbeat">🛍️</span>
            </h1>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
              We want you to love what you ordered. If something isn&apos;t right,
              we&apos;ll make it right. Here&apos;s everything you need to know about
              refunds.
            </p>
            <Button size="lg" className="mt-8 gap-2" asChild>
              <a href="/contact"><Headphones className="w-4 h-4" /> Need Help?</a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Refund Eligibility */}
      <section className="max-w-[1100px] mx-auto px-default mt-12">
        <motion.div {...fadeUp}>
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-2">
            You Can Get a Refund For ✅
          </h2>
          <p className="text-center text-muted-foreground mb-8">
            We gladly accept returns in these situations.
          </p>
        </motion.div>
        <div className="grid gap-6 sm:grid-cols-2">
          {eligibleItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <Card className="h-full border-l-4 border-l-green-500 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                <CardContent className="p-6 flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Non-Refundable Items */}
      <section className="max-w-[1100px] mx-auto px-default mt-12">
        <motion.div {...fadeUp}>
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-2">
            Non-Refundable Items ❌
          </h2>
          <p className="text-center text-muted-foreground mb-8">
            Unfortunately, these items cannot be returned.
          </p>
        </motion.div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {nonEligibleItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <Card className="h-full border-destructive/20 hover:shadow-md transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center mx-auto mb-3">
                    <item.icon className="w-6 h-6 text-destructive" />
                  </div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Refund Workflow Stepper */}
      <section className="max-w-[1100px] mx-auto px-default mt-16">
        <motion.div {...fadeUp}>
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-2">
            How Refunds Work 🔄
          </h2>
          <p className="text-center text-muted-foreground mb-8">
            Simple steps from purchase to your money back.
          </p>
        </motion.div>
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border hidden md:block" />
          <div className="space-y-8">
            {workflowSteps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.15 }}
                className="relative flex gap-6 items-start"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 relative z-10">
                  <step.icon className="w-5 h-5 text-primary" />
                </div>
                <Card className="flex-1 hover:shadow-md transition-shadow">
                  <CardContent className="p-5">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="w-6 h-6 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
                        {i + 1}
                      </span>
                      <h3 className="font-semibold">{step.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground ml-9">{step.desc}</p>
                  </CardContent>
                </Card>
                {i < workflowSteps.length - 1 && (
                  <ArrowDown className="hidden md:block absolute -bottom-[22px] left-[18px] w-5 h-5 text-muted-foreground z-10" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Refund Timeline */}
      <section className="max-w-[1100px] mx-auto px-default mt-16">
        <motion.div {...fadeUp}>
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-2">
            Refund Timeline 📅
          </h2>
          <p className="text-center text-muted-foreground mb-8">
            How long each step takes.
          </p>
        </motion.div>
        <div className="grid gap-4 sm:grid-cols-4">
          {[
            { label: "Request Processing", time: "24-48 hrs", icon: Clock, color: "bg-blue-500" },
            { label: "Return Shipping", time: "3-7 days", icon: Truck, color: "bg-orange-500" },
            { label: "Inspection", time: "2-3 days", icon: Search, color: "bg-yellow-500" },
            { label: "Refund Issued", time: "3-5 days", icon: Banknote, color: "bg-green-500" },
          ].map((t, i) => (
            <motion.div
              key={t.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <Card className="text-center hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className={`w-12 h-12 rounded-full ${t.color}/10 flex items-center justify-center mx-auto mb-3`}>
                    <t.icon className={`w-6 h-6 ${t.color.replace('bg-', 'text-')}`} />
                  </div>
                  <h3 className="font-semibold text-sm">{t.label}</h3>
                  <p className="text-2xl font-bold text-primary mt-1">{t.time}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-[900px] mx-auto px-default mt-16">
        <motion.div {...fadeUp}>
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-2">
            Refund FAQ ❓
          </h2>
          <p className="text-center text-muted-foreground mb-8">
            Common questions about refunds.
          </p>
        </motion.div>
        <Card>
          <CardContent className="p-6">
            <Accordion type="single" collapsible className="w-full">
              {faqRefund.map((item, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger className="text-left font-medium hover:no-underline hover:text-primary transition-colors">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default CustomerRefundPoliciesPage;
