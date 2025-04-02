import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" })
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: ""
    }
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        toast({
          title: "Message sent successfully!",
          description: "I'll get back to you as soon as possible.",
          variant: "default",
          className: "animate-in slide-in-from-top-4 duration-500",
          style: {
            background: "hsl(var(--ghana-green))",
            color: "white",
            border: "none",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            padding: "1rem",
            borderRadius: "0.5rem",
            fontSize: "1rem",
            fontWeight: "500"
          }
        });
        form.reset();
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to send message");
      }
    } catch (error: any) {
      toast({
        title: "Error sending message",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive",
        className: "animate-in slide-in-from-top-4 duration-500",
        style: {
          background: "hsl(var(--ghana-red))",
          color: "white",
          border: "none",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          padding: "1rem",
          borderRadius: "0.5rem",
          fontSize: "1rem",
          fontWeight: "500"
        }
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-24 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">LET'S TALK</h1>
        <p className="text-foreground max-w-2xl mx-auto">
          Have a project in mind or want to discuss a potential collaboration? I'd love to hear from you. Fill
          out the form below or reach out directly through the contact information.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1 space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-card p-6 rounded-lg"
          >
            <div className="flex space-x-4">
              <div className="text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
              </div>
              <div>
                <h3 className="text-foreground font-bold mb-1">Email</h3>
                <p className="text-foreground/80">phleodelly@gmail.com</p>
                <Button 
                  variant="link" 
                  className="text-primary p-0 h-auto mt-2"
                  onClick={() => window.location.href = "mailto:phleodelly@gmail.com"}
                >
                  Send an email
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </Button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-card p-6 rounded-lg"
          >
            <div className="flex space-x-4">
              <div className="text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </div>
              <div>
                <h3 className="text-foreground font-bold mb-1">Phone</h3>
                <p className="text-foreground/80">+233 123 456 789</p>
                <Button 
                  variant="link" 
                  className="text-primary p-0 h-auto mt-2"
                  onClick={() => window.location.href = "tel:+233123456789"}
                >
                  Make a call
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </Button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-card p-6 rounded-lg"
          >
            <div className="flex space-x-4">
              <div className="text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              </div>
              <div>
                <h3 className="text-foreground font-bold mb-1">Location</h3>
                <p className="text-foreground/80">International Student Hostel (ISH), University of Ghana, Legon</p>
                <Button 
                  variant="link" 
                  className="text-primary p-0 h-auto mt-2"
                  onClick={() => window.open("https://www.google.com/maps/place/International+Student+Hostel-+ISH/@5.6400274,-0.1851988,17z", "_blank")}
                >
                  View on map
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="md:col-span-2 bg-card p-8 rounded-lg"
        >
          <h2 className="text-2xl font-bold text-foreground mb-6">Send a Message</h2>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Full Name" {...field} className="bg-background border-border" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Valid Email Address" {...field} className="bg-background border-border" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Subject</FormLabel>
                    <FormControl>
                      <Input placeholder="Project Inquiry" {...field} className="bg-background border-border" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Message</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="I'd like to discuss a project..." 
                        className="min-h-[150px] bg-background border-border"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <div>
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-black"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </div>
            </form>
          </Form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;