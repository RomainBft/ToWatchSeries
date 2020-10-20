module.exports = ({ env }) => ({
  email: {
    provider: 'sendgrid',
    providerOptions: {
      apiKey: env('SENDGRID_API_KEY'),
    },
    settings: {
      defaultFrom: 'contact@romainbouffart.fr',
      defaultReplyTo: 'contact@romainbouffart.fr',
    },
  },
});