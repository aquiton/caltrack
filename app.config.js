// app.config.js
import "dotenv/config";

// Check if we're in development
const isDev = process.env.NODE_ENV !== "production";

export default {
  expo: {
    name: "CalTrackApp",
    slug: "caltrack-app",
    version: "1.0.0",
    platforms: ["ios", "android"],
    extra: {
      API_URL: isDev ? process.env.LOCAL_API_URL : process.env.PROD_API_URL,
    },
  },
};
