function startCountdown(durationInSeconds, displayElement) {
    let remainingTime = durationInSeconds;

    const timer = setInterval(() => {
        const minutes = Math.floor(remainingTime / 60);
        const seconds = remainingTime % 60;

        const formattedTime = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        displayElement.textContent = formattedTime;

        if (remainingTime <= 0) {
            clearInterval(timer);
        }

        remainingTime--;
    }, 1000);
}


function showDelayedNotification(message, delayInMilliseconds) {
    setTimeout(() => {
        alert(message);
    }, delayInMilliseconds);
}


function showRepeatedNotification(message, intervalInMilliseconds) {
    const notificationInterval = setInterval(() => {
        alert(message);
    }, intervalInMilliseconds);

    setTimeout(() => {
        clearInterval(notificationInterval);
    }, 10000); 
}


document.addEventListener('DOMContentLoaded', () => {
    const timerDisplay = document.getElementById('safeTimerDisplay');
    const initialDurationInSeconds = 30; 
    startCountdown(initialDurationInSeconds, timerDisplay);

    const notificationMessage = 'Time is up!';
    const delay = 5000; 
    showDelayedNotification(notificationMessage, delay);

    const repeatMessage = 'Reminder: Time is running out!';
    const repeatInterval = 2000; 
    showRepeatedNotification(repeatMessage, repeatInterval);
})