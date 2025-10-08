import { Device } from "@capacitor/device";
import { Geolocation } from "@capacitor/geolocation";
import { Camera } from "@capacitor/camera";
import { Clipboard } from "@capacitor/clipboard";
import { LocalNotifications } from "@capacitor/local-notifications";

const output = document.getElementById("output");
function log(msg) {
  output.textContent =
    typeof msg === "string" ? msg : JSON.stringify(msg, null, 2);
}

document.getElementById("btn-device").addEventListener("click", async () => {
  const info = await Device.getInfo();
  log(info);
});

document.getElementById("btn-geo").addEventListener("click", async () => {
  try {
    const pos = await Geolocation.getCurrentPosition();
    log(pos);
  } catch (err) {
    log("Error: " + err.message);
  }
});

document.getElementById("btn-camera").addEventListener("click", async () => {
  try {
    const photo = await Camera.getPhoto({ resultType: "base64" });
    log(photo);
  } catch (err) {
    log("Error: " + err.message);
  }
});

document.getElementById("btn-clipboard").addEventListener("click", async () => {
  await Clipboard.write({ string: "Hello from Capacitor PWA!" });
  log("Copied text to clipboard!");
});

document.getElementById("btn-notify").addEventListener("click", async () => {
  await LocalNotifications.requestPermissions();
  await LocalNotifications.schedule({
    notifications: [
      {
        title: "Capacitor PWA Test",
        body: "This is a local notification",
        id: 1,
      },
    ],
  });
  log("Notification scheduled");
});
