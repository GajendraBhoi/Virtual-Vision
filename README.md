# 👓 Virtual Vision

A browser-based assistive application designed to help visually impaired users interact with their surroundings using computer vision, OCR, location services, and voice feedback.

---

## 📌 Project Overview

Virtual Vision is an assistive technology prototype designed to explore how modern web technologies can help visually impaired users interact with their surroundings.

The project combines computer vision, OCR, geolocation, barcode scanning, and voice feedback into a single browser-based application that can run directly on a smartphone without requiring specialized hardware.

The primary goal of the project is to demonstrate the practical use of AI-powered accessibility features using lightweight, client-side technologies.

This project is currently an MVP (Minimum Viable Product) and serves as both a learning project and a proof of concept for future accessibility-focused solutions.

---

## ✨ Current Features

### 👁 Object Detection

Detects nearby objects using TensorFlow.js and the COCO-SSD model.

Features:

- Live camera feed
- Real-time object detection
- Distance estimation (approximate)
- Voice announcement of detected objects

Status:

✅ Working

⚠️ Detection accuracy depends on lighting and model limitations.

---

### 📖 OCR Text Reader

Reads printed text using Tesseract.js.

Features:

- Camera capture
- Optical Character Recognition (OCR)
- Voice playback of recognized text
- Manual re-read functionality

Status:

✅ Working

⚠️ Recognition quality varies based on image clarity and text size.

---

### 📍 Location Assistant

Uses browser geolocation and OpenStreetMap reverse geocoding.

Features:

- Current location detection
- Address lookup
- Voice playback of detected address
- Map preview

Status:

✅ Working

⚠️ Accuracy depends on browser location permissions.

---

### 📦 Product Scanner

Barcode scanning using html5-qrcode.

Features:

- Barcode scanning
- Product information lookup (demo dataset)
- Voice feedback

Status:

✅ Working

⚠️ Currently uses a small mock product database rather than a real product API.

---

### ⚙️ Accessibility Settings

Provides usage instructions and accessibility guidance.

Status:

✅ Working

---

## 🚧 Future Improvements

Potential future enhancements include:

- More accurate object distance estimation
- Real product database integration
- Improved OCR preprocessing
- Obstacle avoidance alerts
- Scene description generation
- Voice command support
- Offline support
- Better accessibility testing with real users
- Performance optimization for low-end devices

---

## 🛠 Technology Stack

| Technology | Purpose |
|------------|----------|
| React.js | Frontend Framework |
| TensorFlow.js | Object Detection |
| COCO-SSD | Detection Model |
| Tesseract.js | OCR |
| html5-qrcode | Barcode Scanning |
| React Webcam | Camera Access |
| React Leaflet | Maps |
| OpenStreetMap | Reverse Geocoding |
| Web Speech API | Voice Feedback |

---

## 👥 Contributors

### Project Concept & Development

**Vivek Dahariya**

- Project idea and accessibility-focused problem statement
- Feature planning and system design
- Object detection integration
- OCR integration
- Location assistance module
- Product scanner implementation
- Voice feedback workflows
- UI refinement and usability improvements
- Camera lifecycle management
- Documentation and project maintenance

### Development Support

**Gajendra Bhoi**

- Frontend development support
- Environment setup assistance
- Feature implementation support during development

---

## 🚀 Running Locally

Clone the repository:

```bash
git clone https://github.com/GajendraBhoi/Virtual-Vision.git
```

Move into the project:

```bash
cd Virtual-Vision/frontend
```

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

Open:

```text
http://localhost:5173
```

---

## ⚠️ Disclaimer

This project is an educational and experimental prototype.

It is not intended to replace professional accessibility tools or assistive technologies and should not be relied upon in safety-critical situations.

---

## 📄 License

MIT License
