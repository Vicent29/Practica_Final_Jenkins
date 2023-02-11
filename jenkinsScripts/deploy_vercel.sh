#!/bin/bash
if [ "$2" == "0" ] && [ "$3" == "0" ] && [ "$4" == "0" ] && [ "$5" == "0" ] && [ "$6" == "0" ]; then
  vercel --token "$1" --yes --name jenkins-react-poligons
else
  exit 1
fi
