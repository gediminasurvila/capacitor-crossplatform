import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.example.capacitorcroossplatform",
  appName: "Capacitor CrossPlatform",
  webDir: "dist",
  server: {
    // For iOS native build, point this to your deployed PWA URL
    url: "https://capacitor-crossplatform.netlify.app",
    cleartext: true,
  },
  plugins: {
    SplashScreen: {
      launchAutoHide: true,
    },
  },
};

export default config;
