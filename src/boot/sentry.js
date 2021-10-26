import { init, vueRouterInstrumentation } from '@sentry/vue';
import { Integrations } from '@sentry/tracing';

export default ({ app, router }) => {
  init({
    app,
    dsn: 'https://ce185368d7c642edb4a65c263d3a877a@o1050901.ingest.sentry.io/6033658',
    debug: !process.env.PROD,
    release: 'VMAClubSystemFrontend',
    integrations: [
      new Integrations.BrowserTracing({
        routingInstrumentation: vueRouterInstrumentation(router),
        tracingOrigins: ['localhost', /^\//],
      }),
    ],
    tracesSampleRate: 1.0,
  });
};
