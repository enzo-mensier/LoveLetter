let scale = 1;
const messages = [
    "Es-tu sûr(e) de ton choix ?",
    "Vraiment ?",
    "Réfléchis encore...",
    "Tu es certain(e) ?",
    "Allez, dis oui !",
    "Tu ne le regretteras pas !",
    "Dernière chance..."
];
let messageIndex = 0;
let currentNotification = null;

function createHearts() {
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.innerHTML = '❤';
            heart.className = 'floating-heart';
            heart.style.left = Math.random() * window.innerWidth + 'px';
            document.body.appendChild(heart);
            
            setTimeout(() => {
                heart.remove();
            }, 3000);
        }, i * 300);
    }
}

function shrinkButton(button) {
    scale *= 0.8;
    button.style.transform = `scale(${scale})`;
    
    if (messageIndex < messages.length) {
        showNotification(messages[messageIndex]);
        messageIndex++;
    }
}

function showNotification(message) {
    // Supprimer la notification existante si elle existe
    if (currentNotification) {
        currentNotification.remove();
    }

    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);
    
    // Garder une référence à la notification actuelle
    currentNotification = notification;
    
    setTimeout(() => {
        if (currentNotification === notification) {
            notification.remove();
            currentNotification = null;
        }
    }, 2000);
}