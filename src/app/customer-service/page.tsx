"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Headphones, Mail, MessageCircle, Ticket, Clock, Shield, Users, Zap } from "lucide-react";
import { useState } from "react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const supportOptions = [
  {
    icon: Headphones,
    title: "Phone Support",
    desc: "Speak directly with our team for urgent issues.",
    detail: "+91 9993371923",
    hours: "Mon-Sat, 9AM-8PM",
  },
  {
    icon: MessageCircle,
    title: "Live Chat",
    desc: "Chat with us in real-time for quick help.",
    detail: "Average response: 2 min",
    hours: "24/7 Live Chat",
  },
  {
    icon: Mail,
    title: "Email Support",
    desc: "Send us a message and we'll get back to you.",
    detail: "support@qubimall.com",
    hours: "Response within 24 hrs",
  },
  {
    icon: Ticket,
    title: "Support Tickets",
    desc: "Track your support requests easily.",
    detail: "Get priority assistance",
    hours: "24/7 Ticketing",
  },
];

const promises = [
  { icon: Zap, title: "Fast Response", desc: "We reply within 24 hours, usually much faster." },
  { icon: Shield, title: "Secure Communication", desc: "Your data is encrypted and protected." },
  { icon: Users, title: "Dedicated Team", desc: "Real people, not bots, ready to help you." },
];

const CustomerServicePage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="pb-20">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600/10 via-background to-blue-600/5 pt-16 pb-12">
        <div className="max-w-[1100px] mx-auto px-default text-center">
          <motion.div {...fadeUp}>
            <span className="inline-flex items-center gap-2 text-sm font-medium text-primary bg-primary/10 rounded-full px-4 py-1.5 mb-4">
              <Headphones className="w-4 h-4" /> 24/7 Customer Support
            </span>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Need Help? We&apos;re Here 24/7{" "}
              <span className="inline-block animate-heartbeat">🎧</span>
            </h1>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
              Our dedicated support team is ready to assist you with any questions,
              orders, or concerns. Reach out any time, any way.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Button size="lg" className="gap-2" asChild>
                <a href="tel:+919993371923"><Headphones className="w-4 h-4" /> Call Now</a>
              </Button>
              <Button size="lg" variant="outline" className="gap-2" asChild>
                <a href="mailto:support@qubimall.com"><Mail className="w-4 h-4" /> Email Us</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Support Options */}
      <section className="max-w-[1100px] mx-auto px-default mt-12">
        <motion.div {...fadeUp}>
          <h2 className="text-2xl md:text-3xl font-semibold text-center">
            Choose Your Support Channel 💬
          </h2>
          <p className="text-center text-muted-foreground mt-2 mb-8">
            Multiple ways to get the help you need.
          </p>
        </motion.div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {supportOptions.map((opt, i) => (
            <motion.div
              key={opt.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <opt.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-semibold text-lg mt-4">{opt.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{opt.desc}</p>
                  <p className="text-sm font-medium text-primary mt-3">{opt.detail}</p>
                  <p className="text-xs text-muted-foreground mt-1">{opt.hours}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Service Promise */}
      <section className="max-w-[1100px] mx-auto px-default mt-16">
        <motion.div {...fadeUp}>
          <h2 className="text-2xl md:text-3xl font-semibold text-center">
            Our Service Promise 🤝
          </h2>
          <p className="text-center text-muted-foreground mt-2 mb-8">
            Why customers love our support team.
          </p>
        </motion.div>
        <div className="grid gap-6 sm:grid-cols-3">
          {promises.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardContent className="p-6 flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <p.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{p.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{p.desc}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className="max-w-[900px] mx-auto px-default mt-16">
        <motion.div {...fadeUp}>
          <h2 className="text-2xl md:text-3xl font-semibold text-center">
            Send Us a Message ✉️
          </h2>
          <p className="text-center text-muted-foreground mt-2 mb-8">
            Fill out the form and we&apos;ll get back to you within 24 hours.
          </p>
        </motion.div>
        <Card>
          <CardContent className="p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="cs-name" className="text-sm font-medium mb-1.5 block">Full Name</label>
                  <Input id="cs-name" placeholder="John Doe" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
                </div>
                <div>
                  <label htmlFor="cs-email" className="text-sm font-medium mb-1.5 block">Email Address</label>
                  <Input id="cs-email" type="email" placeholder="john@example.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
                </div>
              </div>
              <div>
                <label htmlFor="cs-subject" className="text-sm font-medium mb-1.5 block">Subject</label>
                <Input id="cs-subject" placeholder="How can we help?" value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} required />
              </div>
              <div>
                <label htmlFor="cs-message" className="text-sm font-medium mb-1.5 block">Message</label>
                <Textarea id="cs-message" rows={5} placeholder="Describe your issue in detail..." value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} required />
              </div>
              <Button type="submit" size="lg" className="w-full sm:w-auto gap-2">
                <Mail className="w-4 h-4" /> Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default CustomerServicePage;
