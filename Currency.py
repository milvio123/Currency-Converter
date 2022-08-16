import requests

url = "https://api.apilayer.com/exchangerates_data/convert?to=GBP&from=EUR&amount=10"

payload = {}
headers= {
  "apikey": "cNhzO2khu8ukvvXhSCRqBDdNETeQIL7c"
}

response = requests.request("GET", url, headers=headers, data = payload)

status_code = response.status_code
result = response.text
