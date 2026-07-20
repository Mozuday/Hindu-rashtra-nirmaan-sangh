"use client";

export default function Certificate({
  name,
  father,
  state,
  id,
  date,
}) {
  return (
    <div
      id="certificate"
      className="relative w-[1123px] h-[794px] overflow-hidden border-[18px] border-orange-600 bg-[#f8f3e8] shadow-2xl"
    >
      {/* Background */}

      <img
        src="/bg-pattern.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-10 scale-60"
      />

      {/* Inner Border */}

      <div className="absolute inset-3 border-2 border-orange-400"></div>

      {/* ================= TOP BAR ================= */}

<div className="absolute top-6 left-10 right-10 flex items-start justify-between z-20">

  {/* Logo */}

  <img
    src="/Logo.png"
    alt="Logo"
    className="w-35"
  />

  {/* Sadasya ID */}

  <div className="mt-3 text-right">
    <div className="text-xl font-bold text-orange-800">
      सदस्य आईडी
    </div>

    <div className="text-lg font-semibold text-gray-800">
      {id}
    </div>
  </div>

</div>

      {/* ================= HEADER ================= */}

      <div className="relative z-10 pt-24">

        <div className="flex justify-center items-center gap-6">

          <img
            src="/flag.png"
            alt=""
            className="w-20"
          />

          <div className="text-center">

            <h1
              className="font-bold text-orange-700"
              style={{
                fontSize: "42px",
                lineHeight: "1.1",
              }}
            >
              हिन्दू राष्ट्र निर्माण संघ
            </h1>

            <div className="mt-2 text-[22px] font-bold">
              Hindu Raashtra Nirmaan Sangh
            </div>

            <div
              className="mt-1 text-gray-600"
              style={{
                fontSize: "11px",
                letterSpacing: "3px",
              }}
            >
              OFFICIAL MEMBERSHIP CERTIFICATE
            </div>

          </div>

          <img
            src="/flag.png"
            alt=""
            className="w-20"
          />

        </div>

        {/* Certificate Title */}

        <div className="mt-8 text-center">

          <h2 className="text-[30px] font-bold text-orange-700">
            प्रमाण पत्र | CERTIFICATE
          </h2>

          <div className="mx-auto mt-3 h-[2px] w-56 bg-orange-600"></div>

        </div>

      </div>

      {/* ================= MAIN CONTENT ================= */}

      <div className="relative z-10 mt-10 px-20 text-center">

        <div
          className="text-gray-800"
          style={{
            fontSize: "24px",
          }}
        >
          यह प्रमाणित किया जाता है कि
        </div>

        {/* Name */}

        <div
          className="inline-block mt-8 border-b-[3px] border-dashed border-orange-600 pb-2 px-10 font-bold text-orange-700"
          style={{
            fontSize: "50px",
          }}
        >
          {name}
        </div>

        <div
          className="mt-8 text-gray-800"
          style={{
            fontSize: "22px",
            lineHeight: "1.8",
          }}
        >
          पिता का नाम :
          <span className="font-bold text-orange-700">
            {" "}
            {father}
          </span>

          <br />

          राज्य :
          <span className="font-bold text-orange-700">
            {" "}
            {state}
          </span>

          <br />
          <br />

          को हिन्दू राष्ट्र निर्माण संघ का

          <br />

          आधिकारिक सदस्य घोषित किया जाता है।

          <br />
          <br />

          <span className="font-bold text-orange-700 text-[18px]">
            आपका हार्दिक स्वागत है।
          </span>

        </div>

      </div>

{/* ================= Date (Bottom Left) ================= */}
<div className="absolute left-12 bottom-10 z-20 text-gray-800">
  <div
    className="font-semibold text-[16px]"
    style={{
      fontFamily: '"Times New Roman", Georgia, serif',
      letterSpacing: "0.4px",
    }}
  >
    दिनांक / Date : {date}
  </div>
</div>

{/* ================= Bottom Right (Seal + Signature) ================= */}
<div className="absolute right-12 bottom-8 w-48 z-20">

  {/* Seal & Signature */}
  <div className="relative flex justify-center items-center h-36">

    {/* Seal */}
    <img
      src="/seal.png"
      alt="Seal"
      className="w-40"
    />

    {/* Signature */}
    <img
      src="/sign.png"
      alt="Signature"
      className="absolute top-5 w-28"
    />

  </div>

  {/* Line */}
  <div className="mx-auto mt-1 mb-2 w-32 border-t border-gray-700"></div>

  {/* Text */}
  <div
    className="text-center leading-tight"
    style={{ fontFamily: '"Times New Roman", Georgia, serif' }}
  >
    <div className="font-semibold text-[15px]">
      अधिकृत हस्ताक्षर
    </div>

    <div className="text-xs tracking-wide">
      Authorized Signatory
    </div>
  </div>

</div>

      {/* ================= Decorative Bottom Line ================= */}

      <div className="absolute bottom-6 left-12 right-12 h-[2px] bg-orange-500 opacity-40"></div>

    </div>
  );
}
