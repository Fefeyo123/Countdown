// Import from animations
import { celebrateTargetReached, isBrowser } from './animations.js';
// Target date: September 1, 2025
const targetDate = new Date('2025-09-01T00:00:00');
// Variables for DOM elements
let daysElement = null;
let hoursElement = null;
let minutesElement = null;
let secondsElement = null;
let countdownInterval = null;
let hasCelebrated = false;
// Function to calculate time difference
function calculateTimeDifference() {
    // Get current date and time
    const currentDate = new Date();
    // Calculate the time difference in milliseconds
    const timeDifference = targetDate.getTime() - currentDate.getTime();
    const isPassed = timeDifference <= 0;
    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
    return {
        days: Math.max(0, days),
        hours: Math.max(0, hours),
        minutes: Math.max(0, minutes),
        seconds: Math.max(0, seconds),
        isPassed
    };
}
// Function to add leading zeros to numbers less than 10
function formatNumber(num) {
    return num < 10 ? `0${num}` : num.toString();
}
// Function to calculate and display the countdown
function updateCountdown() {
    if (!isBrowser) {
        // If not in browser, just log the time difference
        const time = calculateTimeDifference();
        console.log(`Time until target date: ${time.days} days, ${time.hours} hours, ${time.minutes} minutes, ${time.seconds} seconds`);
        return;
    }
    // Get time difference
    const time = calculateTimeDifference();
    // Update the DOM elements with formatted numbers
    if (daysElement)
        daysElement.textContent = formatNumber(time.days);
    if (hoursElement)
        hoursElement.textContent = formatNumber(time.hours);
    if (minutesElement)
        minutesElement.textContent = formatNumber(time.minutes);
    if (secondsElement)
        secondsElement.textContent = formatNumber(time.seconds);
    // Check if the target date has passed
    if (time.isPassed && !hasCelebrated) {
        // Update the message
        const messageElement = document.querySelector('.message');
        if (messageElement) {
            messageElement.textContent = 'We zijn samen op kot! ❤️';
        }
        // Trigger celebration animation
        celebrateTargetReached();
        hasCelebrated = true;
        // Clear the interval
        if (countdownInterval) {
            clearInterval(countdownInterval);
        }
    }
}
// Initialize browser-specific elements and start countdown
if (isBrowser) {
    // Wait for DOM to be fully loaded
    document.addEventListener('DOMContentLoaded', () => {
        // Initialize DOM elements
        daysElement = document.getElementById('days');
        hoursElement = document.getElementById('hours');
        minutesElement = document.getElementById('minutes');
        secondsElement = document.getElementById('seconds');
        // Initial call to set the countdown values
        updateCountdown();
        // Update the countdown every second
        countdownInterval = setInterval(updateCountdown, 1000);
    });
}
else {
    // For non-browser environments, just show the current countdown once
    updateCountdown();
}
