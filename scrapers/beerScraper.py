from selenium import webdriver
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
import time

driverPath = "C://Users//Sam//Documents//chromedriver.exe"

driver = webdriver.Chrome(driverPath)
driver.maximize_window()
driver.get("https://www.saucey.com/beer")
assert "Saucey" in driver.title

# driver.execute_script("window.scrollTo(0, 1080)") 

try:
    #time.sleep(40)
    element = WebDriverWait(driver, 40).until(
        EC.presence_of_element_located((By.CLASS_NAME, r"_5FQgRNrB _3hrIrVeD _2BQ8VZ00 _3Cc7EQMK _2IVOPH9e _1KcT7IXn _3klvyMKb _32cMlxJ_ v2i4_cJ3 Cu_bt0Ib HEmsbEa5 _18herO7F C3coG-9I"))
    )
    closeButton = driver.find_element(By.XPATH, "//button[contains(.,'✕')]")
    closeButton.click()
except(e):
    print(e)