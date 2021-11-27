# NBASTATS

An NBA stats visualizer. Play with it [here](https://llimllib.github.io/nbastats/).

## Prerequisites

- python
- node
- GNU make

## To build:

1. `npm install`
2. `make`

## To serve development version:

Prerequisites:

1. [modd](https://github.com/cortesi/modd/) (`brew install modd` on mac with homebrew)
2. [devd](https://github.com/cortesi/devd/) (`brew install devd` on mac with homebrew)
3. Run `modd`
    - this will launch a server that watches your javsacript files and rebuilds
      them when they change, as well as a development server at
      [http://devd.io:8000/](http://devd.io:8000/)
