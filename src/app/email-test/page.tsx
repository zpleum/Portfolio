"use client"

import { useState, FormEvent, useRef } from "react"
import emailjs from '@emailjs/browser';
import { emailConfig } from "@/lib/email-config";

// Initialize EmailJS
emailjs.init(emailConfig.publicKey);

export default function EmailTestPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [response, setResponse] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResponse("");
    setError("");

    try {
      console.log("Form reference:", formRef.current);
      console.log("Service ID:", emailConfig.serviceId);
      console.log("Template ID:", emailConfig.templateId);
      console.log("Public Key:", emailConfig.publicKey);

      if (!formRef.current) {
        throw new Error("Form reference is missing");
      }

      const result = await emailjs.sendForm(
        emailConfig.serviceId,
        emailConfig.templateId,
        formRef.current,
        { publicKey: emailConfig.publicKey }
      );

      console.log("EmailJS Response:", result);
      setResponse(JSON.stringify(result, null, 2));
    } catch (err: any) {
      console.error("EmailJS Error:", err);
      setError(err.toString());
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">EmailJS Test Page</h1>
      <form ref={formRef} onSubmit={handleSubmit} className="max-w-md mx-auto mb-8 space-y-4">
        <div>
          <label htmlFor="from_name" className="block text-sm font-medium mb-1">Name</label>
          <input 
            type="text" 
            id="from_name" 
            name="from_name" 
            className="w-full p-2 border rounded"
            defaultValue="Test User"
          />
        </div>
        <div>
          <label htmlFor="from_email" className="block text-sm font-medium mb-1">Email</label>
          <input 
            type="email" 
            id="from_email" 
            name="from_email" 
            className="w-full p-2 border rounded"
            defaultValue="test@example.com"
          />
        </div>
        <div>
          <label htmlFor="subject" className="block text-sm font-medium mb-1">Subject</label>
          <input 
            type="text" 
            id="subject" 
            name="subject" 
            className="w-full p-2 border rounded"
            defaultValue="Test Email"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
          <textarea 
            id="message" 
            name="message" 
            rows={4} 
            className="w-full p-2 border rounded"
            defaultValue="This is a test message from the EmailJS test page."
          />
        </div>
        <button 
          type="submit" 
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send Test Email"}
        </button>
      </form>

      {response && (
        <div className="max-w-md mx-auto mb-4 p-4 bg-green-100 rounded">
          <h2 className="text-lg font-semibold mb-2 text-green-800">Success Response:</h2>
          <pre className="whitespace-pre-wrap text-sm">{response}</pre>
        </div>
      )}

      {error && (
        <div className="max-w-md mx-auto p-4 bg-red-100 rounded">
          <h2 className="text-lg font-semibold mb-2 text-red-800">Error:</h2>
          <pre className="whitespace-pre-wrap text-sm">{error}</pre>
        </div>
      )}

      <div className="max-w-md mx-auto mt-8 p-4 bg-gray-100 rounded">
        <h2 className="text-lg font-semibold mb-2">EmailJS Configuration:</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Service ID:</strong> {emailConfig.serviceId}</li>
          <li><strong>Template ID:</strong> {emailConfig.templateId}</li>
          <li><strong>Public Key:</strong> {emailConfig.publicKey}</li>
        </ul>
      </div>
    </div>
  );
} 