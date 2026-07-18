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
              हिंदू राष्ट्र निर्माण संघ एक सांस्कृतिक और सामाजिक संगठन है. इसका उद्देश्य समाज में एकता, अनुशासन, सनातन संस्कृति और राष्ट्र सेवा की भावना को मजबूत बनाना व भारत को संवैधानिक रूप से हिंदू राष्ट्र घोषित करना है.
            </p>

          </div>

          {/* MAIN ABOUT CARD */}
          <div className="mt-16 bg-white rounded-3xl shadow-xl p-8 md:p-12">

            <h2 className="text-3xl font-bold text-orange-700 mb-6">
              संगठन का उद्देश्य
            </h2>

            <div className="space-y-6 text-gray-700 leading-8 text-lg">

              <p>
                संगठन का उद्देश्य राष्ट्रभक्ति की भावना को सुदृढ़ करते हुए भारत को संवैधानिक एवं लोकतांत्रिक प्रक्रिया के माध्यम से हिंदू राष्ट्र बनाए जाने के विचार का समर्थन करने वाले लोगों को एकजुट करना है।
              </p>

              <p>
                हमारा विश्वास है कि एक विकसित, सशक्त, संगठित, आत्मनिर्भर और सांस्कृतिक रूप से जागरूक राष्ट्र ही राष्ट्र निर्माण की मजबूत आधारशिला होता है।
              </p>

              <p>
                हम समाज में एकता, सहयोग, सामाजिक समरसता, धार्मिक एवं सांस्कृतिक चेतना का प्रसार करना चाहते हैं, ताकि सभी लोग अपनी सांस्कृतिक विरासत, नैतिक मूल्यों और राष्ट्रीय दायित्वों के प्रति जागरूक होकर राष्ट्र के विकास में सक्रिय योगदान दे सकें।
              </p>

              <p>
                "एकता हमारी शक्ति है, संगठन हमारी पहचान है और राष्ट्रीय हित हमारी सर्वोच्च प्रतिबद्धता है।"
              </p>

              <p>
                The objective of the organization is to strengthen the spirit of patriotism and unite people who support the idea of India becoming a Hindu Rashtra through constitutional and democratic means.
We believe that a developed, strong, organized, self-reliant, and culturally conscious nation forms the foundation of lasting national development.
Our aim is to foster unity, cooperation, social harmony, and religious and cultural awareness so that people remain connected to their heritage, uphold moral values, and actively contribute to the nation's progress.
"Unity is our strength, organization is our identity, and national interest is our highest commitment."
              </p>

            </div>

          </div>

          {/* FOUNDER */}
          <div className="mt-20 grid md:grid-cols-2 gap-10 items-center bg-white rounded-3xl shadow-xl p-8">

            {/* IMAGE */}
            <div>

              <img
                src="/founder.webp"
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
                  हमारे संस्थापक माननीय राष्ट्रीय अध्यक्ष परम पूज्य महंत रसिक पीठाधीश्वर श्री श्री 1008 श्री जन्मेजयशरण जी महाराज जानकी घाट बड़ा स्थान अयोध्या जी के नेतृत्व में संगठन युवाओं को अनुशासन राष्ट्र सेवा गौ सेवा सांस्कृतिक और धार्मिक कार्यों के प्रति जागरूक करते हैं भगवान श्री राम की कृपा और परम पूज्य महाराज जी के आशीर्वाद और मार्गदर्शन में संगठन अपने संकल्प भारत को संवैधानिक रूप से हिंदू राष्ट्र घोषित करवाने के लिए निरंतर प्रयास और मेहनत कर रहा है
                </p>

                <p>
                  उनका दृष्टिकोण युवाओं को अनुशासन, संस्कार और राष्ट्रभक्ति की
                  भावना से जोड़कर समाज में सकारात्मक बदलाव लाना है।
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
                "/img1.webp",
                "/img2.webp",
                "/img3.webp",
                "/img4.webp",
                "/img5.webp",
                "/img6.webp",
                "/img7.webp",
                "/img8.webp",
                "/img9.webp",
                "/img10.webp",
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