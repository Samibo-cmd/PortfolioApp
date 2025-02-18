
let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

let sideMenu = document.getElementById("side-menu");

function openMenu () {
  sideMenu.style.right = "0";
}

function closeMenu() {
  sideMenu.style.right = "-200px";
}


// Handle incoming notifications
FCMPlugin.onNotification(function (data) {
  console.log("Notification received: " + JSON.stringify(data));

  if (data.wasTapped) {
      alert("Background Notification: " + JSON.stringify(data));
  } else {
      alert("Foreground Notification: " + JSON.stringify(data));
  }
}, function (msg) {
  console.log("Notification callback success: " + msg);
}, function (err) {
  console.error("Notification callback error: " + err);
});

// Initialize navigation when device is ready
document.addEventListener("deviceready", function () {
  initializeNavigation();
}, false);