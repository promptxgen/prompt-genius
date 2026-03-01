import { useLoading } from "@/context/loading-context";
import CoreSpinLoader from "./core-spin-loader";

const GlobalLoader = () => {
  const { loading } = useLoading();

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-background/60 backdrop-blur-sm transition-opacity">
      <CoreSpinLoader size="lg" />
    </div>
  );
};

export default GlobalLoader;
