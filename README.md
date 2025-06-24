<h1>🎮 GTA 6 Website with React.js</h1>

<p>A visually dynamic <strong>GTA 6-themed website</strong> built with <strong>React.js</strong>, featuring <strong>parallax effects</strong>, <strong>SVG animations</strong>, and <strong>GSAP-powered transitions</strong>. Inspired by the 
<a href="https://www.youtube.com/watch?v=tccIAsqFgG0&t=5081s" target="_blank">official GTA 6 trailer</a>, this project blends creative visuals with interactive front-end development.</p>

<hr />

<h2>🚀 Overview</h2>
<ul>
  <li>🎯 Parallax interactions triggered by mouse movement</li>
  <li>🖼️ SVG-based animated <strong>“VI”</strong> logo with masking effects</li>
  <li>⚙️ Smooth animations using <strong>GSAP (GreenSock Animation Platform)</strong></li>
  <li>📱 Basic responsive layout (further mobile optimization recommended)</li>
  <li>🎨 AI-generated visuals (characters, sky, cityscape)</li>
</ul>

<hr />

<h2>🧰 Features</h2>
<ul>
  <li><strong>Parallax Effect</strong> – Interactive depth with mouse movement</li>
  <li><strong>Animated SVG Logo</strong> – "VI" logo animation with masking</li>
  <li><strong>GSAP Animations</strong> – Scale, rotate, and transition elements</li>
  <li><strong>Responsive Design</strong> – Basic support for multiple screen sizes</li>
  <li><strong>Custom Graphics</strong> – AI-generated backgrounds and characters</li>
</ul>

<hr />

<h2>📦 Prerequisites</h2>
<ul>
  <li>Node.js and npm installed</li>
  <li>Basic knowledge of React.js</li>
  <li>A code editor like <strong>VS Code</strong> (Cursor AI extension optional)</li>
</ul>

<hr />

<h2>⚙️ Installation</h2>
<pre><code># Step 1: Create a React app
npx create-react-app@latest . --template react

# Step 2: Install dependencies
npm install gsap react-icons tailwindcss postcss autoprefixer

# Step 3: Initialize Tailwind CSS
npx tailwindcss init -p
</code></pre>

<h3>Tailwind Setup</h3>
<p>Update <code>tailwind.config.js</code>:</p>
<pre><code>content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"]</code></pre>

<p>Import Tailwind into <code>index.css</code>:</p>
<pre><code>@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';</code></pre>

<h3>Start Development Server</h3>
<pre><code>npm run dev</code></pre>

<hr />

<h2>🧑‍💻 Usage</h2>
<ol>
  <li>Place AI-generated images (<code>bg.png</code>, <code>sky.png</code>, <code>girl.png</code>, etc.) in the <code>public/</code> folder.</li>
  <li>Run the app and move your mouse around to experience the parallax animation.</li>
  <li>The <strong>animated SVG logo</strong> appears on page load, then transitions to main content.</li>
</ol>

<hr />

<h2>📁 Project Structure</h2>
<pre><code>├── public/
│   └── [static assets like bg.png, girl.png]
├── src/
│   ├── components/
│   └── main.jsx   # Main logic with GSAP animations
├── index.css      # Global styles and Tailwind imports
├── tailwind.config.js
</code></pre>

<hr />

<h2>🛠️ Development Process</h2>
<ul>
  <li><strong>Planning</strong> – Dual-layer design for SVG and content</li>
  <li><strong>Graphics</strong> – Generated custom assets using AI tools (e.g., Sora AI)</li>
  <li><strong>Development</strong> – React + Tailwind CSS + GSAP</li>
  <li><strong>Testing</strong> – Tuned scale and positioning for fluid motion</li>
</ul>

<hr />

<h2>📽️ Credits</h2>
<ul>
  <li>Inspired by the <strong>GTA 6 Official Trailer</strong> by Rockstar Games</li>
  
</ul>

<hr />

<h2>🔮 Future Improvements</h2>
<ul>
  <li>Enhance <strong>mobile responsiveness</strong></li>
  <li>Optimize image loading (e.g., lazy loading, compression)</li>
  <li>Add more dynamic <strong>GSAP animation effects</strong></li>
</ul>

<hr />

<h2>📄 License</h2>
<p>This project is created for <strong>educational purposes only</strong>.<br />Feel free to fork, modify, and experiment!</p>
