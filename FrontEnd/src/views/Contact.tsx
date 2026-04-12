import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Placeholder logic (you’ll replace this with SMTP later)
    console.log("Form submitted:", form);

    alert("Message sent! (placeholder)");

    // Reset form
    setForm({
      email: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-12">
      
      {/* Container */}
      <div className="w-full max-w-xl bg-surface border border-border rounded-xl p-8 shadow-lg">
        
        {/* Title */}
        <h1 className="text-3xl font-bold text-highlight mb-6 text-center">
          Contact Us
        </h1>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          
          {/* Email Input */}
          <div className="flex flex-col gap-2">
            <label className="text-sm text-muted">Your Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="px-4 py-2 rounded-lg bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="you@example.com"
            />
          </div>

          {/* Message Input */}
          <div className="flex flex-col gap-2">
            <label className="text-sm text-muted">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              className="px-4 py-2 rounded-lg bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              placeholder="Type your message here..."
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-4 bg-primary hover:bg-primaryLight text-black font-semibold py-2 rounded-lg transition"
          >
            Send Message
          </button>

        </form>
      </div>
    </div>
  );
}

export default Contact;