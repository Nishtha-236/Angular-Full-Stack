import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

const firebaseConfig = {
  apiKey: "AIzaSyAeJVcpW_uy1yJ1T7vh0puey8H2dWOKwhA",
  authDomain: "angular-demo-3dfab.firebaseapp.com",
  projectId: "angular-demo-3dfab",
  storageBucket: "angular-demo-3dfab.firebasestorage.app",
  messagingSenderId: "727800514072",
  appId: "1:727800514072:web:80a3cfc91272ccdb99256d",
  measurementId: "G-3RTRXZNEY5"
};

const app = initializeApp(firebaseConfig);
getAnalytics(app);