#!/bin/bash
npm config set user 0
npm config set unsafe-perm true
npm run test
if [ $? -eq 0 ]; then
    echo "Tests Passed"
    exit 0
else
    echo "Tests Failed"
    exit -1
fi
