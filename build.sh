#!/bin/sh
bower install
coffee --map --compile src/nodejs
cp src/nodejs/*.js lib/
coffee --map --compile src/browser
coffee --map --compile src/models
cd src/browser
browserify -r ./HttpBrowserWrapper.js --standalone HttpBrowserWrapper > ../../dist/browser/HttpBrowserWrapper.js
browserify -r ./MojioClient.js --standalone MojioClient > ../../dist/browser/MojioClient.js
cd ../models
browserify -r ./App.js --standalone App > ../../dist/browser/App.js
browserify -r ./Event.js --standalone App > ../../dist/browser/Event.js
browserify -r ./Location.js --standalone App > ../../dist/browser/Location.js
browserify -r ./Mojio.js --standalone App > ../../dist/browser/Mojio.js
browserify -r ./Observer.js --standalone App > ../../dist/browser/Observer.js
browserify -r ./Product.js --standalone App > ../../dist/browser/Product.js
browserify -r ./Subscription.js --standalone App > ../../dist/browser/Subscription.js
browserify -r ./Trip.js --standalone App > ../../dist/browser/Trip.js
browserify -r ./User.js --standalone App > ../../dist/browser/User.js
browserify -r ./Vehicle.js --standalone App > ../../dist/browser/Vehicle.js
cd ../../
mocha -t 12000