import { DOMAIN, subdomains } from "./subdomains.js";

function Prompt({ children }) {
  return (
    <p className="line">
      <span className="prompt">fezalion@xyz</span>
      <span className="dim">:</span>
      <span className="path">~</span>
      <span className="dim">$</span> {children}
    </p>
  );
}

export default function App() {
  return (
    <main className="terminal">
      <div className="titlebar">
        <span className="dot" />
        <span className="dot" />
        <span className="dot" />
        <span className="title">fezalion@xyz: ~</span>
      </div>

      <div className="screen">
        <Prompt>whoami</Prompt>
        <h1 className="name">Fezalion</h1>

        <Prompt>ls subdomains/</Prompt>
        <ul className="links">
          {subdomains.map(({ name, desc }) => {
            const host = `${name}.${DOMAIN}`;
            return (
              <li key={name}>
                <a href={`https://${host}`}>{host}</a>
                {desc && <span className="desc"># {desc}</span>}
              </li>
            );
          })}
        </ul>

        <Prompt>
          <span className="cursor" aria-hidden="true" />
        </Prompt>
      </div>
    </main>
  );
}
