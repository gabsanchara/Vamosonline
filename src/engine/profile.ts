import { createContext, useCallback, useContext } from 'react';
import type { Profile } from '../types';
import { personalize } from './personalize';

export const ProfileContext = createContext<Profile | undefined>(undefined);

export function useProfile(): Profile | undefined {
  return useContext(ProfileContext);
}

// t(text) — текст с подставленным именем и родом текущего ученика.
export function usePersonalize() {
  const profile = useProfile();
  return useCallback((text: string) => personalize(text, profile), [profile]);
}
