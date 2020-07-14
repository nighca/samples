echo 'Building sample/transform-deps!'

# Node 12.x 对应的 npm 会把 node_modules 目录下的内容（如这里的 foo/）干掉
mv node_modules/foo foo
npm i
mv foo node_modules/foo

fec-builder clean && fec-builder generate -e production

# 检查 node_modules 中的 ES6 内容是否被正确转换
./node_modules/.bin/es-check es5 ./dist/static/*.js
