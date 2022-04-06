#bot to test custom recaptcha

from selenium import webdriver as d
from selenium.webdriver.common.action_chains import ActionChains as act
from selenium.webdriver.common.by import By
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities

# enable browser logging
dc = DesiredCapabilities.CHROME
dc['goog:loggingPrefs'] = { 'browser':'ALL' }

import time
import random


#configure chrome driver options
options = d.ChromeOptions()
options.add_experimental_option('excludeSwitches', ['enable-logging'])

DRIVER_PATH = "chromedriver.exe"


link="http://localhost:3000/"
#goto website
driver = d.Chrome(DRIVER_PATH, options=options, desired_capabilities=dc)
driver.get(link)

print("Website Title:"+driver.title)

#search for button
submit_button=driver.find_element(By.ID,"submit")
#press button
submit_button.click()
#click on the ___ target
prompt=driver.find_element(By.ID,"prompt")
colour=prompt.text.split()[3]
# print(colour)
# check which target is coloured in that way
target=driver.find_element(By.ID,colour)
target.click()
#press to fill progress bar
fill_button=driver.find_element(By.ID,"bttn")
done_button=driver.find_element(By.ID,"doneBtn")
for i in range(4):
    fill_button.click()
done_button.click()
# question about image
# random selection from answer
answers=[3,4,4,7]
guess = random.choice(answers)
text_input=driver.find_element(By.ID,"filled-basic")
text_input.send_keys(guess)
done_button=driver.find_element(By.ID,"done")
done_button.click()
#done


#quit browser
time.sleep(10)
driver.quit()