"use client";

import TopNav from "../components/TopNav";
import Form from "../components/Form";

export default function Motivation() {
  return (
    <main className="bg-orange-50 min-h-screen">

      <TopNav />

      {/* TOP */}
      <section className="pt-32 px-4 pb-16">

        <div className="max-w-7xl mx-auto">

          {/* TITLE */}
          <div className="text-center">

            <h1 className="text-4xl md:text-6xl font-bold text-orange-700">
              प्रेरणा
            </h1>

            <p className="text-lg text-gray-700 mt-5 max-w-3xl mx-auto leading-8">
              राष्ट्र निर्माण केवल विचारों से नहीं बल्कि अनुशासन,
              सेवा, जागरूकता और संगठन से होता है। <br />
              हमारा उद्देश्य भारत को संवैधानिक रूप से हिंदू राष्ट्र घोषित करना है।
            </p>

          </div>

          {/* BIG MOTIVATION CARD */}
          <div className="mt-16 bg-white rounded-3xl shadow-xl p-8 md:p-12">

            <h2 className="text-3xl md:text-4xl font-bold text-orange-700 mb-6">
              हमारी प्रेरणा
            </h2>

            <div className="space-y-6 text-gray-700 text-lg leading-8">

              <p>
                हिन्दू राष्ट्र निर्माण संघ समाज को जागरूक, संगठित
                और संस्कारित बनाने के उद्देश्य से कार्य कर रहा है।
              </p>

              <p>
                संगठन युवाओं को राष्ट्र सेवा, अनुशासन और सामाजिक
                उत्तरदायित्व के प्रति प्रेरित करता है ताकि वे
                समाज और राष्ट्र के विकास में योगदान दे सकें।
              </p>

              <p>
                हमारा विश्वास है कि जब समाज का प्रत्येक व्यक्ति
                अपने कर्तव्यों और संस्कृति के प्रति जागरूक होगा,
                तभी एक सशक्त और आत्मनिर्भर राष्ट्र का निर्माण होगा।
              </p>

            </div>

          </div>

          {/* CARDS */}
          <div className="mt-20">

            <h2 className="text-4xl font-bold text-orange-700 text-center mb-12">
              हमारे मूल विचार
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

              {[
                {
                  icon: "🕉️",
                  title: "संस्कार",
                  desc: "भारतीय संस्कृति और मूल्यों को समाज में मजबूत बनाना।",
                },
                {
                  icon: "🚩",
                  title: "अनुशासन",
                  desc: "अनुशासन के माध्यम से मजबूत समाज का निर्माण।",
                },
                {
                  icon: "🤝",
                  title: "एकता",
                  desc: "समाज को एकजुट और संगठित बनाना।",
                },
                {
                  icon: "🇮🇳",
                  title: "राष्ट्र सेवा",
                  desc: "भारत को संवैधानिक रूप से हिंदू राष्ट्र घोषित करना है।",
                },
                {
                  icon: "🔥",
                  title: "जागरूकता",
                  desc: "युवाओं और समाज में जागरूकता फैलाना।",
                },
                {
                  icon: "🌼",
                  title: "समर्पण",
                  desc: "समाज और राष्ट्र के प्रति पूर्ण समर्पण।",
                },
              ].map((item, index) => (

                <div
                  key={index}
                  className="bg-white rounded-3xl shadow-xl p-8 text-center hover:-translate-y-2 transition duration-300"
                >

                  <div className="text-5xl mb-5">
                    {item.icon}
                  </div>

                  <h3 className="text-2xl font-bold text-orange-700">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 mt-4 leading-7">
                    {item.desc}
                  </p>

                </div>

              ))}

            </div>

          </div>

          {/* NEED + VISION */}
          <div className="mt-20 grid md:grid-cols-2 gap-8">

            {/* NEED */}
            <div className="bg-white rounded-3xl shadow-xl p-8">

              <div className="text-5xl mb-5">
                ⚡
              </div>

              <h2 className="text-3xl font-bold text-orange-700 mb-5">
                आवश्यकता
              </h2>

              <p className="text-gray-700 text-lg leading-8">
आज समस्त हिंदू समाज को एकजुट होने की आवश्यकता है, ताकि हम अपनी सनातन परंपरा, संस्कृति, संस्कार और धार्मिक मूल्यों का संरक्षण कर सकें। इतिहास में आपसी मतभेदों और विभाजन के कारण हिंदू समाज को अनेक चुनौतियों, हिंसा और पलायन जैसी परिस्थितियों का सामना करना पड़ा है। <br />
आज आवश्यकता इस बात की है कि हम जाति, क्षेत्र, भाषा और अन्य भेदभावों से ऊपर उठकर एकता, सद्भाव और सामाजिक समरसता को अपनाएँ। यदि कोई व्यक्ति या समूह भारत को संवैधानिक प्रक्रिया के माध्यम से हिंदू राष्ट्र बनाए जाने का समर्थन करता है, तो उसके लिए भी लोकतांत्रिक और संवैधानिक तरीकों से अपने विचार रखना और प्रयास करना ही उचित मार्ग है। <br />
              </p>

            </div>

            {/* VISION */}
            <div className="bg-white rounded-3xl shadow-xl p-8">

              <div className="text-5xl mb-5">
                🌟
              </div>

              <h2 className="text-3xl font-bold text-orange-700 mb-5">
                हमारा विज़न
              </h2>

              <p className="text-gray-700 text-lg leading-8">
                हमारा विज़न एक ऐसा संगठित, जागरूक और आत्मनिर्भर समाज
                बनाना है जो संस्कृति, राष्ट्रभक्ति और सेवा के मूल्यों
                पर आधारित हो व भारत को संवैधानिक रूप से हिंदू राष्ट्र घोषित करना है।
              </p>

            </div>

          </div>

          {/* QUOTE */}
          <div className="mt-20 bg-white rounded-3xl shadow-xl p-10 text-center">

            <div className="text-6xl mb-6">
              🚩
            </div>

            <p className="text-2xl md:text-3xl font-bold text-orange-700 leading-relaxed">
              "एक जागरूक समाज ही एक मजबूत राष्ट्र का निर्माण करता है"
            </p>

            <p className="text-gray-600 mt-6 text-lg leading-8 max-w-3xl mx-auto">
              संगठन का उद्देश्य केवल विचार देना नहीं,
              बल्कि समाज को सकारात्मक दिशा में आगे बढ़ाना है।
            </p>

          </div>

        </div>

      </section>

      {/* FORM */}
      <section
        id="register"
        className="bg-orange-200 py-20 px-4"
      >

        <div className="text-center mb-10">

          <h2 className="text-4xl font-bold text-orange-700">
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