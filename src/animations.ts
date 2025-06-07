/**
 * Animations for the Countdown Website
 * This file contains all the animation-related functionality
 */

// Check if code is running in a browser environment
export const isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';

// Initialize animations when the DOM is loaded
if (isBrowser) {
    document.addEventListener('DOMContentLoaded', () => {
        // Create decorative elements
        createDecorations();

        // Add animation to countdown items
        animateCountdownItems();

        // Add typing effect to the message
        typeMessage();
    });
}

/**
 * Creates floating decorative elements in the background
 */
function createDecorations(): void {
    if (!isBrowser) return;

    const body = document.querySelector('body');
    if (!body) return;

    // Create 4 decorative elements
    for (let i = 0; i < 4; i++) {
        const decoration = document.createElement('div');
        decoration.className = 'decoration';
        body.appendChild(decoration);
    }
}

/**
 * Adds entrance animations to countdown items
 */
function animateCountdownItems(): void {
    if (!isBrowser) return;

    const countdownItems = document.querySelectorAll('.countdown-item');

    // Ensure countdown numbers are visible initially
    const countdownNumbers = document.querySelectorAll('.countdown-number');
    countdownNumbers.forEach(number => {
        (number as HTMLElement).style.opacity = '1';
    });

    countdownItems.forEach((item, index) => {
        // Add a class for CSS animations
        item.classList.add('animate-in');

        // Set a delay based on the index
        (item as HTMLElement).style.animationDelay = `${index * 0.2}s`;

        // Ensure animation completes by forcing opacity after a delay
        setTimeout(() => {
            (item as HTMLElement).style.opacity = '1';
        }, 1000); // Wait for animation to complete
    });
}

/**
 * Adds a typing effect to the message
 */
function typeMessage(): void {
    if (!isBrowser) return;

    const messageElement = document.querySelector('.message');
    if (!messageElement) return;

    const originalText = messageElement.textContent || '';
    messageElement.textContent = '';

    // Store original text for later use
    messageElement.setAttribute('data-original-text', originalText);

    // Type each character with a delay
    let charIndex = 0;
    const typingInterval = setInterval(() => {
        if (charIndex < originalText.length) {
            messageElement.textContent += originalText.charAt(charIndex);
            charIndex++;
        } else {
            clearInterval(typingInterval);
        }
    }, 50);
}

/**
 * Adds a celebration effect when the countdown reaches zero
 * This function will be called from the main index.ts file
 */
export function celebrateTargetReached(): void {
    if (!isBrowser) return;

    // Add a class to the body for celebration styles
    document.body.classList.add('celebration');

    // Create confetti effect
    createConfetti();

    // Add pulsing effect to the message
    const messageElement = document.querySelector('.message');
    if (messageElement) {
        messageElement.classList.add('celebrate');
    }
}

/**
 * Creates a simple confetti effect
 */
function createConfetti(): void {
    if (!isBrowser) return;

    const container = document.querySelector('.container');
    if (!container) return;

    // Create 50 confetti particles
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';

        // Random position, color, and animation delay
        confetti.style.left = `${Math.random() * 100}%`;
        confetti.style.backgroundColor = getRandomColor();
        confetti.style.animationDelay = `${Math.random() * 3}s`;

        container.appendChild(confetti);
    }
}

/**
 * Returns a random color for confetti
 */
function getRandomColor(): string {
    const colors = [
        '#ff6b6b', // Red
        '#6e8efb', // Blue
        '#a777e3', // Purple
        '#4ecdc4', // Teal
        '#ffbe0b', // Yellow
    ];
    return colors[Math.floor(Math.random() * colors.length)];
}
