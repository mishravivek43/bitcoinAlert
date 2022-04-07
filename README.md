Welcome to Bitcoin ALert

#Kindly put following values in .env file

APP_HOST = http://localhost

APP_PORT= 3000

API_VERSION = v1

DATABASE =
mongodb+srv://test:test@demo.aoloa.mongodb.net/express?retryWrites=true&w=majority
DATABASE_TEST =
mongodb+srv://test:test@demo.aoloa.mongodb.net/test?retryWrites=true&w=majority

host = smtp.mailtrap.io

port = 25 or 465 or 587 or 2525

username = <username>

password = <password>

MIN = <minvalue> MAX = <maxvalue> receiver = <receivermail>

#Run

docker build . -t mishravivek43/bitcoin-alert

docker run -p <Your_Port>:<APP_PORT> -d mishravivek43/bitcoin-alert

#HIT
http://localhost:<YOUR_PORT>/api/v1/prices/btc?date=20-11-2021&limit=10&offset=5
