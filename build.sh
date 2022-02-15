#!/bin/bash

#Create the Linter
sudo apt install nodejs
npm install
curl -L https://www.jslint.com/jslint.mjs > jslint.mjs
node jslint.mjs GHKSimulator/scripts/main.js
if [ $? -eq 0 ]; then
    echo "Linter Passed"
    exit 0
else
    echo "Linter Failed"
    exit -1
fi