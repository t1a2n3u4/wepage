// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // ==========================
  // Theme Toggle Functionality
  // ==========================
  const toggleBtn = document.getElementById('theme-toggle');

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      document.body.classList.toggle('dark');

      // Save user preference
      const theme = document.body.classList.contains('dark') ? 'dark' : 'light';
      localStorage.setItem('theme', theme);
    });
  }

  // Apply saved theme on load
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark');
  }

  // ==========================
  // Smooth scrolling for nav links
  // ==========================
  document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const target = document.querySelector(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // ==========================
  // Pause/Play video on hover
  // ==========================
  document.querySelectorAll('video').forEach(video => {
    video.addEventListener('mouseenter', () => video.pause());
    video.addEventListener('mouseleave', () => video.play());
  });

  // ==========================
  // Loader fade-out on page load
  // ==========================
  window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    if (loader) {
      loader.style.transition = 'opacity 0.5s ease';
      loader.style.opacity = '0';
      setTimeout(() => {
        loader.style.display = 'none';
      }, 500);
    }
  });
});
  
// ==========================
// Pause/Play video with button
// ==========================
function toggleVideo(id) {
  const video = document.getElementById(id);
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

// ==========================
// Speech-to-text input
// ==========================
function startListening() {
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  recognition.lang = 'en-IN';
  recognition.onresult = function (event) {
    const result = event.results[0][0].transcript;
    document.getElementById('voiceInput').value = result;
  };
  recognition.start();
}

// ==========================
// Gemini AI Suggestions (Offline)
function fetchGeminiSuggestions() {
  const suggestions = `
  1. Add an AI chatbot to guide users through services.
  2. Use personalized video recommendations on homepage.
  3. Integrate voice-based navigation for accessibility.
  `;
  document.getElementById("aiSuggestions").innerText = suggestions;
}
