import os
import sys
from selenium.webdriver.support.ui import WebDriverWait
from selenium import webdriver
from lxml import html

def get_price(url):
  browser = webdriver.Chrome(executable_path=os.path.join(os.getcwd(), "chromedriver"))
  browser.get(url)
  delay = 10000
  WebDriverWait(browser, delay)
  tree = html.fromstring(browser.page_source)
  price = tree.xpath("//span[@class='sx-price-whole']/text()")
  cents = tree.xpath("//sup[@class='sx-price-fractional']/text()")
  total_price = '$' + price[0] + '.' + cents[0]
  print(total_price)
  return total_price
  

def main(argv):
  asin = argv[1]
  url = 'https://www.amazon.com/s?field-keywords={}'.format(asin)
  # url = 'http://www.amazon-asin.com/asincheck/?product_id={}'.format(asin)
  get_price(url)

if __name__ == '__main__':
  main(sys.argv)
