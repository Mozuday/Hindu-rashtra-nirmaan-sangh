"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";

function SuccessContent() {
  const params = useSearchParams();

  const name = params.get("name");
  const father = params.get("father");
  const state = params.get("state");
  const id = params.get("id");

  // Invalid access
  if (!name || !id) {
    return (
      <main className="min-h-screen bg-orange-50 flex items-center justify-center px-4">
        <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-lg w-full text-center border border-orange-200">
          <div className="text-7xl mb-6">⚠️</div>

          <h1 className="text-4xl font-bold text-red-500">
            अमान्य प्रवेश
          </h1>

          <p className="text-gray-600 mt-5 text-lg leading-8">
            कृपया पहले पंजीकरण करें।
          </p>

          <a
            href="/"
            className="inline-block mt-8 bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-full font-semibold transition"
          >
            होम पेज
          </a>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-orange-50 flex items-center justify-center px-4 py-20">
      <div className="max-w-2xl w-full">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-orange-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-orange-500 to-orange-700 text-white text-center py-12 px-6">
            <div className="flex justify-center items-center gap-4 mb-6">
              <img
                src="/flag.png"
                alt="Flag"
                className="w-10"
              />

              <div className="text-7xl">✅</div>

              <img
                src="/flag.png"
                alt="Flag"
                className="w-10"
              />
            </div>

            <h1 className="text-4xl md:text-5xl font-bold">
              पंजीकरण सफल
            </h1>

            <p className="mt-4 text-lg text-orange-100">
              Registration Successful
            </p>
          </div>

          {/* Body */}
          <div className="p-8 md:p-10">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-orange-700">
                हिन्दू राष्ट्र निर्माण संघ
              </h2>

              <p className="text-gray-600 mt-4 text-lg leading-8">
                आपका पंजीकरण सफलतापूर्वक पूर्ण हो चुका है।
                <br />
                संगठन से जुड़ने के लिए आपका स्वागत है।
              </p>
            </div>

            {/* Details */}
            <div className="mt-10 space-y-5">
              <div className="bg-orange-50 rounded-2xl p-5 flex justify-between items-center border border-orange-200">
                <span className="font-semibold text-gray-700 text-lg">
                  नाम
                </span>

                <span className="font-bold text-orange-700 text-lg">
                  {name}
                </span>
              </div>

              <div className="bg-orange-50 rounded-2xl p-5 flex justify-between items-center border border-orange-200">
                <span className="font-semibold text-gray-700 text-lg">
                  पिता का नाम
                </span>

                <span className="font-bold text-orange-700 text-lg">
                  {father}
                </span>
              </div>

              <div className="bg-orange-50 rounded-2xl p-5 flex justify-between items-center border border-orange-200">
                <span className="font-semibold text-gray-700 text-lg">
                  राज्य
                </span>

                <span className="font-bold text-orange-700 text-lg">
                  {state}
                </span>
              </div>

              <div className="bg-orange-100 rounded-2xl p-5 flex justify-between items-center border-2 border-orange-300">
                <span className="font-semibold text-gray-700 text-lg">
                  सदस्य ID
                </span>

                <span className="font-extrabold text-orange-700 text-xl">
                  {id}
                </span>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center">
              <a
                href={`/api/download?name=${encodeURIComponent(
                  name
                )}&father=${encodeURIComponent(
                  father || ""
                )}&state=${encodeURIComponent(
                  state || ""
                )}&id=${encodeURIComponent(id)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-full font-bold text-center transition shadow-lg"
              >
                📄 प्रमाणपत्र डाउनलोड करें
              </a>

              <a
                href="/"
                className="bg-white border-2 border-orange-600 text-orange-700 hover:bg-orange-50 px-8 py-4 rounded-full font-bold text-center transition"
              >
                🏠 होम पेज
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default function SuccessPage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen flex items-center justify-center bg-orange-50">
          <div className="text-center">
            <div className="animate-pulse text-5xl mb-4">⏳</div>
            <p className="text-lg text-gray-600">
              कृपया प्रतीक्षा करें...
            </p>
          </div>
        </main>
      }
    >
      <SuccessContent />
    </Suspense>
  );
}