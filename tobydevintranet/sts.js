/*
 * siteUrl - SharePoint Web absolute URL
 * username - MFCGD username
 * password - your domain password ( )
 * folder - folder path where you would upload the build assets
 */

var SP_PASS = process.argv[2];

if (process.argv.length < 3) {
  console.log("*ERROR*: Not enough arguments provided\n");
  console.log("Usage....: node sts.js [SharePoint Password]");

  console.log("Example..: node sts.js myVeryLongPassword!");
  console.log(
    "Usage with spo-build ....: npm run spo-build [SharePoint Password]"
  );
  console.log("Example..: npm run spo-build myVeryLongPassword!");

  process.exit(-1);
}

var spsave = require("spsave").spsave;

var coreOptions = {
  siteUrl: "https://tobydev.sharepoint.com",
  notification: true,
  checkin: true,
  checkinType: 1,
};

var creds = {
  username: "tobyabraham@tobydev.onmicrosoft.com",
  password: SP_PASS,
};

var fileOptions = {
  folder: "_catalogs/masterpage/tobyIntranet",
  glob: "build/**/*.*",
  base: "build",
};

spsave(coreOptions, creds, fileOptions)
  .then(function () {
    console.log("saved");
  })
  .catch(function (err) {
    console.log(err);
  });
