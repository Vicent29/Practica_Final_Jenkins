#!/bin/bash
if [ "$2" == "0" ] && [ "$3" == "0" ] && [ "$4" == "0" ] && [ "$5" == "0" ]; then
  vercel --token "$1" --yes --name jenkins-react-poligons
else
  echo s2 $2
  echo s2 $3
  echo s2 $4
  echo s2 $5
  echo s2 $6
  exit 1
fi