
---

# 🎹 Maestro AI Frontend: Project Status

The frontend for the **Maestro AI Tutor** is now **Feature Complete**. It is designed as a high-performance, real-time dashboard that integrates live computer vision with interactive musical notation.

---

## 🚀 Technical Achievements

### 1. State Management (The Brain)

We implemented **Zustand** to handle the application's global state. This allows for near-zero latency when updating AI detections.

* **Centralized Store:** Manages `songQueue`, `currentChordIndex`, and `detections` (coordinates).
* **Simulated Testing:** Includes a manual "trigger" button to verify that the store updates the UI without needing the backend.

### 2. High-Fidelity UI (The Skin)

The interface uses **Tailwind CSS v4** with a "Modern Studio" aesthetic.

* **Glassmorphism:** Semi-transparent panels with `backdrop-blur` for a premium, futuristic feel.
* **Viewport Locking:** Forced `h-screen` (100vh) layout to ensure a professional "App" experience with zero vertical scrolling.
* **Responsive Grid:** A 12-column system that prioritizes the video feed (9 cols) while keeping the AI Teacher panel (3 cols) visible.

### 3. AI Overlay Engine (The Vision)

The `VideoOverlay` component uses a **layered stack architecture**:

* **Layer 0 (Video):** Direct stream from the user's webcam.
* **Layer 1 (Canvas):** A transparent HTML5 Canvas perfectly aligned over the video to draw YOLO detection dots at $(x, y)$ coordinates.
* **Layer 2 (HUD):** A CSS overlay showing "AI Vision Active" status.

### 4. Interactive Music Timeline

The `ChordSheet` component provides a "Guitar Hero" style experience:

* **Framer Motion:** Smooth, spring-based animations for the sliding chord belt.
* **Center Playhead:** A laser-guided marker that indicates the exact moment a chord should be played.
* **Dynamic Styling:** Past chords fade out, and the "Current" chord pulses with a cyan glow.

---

## 🛠 Project Structure

```bash
src/
├── components/
│   ├── VideoOverlay.tsx   # Webcam + Canvas Layering
│   ├── ChordSheet.tsx     # Animated Music Timeline
│   └── MaestroPanel.tsx   # AI Feedback & Session Controls
├── store/
│   └── useMaestroStore.ts # Global State (Zustand)
└── App.tsx                # Main Layout & Grid Configuration

```

---

##  Ready for Integration

The frontend is currently in **Listener Mode**. It is expecting a JSON stream of coordinates via a WebSocket/Socket.io connection. Once the Python backend emits `detection_update`, the UI will automatically render the AI's vision and feedback.

---







🎹 Steps to Run the Maestro Frontend
1. Clone the Repository
Open the terminal and run:

Bash
git clone https://github.com/lonewolf-nb/maestro-vision-tutor.git
cd maestro-vision-tutor/frontend
2. Install Dependencies
This is the most important step. This command reads your package.json and automatically downloads React, Tailwind, Lucide-icons, and Zustand into a new node_modules folder on their machine.

Bash
npm install
3. Start the Development Server
Once the installation is finished, they can launch the app:

Bash
npm run dev
4. View the App
Vite will provide a local URL (usually http://localhost:5173). Tell them to open that in their browser.
