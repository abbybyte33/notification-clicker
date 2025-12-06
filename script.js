const enableBtn = document.getElementById("enableBtn");
const notifyBtn = document.getElementById("notifyBtn");
const statusText = document.getElementById("status");

// ask for notification permission
enableBtn.onclick = () => {
  Notification.requestPermission().then(status => {
    statusText.textContent = "Permission: " + status;
  });
};

// send notification
notifyBtn.onclick = () => {
  if (Notification.permission === "granted") {
    new Notification("👋Hey there! Your notification is working.");
  } else {
    statusText.textContent = "Please enable notifications first.";
  }
};
