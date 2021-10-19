#!/bin/bash
dirname=dist
oldname=dist-temp
arr=('dev' 'test' 'prod')

read  -p  "输入版本号:"  word
echo '{
	"version":'\"$word\"'
}' > version.json


echo "start"
if [ ! -z "$1" ]
then
	echo  "参数 $1" 
	npm run build:$1
	if [  -d $dirname  ];then
		rm -rf ./$dirname/$1
		git add ./$dirname
		git commit -m "删除$dirname $1"
		git push
	fi
	rm -rf ./$dirname/$1
	mv $oldname/$1 $dirname/$1
	rm -rf ./$oldname
else
echo  '没传参数'
for var in ${arr[*]}
	do
		npm run build:${var}
	done
	if [  -d $dirname  ];then
		rm -rf ./$dirname/*
		git add ./$dirname
		git commit -m "删除$dirname"
		git push
	fi
	rm -rf ./$dirname
	mv $oldname $dirname
fi
echo "打包end"
read  -p "是否提交所有文件 [Y (提交所有) / D(只提交dist) / 任意键(停止)]?" answer
	case $answer in
	Y | y)
		git add .
		read -p "git commit -m " commit
		git commit -m "$commit"
		git push
		echo "提交成功";;
	D | d)
		git add ./$dirname
		git add version.json
		git commit -m "提交$dirname"
		git push
		echo "提交成功";;
	esac
	exit 0
echo "success";
