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
              हिंदू राष्ट्र निर्माण संघ एक सांस्कृतिक और सामाजिक संगठन है. इसका उद्देश्य समाज में एकता, अनुशासन, सनातन संस्कृति और राष्ट्र सेवा की भावना को मजबूत बनाना व भारत को संवैधानिक रूप से हिंदू राष्ट्र घोषित करना है.
            </p>

          </div>

          {/* RIGHT */}
          <div className="flex justify-center">

            <img
              src="/hero.png"
              className="w-full max-w-2xl object-contain rounded-4xl border-4 border-orange-400"
            />

          </div>

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

      </section>

      {/* FOUNDER */}
      <section className="px-4 py-16">

        <div className="max-w-7xl mx-auto card grid md:grid-cols-2 gap-10 items-center">

          {/* IMAGE */}
          <div>

            <img
              src="/founder.webp"
              className="w-full h-auto rounded-3xl object-cover"
            />

          </div>

          {/* CONTENT */}
          <div>

            <h2 className="text-4xl font-bold text-orange-700 mb-5">
              संस्थापक
            </h2>

            <p className="text-gray-700 text-lg leading-8">
             हमारे संस्थापक माननीय राष्ट्रीय अध्यक्ष परम पूज्य महंत रसिक पीठाधीश्वर श्री श्री 1008 श्री जन्मेजयशरण जी महाराज जानकी घाट बड़ा स्थान अयोध्या जी के नेतृत्व में संगठन युवाओं को अनुशासन राष्ट्र सेवा गौ सेवा सांस्कृतिक और धार्मिक कार्यों के प्रति जागरूक करते हैं भगवान श्री राम की कृपा और परम पूज्य महाराज जी के आशीर्वाद और मार्गदर्शन में संगठन अपने संकल्प भारत को संवैधानिक रूप से हिंदू राष्ट्र घोषित करवाने के लिए निरंतर प्रयास और मेहनत कर रहा है
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
            हमारा उद्देश्य राष्ट्र में ऐसे समाज का निर्माण करना है जो एकजुट, जागृत, सशक्त, संगठित, आत्मनिर्भर तथा अपनी संस्कृति, धर्म और राष्ट्र के प्रति समर्पित हो।
          </p>

          <p className="text-gray-700 text-lg leading-8 max-w-4xl mx-auto">
            हमारा विश्वास है कि जब समाज एकजुट होगा, तभी हम अपने धर्म, संस्कृति और राष्ट्र को अधिक सुदृढ़ एवं समृद्ध बना सकेंगे। इसलिए हमें आपसी भेदभाव और विभाजन से ऊपर उठकर एकता, सहयोग और सामाजिक समरसता को अपनाना चाहिए।
          </p>

          <p className="text-gray-700 text-lg leading-8 max-w-4xl mx-auto">
            धर्म के प्रचार-प्रसार से बढ़कर कोई सेवा नहीं, और राष्ट्रभक्ति से बढ़कर कोई भक्ति नहीं।
          </p>

          <p className="text-gray-700 text-lg leading-8 max-w-4xl mx-auto">
            आइए, हम सभी मिलकर एक ऐसे राष्ट्र के निर्माण का संकल्प लें जो अपनी सांस्कृतिक विरासत, नैतिक मूल्यों और राष्ट्रीय एकता के आधार पर निरंतर प्रगति के पथ पर अग्रसर हो।
          </p>

          <p className="text-gray-700 text-lg leading-8 max-w-4xl mx-auto">
            There is no greater service than promoting righteousness and moral values, and no greater devotion than devotion to one's nation.
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
              "/img1.webp",
              "/img2.webp",
              "/img3.webp",
              "/img4.webp",
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

        <a
          href="https://udayportfolio-orcin.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 flex items-left gap-3 transition hover:text-orange-400 transition"
        >
          <span>Developer</span>
         </a>

      </footer>

    </main>
  );
}
