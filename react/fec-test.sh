echo 'Building sample/react!'

npm i
fec-builder clean && fec-builder generate -e production

echo "$(cat dist/index.html)"
