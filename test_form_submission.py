from selenium import webdriver
from selenium.webdriver.common.by import By
import time

def test_form_submission():
    options = webdriver.ChromeOptions()
    options.add_argument('--headless')
    driver = webdriver.Chrome(options=options)
    driver.get("https://www.selenium.dev/selenium/web/web-form.html")
    driver.find_element(By.NAME, "my-text").send_keys("Hello Selenium")
    driver.find_element(By.TAG_NAME, "button").click()
    time.sleep(1)
    message = driver.find_element(By.ID, "message").text
    assert message == "Received!"
    driver.quit()
