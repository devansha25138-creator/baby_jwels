import { FiArrowRight } from "react-icons/fi";

export default function LuxuryButton({
  children,
  variant = "gold",
  className = "",
  href = "#collections",
}) {
  return (
    <a className={`luxury-button luxury-button--${variant} ${className}`} href={href}>
      <span>{children}</span>
      <FiArrowRight aria-hidden="true" />
    </a>
  );
}
