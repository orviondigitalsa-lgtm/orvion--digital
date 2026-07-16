import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingTools from "@/components/FloatingTools";
import Contact from "@/components/Contact";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Start Growing Your Business",
  description:
    "Contact Orvion Digital to discuss website design, SEO, lead generation, Google Business, social media management and digital growth strategies for your business.",
};
export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main
        style={{
          background: "#050505",
          color: "#ffffff",
          minHeight: "100vh",
        }}
      >
        <section
          style={{
            padding: "180px 20px 70px",
            background:
              "radial-gradient(circle at 20% 20%, rgba(212,175,55,0.10), transparent 30%), #050505",
          }}
        >
          <div
            style={{
              width: "min(calc(100% - 40px), 1250px)",
              margin: "0 auto",
            }}
          >
            <span
              style={{
                display: "inline-block",
                color: "#d4af37",
                fontSize: "13px",
                fontWeight: 800,
                letterSpacing: "3px",
                textTransform: "uppercase",
                marginBottom: "22px",
              }}
            >
              Contact Orvion Digital
            </span>

            <h1
              style={{
                maxWidth: "1050px",
                fontSize: "clamp(54px, 8vw, 100px)",
                lineHeight: 0.96,
                letterSpacing: "-5px",
                fontWeight: 900,
              }}
            >
              Let&apos;s build something
              <br />
              <span style={{ color: "#777777" }}>
                that grows your business.
              </span>
            </h1>

            <p
              style={{
                maxWidth: "760px",
                marginTop: "30px",
                color: "#999999",
                fontSize: "18px",
                lineHeight: 1.75,
              }}
            >
              Whether you need a new website, better Google visibility, more
              leads, stronger social media or a full digital growth strategy,
              tell us what you want to achieve and we&apos;ll help you find the
              right next step.
            </p>
          </div>
        </section>

        <Contact />
      </main>

      <Footer />
      <FloatingTools />
    </>
  );
}