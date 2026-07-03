import type { CapacitorConfig } from "@capacitor/cli";

/**
 * Capacitor configuration for the ADSUM member Android/iOS shell.
 *
 * The web payload (webDir) is the production build of the web member
 * application (adsum-web-membre), copied into ./www by `npm run prepare:web`.
 * The shell therefore ships the exact same UI, design system and business logic
 * as the web member app, guaranteeing parity by construction.
 */
const config: CapacitorConfig = {
  appId: "org.sacerdoceroyal.adsum",
  appName: "ADSUM",
  webDir: "www",
  backgroundColor: "#ffffff",
  android: {
    // Serve the bundled assets over https so secure cookies and localStorage
    // behave the same as on the web app; no cleartext to a remote origin.
    allowMixedContent: false,
  },
  server: {
    androidScheme: "https",
  },
};

export default config;
