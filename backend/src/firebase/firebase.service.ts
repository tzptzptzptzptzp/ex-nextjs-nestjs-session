import { Injectable } from '@nestjs/common';

export const API_VERSION = 'v1';
export const envDoc = (): string => {
  if (process.env.NODE_ENV === 'production') {
    return 'production';
  } else {
    return 'development';
  }
};

@Injectable()
export class FirebaseService {}
