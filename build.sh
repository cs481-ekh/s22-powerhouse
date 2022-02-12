#!/bin/bash

#Create the Linter
curl -L https://www.jslint.com/jslint.mjs > jslint.mjs
node jslint.mjs GHKSimulator/scripts/main.js
if [ $? -eq 0 ]; then
    return 0
else
    return -1
fi

#Build
# npm GHKSimulator/scripts/main.js

