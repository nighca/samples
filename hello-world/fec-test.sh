echo 'Building sample/hello-world!'

fec-builder clean && fec-builder generate -e production

echo "$(cat dist/index.html)"
