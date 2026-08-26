import "./GhostWord.css";

export default function GhostWord({ word, top = "0", side = "left", size = "18vw" }) {
  return (
    <span
      className={`ghost-word ghost-${side}`}
      style={{ top, fontSize: size }}
      aria-hidden="true"
    >
      {word}
    </span>
  );
}
