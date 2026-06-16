exports.handler = async (event) => {
  try {
    const code = event.queryStringParameters?.code;

    if (!code) {
      return {
        statusCode: 400,
        body: "No authorization code received"
      };
    }

    const tokenResponse = await fetch(
      "https://api.upstox.com/v2/login/authorization/token",
      {
        method: "POST",
        headers: {
          accept: "application/json",
          "Api-Version": "2.0",
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams({
          code,
          client_id: process.env.UPSTOX_CLIENT_ID,
          client_secret: process.env.UPSTOX_CLIENT_SECRET,
          redirect_uri: process.env.UPSTOX_REDIRECT_URI,
          grant_type: "authorization_code"
        })
      }
    );

    const tokenData = await tokenResponse.json();

    if (!tokenData.access_token) {
      return {
        statusCode: 500,
        body: JSON.stringify(tokenData)
      };
    }

    await fetch("http://144.24.157.229:5001/update-token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        secret: "tradingbot_2026_secret_x9K4P7",
        access_token: tokenData.access_token,
        generated_at: new Date().toISOString()
      })
    });

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "text/html"
      },
      body: `
        <h2>Success</h2>
        <p>Token saved to Oracle VM.</p>
      `
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: err.toString()
    };
  }
};
