import { FaWhatsapp } from "react-icons/fa";
import { defaultOrderLink } from "../data/siteData.js";

export default function WhatsAppButton() {
  return (
    <a
      className="whatsapp-float"
      href={defaultOrderLink}
      target="_blank"
      rel="noreferrer"
      aria-label="Order with NAZAKAT on WhatsApp"
    >
      <FaWhatsapp />
    </a>
  );
}
