echo 'Building sample/react-mobx-ssr!'

npm i
fec-builder clean && fec-builder generate -e production --ISOMORPHIC_TOOLS_FILE ./server/isomorphic.js

echo "$(cat dist/index.html)"
