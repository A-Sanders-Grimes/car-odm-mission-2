# Async Odyssey - Car Models Explorer

Mission M2 · Async Odyssey — Web Development I / Advanced JavaScript.

## How to Run It
1. Run `npm install` to install dependencies.
2. Run `npm run dev` to start the local Vite development server.
3. Type a car brand (e.g., `honda`, `toyota`, `ford`) into the search box to load models.

## AI Usage
I used Gemini CLI in VS Code as a pair programming assistant to help design the ES module architecture.
Example of a real prompt used: "Propose a 4-module ES structure (api, logic, render, main) for a Vite app consuming a car public API with localStorage caching."
I verified asynchronous handling by simulating network throttling and empty search queries in the browser.
I wrote entirely by hand: the event listener logic and the custom CSS styles.

## Autopsy
1. I decoupled data transformation from DOM rendering by creating an isolated `src_logic.js` module utilizing `.map()`, `.filter()`, and `.reduce()`. This keeps rendering functions pure and separates business logic from presentation.
2. I implemented a caching mechanism using `localStorage` inside the API module. I chose this approach to avoid repeated network calls for identical queries, significantly optimizing performance.
