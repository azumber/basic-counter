const { openBrowser, goto, click, closeBrowser } = require('taiko');

(async () => {
    await openBrowser();
    await goto("http://localhost:3000/");
    await click("INCREASE");
    await click("DECREASE");
    await closeBrowser();
})();