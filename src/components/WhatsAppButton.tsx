import type { ReactNode } from "react";
import { WHATSAPP_URL } from "../config";

export default function WhatsAppButton({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <a className={`btn b1 ${className}`} href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}
