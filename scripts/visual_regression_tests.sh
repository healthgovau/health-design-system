#!/bin/sh

if curl --head --silent --fail http://localhost:3000 2> /dev/null;
    then
       echo "Running Fractal instance detected. Continuing with tests..."
       backstop test --config=backstop.config.js
    else
        echo "Running Fractal instance not detected. Aborting tests..."
        echo "You can start Fractal using \`npm run fractal:start\`."
        exit 1
fi