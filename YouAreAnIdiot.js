var popupWindow;

function openPopup() {
    var windowWidth = 500;
    var windowHeight = 300;
    var xPos = (screen.width - windowWidth) / 2;
    var yPos = (screen.height - windowHeight) / 2;

    popupWindow = window.open("", "Popup", "width=" + windowWidth + ", height=" + windowHeight + ", left=" + xPos + ", top=" + yPos);

    movePopup();
}

function movePopup() {
    if (popupWindow && !popupWindow.closed) {
        var newX = Math.random() * (screen.width - popupWindow.outerWidth);
        var newY = Math.random() * (screen.height - popupWindow.outerHeight);
        popupWindow.moveTo(newX, newY);

        setTimeout(movePopup, 1000); // Move the window every second
    }
}

openPopup();
