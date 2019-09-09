echo 'Building sample/transform-deps!'

npm i
fec-builder clean && fec-builder generate -e production

# 检查 node_modules 中的 ES6 内容是否被正确转换
./node_modules/.bin/es-check es5 ./dist/static/*.js
