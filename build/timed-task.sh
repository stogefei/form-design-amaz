#!/bin/sh
# author:zaf
# date: 2021-10-25
startpackagestime=`date +%s`
cd /usr/local/bpm/frontEnd/app-studio
git fetch --all
git reset --hard origin/master
yarn run build:all
rm -rf ../portal
unzip -q portal.zip -d ../
endpackagestime=`date +%s`
echo "执行总用时： "$((endpackagestime-startpackagestime))"s"


