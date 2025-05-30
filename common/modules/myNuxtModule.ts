import { defineNuxtModule } from 'nuxt/kit'

export default defineNuxtModule({
    meta: {
        name: 'my-nuxt-module'
    },

    setup() {
        console.log('Hello from my Nuxt module!')
    }
})
