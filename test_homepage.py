from selenium import webdriver
from selenium.webdriver.common.by import By
import time

def test_title():
    options = webdriver.ChromeOptions()
    options.add_argument("--headless")
    driver = webdriver.Chrome(options=options)
    driver.get("https://www.selenium.dev/selenium/web/web-form.html")
    assert driver.title == "Web form"
    time.sleep(1)
    driver.quit()
