// script.js

// Function to change the image on mouse hover
// function changeImageOnHover(imageElement) {
//     const originalSrc = imageElement.src;
//     const hoverSrc = imageElement.dataset.open;

//     imageElement.addEventListener('mouseenter', () => {
//         imageElement.src = hoverSrc;
//     });

//     imageElement.addEventListener('mouseleave', () => {
//         imageElement.src = originalSrc;
//     });
// }

// // Select all the images for eyes and mouth
// const leftEye = document.getElementById('left-eye');
// const rightEye = document.getElementById('right-eye');
// const mouth = document.getElementById('mouth');

// // Add hover effects
// changeImageOnHover(leftEye);
// changeImageOnHover(rightEye);
// changeImageOnHover(mouth);

// // Function to change the image on mouse hover
// function changeImageOnHover(imageElement) {
//     const originalSrc = imageElement.src;
//     const hoverSrc = imageElement.dataset.open;

//     imageElement.addEventListener('mouseenter', () => {
//         imageElement.src = hoverSrc;
//     });

//     imageElement.addEventListener('mouseleave', () => {
//         imageElement.src = originalSrc;
//     });
// }

// // Function to handle clicks on the eyes when they're open
// function redirectTo(imageElement, targetUrl) {
//     imageElement.addEventListener('click', () => {
//         if (imageElement.src.includes('open')) { // Check if the eye is in the "open" state
//             window.location.href = targetUrl; // Redirect to the specified URL
//         }
//     });
// }

// // Select all the images for eyes and mouth
// const leftEye = document.getElementById('left-eye');
// const rightEye = document.getElementById('right-eye');
// const mouth = document.getElementById('mouth');

// // Add hover effects
// changeImageOnHover(leftEye);
// changeImageOnHover(rightEye);
// changeImageOnHover(mouth);

// // Add click redirection to sight.html when eyes are open
// redirectTo(leftEye, 'sight.html');
// redirectTo(rightEye, 'sight.html');

// // Add click redirection to taste.html when mouth is smiling
// mouth.addEventListener('click', () => {
//     if (mouth.src.includes('smile')) { // Check if the mouth is in the "smile" state
//         window.location.href = 'taste.html'; // Redirect to taste.html
//     }
// });

// Function to change the image on mouse hover (no need for nose hover functionality)
function changeImageOnHover(imageElement) {
    const originalSrc = imageElement.src;
    const hoverSrc = imageElement.dataset.open;

    imageElement.addEventListener('mouseenter', () => {
        imageElement.src = hoverSrc;
    });

    imageElement.addEventListener('mouseleave', () => {
        imageElement.src = originalSrc;
    });
}

// Function to handle clicks on the eyes when they're open
function redirectTo(imageElement, targetUrl) {
    imageElement.addEventListener('click', () => {
        if (imageElement.src.includes('open')) { // Check if the eye is in the "open" state
            window.location.href = targetUrl; // Redirect to the specified URL
        }
    });
}

// Select all the images for eyes, mouth, and nose
const leftEye = document.getElementById('left-eye');
const rightEye = document.getElementById('right-eye');
const mouth = document.getElementById('mouth');
const nose = document.getElementById('nose'); // Add the nose element

// Add hover effects to eyes and mouth
changeImageOnHover(leftEye);
changeImageOnHover(rightEye);
changeImageOnHover(mouth);

// Add click redirection to sight.html when eyes are open
redirectTo(leftEye, 'sight.html');
redirectTo(rightEye, 'sight.html');

// Add click redirection to taste.html when mouth is smiling
mouth.addEventListener('click', () => {
    if (mouth.src.includes('smile')) { // Check if the mouth is in the "smile" state
        window.location.href = 'taste.html'; // Redirect to taste.html
    }
});

// Add click redirection to smell.html when nose is clicked
nose.addEventListener('click', () => {
    window.location.href = 'smell.html'; // Redirect to smell.html when nose is clicked
});
