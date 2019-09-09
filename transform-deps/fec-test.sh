echo 'Building sample/transform-deps!'

fec-builder clean && fec-builder generate -e production

# 检查 node_modules 中的箭头函数是否被正确转换
if [[ "$(cat dist/static/*.js | grep "=>")"x != ""x ]]; then
  echo 'Error.'
  exit 1
else
  echo 'Success.'
  exit 0
fi
