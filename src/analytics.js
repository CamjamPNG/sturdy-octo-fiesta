/**
 * Global site tag (gtag.js) - Google Analytics
 *
 * https://developers.google.com/analytics/devguides/collection/gtagjs
 */

window.gtag('config', process.env.GOOGLE_ANALYTICS_ID);

window[`ga-disable-${process.env.GOOGLE_ANALYTICS_ID}`] =
  process.env.NODE_ENV !== 'production';

const script = document.createElement('script');
script.async = true;
script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS_ID}`;
document.head.appendChild(script);
