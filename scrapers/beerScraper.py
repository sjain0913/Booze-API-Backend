from selenium import webdriver
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By

driverPath = "C://Users//Sam//Documents//chromedriver.exe"

driver = webdriver.Chrome(driverPath)
driver.maximize_window()
driver.get("https://www.saucey.com/beer")
assert "Saucey" in driver.title

# driver.execute_script("window.scrollTo(0, 1080)") 
timeout = 30
adPresent = True

try:
    element = WebDriverWait(driver, 40).until(
        EC.presence_of_element_located((By.CLASS_NAME, r"_5FQgRNrB _3hrIrVeD _2BQ8VZ00 _3Cc7EQMK _2IVOPH9e _1KcT7IXn _3klvyMKb _32cMlxJ_ v2i4_cJ3 Cu_bt0Ib HEmsbEa5 _18herO7F C3coG-9I"))
    )
    initCoordinates = driver.find_element_by_tag_name("body", 0, 0)
    actions = ActionChains(driver)
    actions.move_to_element(initCoordinates)
    actions.move_by_offset(1333,220).click
except(e):
    print(e)