import { useState } from "react";
import Sidebar from "./sidebar";

type Status = "idle" | "sending" | "success" | "error";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");

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
        throw new Error("Failed");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <>
      <div className="sidebar-comp">
        <Sidebar />
      </div>

      <main id="contact-comp">

        {/* ── Left: copy ── */}
        <div className="ct-left">
          <span className="ct-badge">Get in touch</span>
          <h1 className="ct-heading">
            Let&apos;s Build Something<br />
            <span className="ct-heading-accent">Amazing</span>
          </h1>
          <p className="ct-sub">
            Got an idea, a collaboration request, or just want to say hello?
            Drop a message — I respond faster than you think.
          </p>

          <div className="ct-direct">
            <p className="ct-direct-label">Prefer direct contact?</p>
            <a href="mailto:shittuqadekunle@gmail.com" className="ct-email">
              shittuqadekunle@gmail.com
            </a>
          </div>
        </div>

        {/* ── Right: form ── */}
        <div className="ct-right">
          <form className="ct-form" onSubmit={handleSubmit}>

            <div className="ct-field">
              <label className="ct-label" htmlFor="name">Your Name</label>
              <input
                id="name"
                type="text"
                required
                placeholder="John Doe"
                className="ct-input"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="ct-field">
              <label className="ct-label" htmlFor="email">Email Address</label>
              <input
                id="email"
                type="email"
                required
                placeholder="john@example.com"
                className="ct-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="ct-field">
              <label className="ct-label" htmlFor="message">Your Message</label>
              <textarea
                id="message"
                required
                rows={5}
                placeholder="Tell me about your project or idea..."
                className="ct-input ct-textarea"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending" || status === "success"}
              className="ct-btn"
            >
              {status === "sending" ? "Sending…" : status === "success" ? "Message Sent ✓" : "Send Message →"}
            </button>

            {status === "success" && (
              <p className="ct-feedback ct-success">
                🚀 Thanks! Your message is on its way.
              </p>
            )}
            {status === "error" && (
              <p className="ct-feedback ct-error">
                ⚠️ Something went wrong. Please try again.
              </p>
            )}
          </form>
        </div>

      </main>

      <style>{`
        /* ── Layout ── */
        #contact-comp {
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          gap: 4rem;
          max-width: 900px;
          margin: 0 auto;
          padding: 4rem 1.5rem 5rem;
          min-height: 80vh;
        }

        /* ── Left ── */
        .ct-left {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
          padding-top: 0.5rem;
        }
        .ct-badge {
          display: inline-block;
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.13em;
          text-transform: uppercase;
          border: 1.5px solid rgba(255,255,255,0.25);
          border-radius: 999px;
          padding: 0.28rem 0.9rem;
          color: rgba(255,255,255,0.55);
          width: fit-content;
        }
        .ct-heading {
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 800;
          color: #fff;
          line-height: 1.15;
          letter-spacing: -0.02em;
          margin: 0;
        }
        .ct-heading-accent {
          color: rgba(255,255,255,0.45);
        }
        .ct-sub {
          font-size: 0.97rem;
          line-height: 1.75;
          color: rgba(255,255,255,0.55);
          max-width: 340px;
        }
        .ct-direct {
          margin-top: 1.5rem;
          padding-top: 1.5rem;
          border-top: 1px solid rgba(255,255,255,0.1);
        }
        .ct-direct-label {
          font-size: 0.85rem;
          color: rgba(255,255,255,0.4);
          margin-bottom: 0.4rem;
        }
        .ct-email {
          font-size: 0.95rem;
          color: #fff;
          text-decoration: none;
          border-bottom: 1px solid rgba(255,255,255,0.3);
          padding-bottom: 1px;
          transition: border-color 0.2s;
        }
        .ct-email:hover {
          border-color: #fff;
        }

        /* ── Right / Form ── */
        .ct-right {
          flex: 1;
        }
        .ct-form {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .ct-field {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }
        .ct-label {
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.5);
        }
        .ct-input {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 10px;
          padding: 0.75rem 1rem;
          font-size: 0.95rem;
          color: #fff;
          outline: none;
          transition: border-color 0.2s, background 0.2s;
          width: 100%;
          box-sizing: border-box;
          font-family: inherit;
        }
        .ct-input::placeholder {
          color: rgba(255,255,255,0.25);
        }
        .ct-input:focus {
          border-color: rgba(255,255,255,0.45);
          background: rgba(255,255,255,0.08);
        }
        .ct-textarea {
          resize: vertical;
          min-height: 130px;
        }

        /* ── Button ── */
        .ct-btn {
          margin-top: 0.25rem;
          padding: 0.8rem 1.5rem;
          background: #fff;
          color: #000;
          font-size: 0.95rem;
          font-weight: 700;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          transition: opacity 0.2s, transform 0.15s;
          width: 100%;
          font-family: inherit;
        }
        .ct-btn:hover:not(:disabled) {
          opacity: 0.88;
          transform: translateY(-1px);
        }
        .ct-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        /* ── Feedback ── */
        .ct-feedback {
          font-size: 0.9rem;
          text-align: center;
          padding: 0.6rem 1rem;
          border-radius: 8px;
        }
        .ct-success {
          background: rgba(74, 222, 128, 0.1);
          color: #4ade80;
          border: 1px solid rgba(74, 222, 128, 0.25);
        }
        .ct-error {
          background: rgba(248, 113, 113, 0.1);
          color: #f87171;
          border: 1px solid rgba(248, 113, 113, 0.25);
        }

        /* ── Mobile: stack columns ── */
        @media (max-width: 700px) {
          #contact-comp {
            flex-direction: column;
            gap: 2.5rem;
            padding: 2.5rem 1.2rem 4rem;
          }
          .ct-sub {
            max-width: 100%;
          }
        }
      `}</style>
    </>
  );
};

export default Contact;