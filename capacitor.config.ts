import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.example.cappwatest",
  appName: "Capacitor PWA Test",
  webDir: "dist",
  server: {
    // For iOS native build, point this to your deployed PWA URL
    url: "https://pwa-capacitor.netlify.app",
    cleartext: true,
  },
  plugins: {
    SplashScreen: {
      launchAutoHide: true,
    },
  },
};

export default config;
