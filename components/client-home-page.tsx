"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BedIcon, UtensilsIcon, MessageSquareIcon, CalendarIcon } from "lucide-react"
import { ParallaxBackground } from "@/components/parallax-background"
import { AnimatedCounter } from "@/components/animated-counter"
import { Testimonial } from "@/components/testimonial"
import { FAQ } from "@/components/faq"
import { NewsletterSignup } from "@/components/newsletter-signup"

export function ClientHomePage() {
  const features = [
    { icon: BedIcon, title: "Room Booking", description: "Easily book and manage your hostel room online." },
    { icon: UtensilsIcon, title: "Mess Management", description: "View daily menus and provide feedback on meals." },
    {
      icon: MessageSquareIcon,
      title: "Complaint System",
      description: "Raise and track maintenance requests effortlessly.",
    },
    {
      icon: CalendarIcon,
      title: "Events & Announcements",
      description: "Stay updated with hostel events and important notices.",
    },
  ]

  const testimonials = [
    { quote: "This system has made my hostel life so much easier!", author: "Alex Johnson", role: "Student" },
    { quote: "The room booking feature is a game-changer.", author: "Emily Chen", role: "Student" },
    { quote: "Managing complaints has never been this efficient.", author: "Mark Wilson", role: "Hostel Manager" },
  ]

  const faqQuestions = [
    {
      question: "How do I book a room?",
      answer: "You can book a room through the 'Room Booking' section in your dashboard after logging in.",
    },
    {
      question: "Can I change my meal preferences?",
      answer: "Yes, you can update your meal preferences in the 'Mess Management' section of your account.",
    },
    {
      question: "How long does it take to resolve a complaint?",
      answer: "We aim to resolve all complaints within 48 hours of submission.",
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col min-h-screen"
    >
      <ParallaxBackground />
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center space-y-4 text-center"
          >
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Welcome to Your Hostel Management System
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Manage your hostel life with ease. Book rooms, check mess menus, and stay updated with announcements.
            </p>
            <div className="space-x-4">
              <Button asChild>
                <Link href="/login">Login</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/signup">Sign Up</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">Our Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <feature.icon className="w-8 h-8 mb-2 text-primary" />
                    <CardTitle>{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-bold mb-2">
                <AnimatedCounter from={0} to={1000} />+
              </h3>
              <p className="text-xl text-muted-foreground">Students Served</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2">
                <AnimatedCounter from={0} to={50} />+
              </h3>
              <p className="text-xl text-muted-foreground">Hostels Managed</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2">
                <AnimatedCounter from={0} to={95} />%
              </h3>
              <p className="text-xl text-muted-foreground">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Testimonial key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">
            Frequently Asked Questions
          </h2>
          <FAQ questions={faqQuestions} />
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Get Started?</h2>
            <p className="mx-auto max-w-[600px] text-primary-foreground/80 md:text-xl">
              Join our community of students and hostel managers. Sign up now and experience the ease of modern hostel
              management.
            </p>
            <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
              <Link href="/signup">Sign Up Now</Link>
            </Button>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Stay Updated</h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
              Subscribe to our newsletter for the latest updates and features.
            </p>
            <NewsletterSignup />
          </div>
        </div>
      </section>
    </motion.div>
  )
}

