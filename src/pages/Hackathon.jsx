import GhostWord from "../components/GhostWord";
import logoAbleton from "../assets/logo-ableton.png";
import { hackathon } from "../data/content";
import "./Hackathon.css";

export default function Hackathon() {
  return (
    <div className="page-hackathon">
      <div className="page-head wrap">
        <GhostWord word="HACK" top="-8%" side="right" size="14vw" />
        <span className="eyebrow eyebrow-with-logo">
          Powered by
          <img src={logoAbleton} alt="Ableton" className="eyebrow-logo" />
        </span>
        <h1 className="section-title">Hackathon</h1>
        <p className="section-sub" style={{ maxWidth: 720 }}>
          {hackathon.description}
        </p>
      </div>

      <div className="wrap">
        <div className="hackathon-timeline">
          {hackathon.timeline.map((step, i) => (
            <div className="hackathon-step" key={i}>
              <div className="hackathon-step-marker">
                <span>{i + 1}</span>
              </div>
              <div className="hackathon-step-body">
                <span className="hackathon-step-range">{step.range}</span>
                <h3 className="hackathon-step-title">{step.title}</h3>
                <p className="hackathon-step-desc">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="section section-alt">
        <div className="wrap">
          <span className="eyebrow">Premiación</span>
          <h2 className="section-title">Premios</h2>
          <div className="hackathon-prizes">
            {hackathon.prizes.map((p) => (
              <div className="hackathon-prize-card" key={p.place}>
                <span className="hackathon-prize-place">{p.place}</span>
                <span className="hackathon-prize-name">{p.prize}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
