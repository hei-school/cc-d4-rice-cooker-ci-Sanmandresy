#!/bin/bash

# Run shellcheck on each .sh file in the current directory and its subdirectories
find . -type f -name "*.sh" -exec shellcheck {} \;
