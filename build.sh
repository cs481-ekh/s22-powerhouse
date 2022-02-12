#!/bin/bash

#The Linter
node jslint.mjs GHKSimulator/scripts/main.js

#Build
npm GHKSimulator/scripts/main.js
#exit 127