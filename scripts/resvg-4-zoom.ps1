# Get all SVG files in the current directory
$svgFiles = Get-ChildItem -Path . -Filter *.svg

# Loop through each SVG file and run a command
foreach ($file in $svgFiles) {
    # Generate the output file name with .png extension
    $outputFile = [System.IO.Path]::ChangeExtension($file.FullName, ".png")
    
    # Run the resvg command with the generated output file name
    resvg -z 4 $file.FullName $outputFile
}
