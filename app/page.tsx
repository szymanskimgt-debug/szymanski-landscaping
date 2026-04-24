export default function Home() {
  return (
    <main style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}>
      
      {/* NAVBAR */}
      <nav style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 40px",
        borderBottom: "1px solid #eee"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <img src="/logo.jpg" alt="Logo" style={{ height: "40px" }} />
          <strong>Szymanski Landscaping</strong>
        </div>

        <div style={{ display: "flex", gap: "20px", fontSize: "14px" }}>
          <span>Services</span>
          <span>About</span>
          <span>Photos</span>
          <span>Contact</span>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        padding: "60px 40px",
        alignItems: "center",
        gap: "40px"
      }}>
        
        <div>
          <h1 style={{
            fontSize: "48px",
            lineHeight: "1.1",
            marginBottom: "20px"
          }}>
            Clean, reliable lawn care you can trust
          </h1>

          <p style={{ color: "#555", marginBottom: "20px" }}>
            Weekly mowing, cleanups, mulching, and more. Serving local homeowners
            with dependable, high-quality work.
          </p>

          <button style={{
            padding: "12px 20px",
            backgroundColor: "#2f5d3a",
            color: "white",
            border: "none",
            borderRadius: "6px"
          }}>
            Get a Quote
          </button>
        </div>

        <img 
          src="/hero.jpg" 
          alt="Lawn care"
          style={{
            width: "100%",
            borderRadius: "12px"
          }}
        />
      </section>

      {/* ABOUT SECTION */}
      <section style={{
        padding: "60px 40px",
        backgroundColor: "#f9f9f9"
      }}>
        <h2 style={{ fontSize: "28px", marginBottom: "20px" }}>
          About
        </h2>

        <p style={{ maxWidth: "700px", color: "#555" }}>
          Hi, I’m Piotr, the owner of Szymanski Landscaping. I started this business
          working in my neighborhood and have grown it through reliable service and
          attention to detail. I focus on consistent, clean work and building
          long-term relationships with clients.
        </p>
      </section>

    </main>
  );
}
