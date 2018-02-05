echo 'Building sample/typescript-react!'

npm i
fec-builder clean && fec-builder generate -e production

echo "$(cat dist/index.html)"
