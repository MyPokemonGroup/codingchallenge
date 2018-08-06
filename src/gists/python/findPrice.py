
import sys

import requests
from bs4 import BeautifulSoup


def getPrices(argv):
    """Calls getPrice() on ASINs passed as arguments from the command-line.

    If no arguments are passed in, the code will throw an exception and print
    a message urging the user to pass in at least one ASIN.

    Args:
        argv: An array of arguments passed from the command-line
    """
    try:
        for ASIN in argv[1:]:
            getPrice(ASIN)
    except:
        print("Please pass in an ASIN to the program!")


def getPrice(ASIN):
    """Prints to the console the price of the input ASIN.

    The function synchronously fetches the price of the ASIN by calling a
    HTTP GET request.

    Args:
        ASIN: A string that represents an item from Amazon by ASIN value
            (e.g., 'B000V2ACH8')
    """
    if ASIN != None:
        # format: 'https://www.amazon.com/s/&field-keywords=B000V2ACH8'
        url = 'https://www.amazon.com/s/&field-keywords=' + ASIN
        page = requests.get(url)
        content = page.text
        soup = BeautifulSoup(content, 'html.parser')

        # <span class="a-offscreen">$50.91</span>
        price_text = soup.find_all('span', class_='a-offscreen')
        print("{}: {}".format(ASIN, price_text[0].get_text()))


def main(argv):
    getPrices(argv)
    pass


if __name__ == '__main__':
    main(sys.argv)
