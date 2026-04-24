"use client";

import { useState } from "react";

export default function Home() {
  const [status, setStatus] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("Sending...");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const res = await fetch("https://formsubmit.co/ajax/szymanski.mgt@gmail.com", {
      method: "POST",
      body: formData,
    });

    if (res.ok) {
      setStatus("Thanks — your message was sent.");
      form.reset();
    } else {
      setStatus("Something went wrong. Please call or text instead.");
    }
  }

  const services = [
    ["/hero.jpg", "Weekly Lawn Mowing", "Clean, striped cuts with trimming and detail work every visit."],
    ["/images/debris-removal.jpeg", "Spring & Fall Cleanups", "Full property cleanups to remove leaves, sticks, and debris."],
    ["/images/garden-bed-cleanup.jpeg", "Mulching", "Fresh mulch installation to improve curb appeal and define beds."],
    ["/images/brush-clearing.jpeg", "Brush Clearing", "Overgrown areas cut back, cleared out, and opened up."],
    ["/images/leaf-cleanup.jpeg", "Leaf Cleanup", "Efficient leaf removal from lawns, beds, and driveways."],
    ["/images/tree-yard-work.jpeg", "General Yard Work", "Small jobs, tree work, and touch-ups to keep your yard sharp."],
  ];

  const towns = ["Natick", "Wellesley", "Dover", "Sherborn", "Framingham", "Needham"];

  return (
    <main style={{ fontFamily: "Georgia, serif", color: "#172018", background: "#faf9f4" }}>
      <nav style={navStyle}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <img src="/logo.jpg" alt="Szymanski Landscaping" style={{ height: 48, width: 48, objectFit: "contain" }} />
          <strong style={{ fontFamily: "Arial, sans-serif", fontSize: 20 }}>Szymanski Landscaping</strong>
        </div>

        <div style={navLinksStyle}>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#areas">Towns</a>
          <a href="#photos">Photos</a>
          <a href="#reviews">Reviews</a>
          <a href="#contact" style={quoteButtonSmall}>Request a Quote</a>
        </div>
      </nav>

      <section style={heroStyle}>
        <div>
          <p style={eyebrow}>LOCAL • RELIABLE • DONE RIGHT</p>
          <h1 style={heroTitle}>Lawn care you can count on.</h1>
          <p style={heroText}>
            Weekly mowing, cleanups, mulching, and general yard work for homeowners
            who want their property kept clean and maintained.
          </p>

          <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginTop: 28 }}>
            <a href="#contact" style={primaryButton}>Request a Quote</a>
            <a href="tel:6174703123" style={secondaryButton}>Call or Text 617-470-3123</a>
          </div>
        </div>

        <img src="/hero.jpg" alt="Freshly mowed lawn" style={heroImageStyle} />
      </section>

      <section id="services" style={sectionStyle}>
        <p style={sectionLabel}>Services</p>
        <h2 style={sectionTitle}>How I can help</h2>
        <p style={sectionIntro}>Straightforward yard care that keeps your property looking its best.</p>

        <div style={serviceGridStyle}>
          {services.map(([img, title, desc]) => (
            <div key={title} style={serviceCardStyle}>
              <img src={img} alt={title} style={serviceImageStyle} />
              <div style={{ padding: 22 }}>
                <h3 style={{ fontSize: 23, margin: "0 0 8px" }}>{title}</h3>
                <p style={bodyText}>{desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div style={ctaStripStyle}>
          <div>
            <h3 style={{ margin: 0 }}>Not sure what your property needs?</h3>
            <p style={{ ...bodyText, margin: "8px 0 0" }}>
              Send a message or call — I’m happy to take a look and recommend the best option.
            </p>
          </div>
          <a href="#contact" style={primaryButton}>Request a Quote</a>
        </div>
      </section>

      <section id="about" style={{ ...sectionStyle, background: "white" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.2fr .8fr", gap: 40 }}>
          <div>
            <p style={sectionLabel}>About</p>
            <h2 style={sectionTitleLeft}>Local work. Personal service.</h2>
            <p style={largeText}>
              I grew up doing a lot of work around the house, and over time that naturally
              turned into doing this kind of work for others. I take pride in keeping
              properties clean, well maintained, and looking their best.
            </p>
            <p style={largeText}>
              Outside of running Szymanski Landscaping, I study Environmental Science & Policy
              with minors in GIS and Economics. When I’m not working or studying, I enjoy
              traveling and fishing whenever I get the chance.
            </p>
          </div>

          <div style={infoBoxStyle}>
            <h3>Why homeowners choose me</h3>
            <p>• Clear communication</p>
            <p>• Reliable weekly service</p>
            <p>• Clean finished results</p>
            <p>• Local and easy to reach</p>
          </div>
        </div>
      </section>

      <section id="areas" style={greenSectionStyle}>
        <p style={{ ...sectionLabel, color: "#d9efc4" }}>Service Areas</p>
        <h2 style={{ ...sectionTitleLeft, color: "white" }}>Proudly serving local towns</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 22 }}>
          {towns.map((town) => (
            <span key={town} style={townPillStyle}>{town}</span>
          ))}
        </div>
      </section>

      <section id="photos" style={sectionStyle}>
        <p style={sectionLabel}>Photos</p>
        <h2 style={sectionTitleLeft}>Recent work</h2>

        <div style={photoGridStyle}>
          {services.map(([img, title]) => (
            <div key={title} style={photoCardStyle}>
              <img src={img} alt={title} style={photoStyle} />
              <p style={{ padding: "12px 14px", margin: 0, fontFamily: "Arial", fontWeight: 700 }}>{title}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="reviews" style={{ ...sectionStyle, background: "white" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 34, alignItems: "center" }}>
          <div>
            <p style={sectionLabel}>Google Reviews</p>
            <h2 style={sectionTitleLeft}>See what customers are saying</h2>
            <p style={largeText}>
              View reviews, photos, and business information for Szymanski Landscaping on Google.
            </p>
            <a
              href="https://www.google.com/search?q=Szymanski+Landscaping"
              target="_blank"
              rel="noreferrer"
              style={primaryButton}
            >
              View Google Reviews
            </a>
          </div>

          <iframe
            src="https://www.google.com/maps?q=Szymanski+Landscaping&output=embed"
            style={{ width: "100%", height: 340, border: 0, borderRadius: 14 }}
            loading="lazy"
          />
        </div>
      </section>

      <section id="contact" style={contactSectionStyle}>
        <div>
          <p style={{ ...sectionLabel, color: "#d9efc4" }}>Contact</p>
          <h2 style={{ ...sectionTitleLeft, color: "white" }}>Request a quote</h2>
          <p style={{ fontFamily: "Arial", fontSize: 18, lineHeight: 1.7, color: "#eef5e8" }}>
            Call, text, or send a message with your address and what kind of work you need.
          </p>
          <p><strong>Phone:</strong> 617-470-3123</p>
          <p><strong>Email:</strong> szymanski.mgt@gmail.com</p>
        </div>

        <form onSubmit={handleSubmit} style={formStyle}>
          <input name="name" placeholder="Name" required style={inputStyle} />
          <input name="phone" placeholder="Phone" required style={inputStyle} />
          <input name="address" placeholder="Address / Town" style={inputStyle} />
          <select name="service" style={inputStyle}>
            {services.map(([, title]) => <option key={title}>{title}</option>)}
          </select>
          <textarea name="message" placeholder="Tell me about the job..." rows={5} style={inputStyle} />
          <input type="hidden" name="_subject" value="New Szymanski Landscaping Lead" />
          <button style={submitButtonStyle}>Send Message</button>
          <p style={{ margin: 0 }}>{status}</p>
        </form>
      </section>
    </main>
  );
}

const navStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "18px 36px",
  borderBottom: "1px solid #ddd",
  background: "white",
  position: "sticky" as const,
  top: 0,
  zIndex: 20,
};

const navLinksStyle = {
  display: "flex",
  gap: 24,
  alignItems: "center",
  fontFamily: "Arial, sans-serif",
};

const heroStyle = {
  maxWidth: 1200,
  margin: "0 auto",
  padding: "70px 32px",
  display: "grid",
  gridTemplateColumns: "0.9fr 1.1fr",
  gap: 48,
  alignItems: "center",
};

const heroImageStyle = {
  width: "100%",
  height: 520,
  objectFit: "cover" as const,
  borderRadius: 16,
  boxShadow: "0 12px 30px rgba(0,0,0,.12)",
};

const eyebrow = {
  color: "#315c32",
  fontFamily: "Arial, sans-serif",
  fontWeight: 800,
  letterSpacing: 1.4,
  fontSize: 14,
};

const heroTitle = {
  fontSize: 64,
  lineHeight: 1.02,
  margin: "16px 0",
};

const heroText = {
  fontFamily: "Arial, sans-serif",
  color: "#4b564c",
  fontSize: 19,
  lineHeight: 1.7,
};

const sectionStyle = {
  padding: "75px 42px",
  maxWidth: 1250,
  margin: "0 auto",
};

const sectionLabel = {
  color: "#315c32",
  fontFamily: "Arial, sans-serif",
  fontWeight: 800,
  letterSpacing: 1.5,
  textTransform: "uppercase" as const,
  textAlign: "center" as const,
};

const sectionTitle = {
  fontSize: 46,
  textAlign: "center" as const,
  margin: "10px 0 10px",
};

const sectionTitleLeft = {
  fontSize: 42,
  margin: "10px 0 18px",
};

const sectionIntro = {
  fontFamily: "Arial, sans-serif",
  color: "#555",
  textAlign: "center" as const,
  fontSize: 18,
  marginBottom: 40,
};

const serviceGridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gap: 24,
};

const serviceCardStyle = {
  border: "1px solid #ddd",
  borderRadius: 14,
  overflow: "hidden",
  background: "white",
  boxShadow: "0 8px 18px rgba(0,0,0,0.04)",
};

const serviceImageStyle = {
  width: "100%",
  height: 230,
  objectFit: "cover" as const,
};

const bodyText = {
  fontFamily: "Arial, sans-serif",
  color: "#4d564e",
  lineHeight: 1.65,
  fontSize: 16,
};

const largeText = {
  fontFamily: "Arial, sans-serif",
  fontSize: 18,
  lineHeight: 1.8,
  color: "#444",
};

const ctaStripStyle = {
  marginTop: 34,
  padding: "24px 28px",
  border: "1px solid #ddd",
  borderRadius: 14,
  background: "white",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: 20,
  flexWrap: "wrap" as const,
};

const primaryButton = {
  display: "inline-block",
  background: "#315c32",
  color: "white",
  padding: "13px 20px",
  borderRadius: 7,
  fontFamily: "Arial, sans-serif",
  fontWeight: 800,
  textDecoration: "none",
};

const secondaryButton = {
  display: "inline-block",
  border: "1px solid #315c32",
  color: "#315c32",
  padding: "13px 20px",
  borderRadius: 7,
  fontFamily: "Arial, sans-serif",
  fontWeight: 800,
  textDecoration: "none",
};

const quoteButtonSmall = {
  background: "#315c32",
  color: "white",
  padding: "10px 16px",
  borderRadius: 7,
  fontWeight: 800,
  textDecoration: "none",
};

const infoBoxStyle = {
  border: "1px solid #ddd",
  padding: 28,
  borderRadius: 12,
  background: "#faf9f4",
  fontFamily: "Arial, sans-serif",
};

const greenSectionStyle = {
  padding: "70px 42px",
  background: "#315c32",
  color: "white",
};

const townPillStyle = {
  background: "white",
  color: "#315c32",
  padding: "10px 16px",
  borderRadius: 999,
  fontFamily: "Arial, sans-serif",
  fontWeight: 800,
};

const photoGridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
  gap: 20,
  marginTop: 25,
};

const photoCardStyle = {
  overflow: "hidden",
  borderRadius: 12,
  border: "1px solid #ddd",
  background: "white",
};

const photoStyle = {
  width: "100%",
  height: 230,
  objectFit: "cover" as const,
};

const contactSectionStyle = {
  padding: "75px 42px",
  background: "#172018",
  color: "white",
  display: "grid",
  gridTemplateColumns: ".8fr 1.2fr",
  gap: 35,
};

const formStyle = {
  display: "grid",
  gap: 12,
};

const inputStyle = {
  padding: "14px",
  borderRadius: 7,
  border: "1px solid #ccc",
  fontSize: 15,
  fontFamily: "Arial, sans-serif",
};

const submitButtonStyle = {
  background: "#75a66d",
  color: "#102010",
  border: 0,
  padding: 14,
  borderRadius: 7,
  fontWeight: 900,
  cursor: "pointer",
};
