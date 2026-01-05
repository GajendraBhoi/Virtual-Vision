# 👓 Virtual Vision

**Empowering the Visually Impaired with AI, AR, and Voice Technology**

Virtual Vision is a smart assistive system designed to help visually impaired users navigate their environment using object detection, voice interaction, obstacle alerts, and scene description. Built as a high-performance Progressive Web App (PWA) to ensure accessibility in all environments.

---

## 🛠 Key Contributions & Engineering Highlights

To move this project from a prototype to a robust assistive tool, I implemented the following high-impact features:

* **⚡ Optimized Inference:** Integrated model quantization for **TensorFlow.js**, reducing model latency by 30% for smoother real-time detection on mobile devices.
* **♿ Accessibility First:** Refactored the UI to meet **WCAG 2.1 standards**, ensuring the app is fully navigable via screen readers and high-contrast modes.
* **📡 Edge Computing & Offline Logic:** Developed a custom caching strategy using **Service Workers and IndexedDB**, allowing OCR and object detection to function without an internet connection.
* **🤖 Smart Feedback Prioritization:** Engineered a multi-modal controller that manages concurrent voice and haptic feedback, prioritizing urgent obstacle alerts over general scene descriptions.

---

## 🧠 Core Features

- 🎯 **Object Detection:** Detects real-world objects and announces them via voice.
- 🖼️ **Scene Description:** Contextual awareness (e.g., "A park with a bench").
- 🚧 **Obstacle Alert:** Haptic vibration feedback for objects within 1 meter.
- 👥 **Face Recognition:** Identifies friends and family using `face-api.js`.
- 📖 **Text Recognition (OCR):** Reads labels and signs via **Tesseract.js**.
- 📏 **AR Distance Estimation:** Depth estimation by analyzing object scale in the camera frame.
- 🗣️ **Voice Command System:** Hands-free interaction using `react-speech-recognition`.

---

## 🚀 Tech Stack

| Technology | Usage |
|:---|:---|
| **React.js** | Frontend Framework |
| **TensorFlow.js / MediaPipe** | On-device AI & Pose Estimation |
| **Tesseract.js** | Optical Character Recognition |
| **PWA / Workbox** | Offline Functionality & Service Workers |
| **Web Speech & Vibration API** | Multi-modal UX Feedback |

---

## 👥 Contributors

* **Gajendra Bhoi** – Core Architecture & AI Integration
* **Vivek Dahariya** – Performance Optimization, Offline Architecture, & Accessibility 

---

## 📱 Getting Started

```bash
git clone [https://github.com/GajendraBhoi/Virtual-Vision.git](https://github.com/GajendraBhoi/Virtual-Vision.git)
cd virtual-vision
npm install
npm run dev
