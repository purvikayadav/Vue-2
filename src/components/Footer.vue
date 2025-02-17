<template>
    <footer class="footer">
      <div class="footer-content">
        <p>&copy; {{ new Date().getFullYear() }} MyApp. All rights reserved.</p>
        <ul class="footer-links">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/about">About</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>
          <li><router-link to="/privacy-policy">Privacy Policy</router-link></li>
        </ul>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    setup() {
      return {};
    },
  };
  </script>
  
  <style scoped>
  .footer {
    width: 100%;
    height: 20vh; /* 20% of the viewport height */
    background-color: #333;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 1000;
  }
  
  .footer-content {
    text-align: center;
    width: 100%;
    padding: 1rem;
  }
  
  .footer-links {
    list-style: none;
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    padding: 0;
    margin-top: 10px;
  }
  
  .footer-links li a {
    color: white;
    text-decoration: none;
    font-size: 1rem;
  }
  
  .footer-links li a:hover {
    text-decoration: underline;
  }
  
  /* Responsive adjustments */
  @media (max-width: 768px) {
    .footer {
      height: auto; /* Adjust height for smaller screens */
      padding: 1.5rem 0;
    }
  
    .footer-links {
      flex-direction: column;
      gap: 0.8rem;
    }
  }
  </style>
  