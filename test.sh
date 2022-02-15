#!/bin/bash
npm install --save-dev jest
npm test
if [ $? -eq 0 ]; then
    echo "Tests Passed"
    exit 0
else
    echo "Tests Failed"
    exit -1
fi
