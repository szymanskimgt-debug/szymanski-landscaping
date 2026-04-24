export default function Home() {
  return (
    <main style={{ fontFamily: "Georgia, serif", color: "#1a1a1a" }}>

      {/* NAVBAR */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 40px",
        borderBottom: "1px solid #eee"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <img src="/logo.jpg" style={{ height: 40 }} />
          <h2 style={{ margin: 0 }}>Szymanski Landscaping</h2>
        </div>

        <div style={{ display: "flex", gap: 25, alignItems: "center", fontFamily: "Arial" }}>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#photos">Photos</a>
          <a href="#contact">Contact</a>

          <a href="#contact" style={{
            background: "#315c32",
            color: "white",
            padding: "10px 16px",
            borderRadius: 6,
            fontWeight: "bold"
          }}>
            Request a Quote
          </a>
        </div>
      </div>

      {/* HERO */}
      <section style={{
        display: "flex",
        padding: "80px 40px",
        gap: 40,
        alignItems: "center"
      }}>
        <div style={{ flex: 1 }}>
          <p style={{ color: "#315c32", fontFamily: "Arial", fontWeight: "bold" }}>
            LOCAL • RELIABLE • DONE RIGHT
          </p>

          <h1 style={{ fontSize: 52, margin: "10px 0" }}>
            Lawn care you can count on.
          </h1>

          <p style={{ fontFamily: "Arial", color: "#555", fontSize: 18 }}>
            Weekly mowing, cleanups, mulching, and yard work for homeowners who
            want their property kept clean and maintained.
          </p>

          <a href="#contact" style={{
            marginTop: 20,
            display: "inline-block",
            background: "#315c32",
            color: "white",
            padding: "14px 20px",
            borderRadius: 6,
            fontWeight: "bold"
          }}>
            Get a Quote
          </a>
        </div>

        <img src="/hero.jpg" style={{
          flex: 1,
          borderRadius: 16,
          width: "100%",
          objectFit: "cover"
        }} />
      </section>

      {/* SERVICES */}
      <section id="services" style={{
        padding: "80px 40px",
        background: "#faf9f4"
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>

          <h2 style={{ textAlign: "center", fontSize: 40 }}>
            Services
          </h2>

          <p style={{
            textAlign: "center",
            fontFamily: "Arial",
            color: "#555",
            marginBottom: 40
          }}>
            Straightforward yard care that keeps your property looking its best.
          </p>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 25
          }}>

            {serviceCard("/hero.jpg", "Weekly Lawn Mowing", "Clean, striped cuts with trimming and detail work every visit.")}

            {serviceCard("/images/debris-removal.jpeg", "Spring & Fall Cleanups", "Full property cleanups to remove leaves, sticks, and debris.")}

            {serviceCard("/images/garden-bed-cleanup.jpeg", "Mulching", "Fresh mulch installation to improve curb appeal.")}

            {serviceCard("/images/brush-clearing.jpeg", "Brush Clearing", "Overgrown areas cleared out and opened up.")}

            {serviceCard("/images/leaf-cleanup.jpeg", "Leaf Cleanup", "Efficient leaf removal with no mess left behind.")}

            {serviceCard("/images/tree-yard-work.jpeg", "General Yard Work", "Small jobs and touch-ups to keep your yard looking sharp.")}

          </div>

          {/* CTA */}
          <div style={{
            marginTop: 40,
            padding: 25,
            border: "1px solid #ddd",
            borderRadius: 12,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 20,
            background: "white"
          }}>
            <div>
              <h3>Not sure what your property needs?</h3>
              <p style={{ fontFamily: "Arial", color: "#555" }}>
                Call or text and I’ll help you figure out the best option.
              </p>
            </div>

            <a href="#contact" style={{
              background: "#315c32",
              color: "white",
              padding: "12px 18px",
              borderRadius: 6,
              fontWeight: "bold"
            }}>
              Request a Quote
            </a>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <section id="contact" style={{
        padding: "60px 40px",
        textAlign: "center"
      }}>
        <h2>Contact</h2>
        <p style={{ fontFamily: "Arial" }}>
          Call or text: <strong>617-470-3123</strong>
        </p>
      </section>

    </main>
  );
}

/* SERVICE CARD FUNCTION */
function serviceCard(img: string, title: string, desc: string) {
  return (
    <div style={{
      border: "1px solid #ddd",
      borderRadius: 12,
      overflow: "hidden",
      background: "white"
    }}>
      <img src={img} style={{
        width: "100%",
        height: 200,
        objectFit: "cover"
      }} />

      <div style={{ padding: 20 }}>
        <h3>{title}</h3>
        <p style={{ fontFamily: "Arial", color: "#555" }}>{desc}</p>
      </div>
    </div>
  );
}
