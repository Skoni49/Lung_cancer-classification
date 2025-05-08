"use client";

import { useState, useRef, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ResultsDisplayProps {
  results: {
    classification: string;
    confidence: number;
    areas?: Array<{
      x: number;
      y: number;
      width: number;
      height: number;
      confidence: number;
    }>;
    recommendations: string;
  };
  imageUrl: string | null;
}

export function ResultsDisplay({ results, imageUrl }: ResultsDisplayProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [activeTab, setActiveTab] = useState("visual");

  // Draw the image with highlighted areas on the canvas
  useEffect(() => {
    if (!canvasRef.current || !imageUrl || !results.areas) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = new Image();
    img.crossOrigin = "anonymous"; // Prevent CORS issues
    img.src = imageUrl;

    img.onload = () => {
      // Set canvas dimensions to match the image
      canvas.width = img.width;
      canvas.height = img.height;

      // Draw the original image
      ctx.drawImage(img, 0, 0, img.width, img.height);

      // Draw rectangles around detected areas
      ctx.strokeStyle = "red";
      ctx.lineWidth = 3;

      results.areas?.forEach((area) => {
        ctx.beginPath();
        ctx.rect(area.x, area.y, area.width, area.height);
        ctx.stroke();

        // Add confidence label
        ctx.fillStyle = "rgba(255, 0, 0, 0.7)";
        ctx.fillRect(area.x, area.y - 20, 70, 20);
        ctx.fillStyle = "white";
        ctx.font = "12px Arial";
        ctx.fillText(
          `${(area.confidence * 100).toFixed(0)}%`,
          area.x + 5,
          area.y - 5
        );
      });
    };
  }, [imageUrl, results]);

  // Format confidence as percentage
  const confidencePercent = (results.confidence * 100).toFixed(1);

  // Determine classification color
  const classificationColor =
    results.classification === "Malignant"
      ? "destructive"
      : results.classification === "Benign"
      ? "secondary"
      : "default";

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-4 items-center">
        <div>
          <h3 className="text-lg font-medium">Classification:</h3>
          <div className="flex items-center gap-2 mt-1">
            <Badge variant={classificationColor} className="text-md py-1 px-3">
              {results.classification}
            </Badge>
            <span className="text-sm text-muted-foreground">
              Confidence: {confidencePercent}%
            </span>
          </div>
        </div>
      </div>

      <Tabs
        defaultValue="visual"
        value={activeTab}
        onValueChange={setActiveTab}
        className="w-full"
      >
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="visual">Visual Analysis</TabsTrigger>
          <TabsTrigger value="details">Detailed Results</TabsTrigger>
        </TabsList>
        <TabsContent value="visual" className="mt-4">
          <Card>
            <CardContent className="p-4">
              <div className="relative border rounded-md overflow-hidden">
                <canvas ref={canvasRef} className="max-w-full h-auto" />
                {results.areas && results.areas.length > 0 && (
                  <div className="mt-2 text-sm text-muted-foreground">
                    <p>
                      {results.areas.length} suspicious area
                      {results.areas.length > 1 ? "s" : ""} detected
                    </p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="details" className="mt-4">
          <Card>
            <CardContent className="p-6 space-y-4">
              <div>
                <h4 className="font-medium">Classification Details</h4>
                <div className="grid grid-cols-2 gap-2 mt-2">
                  <div className="text-sm">
                    <span className="text-muted-foreground">Type:</span>
                    <span className="ml-2 font-medium">
                      {results.classification}
                    </span>
                  </div>
                  <div className="text-sm">
                    <span className="text-muted-foreground">Confidence:</span>
                    <span className="ml-2 font-medium">
                      {confidencePercent}%
                    </span>
                  </div>
                  <div className="text-sm">
                    <span className="text-muted-foreground">
                      Detected Areas:
                    </span>
                    <span className="ml-2 font-medium">
                      {results.areas?.length || 0}
                    </span>
                  </div>
                  <div className="text-sm">
                    <span className="text-muted-foreground">
                      Analysis Date:
                    </span>
                    <span className="ml-2 font-medium">
                      {new Date().toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium">Recommendations</h4>
                <p className="text-sm mt-2">{results.recommendations}</p>
              </div>

              <div className="bg-muted p-3 rounded-md">
                <p className="text-xs text-muted-foreground">
                  <strong>Note:</strong> This AI analysis is intended to assist
                  medical professionals and should not replace professional
                  medical diagnosis. The confidence scores indicate the AI
                  model's certainty in its assessment.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
