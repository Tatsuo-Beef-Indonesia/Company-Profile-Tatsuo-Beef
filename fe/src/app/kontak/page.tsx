import type { Metadata } from "next";
import ContactExperience from "@/components/contact-experience";
import "./contact.css";

export const metadata: Metadata = {
  title: "Hubungi Kami — Tatsuo Beef",
  description:
    "Hubungi Tatsuo Beef untuk kebutuhan daging dan bahan pangan usaha Anda. Temukan kantor perwakilan kami di Solo serta gudang dan produksi di Jakarta.",
  alternates: { canonical: "/kontak" },
};

export default function ContactPage() {
  return <ContactExperience />;
}
