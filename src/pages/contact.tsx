import { useState } from "react";
import {
  MdEmail,
  MdLocationOn,
  MdAccessTime,
  MdSend,
  MdCheck,
  MdPerson,
  MdWork,
} from "react-icons/md";
import { FaSpinner } from "react-icons/fa";
import Sidebar from "./sidebar";

const FORMSPREE_FORM_ID = "https://formspree.io/f/mgvnlqjd";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear error when user starts typing
    if (error) setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (err: any) {
      setIsSubmitting(false);
      setError("Failed to send message. Please try again or email me directly.");
    }
  };
  <div className="sidebar-comp">
        <Sidebar />
      </div>

  return (<>
   <div className="sidebar-comp">
        <Sidebar />
      </div>
    <section className="min-h-screen bg-gradient-to-br from-[#0b0b0b] to-[#1a1a1a] text-gray-100 px-4 sm:px-6 py-16 flex items-center justify-center">
      
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left - Contact Info */}
        <div className="space-y-8">
          <div className="bg-gradient-to-br from-[#111]/90 to-[#1a1a1a]/90 border border-gray-800/50 rounded-3xl p-8 shadow-2xl backdrop-blur-sm">
            <div className="mb-8">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-3">
                Let&apos;s Connect
              </h2>
              <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            </div>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-8 font-light">
              I&apos;m currently available for new opportunities and exciting projects.
              Whether you have a question or just want to say hi, I&apos;ll get back to you as soon as possible.
            </p>

            <div className="space-y-6">
              {[
                {
                  icon: <MdEmail className="text-blue-400 w-2 h-2" />,
                  title: "Email Me",
                  value: "shittuqadekunle@gmail.com",
                  desc: "Direct and fast communication",
                  action: "Send email",
                },
                {
                  icon: <MdLocationOn className="text-green-400 w-2 h-2" />,
                  title: "Based In",
                  value: "Remote First",
                  desc: "Available worldwide",
                  action: "Open to relocation",
                },
                {
                  icon: <MdAccessTime className="text-purple-400 w-2 h-2" />,
                  title: "Response Time",
                  value: "Within 24 hours",
                  desc: "Usually much faster",
                  action: "Currently available",
                },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-[#1a1a1a]/50 border border-gray-800/30 hover:border-gray-700/50 transition-all duration-300 group">
                  <div className="bg-[#1a1a1a] group-hover:bg-[#222] p-3 rounded-xl border border-gray-800/50 group-hover:border-gray-700/50 transition-all duration-200">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-200 text-base">{item.title}</p>
                    <p className="text-gray-100 font-medium text-lg mt-1">{item.value}</p>
                    <p className="text-sm text-gray-500 mt-1">{item.desc}</p>
                    <p className="text-xs text-blue-400 mt-2 font-medium">{item.action}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Availability Card */}
          <div className="bg-gradient-to-br from-blue-600/10 to-purple-600/10 border border-blue-500/20 rounded-3xl p-6 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-blue-500/20 rounded-lg">
                <MdWork className="text-blue-400 w-2 h-2" />
              </div>
              <h3 className="text-lg font-semibold text-white">Current Status</h3>
            </div>
            <p className="text-gray-300 text-sm mb-3">
              <span className="font-medium">Actively seeking</span> frontend development roles
            </p>
            <div className="space-y-2 text-xs text-gray-400">
              <p>• Internship positions</p>
              <p>• Remote work opportunities</p>
              <p>• Project collaborations</p>
              <p>• Freelance contracts</p>
            </div>
          </div>
        </div>

        {/* Right - Contact Form */}
        <div className="bg-gradient-to-br from-[#111]/90 to-[#1a1a1a]/90 border border-gray-800/50 rounded-3xl p-8 shadow-2xl backdrop-blur-sm">
          {isSubmitted ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <MdCheck className="text-white w-4 h-4" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Message Sent Successfully!
              </h3>
              <p className="text-gray-400 mb-6 max-w-md mx-auto leading-relaxed">
           Thank you for reaching out. I&apos;ve received your message and will get back to you within 24 hours.

              </p>
              <div className="space-y-3 text-sm text-gray-500 max-w-sm mx-auto">
                <p>📧 Check your email for confirmation</p>
                <p>⏱️ Typical response: 2-6 hours</p>
              </div>
              <button
                onClick={() => setIsSubmitted(false)}
                className="mt-8 px-8 py-3.5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-xl transition-all duration-200 text-white font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <>
              <div className="mb-8">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-3">
                  Send Message
                </h2>
                <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-4"></div>
                <p className="text-gray-400 text-sm">
                  Fill out the form below and I&apos;ll get back to you as soon as possible. All fields are required.
                </p>
              </div>

              {error && (
                <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
                  <p className="text-red-400 text-sm">{error}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-300">
                    <MdPerson className="w-2 h-2 text-blue-400" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                    className="w-full bg-[#0e0e0e] border border-gray-700/50 rounded-xl py-3.5 px-4 text-gray-200 placeholder-gray-500 focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 outline-none transition-all duration-200"
                  />
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-300">
                    <MdEmail className="w-2 h-2 text-green-400" />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                    className="w-full bg-[#0e0e0e] border border-gray-700/50 rounded-xl py-3.5 px-4 text-gray-200 placeholder-gray-500 focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 outline-none transition-all duration-200"
                  />
                </div>

                {/* Subject Field */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-300">
                    <MdWork className="w-2 h-2 text-purple-400" />
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="What is this regarding?"
                    className="w-full bg-[#0e0e0e] border border-gray-700/50 rounded-xl py-3.5 px-4 text-gray-200 placeholder-gray-500 focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 outline-none transition-all duration-200"
                  />
                </div>

                {/* Message Field */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-300">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Please describe your project, timeline, and specific requirements in detail..."
                    className="w-full bg-[#0e0e0e] border border-gray-700/50 rounded-xl py-3.5 px-4 text-gray-200 placeholder-gray-500 focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 outline-none resize-none transition-all duration-200"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 py-4 rounded-xl font-semibold flex items-center justify-center gap-3 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 ${
                    isSubmitting ? "opacity-70 cursor-not-allowed hover:transform-none" : ""
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <FaSpinner className="animate-spin h-5 w-5 text-white" />
                      Sending Your Message...
                    </>
                  ) : (
                    <>
                      <MdSend className="w-2 h-2" /> 
                      Send Message
                    </>
                  )}
                </button>

                <p className="text-xs text-gray-500 text-center pt-4">
                  ✨ I typically respond within 2-6 hours during business days
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </section></>
  );
};

export default Contact;