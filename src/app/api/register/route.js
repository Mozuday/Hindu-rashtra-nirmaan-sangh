export async function POST(req) {
  try {
    const body = await req.json();

    const {
      name,
      father,
      phone,
      address,
      assembly,
      district,
      state,
    } = body;

    // ✅ Validation
    if (
      !name ||
      !father ||
      !phone ||
      !address ||
      !assembly ||
      !district ||
      !state
    ) {
      return Response.json({
        success: false,
        message: "Missing required fields",
      });
    }

    // ✅ Simple Member ID
    const memberId =
      "HRNS-" + Date.now().toString().slice(-6);

    // ✅ Telegram Message
    const message = `
🟠 NEW MEMBER REGISTRATION

👤 नाम / Name: ${name}

👨 पिता / पति का नाम:
${father}

📞 मोबाइल नंबर:
${phone}

🏠 पता:
${address}

🏛️ विधानसभा (शहर या गाँव):
${assembly}

📍 जिला:
${district}

🗺️ राज्य:
${state}

🆔 Member ID:
${memberId}
`;

    // ✅ Send Telegram Message
    const telegramRes = await fetch(
      `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: process.env.TELEGRAM_CHAT_ID,
          text: message,
        }),
      }
    );

    const telegramData = await telegramRes.json();

    console.log("Telegram Response:", telegramData);

    // ✅ Success Response
    return Response.json({
      success: true,
      memberId,
      name,
      father,
      state,
    });

  } catch (err) {
    console.error("REGISTER ERROR:", err);

    return Response.json({
      success: false,
      message: "Server Error",
    });
  }
}