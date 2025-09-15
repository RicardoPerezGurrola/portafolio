// src/utils/scroll.ts

export const scrollToSection = (id: string) => {
  let targetPosition = 0;
  
  if (id !== 'inicio') {
    const targetElement = document.getElementById(id) as HTMLElement;
    const headerElement = document.querySelector('.header') as HTMLElement;

    if (targetElement && headerElement) { 
      const headerHeight = headerElement.offsetHeight;
      targetPosition = targetElement.offsetTop - headerHeight;
    } else {
      return; 
    }
  }
  
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const duration = 500;
  let startTime: number | null = null;

  const animateScroll = (timestamp: number) => {
    if (!startTime) startTime = timestamp;
    const progress = timestamp - startTime;
    const percentage = Math.min(progress / duration, 1);
    
    window.scrollTo(0, startPosition + distance * percentage);

    if (progress < duration) {
      window.requestAnimationFrame(animateScroll);
    }
  };
  
  window.requestAnimationFrame(animateScroll);
};