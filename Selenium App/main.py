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

def dot_game(driver):

    #dot game first
    action=act(driver)
    dot=driver.find_element(By.ID,"dot")
    dot_x=dot.location['x']
    dot_y=dot.location['y'] 
    #random select 1/4
    offset_x=25
    offset_y=3
    for i in range(5):
        select=random.choice([1,2,3,4])
        if select == 1:
            #top
            pass
        if select == 2:
            #bottom
            offset_x=25
            offset_y=47
        if select == 3:
            #right
            offset_x=47
            offset_y=25
        if select == 4:
            #left
            offset_x=3
            offset_y=25
    #click
    # print("clicked "+ str(dot_x+offset_x)+", "+str(dot_y+offset_y))
    action.move_to_element_with_offset(dot,offset_x,offset_y).click()
    action.perform()
    
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
goodscore=0
for i in range(5):
    dot_game(driver)
    for entry in driver.get_log("browser"):
        if 'good' in entry['message']:
            goodscore+=1
print("score: "+str(goodscore)+"/5")
#code to close current tab
#driver.close()
#quit browser
time.sleep(2)
driver.quit()