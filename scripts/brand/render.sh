#!/usr/bin/env bash
# Renders public/og-image.png and the PNG favicons from the HTML sources in this folder.
# Needs Chrome and Python with Pillow. Usage: bash scripts/brand/render.sh
# Headless Chrome has a minimum window width, so icons are rendered large and downscaled.
set -euo pipefail
cd "$(dirname "$0")"
CHROME="${CHROME:-/c/Program Files/Google/Chrome/Application/chrome.exe}"
HERE="$(pwd -W 2>/dev/null || pwd)"
PUBLIC="$(cd ../../public && (pwd -W 2>/dev/null || pwd))"
FLAGS=(--headless=new --disable-gpu --hide-scrollbars --force-device-scale-factor=1 --default-background-color=00000000)

"$CHROME" "${FLAGS[@]}" --window-size=1200,630 --screenshot="$PUBLIC/og-image.png" "file:///$HERE/og.html" >/dev/null 2>&1
"$CHROME" "${FLAGS[@]}" --window-size=600,600 --screenshot="$PUBLIC/icon-600.png" "file:///$HERE/icon.html" >/dev/null 2>&1

python - "$PUBLIC" <<'PY'
import os, sys
from PIL import Image
public = sys.argv[1]
src = os.path.join(public, "icon-600.png")
im = Image.open(src).convert("RGBA")
for size, name in [(180, "apple-touch-icon.png"), (32, "favicon-32.png")]:
    im.resize((size, size), Image.LANCZOS).save(os.path.join(public, name), optimize=True)
os.remove(src)
PY
echo "Rendered og-image.png, apple-touch-icon.png, favicon-32.png"
