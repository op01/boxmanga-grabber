#!/bin/bash
set -e

# Start Xvfb
Xvfb -ac -screen 0 1280x720x24 :99.0 &
export DISPLAY=:99.0

exec "$@"