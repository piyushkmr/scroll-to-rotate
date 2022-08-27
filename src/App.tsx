import "./styles.css";
import { ScrollSpeed } from "./ScrollSpeed";

export default function App() {
  const S = 5;
  return (
    <div className="App">
      <h2>Scroll To Rotate</h2>
      <div className="app-content">
        <div className="solar-system">
          <ScrollSpeed
            className="planet"
            defaultRotationSpeed={S / 27}
            scrollFactor={0.1}
            noReverse
          >
            <img src="/sun.png" alt="sun" />
          </ScrollSpeed>
          <ScrollSpeed
            className="planet"
            defaultRotationSpeed={S / 88}
            scrollFactor={0.5}
          >
            <img src="/mercury.png" alt="mercury" />
          </ScrollSpeed>
          <ScrollSpeed className="planet" defaultRotationSpeed={S / 255}>
            <img src="/venus.png" alt="venus" />
          </ScrollSpeed>
          <ScrollSpeed className="planet" defaultRotationSpeed={S / 365}>
            <img src="/earth.png" alt="earth" />
          </ScrollSpeed>
        </div>
        <div className="description">
          <ul>
            <li>Scroll Down to see effect</li>
            <li>Faster you scroll, faster the planets revolve</li>
            <li>Scroll up makes planet reverse</li>
            <li>Speed resets to normal in few seconds</li>
            <li>Flick to see planets go crazy</li>
            <li>This is real relative revolving speed</li>
            <li>Sun won't reverse, even if planets will</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
