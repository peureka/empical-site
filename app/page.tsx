"use client";

import { useEffect, useRef } from "react";

export default function Home() {
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    if (!dot) return;

    let raf: number;
    function tick() {
      const vh = window.innerHeight;
      const max = document.documentElement.scrollHeight - vh;
      const pct = max > 0 ? window.scrollY / max : 0;
      if (dot) dot.style.top = `${40 + pct * (vh - 80)}px`;
      raf = requestAnimationFrame(tick);
    }
    tick();

    const els = document.querySelectorAll("[data-reveal]");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.18 }
    );
    els.forEach((el) => obs.observe(el));

    return () => {
      cancelAnimationFrame(raf);
      obs.disconnect();
    };
  }, []);

  return (
    <>
      <div className="wm">empical</div>
      <div className="dot" ref={dotRef} />

      <div className="wave">
        <svg
          viewBox="0 0 900 80"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,40 Q20,40 40,38 T80,32 T120,40 T160,28 T200,42 T240,24 T280,40 T320,34 T360,44 T400,26 T440,40 T480,38 T520,30 T560,42 T600,26 T640,38 T680,40 T720,32 T760,42 T800,36 T840,40 T900,40"
            stroke="var(--amber)"
            strokeWidth="1"
            fill="none"
          />
        </svg>
      </div>

      <div className="content">
        <div className="p">
          <p className="q" data-reveal>
            i wish i could hear
            <br />
            his voice one more time.
          </p>
        </div>

        <div className="p">
          <p className="q" data-reveal>
            one question a day.
            <br />
            speak your answer.
            <br />
            miss it and it&apos;s gone.
          </p>
        </div>

        <div className="p p-short">
          <div className="wf" data-reveal>
            {[0, 0.15, 0.3, 0.1, 0.22, 0.35, 0.08, 0.25, 0.18, 0.32].map(
              (delay, i) => (
                <div
                  key={i}
                  className="wb"
                  style={{ animationDelay: `${delay}s` }}
                />
              )
            )}
          </div>
          <p className="s" data-reveal>
            your children don&apos;t want to read your answers.
            <br />
            they want to hear them.
          </p>
        </div>

        <div className="p">
          <div className="card" data-reveal>
            <div className="card-day">day 1</div>
            <div className="card-q">
              What have you pretended not to want?
            </div>
          </div>
          <div className="card" data-reveal>
            <div className="card-day">day 13</div>
            <div className="card-q">
              What did your father teach you without saying a word?
            </div>
          </div>
          <div className="card card-gone" data-reveal>
            <div className="card-day">day 22</div>
            <div className="card-q">
              What are you holding that you could put down today?
            </div>
            <div className="card-gone-label">gone.</div>
          </div>
          <div className="card" data-reveal>
            <div className="card-day">day 30</div>
            <div className="card-q">
              If this were your last answer, what would you need someone to
              know?
            </div>
          </div>
        </div>

        <div className="p">
          <p className="q" data-reveal>
            after 30 days,
            <br />
            hear yourself whole.
          </p>
          <p className="s" data-reveal>
            your voice. your pauses. yours.
          </p>
        </div>

        <div className="p">
          <p className="q" data-reveal>
            you&apos;re still alive.
            <br />
            say something.
          </p>
          <button className="btn" data-reveal>
            get empical
          </button>
          <p className="ios-label" data-reveal>
            ios. coming soon.
          </p>
        </div>

        <footer className="ft">
          <p>a mirror with a timer and a microphone</p>
        </footer>
      </div>
    </>
  );
}
