#!/usr/bin/env bash
set -euo pipefail

# Reuse crate-os stills without recoding. Truck still is locked.
base="https://davidtphung.github.io/shipfront-crate-os/media"
mkdir -p public/media

fetch() {
  local name="$1"
  local dest="public/media/${name}"
  if [[ ! -f "$dest" ]]; then
    curl -fsSL "${base}/${name}" -o "$dest"
  fi
}

fetch "procurement.jpg"
fetch "parcels.jpg"
fetch "logistics-usa.jpg"
fetch "downtown-la.jpg"

file="public/media/logistics-usa.jpg"
expected_sha="01268520751d59bf9762d2d7d7c3e1555ba60c8d"
expected_size="376501"

actual_sha="$(sha1sum "$file" | awk '{print $1}')"
actual_size="$(wc -c < "$file" | tr -d ' ')"

if [[ "$actual_sha" != "$expected_sha" || "$actual_size" != "$expected_size" ]]; then
  echo "Truck still lock failed: $file sha1=$actual_sha size=$actual_size"
  echo "Expected sha1=$expected_sha size=$expected_size"
  exit 1
fi

echo "Truck still lock held: $file"
