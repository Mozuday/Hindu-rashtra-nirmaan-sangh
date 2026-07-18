"use client";

import { useState } from "react";
import TopNav from "../components/TopNav";
import Form from "../components/Form";

export default function States() {

  const [open, setOpen] = useState(null);

  const states = [
    {
      name: "उत्तर प्रदेश",
      leader: "प्रदेश अध्यक्ष",
      phone: "+91 9000000000",
      email: "up@hrns.org",
      highlight: true,
    },
    {
      name: "दिल्ली ",
      leader: "प्रदेश अध्यक्ष",
      phone: "+91 9000000000",
      email: "up@hrns.org",
    },
    {
      name: "हरियाणा",
      leader: "प्रदेश अध्यक्ष",
      phone: "+91 9444444444",
      email: "hr@hrns.org",
    },
    {
      name: "उत्तराखंड",
      leader: "प्रदेश अध्यक्ष",
      phone: "+91 9555555555",
      email: "uk@hrns.org",
    },
    {
      name: "हिमाचल प्रदेश",
      leader: "प्रदेश अध्यक्ष",
      phone: "+91 9666666666",
      email: "hp@hrns.org",
    },
    {
      name: "राजस्थान",
      leader: "प्रदेश अध्यक्ष",
      phone: "+91 9333333333",
      email: "rj@hrns.org",
    },
    {
      name: "मध्य प्रदेश",
      leader: "प्रदेश अध्यक्ष",
      phone: "+91 9777777777",
      email: "mp@hrns.org",
    },
  ];

  return (
    <main className="bg-orange-50 min-h-screen">

      <TopNav />

      {/* TOP */}
      <section className="pt-32 px-4 pb-16">

        <div className="max-w-7xl mx-auto">

          {/* TITLE */}
          <div className="text-center">

            <h1 className="text-4xl md:text-6xl font-bold text-orange-700">
              राज्य इकाइयाँ
            </h1>

            <p className="text-lg text-gray-700 mt-5 max-w-3xl mx-auto leading-8">
              संगठन विभिन्न राज्यों में सक्रिय रूप से कार्य कर रहा है।
              नीचे दिए गए राज्यों की जानकारी एवं संपर्क विवरण देख सकते हैं।
            </p>

          </div>

          {/* MAIN CARD */}
          <div className="mt-16 bg-white rounded-3xl shadow-xl p-8 md:p-10">

            <h1 className="text-3xl font-bold text-orange-700 mb-8">
              हिन्दू राष्ट्र निर्माण संघ 
            </h1>

            <h3 className="text-2xl font-bold text-orange-700 mb-8">
              राज्य सूची(संपर्क सूत्र)
            </h3>

            <div className="space-y-5">

              {states.map((state, index) => (

                <div
                  key={index}
                  className="border border-orange-200 rounded-2xl overflow-hidden bg-orange-50"
                >

                  {/* HEADER */}
                  <button
                    onClick={() =>
                      setOpen(open === index ? null : index)
                    }
                    className="w-full flex items-center justify-between p-5 text-left"
                  >

                    <div>

                      <h3 className="text-2xl font-bold text-orange-700">
                        {state.name}
                      </h3>

                    </div>

                    <div className="text-3xl text-orange-700">
                      {open === index ? "−" : "+"}
                    </div>

                  </button>

                  {/* CONTENT */}
                  {open === index && (

                    <div className="px-5 pb-6">

                      {/* CONTACT CARD */}
                      <div className="bg-white rounded-2xl p-6 shadow-md">

                        <h4 className="text-2xl font-bold text-orange-700 mb-5">
                          संपर्क विवरण
                        </h4>

                        <div className="space-y-3 text-gray-700 text-lg">

                          <p>
                            <span className="font-bold">
                              पद:
                            </span>{" "}
                            {state.leader}
                          </p>

                          <p>
                            <span className="font-bold">
                              फोन:
                            </span>{" "}
                            {state.phone}
                          </p>

                          <p>
                            <span className="font-bold">
                              ईमेल:
                            </span>{" "}
                            {state.email}
                          </p>

                        </div>

                      </div>

                      {/* UP SPECIAL */}
{state.highlight && (

  <div className="mt-8 bg-white rounded-2xl p-6 shadow-md">

    <h4 className="text-3xl font-bold text-orange-700 mb-5">
      उत्तर प्रदेश — मुख्य राज्य
    </h4>

    <div className="space-y-5 text-gray-700 text-lg leading-8">

      <p>
        उत्तर प्रदेश संगठन का प्रमुख और सबसे सक्रिय राज्य है।
        यहाँ संगठन विभिन्न सामाजिक, सांस्कृतिक और
        राष्ट्र सेवा गतिविधियों का संचालन करता है।
      </p>

      <p>
        युवाओं को जागरूक करना, समाज को संगठित करना
        और राष्ट्रभक्ति की भावना को मजबूत बनाना
        संगठन का मुख्य उद्देश्य है।
      </p>

    </div>

    {/* INFO CARDS */}
    <div className="grid md:grid-cols-3 gap-5 mt-8">

      <div className="bg-orange-50 rounded-2xl p-6 text-center border border-orange-200">

        <div className="text-5xl mb-4">
          🚩
        </div>

        <h5 className="text-xl font-bold text-orange-700">
          संगठन
        </h5>

        <p className="text-gray-600 mt-3">
          प्रदेशभर में सक्रिय कार्य।
        </p>

      </div>

      <div className="bg-orange-50 rounded-2xl p-6 text-center border border-orange-200">

        <div className="text-5xl mb-4">
          🤝
        </div>

        <h5 className="text-xl font-bold text-orange-700">
          समाज सेवा
        </h5>

        <p className="text-gray-600 mt-3">
          युवाओं एवं समाज को जोड़ना।
        </p>

      </div>

      <div className="bg-orange-50 rounded-2xl p-6 text-center border border-orange-200">

        <div className="text-5xl mb-4">
          🇮🇳
        </div>

        <h5 className="text-xl font-bold text-orange-700">
          राष्ट्र निर्माण
        </h5>

        <p className="text-gray-600 mt-3">
          राष्ट्रहित सर्वोपरि।
        </p>

      </div>

    </div>

    {/* IMAGE GALLERY */}
    <div className="mt-10">

      <h4 className="text-2xl font-bold text-orange-700 mb-6">
        उत्तर प्रदेश की झलकियाँ
      </h4>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

        {[
          "/up (1).webp",
          "/up (2).webp",
          "/up (3).webp",
          "/up (4).webp",
          "/up (5).webp",
          "/up (6).webp",
          "/up (7).webp",
          "/up (8).webp",
          "/up (9).webp",
          "/up (10).webp",
        ].map((img, index) => (

          <div
            key={index}
            className="overflow-hidden rounded-2xl shadow-lg bg-orange-50"
          >

            <img
              src={img}
              className="w-full h-[240px] object-cover hover:scale-105 transition duration-300"
            />

          </div>

        ))}

      </div>

    </div>

  </div>

)}



                    </div>

                  )}

                </div>

              ))}

            </div>

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