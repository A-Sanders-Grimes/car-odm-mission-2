# Async Odyssey - Car Models Explorer

Mission M2 · Async Odyssey — Web Development I / Advanced JavaScript.

## How to Run It
1. Run `npm install` to install dependencies.
2. Run `npm run dev` to start the local Vite development server.
3. Type a car brand (e.g., `honda`, `toyota`, `ford`) into the search box to load sorted models.

## AI Usage
I used Gemini CLI in VS Code as a pair programming assistant to help refactor the ES module architecture into a standard `src/` folder structure and resolve robustness warnings.
Example of a real prompt used: "How do I escape HTML strings safely against XSS and structure a Vite package.json with grouped data transformations?"
I verified asynchronous handling by simulating network throttling and empty search queries in the browser.
I wrote entirely by hand: the event listener logic and the custom CSS styles.

## Autopsy
1. I restructured the repository into a proper `src/` directory with a standard Vite `package.json`, ensuring the automated evaluation tools successfully detect the build technology.
2. I replaced artificial transformations with meaningful ones: deduplicating results with `Set`, sorting alphabetically with `localeCompare`, and grouping models by their initial letter using `reduce()`.
3. I hardened robustness by implementing HTML escaping for innerHTML insertion, protecting `JSON.parse` with `try/catch` for cache safety, encoding query parameters with `encodeURIComponent`, and disabling the search button during requests to avoid out-of-order race conditions.
