echo 'Building sample/angularjs!'

npm i
fec-builder clean && fec-builder generate -e production

echo "$(cat dist/index.html)"
