#!/bin/bash
set -a
source .env
set +a

# only environment variables prefixed with SANITY_STUDIO_ will be embedded in the Sanity-side executable
SANITY_STUDIO_PROJECT_ID="$NEXT_PUBLIC_SANITY_STUDIO_PROJECT_ID" \
SANITY_STUDIO_DATASET="$NEXT_PUBLIC_SANITY_STUDIO_DATASET" \
SANITY_STUDIO_HOST="$NEXT_PUBLIC_SANITY_STUDIO_HOST" \
npx sanity deploy
