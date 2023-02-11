if [ $2 -eq 0 ] && [ $3-eq 0 ] && [ $4 -eq 0 ] && [ $5 -eq 0 ] && [ $6 -eq 0 ]; then
  vercel --token $1 --yes --name jenkins-react-poligons
else
  exit 1
fi
