"use client";

import { useState, useRef, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

interface ResultsDisplayProps {
  results: {
    accuracy: number;
    result_message: string;
    classification: string;
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
  const confidencePercent = (results.accuracy * 100).toFixed(1);

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
          <div className="flex flex-col gap-2 mt-1">
            <p className="text-sm text-green-600 font-medium">
              Confidence:{" "}
              <span className="text-muted-foreground">{results.accuracy}%</span>
            </p>
            <p className="text-sm text-red-600 font-medium">
              Result:{" "}
              <span className="text-muted-foreground">
                {results.result_message}
              </span>
            </p>
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
                <Image
                  src={imageUrl!}
                  alt="Lung Image"
                  width={300}
                  height={300}
                  className="w-full h-auto"
                />
                {/* <canvas ref={canvasRef} className="max-w-full h-auto" />
                {results.areas && results.areas.length > 0 && (
                  <div className="mt-2 text-sm text-muted-foreground">
                    <p>
                      {results.areas.length} suspicious area
                      {results.areas.length > 1 ? "s" : ""} detected
                    </p>
                  </div>
                )} */}
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
                    <span className="text-red-600">Type:</span>
                    <span className="ml-2 font-medium">
                      {results.result_message}
                    </span>
                  </div>
                  <div className="text-sm">
                    <span className=" text-green-600">Confidence:</span>
                    <span className="ml-2 font-medium">
                      {results.accuracy || 0}
                    </span>
                  </div>
                  <div className="text-sm">
                    <span className="text-muted-foreground">
                      Detected Areas:
                    </span>
                    <span className="ml-2 font-medium">{}</span>
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
                <p className="text-sm mt-2">{}</p>
              </div>

              <div className="bg-muted p-3 rounded-md">
                <p className="text-xs text-muted-foreground">
                  <strong>Note:</strong> This AI analysis is intended to assist
                  medical professionals and should not replace professional
                  medical diagnosis. The confidence scores indicate the AI
                  model&apos;s certainty in its assessment.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
