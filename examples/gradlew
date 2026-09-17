#!/bin/sh
set -eu
APP_HOME=$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)
VERSION=8.9
SHA256=d725d707bfabd4dfdc958c624003b3c80accc03f7037b5122c4b1d0ef15cecab
CACHE_ROOT="$HOME/.gradle"
if [ -n "${GRADLE_USER_HOME:-}" ]; then CACHE_ROOT="$GRADLE_USER_HOME"; fi
CACHE="$CACHE_ROOT/wrapper/bootstrap/gradle-$VERSION"
ZIP="$CACHE-bin.zip"
if [ ! -x "$CACHE/bin/gradle" ]; then
  mkdir -p "$(dirname "$CACHE")"
  curl -fL --retry 3 -o "$ZIP" "https://services.gradle.org/distributions/gradle-$VERSION-bin.zip"
  printf '%s  %s\n' "$SHA256" "$ZIP" | sha256sum -c -
  rm -rf "$CACHE"
  unzip -q "$ZIP" -d "$(dirname "$CACHE")"
  rm -f "$ZIP"
fi
exec "$CACHE/bin/gradle" -p "$APP_HOME" "$@"
