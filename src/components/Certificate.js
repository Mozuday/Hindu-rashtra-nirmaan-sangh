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
      style={{
        width: "1123px",
        height: "794px",
        background: "#f8f3e8",
        border: "18px solid #d97706",
        position: "relative",
        overflow: "hidden",
        fontFamily: "Georgia, serif",
        boxShadow: "0 20px 50px rgba(0,0,0,.25)",
      }}
    >

      {/* Watermark */}
      <img
        src="/Logo.png"
        alt=""
        style={{
          position: "absolute",
          width: "720px",
          left: "50%",
          top: "50%",
          transform: "translate(-50%,-50%)",
          opacity: 0.06,
        }}
      />

      {/* Border */}
      <div
        style={{
          position: "absolute",
          inset: "12px",
          border: "2px solid #f59e0b",
        }}
      />

      {/* Header */}
      <div
        style={{
          position: "relative",
          textAlign: "center",
          paddingTop: "32px",
          paddingLeft: "20px",
        }}
      >
        <img
          src="/Logo.png"
          alt=""
          style={{
            width: "95px",
          }}
        />

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
            marginTop: "8px",
          }}
        >
          <img
            src="/flag.png"
            alt=""
            style={{
              width: "90px",
            }}
          />

          <div>

            <div
              style={{
                fontSize: "42px",
                color: "#c2410c",
                fontWeight: "700",
                lineHeight: 1.1,
              }}
            >
              हिन्दू राष्ट्र निर्माण संघ
            </div>

            <div
              style={{
                marginTop: "8px",
                fontSize: "22px",
                fontWeight: "bold",
              }}
            >
              Hindu Raashtra Nirmaan Sangh
            </div>

            <div
              style={{
                marginTop: "6px",
                fontSize: "11px",
                letterSpacing: "3px",
                color: "#666",
              }}
            >
              OFFICIAL MEMBERSHIP CERTIFICATE
            </div>

          </div>

          <img
            src="/flag.png"
            alt=""
            style={{
              width: "90px",
            }}
          />
        </div>

        <div
          style={{
            marginTop: "30px",
          }}
        >
          <div
            style={{
              fontSize: "30px",
              color: "#d97706",
              fontWeight: "bold",
            }}
          >
            प्रमाण पत्र | CERTIFICATE
          </div>

          <div
            style={{
              width: "220px",
              height: "2px",
              background: "#d97706",
              margin: "12px auto 0",
            }}
          />
        </div>
      </div>

      {/* Content */}

      <div
        style={{
          marginTop: "35px",
          textAlign: "center",
          color: "#333",
        }}
      >
        <div
          style={{
            fontSize: "26px",
          }}
        >
          यह प्रमाणित किया जाता है कि
        </div>

        <div
          style={{
            display: "inline-block",
            marginTop: "22px",
            fontSize: "48px",
            color: "#b45309",
            fontWeight: "bold",
            borderBottom: "3px dashed #d97706",
            padding: "0 30px 10px",
          }}
        >
          {name}
        </div>

        <div
          style={{
            marginTop: "30px",
            fontSize: "22px",
            lineHeight: "2",
          }}
        >
          पिता का नाम :
          <span
            style={{
              color: "#c2410c",
              fontWeight: "bold",
            }}
          >
            {" "}
            {father}
          </span>

          <br />

          राज्य :
          <span
            style={{
              color: "#c2410c",
              fontWeight: "bold",
            }}
          >
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

          सदस्य आईडी :
          <span
            style={{
              color: "#c2410c",
              fontWeight: "bold",
            }}
          >
            {" "}
            {id}
          </span>
        </div>
      </div>

      {/* Seal */}

      <img
        src="/seal.png"
        alt=""
        style={{
          position: "absolute",
          width: "140px",
          right: "70px",
          bottom: "145px",
          transform: "rotate(-12deg)",
          opacity: 0.85,
        }}
      />

      {/* Footer */}

      <div
        style={{
          position: "absolute",
          left: "60px",
          right: "60px",
          bottom: "40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          fontSize: "16px",
        }}
      >
        <div>
          दिनांक / Date : {date}
        </div>

        <div
          style={{
            textAlign: "center",
          }}
        >
          <div
            style={{
              width: "180px",
              borderBottom: "2px solid #222",
              marginBottom: "6px",
            }}
          />

          अधिकृत हस्ताक्षर

          <br />

          Authorized Signatory
        </div>
      </div>
    </div>
  );
}
