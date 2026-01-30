# 🌸 Meditative Flower Growth

An interactive, calming flower growth experience built with **React** and **Vite**. Water your flower, watch it bloom, and enjoy subtle animations and sounds designed for a peaceful, meditative interaction.

---

## **Demo**

[Flowerama](flowerama.netlify.app)


---

## **Features**

- Fullscreen, OLED-safe black background (`#000`)  
- Central SVG flower with **5 growth stages**  
- Watering can fixed at top-left (`50px`)  
- Water the flower once every **10 seconds**  
- Animated water drops on watering  
- Circular progress ring around the flower showing growth readiness  
- Final bloom animation with gentle glow  
- Sounds for watering, growth, bloom, and cooldown (optional, low volume)  
- Enter your name at the start—displayed after bloom  

---

## **Tech Stack**

- **Frontend**: React + Vite  
- **Styling**: CSS only (keyframes & transitions, no animation libraries)  
- **Visuals**: SVG for flower and watering can  
- **Audio**: HTMLAudioElement / Web Audio API  

---

## **Accessibility**

- Fully keyboard-navigable watering interaction  
- Focusable buttons with `aria-label`s  
- Respects `prefers-reduced-motion`  
- High contrast but gentle visuals  

---

## **Animations & Motion**

- Organic easing with `cubic-bezier(0.22, 1, 0.36, 1)`  
- Subtle scale, opacity, and blur transitions  
- Calm and minimal; no aggressive motion  s

---

## **Project Structure**





