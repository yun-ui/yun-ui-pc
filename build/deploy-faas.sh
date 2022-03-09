#! /bin/sh
set -ex
mkdir temp_web
npm run deploy:build
cd temp_web
git clone --depth 1 -b gh-pages --single-branch https://github.com/yun-ui/yun-ui-pc.git && cd element

# build sub folder
SUB_FOLDER='2.15'
mkdir -p $SUB_FOLDER
rm -rf *.js *.css *.map static
rm -rf $SUB_FOLDER/**
cp -rf ../../examples/yun-ui-pc/** .
cp -rf ../../examples/yun-ui-pc/** $SUB_FOLDER/
cd ../..

# deploy domestic site
faas deploy daily -P element
rm -rf temp_web
