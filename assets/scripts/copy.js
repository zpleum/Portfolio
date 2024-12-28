function copyWiraphat(text) {
    navigator.clipboard.writeText(text);
    const copyNotification = document.getElementById('copySec');
    copyNotification.classList.add('show');
    setTimeout(function () {
        copyNotification.classList.remove('show');
    }, 2000); // Show notification for 2 seconds
}