import { createContext, useContext, useState, useCallback, useRef, type ReactNode } from "react";

interface LoadingContextType {
  loading: boolean;
  setLoading: (loading: boolean) => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

const MIN_DISPLAY_MS = 300;

export const LoadingProvider = ({ children }: { children: ReactNode }) => {
  const [loading, setLoadingState] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const showTimeRef = useRef<number>(0);

  const setLoading = useCallback((value: boolean) => {
    if (value) {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
      showTimeRef.current = Date.now();
      setLoadingState(true);
    } else {
      const elapsed = Date.now() - showTimeRef.current;
      const remaining = Math.max(0, MIN_DISPLAY_MS - elapsed);
      timerRef.current = setTimeout(() => {
        setLoadingState(false);
        timerRef.current = null;
      }, remaining);
    }
  }, []);

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = (): LoadingContextType => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error("useLoading must be used within a LoadingProvider");
  }
  return context;
};
