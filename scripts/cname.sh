#!/bin/sh

if [ ! -f docs/CNAME ]; then
    echo "docs/CNAME file is missing! Looks like you are trying to remove this file. This file must not be removed. This can occur when rebuilding the style guide static files using Fractal."
    exit 1
fi

exit 0
