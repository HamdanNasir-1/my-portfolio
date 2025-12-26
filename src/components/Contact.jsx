// export default function Contact() {
//   return (
//     <section className="section" id="contact">
//       <div className="section-container contact">
//         <h2 className="section-title">Contact</h2>

//         <p className="section-subtitle">
//           If you’d like to work with me or have any questions, feel free to reach out.
//         </p>

//         <div className="contact-buttons">
//           <a href="mailto:nasirhamdan203@gmail.com" className="btn">Email</a>
//           <a href="https://github.com/HamdanNasir-1" className="btn">GitHub</a>
//           <a href="https://www.linkedin.com/in/hamdan-nasir-7761913a1" className="btn">LinkedIn</a>
//         </div>
//       </div>
//     </section>
//   );
// }
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    emailjs
      .sendForm(
        "service_yzf859l",   // 🔴 replace
        "template_8q7zwjx",  // 🔴 replace
        formRef.current,
        "KOVb8QMqKd78gG8Jw"    // 🔴 replace
      )
      .then(
        () => {
          setStatus("Message sent successfully ✅");
          setLoading(false);
          formRef.current.reset();
        },
        () => {
          setStatus("Something went wrong  Please try again.");
          setLoading(false);
        }
      );
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <h2 className="section-title">Contact Me</h2>
        <p>Have a question or want to work together? Feel free to reach out.</p>

        <form ref={formRef} onSubmit={sendEmail} className="contact-form">
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="reply_to"
            placeholder="Your Email"
            required
          />

          <textarea
            name="message"
            placeholder="What do you want to ask or tell me?"
            required
          />

          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>

          {status && <p className="form-status">{status}</p>}
        </form>
      </div>
    </section>
  );
}
