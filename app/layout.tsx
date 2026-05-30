import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ChurnGuard — Predict Which Customers Will Churn Next Month",
  description: "Connect your Stripe data, run ML churn prediction models, and get automated intervention suggestions to retain your SaaS customers."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="e0e4c335-7e79-4fd7-b008-0130e6edecd0"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
