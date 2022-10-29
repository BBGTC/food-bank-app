# The server

## Set up your development environment
Running this application requires two main steps.

### 1. Installing python
We will be collaborating with the same version of python to avoid possible incombatibilities.

To manage Python versions, install **pyenv**.
1. [PyEnv for fedora](https://stribny.name/blog/install-python-dev/)
2. [PyEnv for windows](https://github.com/pyenv-win/pyenv-win#power-shell)
3. [PyEnv for WSL (Ubuntu)](https://www.liquidweb.com/kb/how-to-install-pyenv-on-ubuntu-18-04/)
4. [PyEnv for homebew (macOS)](https://github.com/pyenv/pyenv#homebrew-in-macos)

> Make sure to install and use **python 3.10-8**.

### 2. Installing Pipenv
Pipenv will be our virtual environment tool. It will allow us to define a specific environment where we will be installing and using all our depencencies (found in Pipfile). 
> You can think of `pipenv` as an equivalent to `npm` in the JavaScript world.

To install pipenv, simply run
`sudo python -m pip install pipenv`.

### 3. Activate the environment and run the app
1. Once you installed pipenv, make sure you are in `/server` and activate the environment with `pipenv shell`.
2. Install packages with `pipenv install`.
3. `cd` into `/server/food_bank_app`.
4. Run `python manage.py runserver`.

**NOTE**: You might be required to run migrations to get the server running.

***
## Tech used
- Django Rest Framework
	- For testing 
- PostgreSQL
- Python
- unittest
