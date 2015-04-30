Package.describe({
  summary: "Add a Meteor.isMobile boolean variable",
  version: "0.1.0",
  name: "mquandalle:ismobile",
  git: "https://github.com/mquandalle/meteor-ismobile.git"
});

Package.onUse(function (api) {
  api.versionsFrom("METEOR@0.9.0");
  api.use(["meteor", "templating"], "client");
  api.addFiles(["lib.js"], "client");
});
