#!/bin/bash
git checkout -b ci_jenkins
git add .
git commit -m "Pipeline ejecutada por $1. Motivo: $2"
git push