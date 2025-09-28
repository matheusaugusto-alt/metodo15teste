"use client";

import { useState, useEffect, useCallback } from 'react';

const PROGRESS_KEY = 'bathTimeBlissProgress';

type Progress = Record<string, boolean>;

export function useProgress() {
  const [progress, setProgress] = useState<Progress>({});
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      const savedProgress = window.localStorage.getItem(PROGRESS_KEY);
      if (savedProgress) {
        setProgress(JSON.parse(savedProgress));
      }
    } catch (error) {
      console.error("Failed to load progress from localStorage", error);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  const toggleItemCompletion = useCallback((itemId: string) => {
    setProgress(prevProgress => {
      const newProgress = { ...prevProgress, [itemId]: !prevProgress[itemId] };
      try {
        window.localStorage.setItem(PROGRESS_KEY, JSON.stringify(newProgress));
      } catch (error) {
        console.error("Failed to save progress to localStorage", error);
      }
      return newProgress;
    });
  }, []);
  
  const isItemCompleted = useCallback((itemId: string) => {
    return !!progress[itemId];
  }, [progress]);

  return { progress, toggleItemCompletion, isItemCompleted, isLoaded };
}
