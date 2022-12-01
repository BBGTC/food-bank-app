#!/bin/sh
MY_IP=$(sh ../.my_ip.sh)

pipenv run python manage.py migrate
pipenv run python manage.py runserver ${MY_IP}:8000
