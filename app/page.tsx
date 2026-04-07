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

      <div className="content">
        {/* OPENER */}
        <div className="p">
          <p className="q" data-reveal>
            i wish i could hear
            <br />
            his voice one more time.
          </p>
        </div>

        {/* WHAT IT IS */}
        <div className="p">
          <p className="q" data-reveal>
            one question a day.
            <br />
            speak your answer.
            <br />
            miss it and it&apos;s gone.
          </p>
        </div>

        {/* THE VOICE MOMENT */}
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

        {/* DAY 1 — the question fills the page */}
        <div className="p">
          <span className="day-label" data-reveal>day 1</span>
          <p className="q-question" data-reveal>
            What have you pretended not to want?
          </p>
        </div>

        {/* DAY 13 */}
        <div className="p">
          <span className="day-label" data-reveal>day 13</span>
          <p className="q-question" data-reveal>
            What did your father teach you without saying a word?
          </p>
        </div>

        {/* DAY 22 — gone */}
        <div className="p">
          <span className="day-label" data-reveal>day 22</span>
          <p className="q-question q-gone" data-reveal>
            What are you holding that you could put down today?
          </p>
          <span className="gone-label" data-reveal>gone.</span>
        </div>

        {/* DAY 30 */}
        <div className="p">
          <span className="day-label" data-reveal>day 30</span>
          <p className="q-question" data-reveal>
            If this were your last answer, what would you need someone to know?
          </p>
        </div>

        {/* THE PORTRAIT */}
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

        {/* CLOSER */}
        <div className="p">
          <p className="q" data-reveal>
            you&apos;re still alive.
            <br />
            say something.
          </p>
        </div>

        <footer className="ft">
          <p>a mirror with a timer and a microphone</p>
        </footer>
      </div>

      <div className="fixed-footer">
        <button className="btn">get empical</button>
        <span className="ios-label">ios. coming soon.</span>
      </div>
    </>
  );
}
