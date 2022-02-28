#!/bin/bash

#Create the Linter
sudo apt install nodejs || ( echo "Install NodeJS Failed"; exit 1; )
npm install || ( echo "NPM Install Failed"; exit 1; )
curl -L https://www.jslint.com/jslint.mjs > jslint.mjs || ( echo "Download Linter Failed"; exit 1; )
node jslint.mjs GHKSimulator/scripts/main.js || ( echo "Linting Failed"; exit 1; )
npm install --save-dev jest || ( echo "Jest Install Failed"; exit 1; )
echo "Build Passed"
exit 0
