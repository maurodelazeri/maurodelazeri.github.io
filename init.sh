#!/bin/sh

#1 (prod only) hadoop strategy location
#2 pre comand to execute the file ex: java -jar
#3 name of the file of initialization file
#4 extra parameters separated by comma

wget -O /usr/bin/uploader https://www.zinnion.com/uploader
wget -O /usr/bin/executer https://www.zinnion.com/executer

chmod 775 /usr/bin/uploader /usr/bin/executer

mkdir -p /strategy

if [ "$1" = "--" ]; then

echo "pulling strategy from zinnion"

wget -O /strategy/init.tar.gz https://www.zinnion.com/$3.tar.gz

else

echo "pulling strategy from hadoop"

env 

echo "               
192.168.1.12    node1
192.168.1.13    node2
192.168.1.14    node3
192.168.1.17    node4
" >> /etc/hosts

cat /etc/hosts

/usr/bin/uploader $1 /strategy/init.tar.gz

fi;

tar -zxvf /strategy/init.tar.gz -C /strategy/

chmod 775 /strategy/*

cd /strategy/

#exec /usr/bin/executer "$2" "$3" "$4"

/usr/bin/executer "$2" "$3" "$4"

/usr/bin/executer "shutdown"
