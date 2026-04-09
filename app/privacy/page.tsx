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
        background: "#F5F0EB",
        color: "#1A1A1A",
        padding: "4rem 2rem",
        maxWidth: 600,
        margin: "0 auto",
        fontFamily: "var(--font-inter)",
        fontSize: "0.85rem",
        lineHeight: 2,
        letterSpacing: "0.02em",
      }}
    >
      <h1
        style={{
          fontFamily: "var(--font-inter)",
          fontWeight: 300,
          fontSize: "0.65rem",
          letterSpacing: "0.35em",
          marginBottom: "3rem",
        }}
      >
        empical
      </h1>

      <h2 style={{ fontWeight: 300, fontSize: "1rem", marginBottom: "1.5rem" }}>
        privacy policy
      </h2>

      <p style={{ marginBottom: "1.5rem", color: "rgba(26,26,26,0.6)" }}>
        effective april 2026
      </p>

      <p style={{ marginBottom: "1.5rem" }}>
        empical records your voice. nothing leaves your phone.
      </p>

      <p style={{ marginBottom: "1.5rem" }}>
        your recordings, your answers, and your archive are stored locally on
        your device using on-device storage. empical has no server. no account.
        no cloud. no database. we cannot access your data because it does not
        exist anywhere except your phone.
      </p>

      <p style={{ marginBottom: "1.5rem" }}>
        if you delete the app, your data is gone. there is no backup. there is
        no recovery.
      </p>

      <p style={{ marginBottom: "1.5rem" }}>
        the share feature exports the question as an image. it never exports
        your answer or your voice.
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

      <p style={{ color: "rgba(26,26,26,0.15)", fontSize: "0.7rem" }}>
        a mirror with a timer and a microphone
      </p>
    </div>
  );
}
