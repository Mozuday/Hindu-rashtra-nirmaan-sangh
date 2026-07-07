"use client";

import TopNav from "../components/TopNav";
import Form from "../components/Form";

export default function About() {
  return (
    <main className="bg-orange-50 min-h-screen">

      <TopNav />

      {/* TOP GAP */}
      <section className="pt-32 px-4 pb-16">

        <div className="max-w-7xl mx-auto">

          {/* TITLE */}
          <div className="text-center">

            <h1 className="text-4xl md:text-6xl font-bold text-orange-700">
              हमारे बारे में
            </h1>

            <p className="text-gray-700 text-lg mt-5 max-w-3xl mx-auto leading-8">
              हिन्दू राष्ट्र निर्माण संघ एक सांस्कृतिक एवं सामाजिक संगठन है
              जिसका उद्देश्य समाज में एकता, अनुशासन, संस्कार और राष्ट्रभक्ति
              की भावना को मजबूत करना है।
            </p>

          </div>

          {/* MAIN ABOUT CARD */}
          <div className="mt-16 bg-white rounded-3xl shadow-xl p-8 md:p-12">

            <h2 className="text-3xl font-bold text-orange-700 mb-6">
              संगठन का उद्देश्य
            </h2>

            <div className="space-y-6 text-gray-700 leading-8 text-lg">

              <p>
                हिन्दू राष्ट्र निर्माण संघ समाज को संगठित, जागरूक और सशक्त
                बनाने की दिशा में निरंतर कार्य कर रहा है। हमारा उद्देश्य
                भारतीय संस्कृति, परंपरा और राष्ट्रभक्ति के मूल्यों को नई पीढ़ी
                तक पहुँचाना है।
              </p>

              <p>
                संगठन युवाओं को समाज सेवा, अनुशासन और राष्ट्र निर्माण के
                कार्यों में सक्रिय भागीदारी के लिए प्रेरित करता है। हम मानते
                हैं कि एक मजबूत समाज ही एक सशक्त राष्ट्र का निर्माण करता है।
              </p>

              <p>
                हमारा प्रयास समाज के हर वर्ग तक पहुँचकर उन्हें एकता, सहयोग और
                सांस्कृतिक चेतना के माध्यम से जोड़ना है। संगठन विभिन्न सामाजिक
                एवं सांस्कृतिक कार्यक्रमों के माध्यम से लोगों को जागरूक करने का
                कार्य करता है।
              </p>

              <p>
                Hindu Rashtra Nirman Sangh works towards creating a disciplined,
                united, and culturally aware society. We aim to inspire youth
                and individuals to actively contribute towards nation building,
                social responsibility, and cultural awareness.
              </p>

            </div>

          </div>

          {/* FOUNDER */}
          <div className="mt-20 grid md:grid-cols-2 gap-10 items-center bg-white rounded-3xl shadow-xl p-8">

            {/* IMAGE */}
            <div>

              <img
                src="/founder.WEBP"
                className="w-full rounded-3xl object-cover"
              />

            </div>

            {/* CONTENT */}
            <div>

              <h2 className="text-4xl font-bold text-orange-700 mb-6">
                संस्थापक
              </h2>

              <div className="space-y-5 text-gray-700 leading-8 text-lg">

                <p>
                  हमारे संस्थापक का उद्देश्य समाज को संगठित और जागरूक बनाना है।
                  उनके नेतृत्व में संगठन निरंतर राष्ट्र सेवा एवं सामाजिक
                  कार्यों में आगे बढ़ रहा है।
                </p>

                <p>
                  उनका दृष्टिकोण युवाओं को अनुशासन, संस्कार और राष्ट्रभक्ति की
                  भावना से जोड़कर समाज में सकारात्मक बदलाव लाना है।
                </p>

                <p>
                  संगठन आज विभिन्न क्षेत्रों में समाज सेवा, सांस्कृतिक जागरूकता
                  और युवाओं के मार्गदर्शन का कार्य कर रहा है।
                </p>

              </div>

            </div>

          </div>

          {/* IMAGE GALLERY */}
          <div className="mt-20">

            <h2 className="text-4xl font-bold text-orange-700 text-center mb-12">
              संगठन की झलकियाँ
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

              {[
                "/img1.WEBP",
                "/img2.WEBP",
                "/img3.WEBP",
                "/img4.WEBP",
                "/img5.WEBP",
                "/img6.WEBP",
                "/img7.WEBP",
                "/img8.WEBP",
                "/img9.WEBP",
                "/img10.WEBP",
                "/img11.WEBP",
                "/img12.WEBP",
                "/img13.WEBP",
                "/img14.WEBP",
                "/img15.WEBP",
              ].map((img, index) => (

                <div
                  key={index}
                  className="bg-white rounded-3xl overflow-hidden shadow-xl"
                >

                  <img
                    src={img}
                    className="w-full h-[280px] object-cover"
                  />

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>

      {/* REGISTRATION */}
      <section
        id="register"
        className="bg-orange-200 py-20 px-4"
      >

        <div className="text-center mb-10">

          <h2 className="text-4xl font-bold text-orange-700">
            सदस्य पंजीकरण
          </h2>

          <p className="text-gray-700 mt-3 text-lg">
            संगठन से जुड़ें और राष्ट्र निर्माण में योगदान दें।
          </p>

        </div>

        <div className="flex justify-center">

          <Form />

        </div>

      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white py-8 text-center px-4">

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