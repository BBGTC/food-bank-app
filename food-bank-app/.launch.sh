#!/bin/sh
MY_IP=$(sh ../.my_ip.sh)

API_URL=http://${MY_IP}:8000 npm start
