"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import {
  BookOpen,
  Camera,
  ChevronDown,
  Headphones,
  HelpCircle,
  Search,
  Shield,
  Users,
  Video,
} from "lucide-react";
import { useState } from "react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const faqCategories = [
  {
    id: "account",
    label: "Account & Login",
    icon: "🔐",
    questions: [
      { q: "How do I reset my password?", a: "Go to the login page and click 'Forgot Password'. Enter your registered email and we'll send you a reset link. Follow the instructions to create a new password." },
      { q: "How can I update my profile?", a: "Log into your account, navigate to the Profile page, and click 'Edit Profile'. You can update your name, email, phone number, and shipping address there." },
      { q: "Can I delete my account?", a: "Yes, contact our support team at support@qubimall.com with your account details, and we'll process the deletion within 48 hours." },
    ],
  },
  {
    id: "orders",
    label: "Orders",
    icon: "📦",
    questions: [
      { q: "How can I track my order?", a: "Once your order ships, you'll receive a tracking number via email. You can also check order status in your account under 'My Orders'." },
      { q: "Can I cancel my order?", a: "Orders can be cancelled within 1 hour of placement. After that, the order is processed and you'll need to request a return once received." },
      { q: "What if my order arrives damaged?", a: "We're sorry about that! Please contact us within 48 hours with photos of the damage, and we'll arrange a replacement or full refund." },
    ],
  },
  {
    id: "payments",
    label: "Payments",
    icon: "💳",
    questions: [
      { q: "What payment methods do you accept?", a: "We accept Visa, Mastercard, UPI, Net Banking, and Cash on Delivery (available in select areas)." },
      { q: "What if my payment fails?", a: "If your payment fails, check that your card details are correct and you have sufficient funds. You can retry or choose a different payment method." },
      { q: "Is my payment information secure?", a: "Absolutely. We use industry-standard SSL encryption and partner with PCI-compliant payment gateways to ensure your data is safe." },
    ],
  },
  {
    id: "refunds",
    label: "Refunds",
    icon: "🔄",
    questions: [
      { q: "How long do refunds take?", a: "Refunds are processed within 7-10 business days after we receive and inspect your return. The amount will be credited to your original payment method." },
      { q: "Am I eligible for a refund?", a: "Items must be unused, in original packaging, and returned within 30 days of delivery. Certain items like digital products are non-refundable." },
      { q: "How do I request a refund?", a: "Log into your account, go to 'My Orders', select the item, and click 'Request Refund'. Fill out the reason and submit." },
    ],
  },
  {
    id: "vendors",
    label: "Vendors",
    icon: "🏪",
    questions: [
      { q: "How do I register as a vendor?", a: "Click 'Become a Vendor' at the bottom of our homepage, fill out the application form, and our team will review it within 3-5 business days." },
      { q: "When do vendors get paid?", a: "Vendor payouts are processed on a bi-weekly basis. You'll receive a statement and payment for completed orders from the previous period." },
    ],
  },
];

const popularQuestions = [
  { q: "What is your return policy?", category: "Refunds" },
  { q: "How do I track my order?", category: "Orders" },
  { q: "How do I reset my password?", category: "Account" },
  { q: "What payment methods do you accept?", category: "Payments" },
];

const resources = [
  { icon: Video, title: "Video Guides", desc: "Watch step-by-step tutorials", href: "#" },
  { icon: BookOpen, title: "Documentation", desc: "Read detailed guides", href: "#" },
  { icon: Users, title: "Community Forum", desc: "Ask the community", href: "#" },
];

const FAQPage = () => {
  const [search, setSearch] = useState("");

  const filtered = faqCategories
    .map((cat) => ({
      ...cat,
      questions: cat.questions.filter(
        (qa) =>
          qa.q.toLowerCase().includes(search.toLowerCase()) ||
          qa.a.toLowerCase().includes(search.toLowerCase())
      ),
    }))
    .filter((cat) => cat.questions.length > 0);

  return (
    <div className="pb-20">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600/10 via-background to-blue-600/5 pt-16 pb-12">
        <div className="max-w-[1100px] mx-auto px-default text-center">
          <motion.div {...fadeUp}>
            <span className="inline-flex items-center gap-2 text-sm font-medium text-primary bg-primary/10 rounded-full px-4 py-1.5 mb-4">
              <HelpCircle className="w-4 h-4" /> Help Center
            </span>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Frequently Asked Questions{" "}
              <span className="inline-block animate-heartbeat">❓</span>
            </h1>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
              Find answers to common questions. Can&apos;t find what you&apos;re
              looking for? Our support team is just a click away.
            </p>
            <div className="relative max-w-xl mx-auto mt-8">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Search FAQs..."
                className="pl-12 h-12 text-base"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Accordions */}
      <section className="max-w-[900px] mx-auto px-default mt-12">
        {!search && (
          <motion.div {...fadeUp}>
            <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8">
              Browse by Topic 📂
            </h2>
          </motion.div>
        )}

        <div className="space-y-6">
          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground py-12">
              No results found for &quot;{search}&quot;. Try a different keyword.
            </p>
          )}
          {filtered.map((cat, ci) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: ci * 0.05 }}
            >
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-xl mb-4 flex items-center gap-2">
                    <span>{cat.icon}</span> {cat.label}
                  </h3>
                  <Accordion type="single" collapsible className="w-full">
                    {cat.questions.map((qa, qi) => (
                      <AccordionItem key={qi} value={`${cat.id}-${qi}`}>
                        <AccordionTrigger className="text-left text-base font-medium hover:no-underline hover:text-primary transition-colors">
                          {qa.q}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground leading-relaxed">
                          {qa.a}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Popular Questions */}
      {!search && (
        <section className="max-w-[900px] mx-auto px-default mt-16">
          <motion.div {...fadeUp}>
            <h2 className="text-2xl md:text-3xl font-semibold text-center mb-2">
              Popular Questions 🔥
            </h2>
            <p className="text-center text-muted-foreground mb-8">
              Quick answers to our most asked questions.
            </p>
          </motion.div>
          <div className="grid gap-4 sm:grid-cols-2">
            {popularQuestions.map((pq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                <Card className="hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 cursor-pointer">
                  <CardContent className="p-5 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <HelpCircle className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">{pq.q}</p>
                      <span className="text-xs text-primary">{pq.category}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* Help Resources */}
      {!search && (
        <section className="max-w-[1100px] mx-auto px-default mt-16">
          <motion.div {...fadeUp}>
            <h2 className="text-2xl md:text-3xl font-semibold text-center mb-2">
              Help Resources 📚
            </h2>
            <p className="text-center text-muted-foreground mb-8">
              Explore more ways to get the help you need.
            </p>
          </motion.div>
          <div className="grid gap-6 sm:grid-cols-3">
            {resources.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <r.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="font-semibold text-lg mt-4">{r.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{r.desc}</p>
                    <Button variant="outline" size="sm" className="mt-4 gap-2" asChild>
                      <a href={r.href}>Explore <ChevronDown className="w-3 h-3 rotate-[-90deg]" /></a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* Still Need Help */}
      {!search && (
        <section className="max-w-[900px] mx-auto px-default mt-16">
          <motion.div {...fadeUp}>
            <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
              <CardContent className="p-8 text-center">
                <Headphones className="w-12 h-12 text-primary mx-auto" />
                <h2 className="text-2xl font-semibold mt-4">Still Need Help? 🎧</h2>
                <p className="text-muted-foreground mt-2 max-w-md mx-auto">
                  Our support team is ready to assist you with any questions.
                </p>
                <div className="flex flex-wrap justify-center gap-4 mt-6">
                  <Button asChild>
                    <a href="/contact">Contact Us</a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href="/customer-service">Customer Service</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </section>
      )}
    </div>
  );
};

export default FAQPage;
