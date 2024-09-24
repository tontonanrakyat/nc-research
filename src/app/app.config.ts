import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(), provideFirebaseApp(() => initializeApp({"projectId":"nc-research","appId":"1:508877681380:web:703701f37d6d51e78e72f1","storageBucket":"nc-research.appspot.com","apiKey":"AIzaSyC4sDYOk7URHQD5bDOX6zWlA7_O_80PmDQ","authDomain":"nc-research.firebaseapp.com","messagingSenderId":"508877681380","measurementId":"G-RCLBERV6TE"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideStorage(() => getStorage())]
};
