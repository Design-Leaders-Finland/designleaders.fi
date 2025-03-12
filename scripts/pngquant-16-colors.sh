#!/bin/bash

# Find all PNG files in the current directory
pngFiles=$(find . -maxdepth 1 -type f -name "*.png")

# Loop through each PNG file and run a command
for file in $pngFiles; do
    pngquant 16 "$file"
done
