import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

const socialLinks = [
  {
    name: "Facebook",
    icon: FaFacebookF,
    href: "https://www.facebook.com/profile.php?id=61591398624751",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    href: "https://www.instagram.com/orviondigital?igsh=cjdxc2FzNHI0OWl2",
  },
  {
    name: "TikTok",
    icon: FaTiktok,
    href: "https://www.tiktok.com/@orviondigital?_r=1&_t=ZS-984nVv1O2yL",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedinIn,
    href: "https://www.linkedin.com/in/orvion-digital-5b919741a",
  },
  {
    name: "WhatsApp",
    icon: FaWhatsapp,
    href: "https://wa.me/27647569787?text=Hi%20Orvion%20Digital%2C%20I%20found%20you%20through%20your%20website%20and%20would%20like%20to%20discuss%20how%20you%20can%20help%20grow%20my%20business.",
  },
];
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* TOP */}

        <div className="footer-top">
          <div className="footer-brand">

            <a href="/" className="footer-logo">
              <div className="logo-circle">
                <Image
                  src="/logo.jpg"
                  alt="Orvion Digital logo"
                  width={48}
                  height={48}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>

              <span>
                ORVION <strong>DIGITAL</strong>
              </span>
            </a>

            <p>
              We help businesses grow with premium websites, SEO, lead
              generation, Google Business, social media and digital strategies
              designed around real business growth.
            </p>

            {/* SOCIAL MEDIA */}

            <div className="social-section">
              <span className="social-label">
                Connect With Us
              </span>

              <div className="social-links">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target={
                      social.href === "#"
                        ? undefined
                        : "_blank"
                    }
                    rel={
                      social.href === "#"
                        ? undefined
                        : "noreferrer"
                    }
                    className="social-button"
                    aria-label={social.name}
                    title={social.name}
                  >
                    <social.icon size={17} />
                  </a>
                ))}
              </div>

              <span className="social-note">
                Follow Orvion Digital
              </span>
            </div>

            <a
              href="https://wa.me/27647569787?text=Hi%20Orvion%20Digital%2C%20I%20found%20you%20through%20your%20website%20and%20would%20like%20to%20discuss%20how%20you%20can%20help%20grow%20my%20business."
              target="_blank"
              rel="noreferrer"
              className="footer-whatsapp"
            >
              Chat with us on WhatsApp
              <span>→</span>
            </a>

          </div>

          {/* LINKS */}

          <div className="footer-links">

            <div>
              <h4>Explore</h4>

              <a href="/">
                Home
              </a>

              <a href="/services">
                Services
              </a>

              <a href="/work">
                Our Work
              </a>

              <a href="/about">
                About
              </a>

              <a href="/reviews">
                Reviews
              </a>

              <a href="/contact">
                Contact
              </a>
            </div>

            <div>
              <h4>Services</h4>

              <a href="/services">
                Website Design
              </a>

              <a href="/services">
                SEO
              </a>

              <a href="/services">
                Lead Generation
              </a>

              <a href="/services">
                Google Business
              </a>

              <a href="/services">
                Social Media
              </a>

              <a href="/services">
                Growth Strategy
              </a>
            </div>

            <div>
              <h4>Contact</h4>

              <a href="mailto:orviondigitalsa@gmail.com">
                orviondigitalsa@gmail.com
              </a>

              <a
                href="https://wa.me/27647569787?text=Hi%20Orvion%20Digital%2C%20I%20found%20you%20through%20your%20website%20and%20would%20like%20to%20discuss%20how%20you%20can%20help%20grow%20my%20business."
                target="_blank"
                rel="noreferrer"
              >
                +27 64 756 9787
              </a>

              <span>
                Potchefstroom
              </span>

              <span>
                North West
              </span>

              <span>
                South Africa
              </span>

              <a
                href="/contact"
                className="contact-link"
              >
                Book a Consultation →
              </a>
            </div>

          </div>
        </div>

        {/* CTA */}

        <div className="footer-cta">

          <div>
            <span>
              Ready when you are.
            </span>

            <h3>
              Let&apos;s build something
              <br />
              people remember.
            </h3>

            <p>
              Better visibility. Stronger brands.
              More opportunities.
            </p>
          </div>

          <a
            href="/contact"
            className="footer-button"
          >
            Start a Project
            <span>→</span>
          </a>

        </div>

        {/* BOTTOM */}

        <div className="footer-bottom">

          <p>
            © {new Date().getFullYear()} Orvion Digital.
            All rights reserved.
          </p>

          <div className="footer-bottom-links">
            <a href="/services">
              Services
            </a>

            <span>•</span>

            <a href="/work">
              Our Work
            </a>

            <span>•</span>

            <a href="/contact">
              Contact
            </a>
          </div>

          <p>
            Built by Orvion Digital.
          </p>

        </div>
      </div>

      <style>{`

        .footer {
          position: relative;

          padding:
            90px 20px
            30px;

          background:
            radial-gradient(
              circle at 15% 20%,
              rgba(
                212,
                175,
                55,
                0.055
              ),
              transparent 28%
            ),
            #050505;

          border-top:
            1px solid
            rgba(
              255,
              255,
              255,
              0.07
            );
        }


        .footer-container {
          max-width: 1250px;

          margin: 0 auto;
        }


        /* TOP */


        .footer-top {
          display: grid;

          grid-template-columns:
            0.9fr 1.4fr;

          gap: 90px;

          padding-bottom: 65px;
        }


        .footer-brand {
          max-width: 470px;
        }


        .footer-logo {
          display: inline-flex;

          align-items: center;

          gap: 13px;

          font-size: 20px;

          font-weight: 900;

          letter-spacing:
            -0.5px;

          margin-bottom: 25px;
        }


        .footer-logo strong {
          color: #d4af37;
        }


        .logo-circle {
          width: 48px;

          height: 48px;

          overflow: hidden;

          border-radius: 50%;

          border:
            1px solid
            rgba(
              212,
              175,
              55,
              0.35
            );

          flex-shrink: 0;

          box-shadow:
            0 0 30px
            rgba(
              212,
              175,
              55,
              0.09
            );
        }


        .footer-brand > p {
          color: #858585;

          line-height: 1.75;

          font-size: 15px;
        }


        /* SOCIALS */


        .social-section {
          margin-top: 28px;
        }


        .social-label {
          display: block;

          margin-bottom: 12px;

          color: #666666;

          font-size: 10px;

          font-weight: 800;

          letter-spacing: 2px;

          text-transform:
            uppercase;
        }


        .social-links {
          display: flex;

          align-items: center;

          gap: 9px;

          flex-wrap: wrap;
        }


        .social-button {
          width: 42px;

          height: 42px;

          display: flex;

          align-items: center;

          justify-content: center;

          border-radius: 12px;

          background:
            rgba(
              255,
              255,
              255,
              0.03
            );

          border:
            1px solid
            rgba(
              255,
              255,
              255,
              0.09
            );

          color: #aaaaaa;

          font-size: 13px;

          font-weight: 900;

          transition:
            transform
            0.25s ease,
            background
            0.25s ease,
            border-color
            0.25s ease,
            color
            0.25s ease;
        }


        .social-button:hover {
          transform:
            translateY(-4px);

          background:
            rgba(
              212,
              175,
              55,
              0.10
            );

          border-color:
            rgba(
              212,
              175,
              55,
              0.30
            );

          color: #d4af37;
        }


        .social-note {
          display: block;

          margin-top: 10px;

          color: #3f3f3f;

          font-size: 10px;
        }


        .footer-whatsapp {
          display: inline-flex;

          align-items: center;

          gap: 10px;

          margin-top: 25px;

          color: #d4af37;

          font-size: 14px;

          font-weight: 800;
        }


        .footer-whatsapp span {
          transition:
            transform
            0.25s ease;
        }


        .footer-whatsapp:hover span {
          transform:
            translateX(5px);
        }


        /* LINKS */


        .footer-links {
          display: grid;

          grid-template-columns:
            repeat(
              3,
              minmax(
                0,
                1fr
              )
            );

          gap: 45px;
        }


        .footer-links > div {
          display: flex;

          flex-direction:
            column;

          align-items:
            flex-start;

          gap: 13px;
        }


        .footer-links h4 {
          color: #ffffff;

          font-size: 14px;

          margin-bottom: 9px;
        }


        .footer-links a,
        .footer-links span {
          color: #777777;

          font-size: 13px;

          line-height: 1.5;

          transition:
            color
            0.2s ease;
        }


        .footer-links a:hover {
          color: #d4af37;
        }


        .footer-links
        .contact-link {
          margin-top: 8px;

          color: #d4af37;

          font-weight: 800;
        }


        /* CTA */


        .footer-cta {
          padding: 42px;

          display: flex;

          align-items: center;

          justify-content:
            space-between;

          gap: 35px;

          border-radius: 28px;

          background:
            linear-gradient(
              135deg,
              rgba(
                212,
                175,
                55,
                0.12
              ),
              rgba(
                255,
                255,
                255,
                0.025
              )
            );

          border:
            1px solid
            rgba(
              212,
              175,
              55,
              0.18
            );
        }


        .footer-cta
        > div
        > span {
          color: #d4af37;

          font-size: 12px;

          font-weight: 800;

          letter-spacing: 2px;

          text-transform:
            uppercase;
        }


        .footer-cta h3 {
          margin-top: 10px;

          font-size:
            clamp(
              30px,
              4vw,
              50px
            );

          line-height: 1.05;

          letter-spacing:
            -2px;
        }


        .footer-cta p {
          margin-top: 12px;

          color: #777777;

          font-size: 13px;
        }


        .footer-button {
          flex-shrink: 0;

          display: flex;

          align-items: center;

          gap: 14px;

          padding:
            16px 24px;

          border-radius:
            999px;

          background:
            linear-gradient(
              135deg,
              #f3d978,
              #d4af37
            );

          color: #050505;

          font-size: 14px;

          font-weight: 900;

          transition:
            transform
            0.25s ease,
            box-shadow
            0.25s ease;
        }


        .footer-button:hover {
          transform:
            translateY(-3px);

          box-shadow:
            0 18px 45px
            rgba(
              212,
              175,
              55,
              0.18
            );
        }


        /* BOTTOM */


        .footer-bottom {
          margin-top: 35px;

          padding-top: 25px;

          display: flex;

          align-items: center;

          justify-content:
            space-between;

          gap: 20px;

          border-top:
            1px solid
            rgba(
              255,
              255,
              255,
              0.06
            );

          color: #4e4e4e;

          font-size: 11px;
        }


        .footer-bottom-links {
          display: flex;

          align-items: center;

          gap: 10px;
        }


        .footer-bottom-links a {
          color: #555555;

          transition:
            color
            0.2s ease;
        }


        .footer-bottom-links a:hover {
          color: #d4af37;
        }


        .footer-bottom-links span {
          color: #333333;
        }


        /* TABLET */


        @media (
          max-width: 900px
        ) {

          .footer-top {
            grid-template-columns:
              1fr;

            gap: 50px;
          }


          .footer-links {
            grid-template-columns:
              repeat(
                2,
                minmax(
                  0,
                  1fr
                )
              );
          }

        }


        /* MOBILE */


        @media (
          max-width: 650px
        ) {

          .footer {
            padding:
              70px
              18px
              25px;
          }


          .footer-links {
            grid-template-columns:
              1fr;

            gap: 35px;
          }


          .footer-cta {
            flex-direction:
              column;

            align-items:
              flex-start;

            padding: 28px;
          }


          .footer-bottom {
            flex-direction:
              column;

            align-items:
              flex-start;
          }


          .footer-bottom-links {
            flex-wrap: wrap;
          }

        }

      `}</style>
    </footer>
  );
}