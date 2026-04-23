import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const [state, handleSubmit] = useForm("xwpodylp");

  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3 className="glow-title" style={{ marginBottom: "40px" }}>Let's Connect</h3>
        
        <div className="contact-layout">
          <div className="contact-form-wrapper">
            {state.succeeded ? (
               <div className="form-success-container" style={{ padding: "20px", border: "1px solid var(--accentColor)", borderRadius: "12px", backgroundColor: "rgba(94, 234, 212, 0.05)" }}>
                 <h2 style={{ color: "var(--accentColor)", marginBottom: "10px", marginTop: "0" }}>Thank you!</h2>
                 <p style={{ fontSize: "16px", opacity: 0.9, margin: 0 }}>Your message has been sent successfully. I will get back to you soon.</p>
               </div>
            ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <input type="text" name="name" placeholder="Your Name" required className="form-input" />
                <ValidationError prefix="Name" field="name" errors={state.errors} className="form-msg error" />
              </div>
              <div className="form-group">
                <input id="email" type="email" name="email" placeholder="Your Email" required className="form-input" />
                <ValidationError prefix="Email" field="email" errors={state.errors} className="form-msg error" />
              </div>
              <div className="form-group">
                <textarea id="message" name="message" placeholder="Your Message" required className="form-input form-textarea" rows={6}></textarea>
                <ValidationError prefix="Message" field="message" errors={state.errors} className="form-msg error" />
              </div>
              <button type="submit" className="form-submit-btn" disabled={state.submitting}>
                {state.submitting ? "Sending..." : "Send Message"}
              </button>
            </form>
            )}
          </div>

          <div className="contact-info-wrapper">
            <div className="contact-box">
              <h4>Email</h4>
              <p>
                <a href="mailto:piyushnavangul12@gmail.com" data-cursor="disable">
                  piyushnavangul12@gmail.com
                </a>
              </p>
              <h4 style={{ marginTop: "20px" }}>Location</h4>
              <p>Chinchwad, Pune - 411033</p>
            </div>
            
            <div className="contact-box">
              <h4>Social</h4>
              <div className="contact-social-links">
                <a
                  href="https://github.com/Piyush18aug"
                  target="_blank"
                  data-cursor="disable"
                  className="contact-social"
                >
                  Github <MdArrowOutward />
                </a>
                <a
                  href="https://www.linkedin.com/in/piyush-navangul-4aba1127b/"
                  target="_blank"
                  data-cursor="disable"
                  className="contact-social"
                >
                  Linkedin <MdArrowOutward />
                </a>
              </div>
            </div>
            
            <div className="contact-box">
              <h2>
                Designed and Developed <br /> by <span>Piyush Navangul</span>
              </h2>
              <h5>
                <MdCopyright /> 2026
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
