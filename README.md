Create a GTA 6 Website with React.js

Overview

This project is Made using React.js, inspired by the official GTA 6 trailer (https://www.youtube.com/watch?v=tccIAsqFgG0&t=5081s). The website features a parallax effect, SVG animations, and GSAP (GreenSock Animation Platform) for smooth interactions.

Features





Parallax Effect: Mouse movement triggers a parallax effect on images and text.



SVG Animation: An animated "VI" logo with masking effects.



GSAP Integration: Animations for scaling, rotating, and transitioning elements.



Responsive Design: Basic structure adaptable to different screen sizes (further optimization recommended).



Custom Graphics: AI-generated images for characters, skies, and buildings.

Prerequisites





Node.js and npm installed.



Basic knowledge of React.js and JavaScript.



Text editor (e.g., VS Code with Cursor AI extension).

Installation





Clone the repository or create a new React app:

npx create-react-app@latest . --template react



Install dependencies:

npm install gsap react-icons tailwindcss postcss autoprefixer



Configure Tailwind CSS:





Initialize Tailwind: npx tailwindcss init -p



Update tailwind.config.js with content paths and plugins.



Import Tailwind in index.css: @import 'tailwindcss/base'; @import 'tailwindcss/components'; @import 'tailwindcss/utilities';



Start the development server:

npm run dev

Usage





Place AI-generated images (e.g., bg.png, sky.png, girl.png) in the public folder.



Run the app and interact with the mouse to see the parallax effect.



The SVG animation triggers on load, transitioning to the main content.

Project Structure





public/: Stores static assets like images.



src/: Contains React components and styles.



index.css: Global styles with Tailwind imports.



main.jsx: Main React component with GSAP animations.

Development Process





Planning: Designed a layout with two layers (SVG and content) for parallax.



Graphics Creation: Used AI tools (e.g., Sora AI) to generate custom images.



Coding: Built with React, Tailwind CSS for styling, and GSAP for animations.



Testing: Adjusted scaling and positioning for smooth mouse interactions.

Credits





Inspired by the GTA 6 Official Trailer by Rockstar Games.



Tutorial guidance from Sheriyans Coding School (https://www.youtube.com/watch?v=tccIAsqFgG0&t=5081s).

Future Improvements





Add mobile responsiveness.



Optimize image loading for better performance.



Enhance animations with additional GSAP effects.

License

This project is for educational purposes only. Feel free to fork and modify!
