const express = require("express");
const cron = require("node-cron");

const router = express.Router();

router.get('/schedule', (req, res) => {
    cron.schedule("* * * * *", () => {
        console.log("running a task every minute");
      }); 
});

module.exports = router;