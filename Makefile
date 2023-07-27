.DEFAULT_GOAL := all
black = black --target-version py39 ufo
isort = isort --profile black ufo
flake8 = flake8 --ignore=E203,F401,E402,F841,E501,E722,W503 ufo

.PHONY: depends
depends:
	./bin/depends.sh

.PHONY: init
init: depends
	echo "Setting up virtual environment in venv/"
	python3 -m venv venv
	echo "Virtual environment complete."

.PHONY: test
test:
	pytest ufo/tests

.PHONY: format
format:
	$(isort)
	$(black)

.PHONY: lint
lint:
	mypy --show-error-codes ufo
	$(flake8)
	$(isort) --check-only --df
	$(black) --check --diff

.PHONY: install
install: depends init
	pip install -r requirements.txt
	python setup.py install
	python setup.py clean

.PHONY: deploy
deploy: login pull up

.PHONY: pull
pull: login
	docker compose pull nginx api

.PHONY: up
up:
	docker compose up -d nginx api

.PHONY: stop
stop:
	@docker compose stop

.PHONY: refresh
refresh: stop
	@./bin/docker-refresh.sh

.PHONY: docs
docs:
	make -C docs html

.PHONY: clean
clean:
	python setup.py clean
	-find . -type d -name __pycache__ -exec rm -rf {} \; 2> /dev/null
	git status
	exit 0

.PHONY: build
build:
	docker compose build

.PHONY: all
all: format lint docs install
	git status
