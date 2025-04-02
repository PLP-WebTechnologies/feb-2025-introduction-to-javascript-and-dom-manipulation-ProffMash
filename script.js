document.addEventListener('DOMContentLoaded', function() {
    // 1. Change text content dynamically
    const changeTextBtn = document.getElementById('change-text-btn');
    const dynamicText = document.getElementById('dynamic-text');
    
    changeTextBtn.addEventListener('click', function() {
        dynamicText.textContent = "Text successfully changed! The button worked!";
        dynamicText.style.color = "green";
    });
    
    // 2. Modify CSS styles via JavaScript
    const styleDemo = document.getElementById('style-demo');
    
    styleDemo.addEventListener('mouseover', function() {
        this.style.backgroundColor = "#ffcccb";
        this.style.transform = "scale(1.05)";
        this.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)";
    });
    
    styleDemo.addEventListener('mouseout', function() {
        this.style.backgroundColor = "#f0f0f0";
        this.style.transform = "scale(1)";
        this.style.boxShadow = "none";
    });
    
    // 3. Add or remove an element when a button is clicked
    const toggleElementBtn = document.getElementById('toggle-element-btn');
    const specialMessageContainer = document.getElementById('special-message-container');
    let messageVisible = false;
    
    toggleElementBtn.addEventListener('click', function() {
        if (messageVisible) {
            // Remove the message
            specialMessageContainer.innerHTML = '';
            toggleElementBtn.textContent = "Show Special Message";
        } else {
            // Add the message
            const message = document.createElement('div');
            message.className = 'special-message';
            message.textContent = "This is a special message that appears when you click the button!";
            specialMessageContainer.appendChild(message);
            toggleElementBtn.textContent = "Hide Special Message";
        }
        messageVisible = !messageVisible;
    });
    
    // Bonus: Change the main title color periodically
    const mainTitle = document.getElementById('main-title');
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#F333FF'];
    let currentColor = 0;
    
    setInterval(function() {
        mainTitle.style.color = colors[currentColor];
        currentColor = (currentColor + 1) % colors.length;
    }, 1000);
});