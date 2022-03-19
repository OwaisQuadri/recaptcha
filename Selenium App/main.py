#bot to test custom recaptcha

from selenium import webdriver as d
from selenium.webdriver.common.by import By
import time

#configure chrome driver options
options = d.ChromeOptions()
options.add_experimental_option('excludeSwitches', ['enable-logging'])

driver = d.Chrome(options=options)
link="http://localhost:3000/"
#goto website
driver.get(link)

print("Website Title:"+driver.title)

#search for button
submit_button=driver.find_element(By.ID,"submit")
#press button
submit_button.click()

#find game div and read
game=driver.find_element(By.ID,"game")
print(game.text)

#code to close current tab
#driver.close()
#quit browser
time.sleep(5)
driver.quit()