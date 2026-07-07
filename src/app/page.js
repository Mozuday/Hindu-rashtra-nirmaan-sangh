"use client";

import TopNav from "./components/TopNav";
import Form from "./components/Form";

export default function Home() {
  return (
    <main className="bg-orange-50 min-h-screen">

      <TopNav />

      {/* HERO */}
      <section className="pt-28 px-4 pb-14">

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <div className="text-center md:text-left">

            <div className="flex items-center justify-center md:justify-start gap-4 mb-6">

              <img
                src="/flag.png"
                className="w-10 md:w-14"
              />

              <h1 className="text-4xl md:text-6xl font-bold text-orange-700 leading-tight">
                हिन्दू राष्ट्र निर्माण संघ
              </h1>

              <img
                src="/flag.png"
                className="w-10 md:w-14"
              />

            </div>

            <p className="text-gray-700 text-lg leading-8">
              हिन्दू राष्ट्र निर्माण संघ एक सांस्कृतिक और सामाजिक संगठन है
              जिसका उद्देश्य समाज में एकता, अनुशासन, संस्कृति और राष्ट्र सेवा
              की भावना को मजबूत बनाना है।
            </p>

            <div className="flex flex-wrap gap-4 mt-8 justify-center md:justify-start">

              <a
                href="#register"
                className="primary-btn"
              >
                सदस्य बनें
              </a>

              <a
                href="/states"
                className="secondary-btn"
              >
                States
              </a>

            </div>

          </div>

          {/* RIGHT */}
          <div className="flex justify-center">

            <img
              src="/hero.png"
              className="w-full max-w-2xl object-contain"
            />

          </div>

        </div>

      </section>

      {/* FOUNDER */}
      <section className="px-4 py-16">

        <div className="max-w-7xl mx-auto card grid md:grid-cols-2 gap-10 items-center">

          {/* IMAGE */}
          <div>

            <img
              src="/founder.WEBP"
              className="w-full h-auto rounded-3xl object-cover"
            />

          </div>

          {/* CONTENT */}
          <div>

            <h2 className="text-4xl font-bold text-orange-700 mb-5">
              संस्थापक
            </h2>

            <p className="text-gray-700 text-lg leading-8">
              हमारे संस्थापक का उद्देश्य समाज को संगठित, जागरूक और संस्कारित
              बनाना है। उनके नेतृत्व में संगठन युवाओं को राष्ट्र सेवा,
              अनुशासन और सामाजिक कार्यों के प्रति प्रेरित करता है।
            </p>

            <p className="text-gray-700 text-lg leading-8 mt-5">
              संगठन निरंतर समाज में सकारात्मक बदलाव लाने और भारतीय संस्कृति
              के मूल्यों को आगे बढ़ाने के लिए कार्य कर रहा है।
            </p>

          </div>

        </div>

      </section>

      {/* ABOUT */}
      <section className="px-4 py-16 bg-orange-100">

        <div className="max-w-6xl mx-auto text-center">

          <h2 className="section-title mb-6">
            हमारा उद्देश्य
          </h2>

          <p className="text-gray-700 text-lg leading-8 max-w-4xl mx-auto">
            हमारा उद्देश्य समाज में एकता, संस्कार, अनुशासन और राष्ट्रभक्ति
            की भावना को मजबूत करना है। हम युवाओं को जागरूक और संगठित बनाकर
            राष्ट्र निर्माण एवं समाज सेवा के कार्यों में आगे बढ़ाने का प्रयास
            करते हैं।
          </p>

        </div>

      </section>

      {/* GALLERY */}
      <section className="py-16 px-4">

        <div className="max-w-7xl mx-auto">

          <h2 className="section-title mb-12">
            संगठन की झलकियाँ
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {[
              "/img1.WEBP",
              "/img2.WEBP",
              "/img3.WEBP",
              "/img4.WEBP",
            ].map((img, index) => (

              <div
                key={index}
                className="card overflow-hidden p-0"
              >

                <img
                  src={img}
                  className="w-full h-[280px] object-cover"
                />

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* FEATURES */}
      <section className="py-16 px-4 bg-orange-100">

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">

          <div className="card text-center">

            <div className="text-5xl mb-4">🕉️</div>

            <h3 className="text-2xl font-bold text-orange-700">
              एकता
            </h3>

            <p className="text-gray-600 mt-3 leading-7">
              समाज को संगठित और सशक्त बनाना।
            </p>

          </div>

          <div className="card text-center">

            <div className="text-5xl mb-4">🚩</div>

            <h3 className="text-2xl font-bold text-orange-700">
              अनुशासन
            </h3>

            <p className="text-gray-600 mt-3 leading-7">
              संस्कार और अनुशासन से विकास।
            </p>

          </div>

          <div className="card text-center">

            <div className="text-5xl mb-4">🇮🇳</div>

            <h3 className="text-2xl font-bold text-orange-700">
              राष्ट्र सेवा
            </h3>

            <p className="text-gray-600 mt-3 leading-7">
              राष्ट्रहित और समाजहित सर्वोपरि।
            </p>

          </div>

        </div>

      </section>

      {/* FORM */}
      <section
        id="register"
        className="py-20 px-4"
      >

        <div className="text-center mb-10">

          <h2 className="section-title">
            सदस्य पंजीकरण
          </h2>

          <p className="text-gray-700 mt-3 text-lg">
            संगठन से जुड़ें और राष्ट्र निर्माण में भाग लें।
          </p>

        </div>

        <div className="flex justify-center">

          <Form />

        </div>

      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white py-8 px-4 text-center">

        <div className="flex justify-center items-center gap-3 mb-4">

          <img
            src="/flag.png"
            className="w-8"
          />

          <h3 className="text-xl md:text-2xl font-bold text-orange-400">
            हिन्दू राष्ट्र निर्माण संघ
          </h3>

          <img
            src="/flag.png"
            className="w-8"
          />

        </div>

        <p className="text-gray-400 text-sm">
          © 2026 HRNS — All Rights Reserved
        </p>

      </footer>

    </main>
  );
}