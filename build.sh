#!/bin/bash

#Create the Linter
sudo apt install nodejs || ( echo "Linter Failed"; exit 1; )
npm install || ( echo "Linter Failed"; exit 1; )
curl -L https://www.jslint.com/jslint.mjs > jslint.mjs || ( echo "Linter Failed"; exit 1; )
node jslint.mjs GHKSimulator/scripts/main.js || ( echo "Linter Failed"; exit 1; )
npm install --save-dev jest || ( echo "Linter Failed"; exit 1; )
if [ $? -eq 0 ]; then
    echo "Linter Passed"
    exit 0
else
    echo "Linter Failed"
    exit -1
fi
