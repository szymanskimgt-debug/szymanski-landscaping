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
    "Weekly Lawn Mowing",
    "Spring & Fall Cleanups",
    "Mulching",
    "Brush Clearing",
    "Leaf Cleanup",
    "General Yard Work",
  ];

  const towns = ["Natick", "Wellesley", "Dover", "Sherborn", "Framingham", "Needham"];

  const photos = [
    ["/images/mowing-1.jpeg", "Weekly lawn mowing"],
    ["/images/mowing-2.jpeg", "Large property mowing"],
    ["/images/brush-clearing.jpeg", "Brush clearing"],
    ["/images/property-cleanup.jpeg", "Property cleanup"],
    ["/images/debris-removal.jpeg", "Debris removal"],
    ["/images/tree-yard-work.jpeg", "Tree and yard work"],
    ["/images/garden-bed-cleanup.jpeg", "Garden bed cleanup"],
    ["/images/leaf-cleanup.jpeg", "Leaf cleanup"],
    ["/images/seasonal-cleanup.jpeg", "Seasonal cleanup"],
  ];

  return (
    <main style={{ fontFamily: "Georgia, serif", color: "#172018", background: "#faf9f4" }}>
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "22px 42px", borderBottom: "1px solid #ddd", background: "white", position: "sticky", top: 0, zIndex: 10 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <img src="/logo.jpg" alt="Szymanski Landscaping" style={{ height: 55 }} />
          <strong style={{ fontFamily: "Arial, sans-serif" }}>Szymanski Landscaping</strong>
        </div>
        <div style={{ display: "flex", gap: 28, fontFamily: "Arial, sans-serif" }}>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#areas">Towns</a>
          <a href="#photos">Photos</a>
          <a href="#reviews">Reviews</a>
          <a href="#contact">Quote</a>
        </div>
      </nav>

      <section style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 55, alignItems: "center", padding: "80px 42px", maxWidth: 1300, margin: "0 auto" }}>
        <div>
          <p style={{ color: "#315c32", fontFamily: "Arial, sans-serif", fontWeight: 700, letterSpacing: 1 }}>
            LOCAL • RELIABLE • DONE RIGHT
          </p>
          <h1 style={{ fontSize: 64, lineHeight: 1.02, margin: "20px 0" }}>
            Lawn care you can count on.
          </h1>
          <p style={{ fontSize: 19, lineHeight: 1.7, color: "#4b564c", maxWidth: 560 }}>
            Weekly mowing, cleanups, mulching, and general yard work for homeowners who want their property kept clean and maintained.
          </p>
          <div style={{ display: "flex", gap: 14, marginTop: 28 }}>
            <a href="#contact" style={{ background: "#315c32", color: "white", padding: "14px 22px", borderRadius: 6, fontFamily: "Arial, sans-serif", fontWeight: 700 }}>
              Request a Quote
            </a>
            <a href="tel:6174703123" style={{ border: "1px solid #315c32", color: "#315c32", padding: "14px 22px", borderRadius: 6, fontFamily: "Arial, sans-serif", fontWeight: 700 }}>
              617-470-3123
            </a>
          </div>
        </div>

        <img src="/hero.jpg" alt="Finished lawn mowing work" style={{ width: "100%", borderRadius: 14, boxShadow: "0 12px 30px rgba(0,0,0,.12)" }} />
      </section>

      <section id="services" style={{ padding: "70px 42px", background: "white" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2 style={{ fontSize: 42 }}>Services</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, marginTop: 25 }}>
            {services.map((s) => (
              <div key={s} style={{ border: "1px solid #ddd", padding: 24, borderRadius: 10, background: "#faf9f4" }}>
                <h3 style={{ marginTop: 0 }}>{s}</h3>
                <p style={{ fontFamily: "Arial, sans-serif", color: "#555", lineHeight: 1.6 }}>
                  Reliable, clean work with good communication and attention to detail.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" style={{ padding: "75px 42px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1.2fr .8fr", gap: 40 }}>
          <div>
            <h2 style={{ fontSize: 42 }}>About</h2>
            <p style={{ fontFamily: "Arial, sans-serif", fontSize: 18, lineHeight: 1.8, color: "#444" }}>
              I grew up doing a lot of work around the house, and over time that naturally turned into doing this kind of work for others. I take pride in keeping properties clean, well maintained, and looking their best.
            </p>
            <p style={{ fontFamily: "Arial, sans-serif", fontSize: 18, lineHeight: 1.8, color: "#444" }}>
              Outside of running Szymanski Landscaping, I study Environmental Science & Policy with minors in GIS and Economics. When I’m not working or studying, I enjoy traveling and fishing whenever I get the chance.
            </p>
          </div>
          <div style={{ border: "1px solid #ddd", padding: 28, borderRadius: 10, background: "white" }}>
            <h3>Why homeowners choose me</h3>
            <p>• Clear communication</p>
            <p>• Reliable weekly service</p>
            <p>• Clean finished results</p>
            <p>• Local and easy to reach</p>
          </div>
        </div>
      </section>

      <section id="areas" style={{ padding: "60px 42px", background: "#315c32", color: "white" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ fontSize: 38 }}>Service Areas</h2>
          <p style={{ fontFamily: "Arial, sans-serif", fontSize: 18 }}>
            Serving local homeowners in:
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 20 }}>
            {towns.map((town) => (
              <span key={town} style={{ background: "white", color: "#315c32", padding: "10px 16px", borderRadius: 999, fontFamily: "Arial, sans-serif", fontWeight: 700 }}>
                {town}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="photos" style={{ padding: "75px 42px", background: "white" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2 style={{ fontSize: 42 }}>Recent Work</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 22, marginTop: 25 }}>
            {photos.map(([src, caption]) => (
              <div key={src} style={{ border: "1px solid #ddd", borderRadius: 10, overflow: "hidden", background: "#faf9f4" }}>
                <img src={src} alt={caption} style={{ width: "100%", height: 260, objectFit: "cover" }} />
                <p style={{ padding: 14, margin: 0, fontFamily: "Arial, sans-serif", fontWeight: 700 }}>{caption}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" style={{ padding: "75px 42px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 30 }}>
          <div>
            <h2 style={{ fontSize: 42 }}>Google Reviews</h2>
            <p style={{ fontFamily: "Arial, sans-serif", fontSize: 18, lineHeight: 1.7, color: "#444" }}>
              See reviews and find Szymanski Landscaping on Google.
            </p>
            <a
              href="https://www.google.com/search?q=Szymanski+Landscaping"
              target="_blank"
              style={{ display: "inline-block", marginTop: 18, background: "#315c32", color: "white", padding: "13px 20px", borderRadius: 6, fontFamily: "Arial, sans-serif", fontWeight: 700 }}
            >
              View Google Reviews
            </a>
          </div>
          <iframe
            src="https://www.google.com/maps?q=Szymanski+Landscaping&output=embed"
            style={{ width: "100%", height: 330, border: 0, borderRadius: 10 }}
            loading="lazy"
          />
        </div>
      </section>

      <section id="contact" style={{ padding: "75px 42px", background: "#172018", color: "white" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", display: "grid", gridTemplateColumns: ".8fr 1.2fr", gap: 35 }}>
          <div>
            <h2 style={{ fontSize: 42 }}>Request a Quote</h2>
            <p style={{ fontFamily: "Arial, sans-serif", lineHeight: 1.7 }}>
              Call, text, or send a message with your address and what kind of work you need.
            </p>
            <p><strong>Phone:</strong> 617-470-3123</p>
            <p><strong>Email:</strong> szymanski.mgt@gmail.com</p>
          </div>

          <form onSubmit={handleSubmit} style={{ display: "grid", gap: 12 }}>
            <input name="name" placeholder="Name" required style={inputStyle} />
            <input name="phone" placeholder="Phone" required style={inputStyle} />
            <input name="address" placeholder="Address / Town" style={inputStyle} />
            <select name="service" style={inputStyle}>
              {services.map((s) => <option key={s}>{s}</option>)}
            </select>
            <textarea name="message" placeholder="Tell me about the job..." rows={5} style={inputStyle} />
            <input type="hidden" name="_subject" value="New Szymanski Landscaping Lead" />
            <button style={{ background: "#75a66d", color: "#102010", border: 0, padding: 14, borderRadius: 6, fontWeight: 800 }}>
              Send Message
            </button>
            <p>{status}</p>
          </form>
        </div>
      </section>
    </main>
  );
}

const inputStyle = {
  padding: "13px",
  borderRadius: "6px",
  border: "1px solid #ccc",
  fontSize: "15px",
};
