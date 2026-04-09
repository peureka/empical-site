import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "empical — privacy",
  description: "empical privacy policy",
};

export default function Privacy() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0F0F0F",
        color: "#E8E4DE",
        padding: "4rem 2rem",
        maxWidth: 600,
        margin: "0 auto",
        fontFamily: "Sohne, -apple-system, Helvetica, sans-serif",
        fontSize: "0.85rem",
        lineHeight: 2,
        letterSpacing: "0.02em",
      }}
    >
      <h1
        style={{
          fontFamily: "Sohne Mono, SF Mono, monospace",
          fontWeight: 400,
          fontSize: "0.6rem",
          letterSpacing: "0.35em",
          color: "#9A9590",
          marginBottom: "3rem",
        }}
      >
        empical
      </h1>

      <h2 style={{ fontWeight: 400, fontSize: "1rem", marginBottom: "1.5rem" }}>
        privacy policy
      </h2>

      <p style={{ marginBottom: "1.5rem", color: "#5C5753" }}>
        effective april 2026
      </p>

      <p style={{ marginBottom: "1.5rem" }}>
        empical records your voice. nothing leaves your phone.
      </p>

      <p style={{ marginBottom: "1.5rem" }}>
        your recordings and your answers are stored locally on your device.
        empical has no server. no account. no cloud. no database. we cannot
        access your data because it does not exist anywhere except your phone.
      </p>

      <p style={{ marginBottom: "1.5rem" }}>
        if you delete the app, your data is gone. there is no backup. there is
        no recovery.
      </p>

      <p style={{ marginBottom: "1.5rem" }}>
        the only thing you can share is a completion card after your 30-day
        playback. it contains no audio, no quotes, and no personal data — only
        the duration of your recordings.
      </p>

      <p style={{ marginBottom: "1.5rem" }}>
        empical uses local push notifications to deliver your daily question.
        notifications are scheduled on your device. no data is sent to any
        server to deliver them.
      </p>

      <p style={{ marginBottom: "1.5rem" }}>
        we do not collect analytics, telemetry, crash reports, usage data,
        location data, or any personal information. we do not use cookies. we
        do not track you.
      </p>

      <p style={{ marginBottom: "1.5rem" }}>
        the waitlist on empical.com collects your email address if you choose to
        submit it. that email is stored in our email platform (klaviyo) solely to
        notify you when empical launches. you can unsubscribe at any time.
      </p>

      <p style={{ marginBottom: "3rem" }}>
        if you have questions, email petereureka@gmail.com.
      </p>

      <p style={{ color: "#5C5753", fontSize: "0.7rem" }}>
        a voice ritual. not a wellness app.
      </p>
    </div>
  );
}
