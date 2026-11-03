"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Arrow, Asterisk } from "./icons";
import MobileOptimizedImage from "./mobile-optimized-image";
import { company, whatsapp } from "@/lib/company";

const interests = [
  "Katalog & harga",
  "Pengadaan rutin",
  "Distribusi",
  "Lainnya",
];

export default function ContactExperience() {
  const root = useRef<HTMLElement>(null);
  const [interest, setInterest] = useState(interests[0]);
  const [name, setName] = useState("");
  const [business, setBusiness] = useState("");
  const [location, setLocation] = useState("");
  const [notes, setNotes] = useState("");
  const [sales, setSales] = useState(company.sales[0].number);
  const message = `Halo Tatsuo Beef, saya ${name.trim() || "ingin berdiskusi"}${business.trim() ? ` dari ${business.trim()}` : ""}.\n\nSaya ingin menanyakan ${interest.toLowerCase()}.${location.trim() ? `\nLokasi usaha: ${location.trim()}` : ""}${notes.trim() ? `\n\n${notes.trim()}` : ""}\n\nTerima kasih.`;

  useEffect(() => {
    const element = root.current;
    if (!element) return;
    gsap.registerPlugin(ScrollTrigger);
    const media = gsap.matchMedia();
    const context = gsap.context(() => {
      media.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".contact-title-line > span", {
          yPercent: 110,
          rotation: 2,
          duration: 1.1,
          stagger: 0.14,
          ease: "power4.out",
        });
        gsap.from(".contact-opening", {
          y: 20,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          delay: 0.25,
        });
        gsap.from(".contact-hello", {
          scale: 0.75,
          rotation: -18,
          opacity: 0,
          duration: 1,
          delay: 0.4,
          ease: "back.out(1.3)",
        });
        gsap.to(".contact-hello svg", {
          rotation: 100,
          ease: "none",
          scrollTrigger: {
            trigger: ".contact-hero",
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
        gsap.utils.toArray<HTMLElement>(".contact-reveal").forEach((item) => {
          gsap.fromTo(
            item,
            { y: 28, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: {
                trigger: item,
                start: "top 92%",
                toggleActions: "play none none reverse",
              },
            },
          );
        });
        gsap.fromTo(
          ".contact-location-photo img",
          { scale: 1.1 },
          {
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: ".contact-location-photo",
              start: "top bottom",
              end: "bottom 45%",
              scrub: true,
            },
          },
        );
      });
    }, element);
    return () => {
      media.revert();
      context.revert();
    };
  }, []);

  return (
    <main id="main" className="tatsuo-contact" ref={root}>
      <section className="contact-hero" aria-labelledby="contact-title">
        <div className="contact-meta contact-opening">
          <span>HUBUNGI TATSUO BEEF</span>
          <span>BAHAN BAIK. PERCAKAPAN BAIK.</span>
        </div>
        <div className="contact-title-layout">
          <h1 id="contact-title">
            <span className="contact-title-line">
              <span>Mari mulai</span>
            </span>
            <span className="contact-title-line">
              <span>
                dari <em>halo.</em>
              </span>
            </span>
          </h1>
          <a
            className="contact-hello"
            href="#tulis-pesan"
            aria-label="Ceritakan kebutuhan Anda"
          >
            <Asterisk />
            <span>
              Good meat.
              <br />
              Great conversation.
            </span>
            <Arrow diagonal />
          </a>
        </div>
        <div className="contact-hero-bottom contact-opening">
          <span className="contact-section-index">01 — PERCAKAPAN PERTAMA</span>
          <p>
            Punya rencana untuk dapur Anda?
            <br />
            Kami ingin mendengarnya.
          </p>
          <a href="#tulis-pesan">
            Ceritakan kebutuhan Anda <Arrow />
          </a>
        </div>
      </section>

      <section
        className="contact-conversation"
        id="tulis-pesan"
        aria-labelledby="contact-conversation-title"
      >
        <div className="contact-direct">
          <div className="contact-reveal">
            <span className="contact-section-index">
              TIM KAMI, LANGSUNG UNTUK ANDA.
            </span>
            <h2 id="contact-conversation-title">
              Sajian istimewa.
              <br />
              <em>Dimulai bersama.</em>
            </h2>
            <p>
              Mulai dari pilihan produk, penawaran harga, hingga kebutuhan
              pengadaan. Mari bicarakan langkah berikutnya.
            </p>
          </div>
          <div className="contact-sales">
            {company.sales.map((person, index) => (
              <article
                className="contact-person contact-reveal"
                key={person.number}
              >
                <div className="contact-person-top">
                  <span>
                    0{index + 1} / {person.role.toUpperCase()}
                  </span>
                  <a
                    href={`tel:+${person.number}`}
                    aria-label={`Telepon ${person.name}`}
                  >
                    Telepon <Arrow diagonal />
                  </a>
                </div>
                <a
                  className="contact-person-main"
                  href={whatsapp(undefined, person.number)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div>
                    <h3>{person.name}</h3>
                    <span>{person.phone}</span>
                  </div>
                  <span className="contact-person-arrow">
                    <Arrow diagonal />
                  </span>
                </a>
              </article>
            ))}
          </div>
          <div className="contact-email contact-reveal">
            <span>LEBIH NYAMAN LEWAT EMAIL?</span>
            <a href={`mailto:${company.email}`}>
              tatsuobeefindonesia
              <wbr />
              @gmail.com <Arrow diagonal />
            </a>
          </div>
        </div>
        <div className="contact-note contact-reveal">
          <div className="contact-note-top">
            <span>CATATAN UNTUK TATSUO</span>
            <Asterisk />
          </div>
          <h2>
            Apa yang bisa
            <br />
            kami bantu?
          </h2>
          <form
            action={`https://wa.me/${sales}`}
            method="get"
            target="_blank"
            rel="noopener noreferrer"
          >
            <input type="hidden" name="text" value={message} />
            <fieldset className="contact-interests">
              <legend>Saya ingin membahas</legend>
              <div>
                {interests.map((item) => (
                  <button
                    type="button"
                    key={item}
                    aria-pressed={interest === item}
                    onClick={() => setInterest(item)}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </fieldset>
            <div className="contact-fields">
              <label>
                Nama Anda <span>*</span>
                <input
                  autoComplete="name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Nama lengkap"
                  maxLength={100}
                  required
                />
              </label>
              <label>
                Nama usaha
                <input
                  autoComplete="organization"
                  value={business}
                  onChange={(event) => setBusiness(event.target.value)}
                  placeholder="Restoran, hotel, katering…"
                  maxLength={150}
                />
              </label>
              <label className="contact-field-wide">
                Lokasi usaha
                <input
                  autoComplete="address-level2"
                  value={location}
                  onChange={(event) => setLocation(event.target.value)}
                  placeholder="Kota / kabupaten"
                  maxLength={150}
                />
              </label>
              <label className="contact-field-wide">
                Ceritakan kebutuhan Anda
                <textarea
                  value={notes}
                  onChange={(event) => setNotes(event.target.value)}
                  placeholder="Produk yang dicari, perkiraan jumlah, atau pertanyaan Anda."
                  rows={3}
                  maxLength={1500}
                />
              </label>
              <label className="contact-field-wide">
                Hubungi tim
                <select
                  value={sales}
                  onChange={(event) => setSales(event.target.value)}
                >
                  {company.sales.map((person) => (
                    <option key={person.number} value={person.number}>
                      {person.name} — {person.phone}
                    </option>
                  ))}
                </select>
              </label>
            </div>
            <button className="contact-send" type="submit">
              Lanjut ke WhatsApp <Arrow diagonal />
            </button>
            <p className="contact-form-hint">
              Pesan akan disiapkan di WhatsApp. Anda bisa meninjaunya sebelum
              mengirim.
            </p>
          </form>
        </div>
      </section>

      <section
        className="contact-location"
        aria-labelledby="contact-location-title"
      >
        <div className="contact-location-top contact-reveal">
          <span className="contact-section-index">02 — TEMUKAN KAMI</span>
          <div className="contact-location-heading">
            <h2 id="contact-location-title">
              Dua tempat.
              <br />
              <em>Satu komitmen.</em>
            </h2>
            <p className="contact-location-intro">
              Kantor perwakilan di Solo. Gudang dan produksi di Jakarta.
              Terhubung untuk kebutuhan bisnis Anda.
            </p>
          </div>
        </div>
        <div
          className="contact-location-route contact-reveal"
          aria-hidden="true"
        >
          <span>SOLO</span>
          <i />
          <span>JAKARTA</span>
        </div>
        <div className="contact-location-grid">
          {Object.entries(company.locations).map(([key, location], index) => (
            <article
              key={key}
              className={`contact-address-card contact-address-card--${key} contact-reveal`}
              aria-labelledby={`contact-location-${key}`}
            >
              <div
                className={`contact-location-photo contact-location-photo--${key}`}
              >
                <MobileOptimizedImage
                  src={
                    key === "jakarta"
                      ? "/images/distribution/dock-restored-v1.webp"
                      : "/images/distribution/delivery-restored-v1.webp"
                  }
                  alt={
                    key === "jakarta"
                      ? "Dokumentasi fasilitas distribusi Tatsuo Beef"
                      : "Dokumentasi kendaraan pengiriman Tatsuo Beef"
                  }
                  fill
                  sizes="(max-width:760px) calc(100vw - 40px), 50vw"
                />
                <span>
                  {key === "jakarta"
                    ? "DI BALIK SETIAP PASOKAN."
                    : "RUANG UNTUK TERHUBUNG."}
                </span>
              </div>
              <div className="contact-address-content">
                <div className="contact-address-head">
                  <span>
                    {String(index + 1).padStart(2, "0")} / {location.role}
                  </span>
                  <span className="contact-location-dot" aria-hidden="true" />
                </div>
                <h3 id={`contact-location-${key}`}>
                  {location.city}
                  <span>.</span>
                </h3>
                <p className="contact-location-role">{location.label}</p>
                <p className="contact-location-description">
                  {location.description}
                </p>
                <address>{location.address}</address>
                <a
                  className="contact-map-link"
                  href={location.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Buka lokasi ${location.city} di Google Maps`}
                >
                  Lihat lokasi {location.city} <Arrow diagonal />
                </a>
                <div className="contact-address-foot">
                  <span>{location.area}</span>
                  <span>{location.postcode}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section
        className="contact-social contact-reveal"
        aria-label="Media sosial Tatsuo"
      >
        <p>
          Kenal lebih dekat.
          <br />
          <em>Ikuti cerita kami.</em>
        </p>
        <div>
          <a
            href={company.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram <Arrow diagonal />
          </a>
          <a
            href={company.social.tiktok}
            target="_blank"
            rel="noopener noreferrer"
          >
            TikTok <Arrow diagonal />
          </a>
        </div>
      </section>
    </main>
  );
}
