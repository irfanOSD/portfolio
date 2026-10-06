import { FaEnvelope, FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa";

export const contactLinks = [
  {
    id: "email",
    label: "Email",
    value: "irfaaan1025@gmail.com",
    href: "mailto:irfaaan1025@gmail.com",
    icon: FaEnvelope,
    copy: "irfaaan1025@gmail.com",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "Irfan Alam Sourav",
    href: "https://www.linkedin.com/in/irfan-alam-sourav-b16683366",
    icon: FaLinkedinIn,
    external: true,
  },
  {
    id: "github",
    label: "GitHub",
    value: "github.com/irfanOSD",
    href: "https://github.com/irfanOSD",
    icon: FaGithub,
    external: true,
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    value: "+880 1728 645775",
    href: "https://wa.me/8801728645775",
    icon: FaWhatsapp,
    external: true,
  },
];