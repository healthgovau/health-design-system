#!/bin/sh

# enable job control so the backgrounded npm job gets its own process group,
# letting us kill it and the fractal child process it spawns together
set -m

if curl --head --silent --fail http://localhost:3000 2> /dev/null;
    then
       echo "Running Fractal instance detected. Continuing with tests..."
       backstop test --config=backstop.config.js
    else
        echo "Running Fractal instance not detected."
        printf "Start it now? [y/N] "
        read answer
        if [ "$answer" = "y" ] || [ "$answer" = "Y" ]; then
            npm run fractal:start &
            fractal_pid=$!

            # poll until the server responds, or bail out after a timeout
            for i in $(seq 1 30); do
                if curl --head --silent --fail http://localhost:3000 2> /dev/null; then
                    break
                fi
                sleep 1
            done

            if ! curl --head --silent --fail http://localhost:3000 2> /dev/null; then
                echo "Fractal did not start in time. Aborting tests..."
                kill -- "-$fractal_pid" 2> /dev/null
                exit 1
            fi

            backstop test --config=backstop.config.js
            test_status=$?

            kill -- "-$fractal_pid" 2> /dev/null
            exit $test_status
        else
            echo "You can start Fractal using \`npm run fractal:start\`."
            exit 1
        fi
fi