[![Playwright Tests](https://github.com/symfoni/dsp-contact-registry/actions/workflows/playwright.yml/badge.svg)](https://github.com/symfoni/dsp-contact-registry/actions/workflows/playwright.yml)

# URLs

- Prisma data explorer: [dev](https://cloud.prisma.io/RobertoSnap/dsp-contact-registry/dev/databrowser)
- Planetscale: [dev](https://app.planetscale.com/symfoni/dsp-contact-registry/dev)

# Enviroment variables

## Test env
Github repository secrets. They are used during CI. Can be set in Github dashboard -> Settings 

## Production env
Render enviroment varibles defined on service. Set in Render Dashboard -> [Service] -> Settings

## Local env
Next js used .env.local. 

## Local on remote servers
Rename `.env.local` to something else, then use `.env.development`
