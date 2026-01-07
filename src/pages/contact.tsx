import { useState } from "react";
import Sidebar from "./sidebar";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("https://formspree.io/f/mgvnlqjd", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          message,
          _subject: "New Contact Form Message",
        }),
      });

      if (res.ok) {
        setStatus("success");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        throw new Error("Form submission failed");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (<>
  
     <div className="sidebar-comp">
        <Sidebar />
      </div>
    <main className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-12">
      
      <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 text-center md:text-left">
        Let&apos;s Build Something Amazing
      </h1>
      <p className="text-gray-600 mb-8 text-center md:text-left max-w-md">
        Got an idea, collaboration request, or just want to say hello?
        Drop a message I respond faster than you think.
      </p>
<br/>
      
      <form
        className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg space-y-6 mx-auto"
        onSubmit={handleSubmit}
      >
        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="name">
            Your Name
          </label>
          <input
            id="name"
            type="text"
            required
            className="mt-1 block w-full text-[#b292ff] border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="email">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            required
            className="mt-1 block w-full text-[#b292ff] border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="message">
            Your Message
          </label>
          <textarea
            id="message"
            required
            rows={5}
            className="mt-1 block w-full text-[#b292ff] border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
     <br/>ß
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex w-full justify-center py-2 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none"
        >
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>

        {status === "success" && (
          <p className="text-green-600 mt-4 text-center md:text-left">Thanks! Your message is on its way 🚀</p>
        )}
        {status === "error" && (
          <p className="text-red-600 mt-4 text-center md:text-left">Oops! Something went wrong. Try again?</p>
        )}
      </form>

      <div className="mt-12 text-center md:text-left">
        <p className="text-gray-700">Prefer direct contact?</p>
        <p className="mt-2">
          <a href="mailto:shittuqadekunle@gmail.com" className="text-indigo-600 hover:underline">
            shittuqadekunle@gmail.com
          </a>
        </p>
      </div>
    </main></>
  );
};

export default Contact;
