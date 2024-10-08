export default defineNuxtConfig({
  server: {
    host: '0.0.0.0',
    port: 80,
  },
  publicRuntimeConfig: {
    apiBaseUrl: 'http://3.92.232.51/api'
  }
});
