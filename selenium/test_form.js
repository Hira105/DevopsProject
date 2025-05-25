const { Builder, By, Key, until } = require('selenium-webdriver');

(async function testFormSubmission() {
  let driver = await new Builder().forBrowser('chrome').build();

  try {
    await driver.get('http://localhost:3000');

    await driver.findElement(By.name('name')).sendKeys('Fahad');
    await driver.findElement(By.name('email')).sendKeys('fahad@example.com', Key.RETURN);

    // Wait until page contains success message
    await driver.wait(until.elementLocated(By.xpath("//*[contains(text(),'Form submitted')]")), 5000);
    console.log("✅ Form submitted successfully and message is visible.");

  } catch (err) {
    console.error("❌ Test failed:", err);
  } finally {
    await driver.quit();
  }
})();
