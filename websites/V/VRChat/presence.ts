/* Global variables */
const presence = new Presence({
  clientId: "772597423188082729",
});
var profile: any;
const browsingStamp = Math.floor(Date.now() / 1000);

function getUserName(): void {
  // Get your own username
  const tempusername = document.querySelector(".user-info > h6");
  if (tempusername !== null) {
    profile = tempusername.textContent;
  }
}

async function getProfileDetails() {
  // Gets profile from the user you're viewing.
  const presenceData: PresenceData = {
    largeImageKey: "logo",
  };
  const settings = {
    privacymode: await presence.getSetting("privacy"),
    timertoggle: await presence.getSetting("timer"),
  };

  if (settings.timertoggle) {
    presenceData.startTimestamp = browsingStamp;
  }
  const btnfriendcheck = document.querySelector(
    "div.w-100.btn-group-lg.btn-group-vertical > button.btn.btn-primary"
  ).textContent;
  const viewingprofilename = document.querySelector("div.col-md-12 > h2")
    .textContent;
  if (settings.privacymode === false) {
    if (btnfriendcheck.includes("Unfriend")) {
      presenceData.details = "Viewing Friend:";
      presenceData.state = viewingprofilename;
      presence.setActivity(presenceData);
    } else {
      presenceData.details = "Viewing User:";
      presenceData.state = viewingprofilename;
      presence.setActivity(presenceData);
    }
  } else {
    presenceData.details = "Viewing User";
    presence.setActivity(presenceData);
  }
}
/* Main eventHandler */
presence.on("UpdateData", async () => {
  const presenceData: PresenceData = {
    largeImageKey: "logo",
  };

  const settings = {
    privacymode: await presence.getSetting("privacy"),
    timertoggle: await presence.getSetting("timer"),
  };

  if (settings.privacymode) {
    presenceData.startTimestamp = browsingStamp;
  }
  if (document.location.hostname == "hello.vrchat.com") {
    /* Home Page */
    if (document.location.pathname == "/") {
      presenceData.details = "Landing Page:";
      presenceData.state = "Main Page";
      presence.setActivity(presenceData);
    } else if (document.location.pathname == "/community-guidelines") {
      /* Viewing Guidelines*/
      presenceData.details = "Landing Page:";
      presenceData.state = "Community Guidelines";
      presence.setActivity(presenceData);
    } else if (document.location.pathname == "/events") {
      /* Viewing Events Calender*/
      presenceData.details = "Landing Page:";
      presenceData.state = "Events Calendar";
      presence.setActivity(presenceData);
    } else if (document.location.pathname == "/legal") {
      /* Viewing ToU*/
      presenceData.details = "Landing Page:";
      presenceData.state = "EULA";
      presence.setActivity(presenceData);
    } else if (document.location.pathname == "/privacy") {
      /* Viewing Privacy*/
      presenceData.details = "Landing Page:";
      presenceData.state = "Privacy Policy";
      presence.setActivity(presenceData);
    } else if (document.location.pathname == "/community-faq") {
      /* Viewing FAQ*/
      presenceData.details = "Landing Page:";
      presenceData.state = "Community FAQ";
      presence.setActivity(presenceData);
    } else if (document.location.pathname == "/developer-faq") {
      /* Viewing DEV FAQ*/
      presenceData.details = "Landing Page:";
      presenceData.state = "Developer FAQ";
      presence.setActivity(presenceData);
    } else if (document.location.pathname == "/careers") {
      /* Viewing Careers*/
      presenceData.details = "Landing Page:";
      presenceData.state = "Careers";
      presence.setActivity(presenceData);
    } else if (document.location.pathname == "/press") {
      /* Viewing Press*/
      presenceData.details = "Landing Page:";
      presenceData.state = "Press";
      presence.setActivity(presenceData);
    } else if (document.location.pathname == "/contact") {
      /* Viewing Contact*/
      presenceData.details = "Landing Page:";
      presenceData.state = "Contact";
      presence.setActivity(presenceData);
    }
  } else if (document.location.hostname == "vrchat.com") {
    /* Portal */
    if (settings.privacymode === false) {
      getUserName();
      presenceData.state = "User: " + profile;
    }

    if (document.location.pathname.includes("/home")) {
      if (document.location.pathname.includes("/worlds")) {
        presenceData.details = "Browsing Worlds";
        presence.setActivity(presenceData);
      } else if (document.location.pathname.includes("/world")) {
        /* Viewing a specific world*/
        const worldname = document.querySelector(".col-md-12 > h3").textContent;
        presenceData.details = "Viewing World:";
        if (settings.privacymode === false) {
          presenceData.state = worldname;
        } else {
          presenceData.details = "Viewing a world";
        }
        presence.setActivity(presenceData);
      } else if (document.location.pathname.includes("/avatars")) {
        /* Viewing Avatars*/
        presenceData.details = "Browsing Avatars";
        presence.setActivity(presenceData);
      } else if (document.location.pathname.includes("/messages")) {
        /* Viewing Messages*/
        presenceData.details = "Viewing Messages";
        presence.setActivity(presenceData);
      } else if (document.location.pathname.includes("/user")) {
        /* Viewing a specific user*/
        getProfileDetails();
      } else if (document.location.pathname.includes("/profile")) {
        /* Viewing Profile*/
        presenceData.details = "Viewing Profile";
        presence.setActivity(presenceData);
      } else if (document.location.pathname.includes("/search")) {
        /* Searching */
        const searchresult = window.location
          .toString()
          .substr(window.location.toString().lastIndexOf("/") + 1);
        presenceData.details = "Searching:";
        presenceData.state = searchresult;
        presence.setActivity(presenceData);
      } else if (document.location.pathname.includes("/avatar")) {
        /* Viewing a specific avatar*/
        const avatardetails = {
          avatarname: document.querySelector("div.col-12 > h3").textContent,
          avatarpublicstatus: document.querySelector(
            "div.col-12.col-md-8 > h4 > span > small"
          ).textContent,
        };
        presenceData.details = "Viewing Avatar:";
        if (settings.privacymode === false) {
          presenceData.state =
            avatardetails.avatarname + " " + avatardetails.avatarpublicstatus;
        } else {
          presenceData.details = "Viewing an avatar";
        }
        presence.setActivity(presenceData);
      } else if (document.location.pathname.includes("/playermoderations")) {
        /* Viewing blocks & mutes*/
        presenceData.details = "Viewing Blocks & Mutes";
        presence.setActivity(presenceData);
      } else if (document.location.pathname.includes("/accountlink")) {
        /* Viewing the account link page*/
        presenceData.details = "Merging Account";
        presence.setActivity(presenceData);
      } else if (document.location.pathname.includes("/download")) {
        /* Viewing Download Page*/
        presenceData.details = "Download Page";
        presence.setActivity(presenceData);
      } else if (
        document.location.pathname.includes("/login") /* Login Page*/
      ) {
        presenceData.state = "Logging in";
        presence.setActivity(presenceData);
      } else if (document.location.pathname.includes("/register")) {
        /* Register Page*/
        presenceData.state = "Creating an account";
        presence.setActivity(presenceData);
      } else if (document.location.pathname.includes("/password")) {
        /* Password Page*/
        presenceData.state = "Resetting Password";
        presence.setActivity(presenceData);
      } else if (document.location.pathname.includes("/twofactorauth")) {
        /* 2FA Page*/
        presenceData.state = "Awaiting Authentication";
        presence.setActivity(presenceData);
      } else {
        presenceData.details = "Home Page";
        presence.setActivity(presenceData);
      }
    }
  }
});
