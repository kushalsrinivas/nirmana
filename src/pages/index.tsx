import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, CheckCircle, Shield, Users, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-16 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <Image
            src="/nirmana-logo.svg" // Replace with your actual logo path
            alt="Nirmana Logo"
            width={40}
            height={40}
            className="mr-2"
          />
          <span className="font-bold text-xl">Nirmana </span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#features"
          >
            Features
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#pricing"
          >
            Pricing
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#contact"
          >
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full flex justify-center items-center py-12 md:py-24 lg:py-32 xl:py-48 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col justify-center items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter text-primary text-center sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Simplify Your Construction Management
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Streamline your projects from tendering to close out with our
                  comprehensive software solution.
                </p>
              </div>
              <div className="space-x-4">
                <Button className="inline-flex h-9 items-center justify-center rounded-md bg-primary text-primary-foreground px-4 py-2 text-sm font-medium shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                  Get Started
                </Button>
                <Button variant="secondary">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section
          id="features"
          className="w-full flex justify-center items-center py-12 md:py-24 lg:py-32"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Products that Simplify Work from Tendering to Close Out
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  width={300}
                  height={200}
                  alt="Project Management"
                  className="rounded-lg mb-4"
                />
                <h3 className="text-2xl font-bold mb-2">Project Management</h3>
                <p className="text-gray-500 mb-4">
                  Mobile project management that improves efficiency by
                  connecting site and office for real-time visibility.
                </p>
                <Button className="inline-flex items-center justify-center">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="flex flex-col items-center text-center">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  width={300}
                  height={200}
                  alt="Quality & Safety"
                  className="rounded-lg mb-4"
                />
                <h3 className="text-2xl font-bold mb-2">Quality & Safety</h3>
                <p className="text-gray-500 mb-4">
                  Mitigate risks and make tough decisions using real-time data
                  from the site. Manage site diaries, inspections and incidents
                  all in one place.
                </p>
                <Button className="inline-flex items-center justify-center">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="flex flex-col items-center text-center">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  width={300}
                  height={200}
                  alt="Financial Management"
                  className="rounded-lg mb-4"
                />
                <h3 className="text-2xl font-bold mb-2">
                  Financial Management
                </h3>
                <p className="text-gray-500 mb-4">
                  Gain real-time insight into the financial health of your
                  projects with cost management that connects project and site
                  teams to accounting.
                </p>
                <Button className="inline-flex items-center justify-center">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="flex justify-center mt-12">
              <Button
                variant="outline"
                className="inline-flex items-center justify-center"
              >
                See All Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
        <section className="w-full flex justify-center items-center py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter text-primary sm:text-5xl text-center mb-12">
              Why Choose ConstructPro?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="flex flex-col items-center text-center">
                <CheckCircle className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Easy to Use</h3>
                <p className="text-gray-500">
                  Intuitive interface designed for construction professionals.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Shield className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Secure</h3>
                <p className="text-gray-500">
                  Bank-level security to protect your sensitive project data.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Users className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Collaborative</h3>
                <p className="text-gray-500">
                  Real-time updates and communication for your entire team.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Clock className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Time-Saving</h3>
                <p className="text-gray-500">
                  Automate repetitive tasks and focus on what matters.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          id="pricing"
          className="w-full flex justify-center items-center py-12 md:py-24 lg:py-32"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Flexible Pricing for Every Project
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col p-6 bg-white shadow-lg rounded-lg justify-between border border-gray-200">
                <div>
                  <h3 className="text-2xl font-bold text-center mb-4">
                    Starter
                  </h3>
                  <p className="text-center text-gray-500 mb-4">
                    For small teams and projects
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <CheckCircle className="text-primary mr-2 h-4 w-4" />
                      Basic project management
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="text-primary mr-2 h-4 w-4" />5
                      team members
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="text-primary mr-2 h-4 w-4" />
                      1GB storage
                    </li>
                  </ul>
                </div>
                <div className="text-center mt-6">
                  <span className="text-4xl font-bold">$29</span>
                  <span className="text-gray-500">/month</span>
                  <Button className="mt-4 w-full">Get Started</Button>
                </div>
              </div>
              <div className="flex flex-col p-6 bg-primary shadow-lg rounded-lg justify-between border border-primary">
                <div>
                  <h3 className="text-2xl font-bold text-center mb-4 text-primary-foreground">
                    Pro
                  </h3>
                  <p className="text-center text-primary-foreground/80 mb-4">
                    For growing businesses
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-primary-foreground">
                      <CheckCircle className="text-primary-foreground mr-2 h-4 w-4" />
                      Advanced project management
                    </li>
                    <li className="flex items-center text-primary-foreground">
                      <CheckCircle className="text-primary-foreground mr-2 h-4 w-4" />
                      Unlimited team members
                    </li>
                    <li className="flex items-center text-primary-foreground">
                      <CheckCircle className="text-primary-foreground mr-2 h-4 w-4" />
                      10GB storage
                    </li>
                    <li className="flex items-center text-primary-foreground">
                      <CheckCircle className="text-primary-foreground mr-2 h-4 w-4" />
                      Financial management
                    </li>
                  </ul>
                </div>
                <div className="text-center mt-6">
                  <span className="text-4xl font-bold text-primary-foreground">
                    $99
                  </span>
                  <span className="text-primary-foreground/80">/month</span>
                  <Button className="mt-4 w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                    Get Started
                  </Button>
                </div>
              </div>
              <div className="flex flex-col p-6 bg-white shadow-lg rounded-lg justify-between border border-gray-200">
                <div>
                  <h3 className="text-2xl font-bold text-center mb-4">
                    Enterprise
                  </h3>
                  <p className="text-center text-gray-500 mb-4">
                    For large-scale operations
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <CheckCircle className="text-primary mr-2 h-4 w-4" />
                      Full suite of features
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="text-primary mr-2 h-4 w-4" />
                      Unlimited everything
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="text-primary mr-2 h-4 w-4" />
                      24/7 premium support
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="text-primary mr-2 h-4 w-4" />
                      Custom integrations
                    </li>
                  </ul>
                </div>
                <div className="text-center mt-6">
                  <span className="text-4xl font-bold">Custom</span>
                  <Button className="mt-4 w-full">Contact Sales</Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="contact"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter text-primary sm:text-5xl text-center mb-12">
              Ready to Transform Your Construction Management?
            </h2>
            <div className="max-w-md mx-auto">
              <form className="space-y-4">
                <Input placeholder="Your Name" />
                <Input type="email" placeholder="Your Email" />
                <Input placeholder="Company Name" />
                <Button className="w-full">Request a Demo</Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">
          © 2024 ConstructPro. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
