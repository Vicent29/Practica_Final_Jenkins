#!/bin/bash

git config --global user.email $3
git config --global user.name $4
git checkout -b ci_jenkins
git add .
git commit -m "Pipeline ejecutada por $1. Motivo: $2"
git remote set-url origin $5
git push origin HEAD:ci_jenkins