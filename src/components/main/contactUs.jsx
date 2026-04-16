import React from "react";
import { useState } from "react";
import emailjs from "emailjs-com";

function Contacts_us() {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [message, setMessage] = useState("");

  // ✅ fixed naming
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function formsubmit(e) {
    e.preventDefault();

    // validation
    if (!name || !mail || !message) {
      alert("Please fill in all fields");
      return;
    }

    setLoading(true);
    setSuccess(false);

    try {
      // ✅ GOOGLE SHEETS (async version)
      await fetch(
        "https://script.google.com/macros/s/AKfycbx7Dn85hvQzSLYlxGgPJ4Jx1nTw6LznlE5RTQ9yeQQvWlgADbj1UbWPcLFa5Dsz86bj/exec",
        {
          method: "POST",
          mode: "no-cors",
          body: JSON.stringify({
            name: name,
            email: mail,
            message: message,
          }),
        }
      );

      // ✅ EMAIL (async)
      await emailjs.send(
        "service_nb485zx",
        "template_j6158se",
        {
          name: name,
          email: mail,
          message: message,
        },
        "A5NdaYzFYM2Q3ay_X"
      );

      setSuccess(true); // show success
    } catch (err) {
      console.log("Error:", err);
    } finally {
      setLoading(false); // stop loading always
    }

    // reset
    setName("");
    setMail("");
    setMessage("");
  }

  return (
    <section
      id="contact"
      className="min-h-screen bg-black text-white flex justify-center items-center py-15 md:py-20 border-t border-gray-900"
    >
      <div className="grid md:grid-cols-2 gap-16 w-full max-w-6xl mx-auto px-6">
        
        {/* LEFT SIDE */}
        <div className="md:flex flex-col justify-center">
          <p className="text-[10px] tracking-[0.35em] text-gray-600 uppercase font-bold mb-3">
            Get in touch
          </p>

          <h1
            style={{
              fontFamily: "'MangoGrotesque', sans-serif",
              lineHeight: "0.85",
              letterSpacing: "0.03em",
            }}
            className="text-[80px] text-white uppercase mb-8"
          >
            LET'S <br />
            <span className="text-gray-700">TALK.</span>
          </h1>

          <p className="text-gray-500 text-sm leading-relaxed max-w-xs mb-10 hidden md:block">
            Have a project in mind or want to work together? Feel free to reach
            out anytime — I respond fast.
          </p>

          {/* SOCIAL */}
          <div className="flex flex-col gap-3">
            <p className="text-[10px] tracking-[0.3em] text-gray-700 uppercase font-bold">
              Find me on
            </p>

            <div className="flex gap-6 text-gray-600 text-xs tracking-[0.2em] uppercase font-bold">
              <a href="https://www.instagram.com/bhardwajnitin485" className="hover:text-white">
                Instagram
              </a>
              <a href="https://github.com/nitin485" className="hover:text-white">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/nitin-bhardwaj-485/" className="hover:text-white">
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* FORM */}
        <form className="flex flex-col gap-6 justify-center" onSubmit={formsubmit}>
          
          {/* NAME */}
          <div className="flex flex-col gap-2">
            <label className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold ml-1">
              Name
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="John Doe"
              className="bg-[#0a0a0a] border border-gray-800 p-3 md:py-4 rounded-lg text-white text-sm"
            />
          </div>

          {/* EMAIL */}
          <div className="flex flex-col gap-2">
            <label className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold">
              Email
            </label>
            <input
              required
              value={mail}
              onChange={(e) => setMail(e.target.value)}
              placeholder="hello@example.com"
              className="bg-[#0a0a0a] border border-gray-800 p-3 md:p-4 rounded-lg text-white text-sm"
            />
          </div>

          {/* MESSAGE */}
          <div className="flex flex-col gap-2">
            <label className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold ml-1">
              Message
            </label>
            <textarea
              rows="4"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell me about your project..."
              className="bg-[#0a0a0a] border border-gray-800 p-3 md:p-4 rounded-xl text-white text-sm resize-none"
            />
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="bg-white text-black font-bold tracking-[0.2em] uppercase text-xs px-8 py-4 mt-2 hover:bg-gray-200 transition-all w-fit"
          >
            {loading ? "Sending..." : "Send Message →"}
          </button>

          {/* SUCCESS MESSAGE */}
          {success && (
            <p className="text-green-500 text-sm mt-2">
              Message sent successfully ✅
            </p>
          )}

        </form>
      </div>
    </section>
  );
}

export default Contacts_us;