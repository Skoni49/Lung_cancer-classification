"use client";

import type React from "react";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Microscope,
  Upload,
  AlertCircle,
  CheckCircle2,
  ArrowLeft,
  FileImage,
  X,
} from "lucide-react";
import { ResultsDisplay } from "@/components/resultsdisplay";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { UserButton } from "@clerk/nextjs";

export default function UploadPage() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [results, setResults] = useState<{
    accuracy: number;
    result_message: string;
  } | null>(null);
  const [error, setError] = useState<string | null>(null);

  // New function to post the image to the prediction endpoint with improved error handling
  const postImageForPrediction = async (formData: FormData) => {
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;
      const response = await fetch(`${apiUrl}/predict`, {
        method: "POST",
        body: formData,
        mode: "cors",
      });

      const result = await response.json();

      // Check if the API responded with an error detail
      if (!response.ok || result.detail || result.error) {
        throw new Error(
          result.detail || result.error || "Unknown error occurred."
        );
      }

      console.log("Prediction Response:", result);
      setResults(result);
      return result;
    } catch (error) {
      console.error("Fetch error:", error);
      if (error instanceof Error) {
        throw new Error(error.message);
      }
      throw new Error("An unknown error occurred.");
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      // Reset states
      setError(null);
      setResults(null);
      setFile(selectedFile);

      // Create preview
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreview(e.target?.result as string);
      };
      reader.readAsDataURL(selectedFile);

      toast("File selected", {
        description: `${selectedFile.name} is ready for analysis`,
      });
    }
  };

  const handleRemoveFile = () => {
    setFile(null);
    setPreview(null);
    setResults(null);
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!file) {
      setError("Please select an image to upload");
      return;
    }

    try {
      setLoading(true);
      setProgress(0);

      // Simulate progress until the API response is received
      const progressInterval = setInterval(() => {
        setProgress((prev) => (prev >= 90 ? prev : prev + 10));
      }, 500);

      const formData = new FormData();
      formData.append("file", file);

      // Await the response from the predict API endpoint
      const data = await postImageForPrediction(formData);

      clearInterval(progressInterval);
      setProgress(100);
      setResults(data);

      toast.success("Analysis complete", {
        description: "Your scan has been analyzed successfully",
      });
    } catch (err) {
      setError(
        "An error occurred while processing the image. Please try again."
      );
      console.error(err);

      toast.error("Analysis failed", {
        description: "There was a problem analyzing your scan.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Toaster />
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-2 items-center text-primary">
            <Microscope className="h-7 w-7 mx-2" />
            <span className="text-xl font-bold">LungScan AI</span>
          </div>

          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-2">
              <Link href="/">
                <Button variant="ghost">Home</Button>
              </Link>
              <Link href="/about">
                <Button variant="ghost">About</Button>
              </Link>
              <Link href="/upload">
                <Button variant="ghost">
                  <Upload className="mr-2 h-4 w-4" />
                  Upload Scan
                </Button>
              </Link>
            </nav>
            <div className="flex items-center absolute right-9">
              <UserButton
                afterSignOutUrl="/"
                appearance={{
                  elements: {
                    avatarBox: {
                      width: "32px",
                      height: "32px",
                    },
                  },
                }}
              />
            </div>
          </div>
        </div>
      </header>
      <main className="flex-1 container py-12">
        <div className="mb-8">
          <Link
            href="/"
            className="flex items-center text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="mr-2 h-4 w-4 mx-2" />
            Back to Home
          </Link>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <Card className="md:col-span-2">
            <CardHeader className="space-y-1">
              <div className="flex items-center justify-between">
                <Badge variant="outline" className="mb-2">
                  Step 1
                </Badge>
              </div>
              <CardTitle className="text-2xl">Upload Lung Scan Image</CardTitle>
              <CardDescription>
                Upload a lung scan image for AI-powered cancer classification.
                Supported formats: JPEG, PNG.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="upload" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="upload">Upload Image</TabsTrigger>
                  <TabsTrigger value="guidelines">Scan Guidelines</TabsTrigger>
                </TabsList>
                <TabsContent value="upload" className="mt-4 space-y-4">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid w-full items-center gap-4">
                      <div className="flex flex-col space-y-2">
                        {preview ? (
                          <div className="relative border rounded-lg overflow-hidden">
                            <div className="absolute top-2 right-2 z-10">
                              <Button
                                variant="destructive"
                                size="icon"
                                className="h-8 w-8 rounded-full"
                                onClick={handleRemoveFile}
                              >
                                <X className="h-4 w-4" />
                              </Button>
                            </div>
                            <img
                              src={preview || "/placeholder.svg"}
                              alt="Scan preview"
                              className="max-h-[400px] w-full object-contain"
                            />
                            <div className="bg-slate-50 dark:bg-slate-900 p-3 border-t">
                              <div className="flex justify-between items-center">
                                <div>
                                  <p className="font-medium text-sm truncate">
                                    {file?.name}
                                  </p>
                                  <p className="text-xs text-muted-foreground">
                                    {file?.size
                                      ? `${(file.size / 1024 / 1024).toFixed(
                                          2
                                        )} MB`
                                      : ""}
                                  </p>
                                </div>
                                <Button
                                  type="submit"
                                  className="gap-2"
                                  disabled={loading}
                                >
                                  {loading ? "Processing..." : "Analyze Scan"}
                                  {!loading && (
                                    <FileImage className="h-4 w-4" />
                                  )}
                                </Button>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div
                            className="border-2 border-dashed rounded-lg p-12 text-center cursor-pointer hover:bg-muted/50 transition-colors"
                            onClick={() =>
                              document.getElementById("file-upload")?.click()
                            }
                          >
                            <div className="flex flex-col items-center">
                              <div className="h-20 w-20 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-4">
                                <Upload className="h-10 w-10 text-primary" />
                              </div>
                              <p className="font-medium">
                                Click to upload or drag and drop
                              </p>
                              <p className="text-sm text-muted-foreground mt-1">
                                SVG, PNG, JPG or GIF (max. 10MB)
                              </p>
                              <Button className="mt-4">Select File</Button>
                            </div>
                            <input
                              id="file-upload"
                              type="file"
                              accept="image/*"
                              className="hidden"
                              onChange={handleFileChange}
                            />
                          </div>
                        )}
                      </div>
                    </div>

                    {error && (
                      <Alert variant="destructive">
                        <AlertCircle className="h-4 w-4" />
                        <AlertTitle>Error</AlertTitle>
                        <AlertDescription>{error}</AlertDescription>
                      </Alert>
                    )}

                    {loading && (
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm mb-1">
                          <span>
                            {progress < 100
                              ? "Analyzing image..."
                              : "Finalizing results..."}
                          </span>
                          <span>{progress}%</span>
                        </div>
                        <Progress value={progress} className="h-2" />
                      </div>
                    )}
                  </form>
                </TabsContent>
                <TabsContent value="guidelines" className="mt-4 space-y-4">
                  <div className="space-y-4">
                    <h3 className="font-medium">For Best Results:</h3>
                    <ul className="space-y-2">
                      <li className="flex gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />
                        <span>
                          Use high-resolution scans (minimum 1024x1024 pixels)
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />
                        <span>
                          Ensure the entire lung area is visible in the scan
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />
                        <span>CT scans provide better results than X-rays</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />
                        <span>
                          Remove any personal identifying information from the
                          image
                        </span>
                      </li>
                    </ul>

                    <Separator className="my-4" />

                    <h3 className="font-medium">Supported File Types:</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-2">
                      {["JPEG", "PNG", "DICOM", "TIFF"].map((format) => (
                        <div
                          key={format}
                          className="flex items-center gap-2 p-3 border rounded-md"
                        >
                          <FileImage className="h-5 w-5 text-primary" />
                          <span className="font-medium">{format}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {results && (
            <Card className="md:col-span-2">
              <CardHeader className="space-y-1">
                <Badge variant="outline" className="mb-2">
                  Step 2
                </Badge>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  Analysis Results
                </CardTitle>
                <CardDescription>
                  AI-powered classification results for your lung scan image
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResultsDisplay results={results} imageUrl={preview} />
              </CardContent>
              <CardFooter className="flex flex-col items-start gap-2">
                <Alert className="w-full">
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>Medical Disclaimer</AlertTitle>
                  <AlertDescription>
                    This analysis is provided for informational purposes only
                    and should not be considered a medical diagnosis. Please
                    consult with a healthcare professional for proper medical
                    advice.
                  </AlertDescription>
                </Alert>
                <div className="flex gap-2 mt-4">
                  <Button
                    onClick={() => {
                      setFile(null);
                      setPreview(null);
                      setResults(null);
                    }}
                  >
                    Upload New Scan
                  </Button>
                  <Button variant="outline">Download Report</Button>
                </div>
              </CardFooter>
            </Card>
          )}
        </div>
      </main>
      <footer className="w-full border-t py-6 bg-slate-50 dark:bg-slate-900">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2">
            <Microscope className="h-5 w-5 text-primary" />
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              © {new Date().getFullYear()} LungScan AI. All rights reserved.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/terms"
              className="text-sm text-muted-foreground hover:underline"
            >
              Terms
            </Link>
            <Link
              href="/privacy"
              className="text-sm text-muted-foreground hover:underline"
            >
              Privacy
            </Link>
            <Link
              href="https://oussama.pages.dev/"
              className="text-sm text-muted-foreground hover:underline"
            >
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
