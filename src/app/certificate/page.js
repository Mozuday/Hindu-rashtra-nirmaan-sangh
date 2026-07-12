"use client";

import { Suspense, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Certificate from "@/components/Certificate";
import downloadCertificate from "@/lib/downloadCertificate";

function CertificateContent() {
  const params = useSearchParams();

  const name = params.get("name") || "";
  const father = params.get("father") || "";
  const state = params.get("state") || "";
  const id = params.get("id") || "";

  useEffect(() => {
    if (!name) return;

    const timer = setTimeout(() => {
      downloadCertificate(name);
    }, 2000);

    return () => clearTimeout(timer);
  }, [name]);

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#e5e5e5",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px",
        overflow: "auto",
      }}
    >
      <Certificate
        name={name}
        father={father}
        state={state}
        id={id}
        date={new Date().toLocaleDateString("en-IN")}
      />

      <div
        style={{
          marginTop: "30px",
          display: "flex",
          gap: "20px",
        }}
      >
        <button
          onClick={() => downloadCertificate(name)}
          style={{
            background: "#ea580c",
            color: "#fff",
            border: "none",
            padding: "15px 30px",
            borderRadius: "12px",
            fontWeight: "bold",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          📄 Download Certificate
        </button>

        <button
          onClick={() => (window.location.href = "/")}
          style={{
            background: "#fff",
            color: "#ea580c",
            border: "2px solid #ea580c",
            padding: "15px 30px",
            borderRadius: "12px",
            fontWeight: "bold",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          🏠 Home
        </button>
      </div>
    </main>
  );
}

export default function Page() {
  return (
    <Suspense
      fallback={
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "24px",
          }}
        >
          Loading Certificate...
        </div>
      }
    >
      <CertificateContent />
    </Suspense>
  );
}