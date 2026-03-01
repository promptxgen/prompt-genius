import { useLoading } from "@/context/loading-context";
import { Button } from "@/components/ui/button";

const Index = () => {
  const { setLoading } = useLoading();

  const simulateApiCall = async () => {
    try {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 2000));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-background">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold text-foreground">Global Loading System</h1>
        <p className="text-lg text-muted-foreground">
          Click below to see the loader in action.
        </p>
      </div>
      <Button onClick={simulateApiCall} size="lg">
        Simulate API Call
      </Button>
    </div>
  );
};

export default Index;
