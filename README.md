# Capacitor PWA

A Progressive Web App (PWA) demo using Capacitor plugins and Vite.

## Features

- Device info
- Geolocation
- Camera
- Clipboard
- Local notifications

## Structure

- `src/` — Source files (HTML, JS, manifest)
- `dist/` — Production build output
- `capacitor.config.ts` — Capacitor configuration

## Scripts

- `npm run dev` — Start development server
- `npm run build` — Build for production
- `npm run preview` — Preview production build

## Getting Started

1. Install dependencies: `npm install`
2. Start dev server: `npm run dev`
3. Build: `npm run build`

## Packaging for Android (Capacitor)

This project uses Capacitor to create native Android and iOS shells. The steps below show how to add the Android platform, copy your web build into the native project, and open it in Android Studio.

Prerequisites

- Java JDK 11+
- Android Studio and Android SDK installed
- ANDROID_SDK_ROOT (or ANDROID_HOME) set in your environment

1. Install Capacitor CLI (if missing) and the Android runtime for Capacitor:

```bash
npm install --save @capacitor/core @capacitor/cli
npm install --save @capacitor/android
```

2. Add the Android platform (creates an `android/` folder):

```bash
npx cap add android
```

3. Build your web app and copy the output into the native project:

```bash
npm run build
npx cap copy android
npx cap sync android
```

4. Open the Android project in Android Studio and run or build:

```bash
npx cap open android
```

Notes and tips

- `capacitor.config.ts` currently sets `webDir: "dist"`. Make sure you run `npm run build` before `npx cap copy` so the `dist/` folder contains the production files.
- If `capacitor.config.ts` has a `server.url` entry (used for live-reload or testing against a deployed site), remove or comment it out before building a native APK — otherwise the native app will load the remote URL instead of the local `dist/` files.
- Signing & publishing: use Android Studio to configure signing keys and produce a release APK/AAB for Play Store.
- If you want a single CLI shortcut, add this script to `package.json`:

```json
"scripts": {
  "android": "npm run build && npx cap copy android && npx cap open android"
}
```

Troubleshooting

- Gradle/SDK issues: open the project in Android Studio and accept prompts to install missing SDK components or update Gradle.
- If the app tries to load a remote `server.url`, comment it out in `capacitor.config.ts` and re-run `npx cap copy android`.

Further reading

- Capacitor Android docs: https://capacitorjs.com/docs/android

## Packaging for iOS with Capacitor

You can package this PWA as an iOS app using Capacitor:

1. **Install Capacitor CLI (if not already):**
   ```sh
   npm install --save @capacitor/core @capacitor/cli
   ```
2. **Add iOS platform:**
   ```sh
   npx cap add ios
   ```
3. **Build your web app:**
   ```sh
   npm run build
   ```
4. **Copy the build output to the iOS project:**
   ```sh
   npx cap copy ios
   ```
5. **Open the iOS project in Xcode:**
   ```sh
   npx cap open ios
   ```
6. **Configure, sign, and publish your app to the App Store using Xcode.**

For more info, see the [Capacitor documentation](https://capacitorjs.com/docs/getting-started).

## iOS Permissions and Info.plist

When using native iOS features (like Camera, Geolocation, Notifications, etc.) with Capacitor, you must declare permissions in your iOS app's `Info.plist` file. This file is located in your iOS project at:

```
ios/App/App/Info.plist
```

Add the following keys for common permissions:

```xml
	<!-- Permissions you actually need -->
	<key>NSCameraUsageDescription</key>
	<string>This app needs access to the camera.</string>

	<key>NSLocationWhenInUseUsageDescription</key>
	<string>This app needs your location to provide location-based features.</string>

	<key>NSUserNotificationUsageDescription</key>
	<string>This app needs permission to send notifications.</string>
```

**How to add:**

1. Open your iOS project in Xcode (`npx cap open ios`).
2. In the Project Navigator, find `App/App/Info.plist`.
3. Add the required keys and descriptions for each feature your app uses.
4. Save and rebuild your app.

For more info, see the [Apple documentation](https://developer.apple.com/documentation/bundleresources/information_property_list) and [Capacitor iOS guide](https://capacitorjs.com/docs/v5/ios).

## Notes on Android packaging

If you need to publish this PWA as an Android app in the future, you will need to follow Android's Trusted Web Activity (TWA) requirements (Digital Asset Links) or use Capacitor to create a native Android shell. See Android and Capacitor docs for details.

## License

MIT
