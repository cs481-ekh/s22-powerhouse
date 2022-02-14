#!/bin/bash

#Create the Linter
curl -L https://www.jslint.com/jslint.mjs > jslint.mjs
sudo apt install nodejs
npm install
node jslint.mjs GHKSimulator/scripts/main.js
if [ $? -eq 0 ]; then
    echo "Linter Passed"
    exit 0
else
    echo "Linter Failed"
    exit -1
fi

#Build
# npm GHKSimulator/scripts/main.js

