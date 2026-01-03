#!/bin/bash
OUTPUT="../project_context.txt"

echo "PROFITRADAR PROJECT CONTEXT (macOS Version)" > $OUTPUT
echo "Generated: $(date)" >> $OUTPUT
echo "--------------------------" >> $OUTPUT

echo -e "\n[GIT STATUS]" >> $OUTPUT
git branch >> $OUTPUT
git status -s >> $OUTPUT

echo -e "\n[DIRECTORY STRUCTURE]" >> $OUTPUT
# Використовуємо find, щоб уникнути проблем з ls на macOS
find . -maxdepth 3 -not -path '*/.*' -not -path './node_modules*' -not -path './.next*' >> $OUTPUT

echo -e "\n[KEY CONFIG FILES]" >> $OUTPUT
for f in package.json next.config.js tailwind.config.js tsconfig.json; do
    if [ -f "$f" ]; then
        echo -e "\n--- $f ---" >> $OUTPUT
        cat "$f" >> $OUTPUT
    fi
done

echo -e "\n[APP CONTENT - PAGES & COMPONENTS]" >> $OUTPUT
find app components -maxdepth 2 -not -path '*/.*' >> $OUTPUT 2>/dev/null

echo "Done! Info saved to project_context.txt"
