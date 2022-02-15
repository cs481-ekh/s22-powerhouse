#!/bin/bash

#Create the Linter
sudo apt install nodejs
sudo npm install
sudo npm install --save-dev jest
sudo npm i --save-dev eslint
npx eslint ./GHKSimulator/scripts/main.js
if [ $? -eq 0 ]; then
    echo "Linter Passed"
    exit 0
else
    echo "Linter Failed"
    exit -1
fi