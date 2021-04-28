#!/bin/bash
#Stopping existing node servers
echo "Stopping any existing node servers"
pid=lsof -t -i:$server_port
if [ "$pid" != "" ]
then # Kill the running process
kill -9 $pid 2>/dev/null || :
fi