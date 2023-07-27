#!/usr/bin/env bash

if [ "$(uname)" == "Darwin" ]; then
    brew install make
elif [ "$(expr substr $(uname -s) 1 5)" == "Linux" ]; then
    sudo apt install make
fi
