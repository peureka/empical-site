"use client";

import { useEffect, useRef, useState, FormEvent } from "react";

export default function Home() {
  const dotRef = useRef<HTMLDivElement>(null);
  const [formOpen, setFormOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email || submitting) return;
    setSubmitting(true);
    try {
      await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      setSubmitted(true);
    } catch {
      // silent
    } finally {
      setSubmitting(false);
    }
  }

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
            the opposite of
            <br />
            morning pages.
          </p>
        </div>

        {/* WHAT IT IS */}
        <div className="p">
          <p className="q" data-reveal>
            one question a day.
            <br />
            hold to speak.
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
            you bought the notebook.
            <br />
            you quit on day four.
            <br />
            empical is for the rest of us.
          </p>
        </div>

        {/* DAY 1 */}
        <div className="p">
          <span className="day-label" data-reveal>day 1</span>
          <p className="q-question" data-reveal>
            what are you pretending
            <br />
            isn&apos;t bothering you?
          </p>
        </div>

        {/* DAY 13 */}
        <div className="p">
          <span className="day-label" data-reveal>day 13</span>
          <p className="q-question" data-reveal>
            whose voice do you hear
            <br />
            in your head when you&apos;re about
            <br />
            to do something embarrassing?
          </p>
        </div>

        {/* DAY 22 — gone */}
        <div className="p">
          <span className="day-label" data-reveal>day 22</span>
          <p className="q-question q-gone" data-reveal>
            what&apos;s the smallest thing
            <br />
            you&apos;re carrying that you
            <br />
            could put down?
          </p>
          <span className="gone-label" data-reveal>gone.</span>
        </div>

        {/* DAY 30 */}
        <div className="p">
          <span className="day-label" data-reveal>day 30</span>
          <p className="q-question" data-reveal>
            if this were your last answer,
            <br />
            what would you need
            <br />
            someone to know?
          </p>
        </div>

        {/* THE PLAYBACK */}
        <div className="p">
          <p className="q" data-reveal>
            after 30 days,
            <br />
            you hear your month.
          </p>
          <p className="s" data-reveal>
            your voice. your pauses. the days you missed.
          </p>
          <div className="card-preview" data-reveal>
            <div className="card-days">30 days.</div>
            <div className="card-strip">
              {Array.from({ length: 30 }, (_, i) => (
                <span
                  key={i}
                  className={[3, 8, 17, 22].includes(i) ? "card-mark empty" : "card-mark"}
                />
              ))}
            </div>
            <div className="card-duration">14 minutes, 22 seconds of you.</div>
            <div className="card-wm">empical</div>
          </div>
        </div>

        {/* THE DEAL */}
        <div className="p">
          <p className="q" data-reveal>
            first 30 days free.
            <br />
            then one payment.
            <br />
            yours forever.
          </p>
          <p className="price" data-reveal>$38</p>
          <p className="price-note" data-reveal>no subscription. no renewal. no tricks.</p>
        </div>

        {/* THE ANTI-FEATURE LIST */}
        <div className="p p-short">
          <p className="s" data-reveal>
            no ai. no cloud. no account.
            <br />
            no streaks. no analytics. no sharing of audio.
            <br />
            everything stays on your phone.
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
      </div>

      <div className="fixed-footer">
        {submitted ? (
          <span className="ios-label" style={{ opacity: 1 }}>you&apos;re in.</span>
        ) : formOpen ? (
          <form onSubmit={handleSubmit} className="waitlist-form">
            <input
              type="email"
              placeholder="your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="waitlist-input"
              autoFocus
              required
            />
            <button type="submit" className="btn" style={{ opacity: 1 }} disabled={submitting}>
              {submitting ? "..." : "join"}
            </button>
          </form>
        ) : (
          <>
            <button className="btn" onClick={() => setFormOpen(true)}>get empical</button>
            <span className="ios-label">ios. coming soon.</span>
          </>
        )}
      </div>
    </>
  );
}
