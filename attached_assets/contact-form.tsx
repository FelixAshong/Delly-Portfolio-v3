"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { submitContactForm } from "@/app/actions/contact"
import { useFormStatus } from "react-dom"

function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <motion.button
      type="submit"
      disabled={pending}
      className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md transition-all disabled:opacity-70 w-full"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {pending ? (
        <div className="flex items-center justify-center">
          <div className="loading-spinner mr-2"></div>
          <span>Sending...</span>
        </div>
      ) : (
        "Send Message"
      )}
    </motion.button>
  )
}

const ContactForm = () => {
  const [formStatus, setFormStatus] = useState<{
    success?: boolean
    message?: string
    errors?: any[]
  } | null>(null)

  const formRef = useRef<HTMLFormElement>(null)

  async function handleSubmit(formData: FormData) {
    const result = await submitContactForm(formData)
    setFormStatus(result)

    if (result.success && formRef.current) {
      formRef.current.reset()

      // Clear success message after 5 seconds
      setTimeout(() => {
        setFormStatus(null)
      }, 5000)
    }
  }

  return (
    <motion.form
      ref={formRef}
      action={handleSubmit}
      className="bg-card p-8 rounded-lg border border-border"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold mb-6 font-oswald">Send a Message</h2>

      {formStatus && (
        <div
          className={`${formStatus.success ? "bg-success/10 border-success text-success" : "bg-error/10 border-error text-error"} border p-4 rounded-lg mb-6 font-work`}
        >
          {formStatus.message}
        </div>
      )}

      <div className="grid gap-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium font-work">
              Your Name
            </label>
            <input
              id="name"
              name="name"
              placeholder="John Doe"
              required
              className="w-full px-4 py-3 bg-black border border-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-work"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium font-work">
              Your Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="john@example.com"
              required
              className="w-full px-4 py-3 bg-black border border-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-work"
            />
          </div>
        </div>

        <div>
          <label htmlFor="subject" className="block mb-2 text-sm font-medium font-work">
            Subject
          </label>
          <input
            id="subject"
            name="subject"
            placeholder="Project Inquiry"
            required
            className="w-full px-4 py-3 bg-black border border-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-work"
          />
        </div>

        <div>
          <label htmlFor="message" className="block mb-2 text-sm font-medium font-work">
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="I'd like to discuss a project..."
            rows={6}
            required
            className="w-full px-4 py-3 bg-black border border-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-work"
          />
        </div>

        <SubmitButton />
      </div>
    </motion.form>
  )
}

export default ContactForm

