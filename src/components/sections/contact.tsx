"use client"

import { useState } from "react"
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Facebook } from "lucide-react"
import { FaDiscord } from "react-icons/fa";
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { toast } from "sonner"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Here you would add your actual form submission logic
      // For example, sending the form data to an API

      // Simulate a successful form submission
      await new Promise(resolve => setTimeout(resolve, 1000))

      toast.success("Message sent successfully! I'll get back to you soon.")
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      })
    } catch (error) {
      toast.error("Failed to send message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section
      id="contact"
      className="py-20 md:py-24"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
              Get in Touch
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Let's Work Together
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Have a project in mind or want to discuss an opportunity? I'd love to hear from you.
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-2 mt-12">
          {/* Contact Form */}
          <Card className="border-0 shadow-md">
            <CardHeader className="pb-4">
              <CardTitle>Send a Message</CardTitle>
              <CardDescription>Fill out the form and I'll get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Example Name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="example@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Project Inquiry"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="flex min-h-[150px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Let me know how I can help..."
                  />
                </div>
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <span className="flex items-center gap-1">
                      <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-background" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-1">
                      <Send className="h-4 w-4" />
                      Send Message
                    </span>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="border-0 shadow-md">
              <CardHeader className="pb-4">
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>Feel free to reach out through any of these channels.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-4">
                  <Mail className="h-5 w-5 mt-0.5 text-primary" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-sm text-muted-foreground">wiraphat.makwong@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="h-5 w-5 mt-0.5 text-primary" />
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <p className="text-sm text-muted-foreground">+66 (65) 457-1069</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <MapPin className="h-5 w-5 mt-0.5 text-primary" />
                  <div>
                    <h3 className="font-medium">Location</h3>
                    <p className="text-sm text-muted-foreground">Tak, Thailand</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="border-t pt-4 flex justify-start gap-4">
                <Button asChild variant="ghost" size="icon">
                  <a href="https://github.zpleum.dev" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </a>
                </Button>
                <Button asChild variant="ghost" size="icon">
                  <a href="https://facebook.zpleum.dev" target="_blank" rel="noopener noreferrer">
                    <Facebook className="h-5 w-5" />
                    <span className="sr-only">Facebook</span>
                  </a>
                </Button>
                <Button asChild variant="ghost" size="icon">
                  <a href="https://linkedin.zpleum.dev" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                </Button>
                <Button asChild variant="ghost" size="icon">
                  <a href="https://discord.zpleum.dev" target="_blank" rel="noopener noreferrer">
                    <FaDiscord className="h-5 w-5 fill-current text-primary" />
                    <span className="sr-only">Discord</span>
                  </a>
                </Button>
              </CardFooter>
            </Card>

            <Card className="border-0 shadow-md">
              <CardHeader className="pb-4">
                <CardTitle>Working Hours</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <p className="text-sm">Saturday - Sunday:</p>
                  <p className="text-sm">9:00 AM - 5:00 PM</p>
                  <p className="text-sm">By appointment</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-sm">Monday - Friday:</p>
                  <p className="text-sm">Closed</p>
                </div>
                <div className="pt-2">
                  <p className="text-sm text-muted-foreground">All times are in Thailand Time (ICT)</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
