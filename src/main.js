import Vue from 'vue'
import App from './App.vue'
import VueI18n from 'vue-i18n'
import messages from './shared/i18n'
import vuetify from './plugins/vuetify'

Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: "en",
  messages: messages.messages
})

const app = new Vue({
  i18n,
  vuetify,
  render: h => h(App)
})

app.$mount('#app')
