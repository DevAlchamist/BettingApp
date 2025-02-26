'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { HelpCircle, MessageCircle, Mail, Phone } from 'lucide-react';

const faqs = [
  {
    question: 'How do I deposit money?',
    answer:
      'You can deposit money using various payment methods including UPI, Net Banking, and Credit/Debit cards. Go to the Wallet section and click on "Deposit" to get started.',
  },
  {
    question: 'What is the minimum withdrawal amount?',
    answer:
      'The minimum withdrawal amount is ₹1,000. Withdrawals are processed within 24 hours and sent to your registered bank account or UPI ID.',
  },
  {
    question: 'How does the Aviator game work?',
    answer:
      'Aviator is a multiplier game where you bet and watch the multiplier increase. Cash out before the plane flies away to win. The longer you wait, the higher the potential winnings, but also the higher the risk.',
  },
  {
    question: 'Is my money safe?',
    answer:
      'Yes, we use industry-standard security measures to protect your funds. All transactions are encrypted and we maintain separate accounts for operational and player funds.',
  },
  {
    question: 'What happens if I lose my internet connection during a game?',
    answer:
      'Our system automatically protects your bets in case of disconnection. For Aviator, if you have auto-cashout enabled, it will still work. For other games, your bet will be processed based on the last confirmed action.',
  },
  {
    question: 'How do I verify game fairness?',
    answer:
      'Each game round has a unique hash that can be verified. Visit our Fair Play page to learn more about our provably fair system and how to verify results.',
  },
];

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold flex items-center justify-center gap-2">
            <HelpCircle className="w-10 h-10" />
            Help & Support
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get help with your account, games, or transactions
          </p>
        </div>

        {/* Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                Live Chat
              </CardTitle>
              <CardDescription>24/7 instant support</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full">Start Chat</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Email Support
              </CardTitle>
              <CardDescription>Response within 24 hours</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full">
                support@betmaster.com
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Phone Support
              </CardTitle>
              <CardDescription>Available 9 AM - 6 PM</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full">
                +1 (800) 123-4567
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Contact Form */}
        <Card>
          <CardHeader>
            <CardTitle>Send us a message</CardTitle>
            <CardDescription>
              Fill out the form below and we'll get back to you as soon as possible
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Name</label>
                  <Input placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input type="email" placeholder="your@email.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Subject</label>
                <Input placeholder="What's this about?" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Message</label>
                <Textarea
                  placeholder="Describe your issue in detail..."
                  className="min-h-[100px]"
                />
              </div>
              <Button className="w-full">Send Message</Button>
            </form>
          </CardContent>
        </Card>

        {/* FAQs */}
        <Card>
          <CardHeader>
            <CardTitle>Frequently Asked Questions</CardTitle>
            <CardDescription>
              Quick answers to common questions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}