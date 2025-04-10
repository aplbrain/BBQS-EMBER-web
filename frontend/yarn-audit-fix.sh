#!/bin/bash

echo "npm i --package-lock-only"
npm i --package-lock-only
echo "rm yarn.lock"
rm yarn.lock
echo "npm audit fix"
npm audit fix
echo "yarn import"
yarn import
echo "rm package-lock.json"
rm package-lock.
echo "yarn install"
yarn install
echo "Completed!"
