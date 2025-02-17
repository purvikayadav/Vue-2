<template>
    <nav class="navbar">
      <div class="logo">
        <router-link to="/">MyApp</router-link>
      </div>
      <ul class="nav-links">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>
      <button class="menu-toggle" @click="toggleMenu">
        ☰
      </button>
      <ul v-if="isMenuOpen" class="mobile-menu">
        <li><router-link to="/" @click="toggleMenu">Home</router-link></li>
        <li><router-link to="/about" @click="toggleMenu">About</router-link></li>
        <li><router-link to="/contact" @click="toggleMenu">Contact</router-link></li>
      </ul>
    </nav>
  </template>
  
  <script>
  import { ref } from "vue";
  
  export default {
    setup() {
      const isMenuOpen = ref(false);
  
      const toggleMenu = () => {
        isMenuOpen.value = !isMenuOpen.value;
      };
  
      return { isMenuOpen, toggleMenu };
    },
  };
  </script>
  
  <style scoped>
  .navbar {
    width: 100%;
    height: 60px;
    background-color: #333;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
  }
  
  .logo a {
    color: white;
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: bold;
  }
  
  .nav-links {
    list-style: none;
    display: flex;
    gap: 20px;
  }
  
  .nav-links li a {
    color: white;
    text-decoration: none;
    font-size: 1.2rem;
    padding: 10px;
  }
  
  .nav-links li a:hover {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 5px;
  }
  
  .menu-toggle {
    display: none;
    background: none;
    border: none;
    color: white;
    font-size: 1.5rem;
    cursor: pointer;
  }
  
  .mobile-menu {
    display: none;
    flex-direction: column;
    background-color: #333;
    position: absolute;
    top: 60px;
    right: 20px;
    width: 200px;
    padding: 10px;
    border-radius: 5px;
  }
  
  .mobile-menu li {
    text-align: left;
    padding: 10px 0;
  }
  
  .mobile-menu a {
    color: white;
    text-decoration: none;
  }
  
  @media (max-width: 768px) {
    .nav-links {
      display: none;
    }
    .menu-toggle {
      display: block;
    }
    .mobile-menu {
      display: flex;
    }
  }
  </style>
  