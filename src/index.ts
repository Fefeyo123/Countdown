// Target date: September 1, 2025
const targetDate = new Date('2025-09-01T00:00:00');

// Check if code is running in a browser environment
const isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';

// Variables for DOM elements
let daysElement: HTMLElement | null = null;
let hoursElement: HTMLElement | null = null;
let minutesElement: HTMLElement | null = null;
let secondsElement: HTMLElement | null = null;
let countdownInterval: number | null = null;

// Function to calculate time difference
function calculateTimeDifference(): { days: number, hours: number, minutes: number, seconds: number, isPassed: boolean } {
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

// Function to calculate and display the countdown
function updateCountdown(): void {
    if (!isBrowser) {
        // If not in browser, just log the time difference
        const time = calculateTimeDifference();
        console.log(`Time until target date: ${time.days} days, ${time.hours} hours, ${time.minutes} minutes, ${time.seconds} seconds`);
        return;
    }

    // Get time difference
    const time = calculateTimeDifference();

    // Update the DOM elements
    if (daysElement) daysElement.textContent = time.days.toString();
    if (hoursElement) hoursElement.textContent = time.hours.toString();
    if (minutesElement) minutesElement.textContent = time.minutes.toString();
    if (secondsElement) secondsElement.textContent = time.seconds.toString();

    // Check if the target date has passed
    if (time.isPassed) {
        // Update the message
        const messageElement = document.querySelector('.message') as HTMLElement;
        if (messageElement) {
            messageElement.textContent = 'We zijn samen op kot! ❤️';
        }

        // Clear the interval
        if (countdownInterval) {
            clearInterval(countdownInterval);
        }
    }
}

// Initialize browser-specific elements and start countdown
if (isBrowser) {
    // Initialize DOM elements
    daysElement = document.getElementById('days');
    hoursElement = document.getElementById('hours');
    minutesElement = document.getElementById('minutes');
    secondsElement = document.getElementById('seconds');

    // Initial call to set the countdown values
    updateCountdown();

    // Update the countdown every second
    countdownInterval = setInterval(updateCountdown, 1000);
} else {
    // For non-browser environments, just show the current countdown once
    updateCountdown();
}
