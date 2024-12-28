document.addEventListener('DOMContentLoaded', () => {
    const toggleThemeButton = document.getElementById('toggletheme');
    const themeIcon = document.getElementById('themeicon');
    let isDarkTheme = true;
  
    toggleThemeButton.addEventListener('click', () => {
      document.body.classList.toggle('light-theme');
      isDarkTheme = !isDarkTheme;
      themeIcon.className = isDarkTheme ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
    });
  
    const buttons = document.querySelectorAll('.button');
  
    buttons.forEach((button) => {
      button.addEventListener('mouseenter', () => {
        button.style.transform = 'scale(1.1)';
      });
  
      button.addEventListener('mouseleave', () => {
        button.style.transform = 'scale(1)';
      });
  
      button.addEventListener('mousedown', () => {
        button.style.transform = 'scale(0.95)';
      });
  
      button.addEventListener('mouseup', () => {
        button.style.transform = 'scale(1.1)';
      });
    });

    const knowledgeCards = document.querySelectorAll('.knowledgecard');
  
    knowledgeCards.forEach((card) => {
      card.addEventListener('mouseenter', () => {
        card.style.boxShadow = '0 0 15px rgba(255, 255, 255, 0.8)';
        card.style.transform = 'translateY(-5px)';
      });
  
      card.addEventListener('mouseleave', () => {
        card.style.boxShadow = 'none';
        card.style.transform = 'translateY(0)';
      });
    });
    
    const projectCards = document.querySelectorAll('.projectcard');
  
    projectCards.forEach((card) => {
      card.addEventListener('mouseenter', () => {
        card.style.transform = 'rotateY(10deg)';
        card.style.transition = 'transform 0.3s ease';
      });
  
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'rotateY(0)';
      });
    });
    
    const contactLinks = document.querySelectorAll('.contactinfo a');
  
    contactLinks.forEach((link) => {
      link.addEventListener('mouseenter', () => {
        link.style.color = '#FF4500';
        link.style.transition = 'color 0.3s ease';
      });
  
      link.addEventListener('mouseleave', () => {
        link.style.color = '';
      });
    });
    const navLinks = document.querySelectorAll('nav a, .button');
  
    navLinks.forEach((link) => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
  
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  });
  
  document.body.classList.toggle('light-theme');

  