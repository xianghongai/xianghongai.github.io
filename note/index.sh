#!/bin/bash

rm index.html

note_html=`ls ./*.html`

echo "<!DOCTYPE html> <html lang=\"zh-cmn-Hans\"> <head> <meta charset=\"utf-8\"> <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"> <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\"> <title>note</title> </head> <body> <ul>" > index.html

for eachfile in $note_html
do
   echo "<li><a href=\"$eachfile\">$eachfile</a></li>" >> index.html
done

echo "</ul> </body> </html>" >>  index.html

read -s -N 1 -t 3 -p  "Complete! Press Esc Exit..."

exit 0;