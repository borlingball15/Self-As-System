document.addEventListener('DOMContentLoaded', () => {
    let intervalId; // Store the interval ID for stopping the generation

    // Function to create an image
    function createImage() {
        const shapeContainer = document.getElementById('shape-container');
        const img = document.createElement('img');

        // Set random image source from your existing images
        const imageSources = [
            'images/nike.png',
            'images/chrome.png',
            'images/hoodie.png',
            'images/camera.png',
            'images/dior.png',
            'images/chocolate.png'
        ];
        img.src = imageSources[Math.floor(Math.random() * imageSources.length)];

        // Randomly set width, height, and position
        const size = Math.random() * 150 + 100; // Size between 100px and 250px
        img.style.width = `${size}px`;
        img.style.position = 'absolute'; // Allow for overlapping
        img.style.top = `${Math.random() * (window.innerHeight - size)}px`;
        img.style.left = `${Math.random() * (window.innerWidth - size)}px`;

        // Append the image to the container
        shapeContainer.appendChild(img);
    }

    // Function to create a rectangle with text
    function createRectangle() {
        const shapeContainer = document.getElementById('shape-container');
        const rectangle = document.createElement('div');
        
        // Set random dimensions and position
        const width = Math.random() * 100 + 50; // Width between 50px and 150px
        const height = Math.random() * 50 + 30; // Height between 30px and 80px
        rectangle.style.width = `${width}px`;
        rectangle.style.height = `${height}px`;
        rectangle.style.position = 'absolute';
        rectangle.style.top = `${Math.random() * (window.innerHeight - height)}px`;
        rectangle.style.left = `${Math.random() * (window.innerWidth - width)}px`;
        
        // Set random background color
        rectangle.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
        rectangle.style.display = 'flex';
        rectangle.style.justifyContent = 'center';
        rectangle.style.alignItems = 'center';
        rectangle.style.color = 'white'; // Text color
        rectangle.style.fontSize = '16px'; // Text size
        rectangle.style.fontWeight = 'bold'; // Text weight

        // Add text to the rectangle
        rectangle.innerText = 'Buy Now!!! 10% off!!!!';

        // Append the rectangle to the container
        shapeContainer.appendChild(rectangle);
    }

    // Start generating images and rectangles immediately after the DOM loads
    intervalId = setInterval(() => {
        createImage();
        createRectangle(); // Call createRectangle for generating rectangles
    }, 100); // Generate every 100ms

    // Stop generation after 15 seconds
    setTimeout(() => {
        clearInterval(intervalId); // Clear the interval
        console.log('Generation stopped after 15 seconds.'); // Log to console
    }, 15000); // 15 seconds
});
