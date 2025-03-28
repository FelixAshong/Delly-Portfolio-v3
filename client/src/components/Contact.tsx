import { motion } from "framer-motion";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { SOCIAL_LINKS } from "@/lib/constants";
import { fadeIn } from "@/lib/animations";
import { useToast } from "@/hooks/use-toast";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const Contact = () => {
  const { toast } = useToast();
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const { mutate: submitContactForm, isPending } = useMutation({
    mutationFn: (data: ContactFormValues) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent!",
        description: "Thanks for your message. I'll get back to you soon.",
        variant: "default",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Error sending message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormValues) => {
    submitContactForm(data);
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeIn()}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">LET'S TALK</h2>
          <div className="w-20 h-1 ghana-gradient mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to discuss how I can help your business? Let's connect and create something amazing together.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div 
            className="bg-secondary rounded-xl p-8 border border-gray-800"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeIn(0.1)}
          >
            <h3 className="text-xl font-semibold text-white mb-6">Send a Message</h3>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-400">Your Name</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Enter your name" 
                          className="bg-background border-gray-700 text-white focus:border-[hsl(var(--ghana-yellow))]" 
                          {...field} 
                        />
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
                      <FormLabel className="text-gray-400">Email Address</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Enter your email" 
                          className="bg-background border-gray-700 text-white focus:border-[hsl(var(--ghana-yellow))]" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-400">Subject</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Enter subject" 
                          className="bg-background border-gray-700 text-white focus:border-[hsl(var(--ghana-yellow))]" 
                          {...field} 
                        />
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
                      <FormLabel className="text-gray-400">Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Your message" 
                          className="bg-background border-gray-700 text-white focus:border-[hsl(var(--ghana-yellow))]" 
                          rows={4}
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full bg-[hsl(var(--ghana-yellow))] hover:bg-[hsl(var(--ghana-yellow))]/90 text-[hsl(var(--background))] font-medium py-6"
                  disabled={isPending}
                >
                  {isPending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </motion.div>
          
          {/* Contact Info */}
          <div>
            <motion.div 
              className="bg-secondary rounded-xl p-8 border border-gray-800 mb-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeIn(0.2)}
            >
              <h3 className="text-xl font-semibold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-lg bg-background flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="ri-map-pin-line text-[hsl(var(--ghana-red))]"></i>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Location</h4>
                    <p className="text-gray-400">Accra, Ghana</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-lg bg-background flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="ri-mail-line text-[hsl(var(--ghana-yellow))]"></i>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Email</h4>
                    <a href="mailto:contact@phleodelly.com" className="text-gray-400 hover:text-[hsl(var(--ghana-yellow))] transition-colors">
                      contact@phleodelly.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-lg bg-background flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="ri-phone-line text-[hsl(var(--ghana-green))]"></i>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Phone</h4>
                    <a href="tel:+233501234567" className="text-gray-400 hover:text-[hsl(var(--ghana-green))] transition-colors">
                      +233 50 123 4567
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-secondary rounded-xl p-8 border border-gray-800"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeIn(0.3)}
            >
              <h3 className="text-xl font-semibold text-white mb-6">Follow Me</h3>
              
              <div className="flex space-x-4">
                {SOCIAL_LINKS.map((social, index) => (
                  <motion.a 
                    key={index}
                    href={social.url} 
                    className={`w-10 h-10 bg-background hover:bg-[hsl(var(--ghana-${social.hoverColor}))]/20 flex items-center justify-center rounded-lg transition-colors`}
                    aria-label={social.name}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  >
                    <i className={`${social.icon} text-xl text-white`}></i>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
