#bot to test custom recaptcha

from selenium import webdriver as d

DRIVER_PATH = "chromedriver.exe"

driver = d.Chrome(DRIVER_PATH)
link="http://localhost:3000/"
driver.get(link)

print(driver.title)

#current tab
#driver.close()
#quit browser
driver.quit()