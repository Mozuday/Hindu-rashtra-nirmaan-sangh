"use client";

import TopNav from "../components/TopNav";
import Form from "../components/Form";

export default function Contact() {
  return (
    <main className="bg-orange-50 min-h-screen">

      <TopNav />

      {/* TOP */}
      <section className="pt-32 px-4 pb-16">

        <div className="max-w-7xl mx-auto">

          {/* TITLE */}
          <div className="text-center">

            <h1 className="text-4xl md:text-6xl font-bold text-orange-700">
              संपर्क करें
            </h1>

            <p className="text-lg text-gray-700 mt-5 max-w-3xl mx-auto leading-8">
              संगठन से जुड़ने, सुझाव देने अथवा किसी भी जानकारी के लिए
              आप हमसे संपर्क कर सकते हैं।
            </p>

          </div>

          {/* MAIN CONTACT SECTION */}
          <div className="mt-16 grid md:grid-cols-2 gap-8">

            {/* LEFT CARD */}
            <div className="bg-white rounded-3xl shadow-xl p-8">

              <div className="text-5xl mb-6">
                🚩
              </div>

              <h2 className="text-3xl font-bold text-orange-700 mb-6">
                संगठन कार्यालय
              </h2>

              <div className="space-y-6 text-gray-700 text-lg">

                <div className="bg-orange-50 rounded-2xl p-5 border border-orange-200">

                  <h3 className="font-bold text-orange-700 text-xl mb-2">
                    📞 फोन
                  </h3>

                  <p>
                    +91 9760009741
                  </p>

                </div>

                <div className="bg-orange-50 rounded-2xl p-5 border border-orange-200">

                  <h3 className="font-bold text-orange-700 text-xl mb-2">
                    📧 ईमेल
                  </h3>

                  <p>
                    hindurashtra729@gmail.com
                  </p>

                </div>

                <div className="bg-orange-50 rounded-2xl p-5 border border-orange-200">

                  <h3 className="font-bold text-orange-700 text-xl mb-2">
                    📍 स्थान
                  </h3>

                  <p>
                    केंद्रीय कार्यालय, जानकी घाट, बड़ा स्थान, अयोध्या जी भारत | India
                  </p>

                </div>

              </div>

            </div>

            {/* RIGHT CARD */}
            <div className="bg-white rounded-3xl shadow-xl p-8">

              <div className="text-5xl mb-6">
                🤝
              </div>

              <h2 className="text-3xl font-bold text-orange-700 mb-6">
                हमसे जुड़ें
              </h2>

              <div className="space-y-5 text-gray-700 text-lg leading-8">

                <p>
                  हिन्दू राष्ट्र निर्माण संघ समाज सेवा, जागरूकता
                  और राष्ट्र निर्माण के कार्यों में निरंतर सक्रिय है।
                </p>

                <p>
                  यदि आप संगठन के साथ जुड़कर समाज और राष्ट्र के लिए
                  योगदान देना चाहते हैं, तो हमसे संपर्क करें।
                </p>

                <p>
                  संगठन युवाओं, सामाजिक कार्यकर्ताओं और राष्ट्रहित
                  में कार्य करने वाले सभी लोगों का स्वागत करता है।
                </p>

              </div>

              {/* SMALL CARDS */}
              <div className="grid grid-cols-2 gap-4 mt-8">

                <div className="bg-orange-50 rounded-2xl p-5 text-center border border-orange-200">

                  <div className="text-4xl mb-3">
                    🇮🇳
                  </div>

                  <h3 className="font-bold text-orange-700">
                    राष्ट्र सेवा
                  </h3>

                </div>

                <div className="bg-orange-50 rounded-2xl p-5 text-center border border-orange-200">

                  <div className="text-4xl mb-3">
                    🚩
                  </div>

                  <h3 className="font-bold text-orange-700">
                    संगठन
                  </h3>

                </div>

              </div>

            </div>

          </div>

          {/* EXTRA INFO */}
          <div className="mt-16 bg-white rounded-3xl shadow-xl p-8 md:p-10 text-center">

            <div className="text-6xl mb-6">
              🌟
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-orange-700">
              समाज और राष्ट्र के लिए समर्पित
            </h2>

            <p className="text-gray-700 text-lg leading-8 mt-6 max-w-4xl mx-auto">
              हमारा उद्देश्य समाज को संगठित, जागरूक और सशक्त बनाना है।
              संगठन के माध्यम से हम युवाओं और समाज को राष्ट्र निर्माण
              के कार्यों में सक्रिय रूप से जोड़ने का प्रयास करते हैं।
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
