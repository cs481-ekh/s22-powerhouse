#!/bin/bash

#The Linter
curl -L https://www.jslint.com/jslint.mjs > jslint.mjs
node jslint.mjs GHKSimulator/scripts/main.js
#exit 127