import { Injectable } from '@nestjs/common';

import * as admin from 'firebase-admin';
import { auth, firestore, storage } from 'firebase-admin';

import { FIREBASE_ENV } from 'src/config/firebase.config';

export const API_VERSION = 'v1';

export const envDoc = (): string => {
  if (process.env.NODE_ENV === 'production') {
    return 'production';
  } else {
    return 'development';
  }
};

@Injectable()
export class FirebaseService {
  constructor() {
    if (!admin.apps.length) {
      admin.initializeApp({
        credential: admin.credential.cert({
          projectId: FIREBASE_ENV.FIREBASE_PROJECT_ID,
          clientEmail: FIREBASE_ENV.FIREBASE_CLIENT_EMAIL,
          privateKey: FIREBASE_ENV.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
        }),
        storageBucket: FIREBASE_ENV.FIREBASE_STORAGE_BUCKET,
      });
      admin.firestore().settings({ ignoreUndefinedProperties: true });
    }
    this.auth = admin.auth();
    this.firestore = admin.firestore();
    this.storage = admin.storage();
  }

  private readonly auth: auth.Auth;

  private readonly firestore: firestore.Firestore;

  private readonly storage: storage.Storage;
}
