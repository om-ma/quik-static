document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab');
    const glider = document.querySelector('.glider');
  
    const updateGlider = (targetTab) => {
      tabs.forEach(tab => tab.classList.remove('active'));
      targetTab.classList.add('active');
  
      const tabRect = targetTab.getBoundingClientRect();
      const containerRect = targetTab.parentElement.getBoundingClientRect();
      const gliderLeft = tabRect.left - containerRect.left;
      const gliderWidth = tabRect.width;
  
      glider.style.width = `${gliderWidth}px`;
      glider.style.transform = `translateX(${gliderLeft}px)`;
    };
  
    updateGlider(document.querySelector('.tab.active'));
  
    tabs.forEach(tab => {
      tab.addEventListener('click', (e) => {
        updateGlider(tab);
      });
    });
  
    window.addEventListener('resize', () => {
      const activeTab = document.querySelector('.tab.active');
      updateGlider(activeTab);
    });
  });
  