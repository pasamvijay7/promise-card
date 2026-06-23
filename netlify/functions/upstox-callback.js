exports.handler = async (event) => {
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      query: event.queryStringParameters,
      env_redirect: process.env.UPSTOX_REDIRECT_URI,
      env_client: process.env.UPSTOX_CLIENT_ID ? "SET" : "MISSING",
      env_secret: process.env.UPSTOX_CLIENT_SECRET ? "SET" : "MISSING"
    })
  };
};
