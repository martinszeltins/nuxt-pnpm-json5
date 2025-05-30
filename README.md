Cannot find matching package.json in modules/myNuxtModule.ts or parent directories when using pnpm with package.json5

pnpm 10 supports package.json5 format which I am using in my Nuxt project. But `nuxt prepare` gives me this error. This needs to be run with pnpm 10 because older versions don't have json5 support. Check your pnpm version before running pnpm install (!)

````
$ pnpm --version
10.11.0

$ pnpm install
Lockfile is up to date, resolution step is skipped
Already up to date

> nuxt-app@ postinstall /home/martins/my-nuxt-app
> nuxt prepare

Hello from my Nuxt module!          8:09:40 AM

ERROR  Cannot find matching package.json in /home/martins/my-nuxt-app/common/modules/myNuxtModule.ts or parent directories           8:09:40 AM

    at findFile (node_modules/.pnpm/pkg-types@2.1.0/node_modules/pkg-types/dist/index.mjs:57:9)
    at async installModule (node_modules/.pnpm/@nuxt+kit@3.17.4_magicast@0.3.5/node_modules/@nuxt/kit/dist/index.mjs:2501:64)
    at async initNuxt (node_modules/.pnpm/nuxt@3.17.4_@netlify+blobs@8.2.0_@parcel+watcher@2.5.1_@types+node@22.13.10_db0@0.3.2_e_168d7a2db8f3763c9d74b0a2ce9ce45f/node_modules/nuxt/dist/shared/nuxt.Ipy8-4AT.mjs:5854:5)
    at async loadNuxt (node_modules/.pnpm/nuxt@3.17.4_@netlify+blobs@8.2.0_@parcel+watcher@2.5.1_@types+node@22.13.10_db0@0.3.2_e_168d7a2db8f3763c9d74b0a2ce9ce45f/node_modules/nuxt/dist/shared/nuxt.Ipy8-4AT.mjs:6079:5)
    at async loadNuxt (node_modules/.pnpm/@nuxt+kit@3.17.4_magicast@0.3.5/node_modules/@nuxt/kit/dist/index.mjs:2721:19)
    at async Object.run (node_modules/.pnpm/@nuxt+cli@3.25.1_magicast@0.3.5/node_modules/@nuxt/cli/dist/chunks/prepare.mjs:30:18)
    at async runCommand (node_modules/.pnpm/citty@0.1.6/node_modules/citty/dist/index.mjs:316:16)
    at async runCommand (node_modules/.pnpm/citty@0.1.6/node_modules/citty/dist/index.mjs:307:11)
    at async runMain (node_modules/.pnpm/citty@0.1.6/node_modules/citty/dist/index.mjs:445:7) 

ERROR  Cannot find matching package.json in /home/martins/my-nuxt-app/common/modules/myNuxtModule.ts or parent directories            8:09:40 AM

ELIFECYCLE  Command failed with exit code 1.
````

Looks to me like a bug with `nuxt prepare` command.

https://stackblitz.com/~/github.com/martinszeltins/nuxt-pnpm-json5
