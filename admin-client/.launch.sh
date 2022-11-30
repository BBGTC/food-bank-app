#!/bin/sh
MY_IP=$(sh ../.my_ip.sh)

API_URL=http://${MY_IP}:8000
echo "VITE_API_URL=$API_URL" > .env
npm run dev