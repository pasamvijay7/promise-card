exports.handler = async (event) => {
  const code = event.queryStringParameters?.code;

  if (!code) {
    return {
      statusCode: 400,
      body: "No authorization code received"
    };
  }

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "text/html"
    },
    body: `
      <html>
      <body>
        <h2>Upstox Authorization Success</h2>
        <p>Authorization code received.</p>
        <pre>${code}</pre>
      </body>
      </html>
    `
  };
};