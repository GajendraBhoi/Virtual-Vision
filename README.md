# 👓 Virtual Vision

**Empowering the Visually Impaired with AI, AR, and Voice Technology**

Virtual Vision is a smart assistive system designed to help visually impaired users navigate their environment using object detection, voice interaction, obstacle alerts, scene description, and more. The app works both online and offline as a Progressive Web App (PWA).

---

## 🧠 Key Features

- 🎯 **Object Detection**  
  Detect real-world objects like chairs, vehicles, doors, etc., and announce them via voice.

- 🖼️ **Scene Description**  
  Recognize and describe scenes like “a park with a bench and dog.”

- 🚧 **Obstacle Alert**  
  Alert users of obstacles within 1 meter using vibration (via haptic feedback support or vibration API).

- 👥 **Face Recognition**  
  Identify and recognize friends/family and announce their names aloud.

- 📖 **Text Recognition (OCR)**  
  Read out text from medicine labels, road signs, and menus using optical character recognition.

- 🗺️ **Navigation**  
  - Provide GPS-based outdoor directions.
  - Support indoor navigation using QR codes, BLE beacons, or predefined maps.

- 🗣️ **Voice Assistant & Commands**  
  - Enable interaction with a voice assistant (e.g., “What’s ahead?”)
  - React to user queries using [react-speech-recognition](https://www.npmjs.com/package/react-speech-recognition)

- 📏 **Distance Estimation with AR**  
  Use ARKit (iOS) or similar to estimate object distance by comparing object scale in the camera frame.

- 🌐 **Offline Support**  
  Access most features offline via PWA mode using `IndexedDB` and caching strategies.

---

## 🚀 Tech Stack

| Technology | Usage |
|------------|--------|
| **React.js** | Frontend UI |
| **TensorFlow.js / MediaPipe** | Object detection and pose estimation |
| **Tesseract.js** | OCR for reading text |
| **SpeechRecognition API** | Voice command input |
| **SpeechSynthesis API** | Voice output |
| **Face-api.js** | Facial recognition |
| **React Speech Recognition** | Voice assistant |
| **Web Vibration API** | Obstacle alerts |
| **Geolocation API** | GPS tracking |
| **PWA (IndexedDB, Service Workers)** | Offline support |

---

## 📱 Installation & Setup

```bash
# Clone the repository
git clone [https://github.com/your-username/virtual-vision.git](https://github.com/GajendraBhoi/Virtual-Vision.git)
cd virtual-vision

# Install dependencies
npm install

# Start development server
npm run dev
