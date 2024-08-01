import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ScrollArea } from "@/components/ui/scroll-area";
import { AlertCircle } from "lucide-react";

const Index = () => {
  const [isErrorVisible, setIsErrorVisible] = useState(false);

  return (
    <div className="flex justify-center items-center min-h-screen bg-background p-4">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle>Error Information</CardTitle>
        </CardHeader>
        <CardContent>
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              I'm having trouble with this error, can you help me:
            </AlertDescription>
          </Alert>
          <Collapsible open={isErrorVisible} onOpenChange={setIsErrorVisible}>
            <CollapsibleTrigger asChild>
              <Button variant="outline" className="w-full mt-4">
                {isErrorVisible ? "Hide error" : "Show error"}
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <ScrollArea className="h-[300px] w-full rounded-md border p-4 mt-4">
                <pre className="text-sm text-destructive">
                  {`Build was unsuccessful
> vite-project@0.0.0 build:dev
> vite build --mode development

vite v5.3.5 building for development...
transforming...
✓ 6 modules transformed.
x Build failed in 371ms
error during build:
[vite:esbuild] Transform failed with 2 errors:
/builds/0/project/src/App.jsx:1:58: ERROR:
Unexpected closing "bork" tag does not match opening "div" tag
/builds/0/project/src/App.jsx:1:70: ERROR:`}
                </pre>
              </ScrollArea>
            </CollapsibleContent>
          </Collapsible>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;
