#!/bin/sh
MY_IP=$(sh ../.my_ip.sh)

cd ./food_bank_app
pipenv run python manage.py runserver ${MY_IP}:8000
