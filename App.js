import 'expo-router/entry';
import { initializeAppCheck, ReCaptchaV3Provider } from 'firebase/app-check';
import { app } from './MultiCurrency/firebase/config';

// Initialize App Check for added security (optional but recommended)
// This helps protect your Firebase resources from abuse
if (process.env.NODE_ENV === 'production') {
  // REPLACE THIS WITH YOUR RECAPTCHA SITE KEY
  // https://console.firebase.google.com/project/_/settings/appcheck
  const RECAPTCHA_SITE_KEY = 'YOUR_RECAPTCHA_SITE_KEY';
  
  initializeAppCheck(app, {
    provider: new ReCaptchaV3Provider(RECAPTCHA_SITE_KEY),
    isTokenAutoRefreshEnabled: true
  });
} 