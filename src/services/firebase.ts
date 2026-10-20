import { initializeApp, getApps } from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInAnonymously as firebaseSignInAnonymously,
  signOut as firebaseSignOut,
  onAuthStateChanged,
  type User,
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  getDocFromServer,
} from 'firebase/firestore';
import type { UserProgress } from '../types/learning.ts';
import firebaseConfig from '../../firebase-applet-config.json';

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
export const auth = getAuth(app);
export const db = getFirestore(
  app,
  firebaseConfig.firestoreDatabaseId || '(default)'
);

const googleProvider = new GoogleAuthProvider();

// Test server connection as per Firebase skill constraint
async function testConnection() {
  try {
    await getDocFromServer(doc(db, 'test', 'connection'));
  } catch (error) {
    if (error instanceof Error && error.message.includes('the client is offline')) {
      console.warn('Firebase connection check: Client is offline or database initializing.');
    }
  }
}
testConnection();

export async function loginWithGoogle(): Promise<User | null> {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return result.user;
  } catch (error) {
    console.error('Google Sign-In failed:', error);
    throw error;
  }
}

export async function loginAnonymously(): Promise<User | null> {
  try {
    const result = await firebaseSignInAnonymously(auth);
    return result.user;
  } catch (error) {
    console.error('Anonymous Sign-In failed:', error);
    throw error;
  }
}

export async function logoutUser(): Promise<void> {
  try {
    await firebaseSignOut(auth);
  } catch (error) {
    console.error('Sign-Out failed:', error);
    throw error;
  }
}

export async function syncProgressToCloud(
  userId: string,
  progress: UserProgress
): Promise<boolean> {
  if (!userId) return false;
  try {
    const progressRef = doc(db, 'users', userId, 'progress', 'current');
    await setDoc(
      progressRef,
      {
        ...progress,
        updatedAt: new Date().toISOString(),
      },
      { merge: true }
    );
    return true;
  } catch (err) {
    console.warn('Cloud sync error (progress saved locally):', err);
    return false;
  }
}

export async function fetchProgressFromCloud(
  userId: string
): Promise<Partial<UserProgress> | null> {
  if (!userId) return null;
  try {
    const progressRef = doc(db, 'users', userId, 'progress', 'current');
    const snap = await getDoc(progressRef);
    if (snap.exists()) {
      return snap.data() as Partial<UserProgress>;
    }
    return null;
  } catch (err) {
    console.warn('Could not fetch cloud progress, falling back to local state:', err);
    return null;
  }
}

export { onAuthStateChanged };
