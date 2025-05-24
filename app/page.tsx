import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Microscope,
  Upload,
  FileImage,
  ArrowRight,
  Brain,
  Shield,
  CheckCircle2,
} from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Badge } from "@/components/ui/badge";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
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
                <Button variant="default" className="gap-2">
                  <Upload className="h-4 w-4" />
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
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-background">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge variant="outline" className="w-fit">
                    AI-Powered Analysis
                  </Badge>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Lung Cancer Classification with AI
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Upload your lung scan images and get instant classification
                    results powered by advanced AI technology.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/upload">
                    <Button size="lg" className="gap-2">
                      Upload Scan <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/about">
                    <Button size="lg" variant="outline">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative flex items-center justify-center">
                <div className="absolute -z-10 h-full w-full bg-gradient-to-b from-slate-100 to-slate-50 rounded-3xl dark:from-slate-900 dark:to-slate-800"></div>
                <img
                  src="/lung1.png?height=550&width=550"
                  width={550}
                  height={550}
                  alt="Lung scan visualization"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  How It Works
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Our AI-powered platform analyzes lung scan images to detect
                  and classify potential cancer indicators.
                </p>
              </div>
            </div>

            <Tabs defaultValue="process" className="mt-12 w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="process">The Process</TabsTrigger>
                <TabsTrigger value="technology">Technology</TabsTrigger>
                <TabsTrigger value="benefits">Benefits</TabsTrigger>
              </TabsList>
              <TabsContent value="process" className="mt-6">
                <div className="grid gap-6 md:grid-cols-3">
                  <Card>
                    <CardHeader>
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800">
                        <Upload className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="mt-4">Upload</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">
                        Upload your lung scan image in common formats like JPEG,
                        PNG, or DICOM.
                      </CardDescription>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800">
                        <Brain className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="mt-4">Process</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">
                        Our AI model processes the image and analyzes it for
                        potential cancer indicators.
                      </CardDescription>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800">
                        <FileImage className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="mt-4">Results</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">
                        Receive detailed classification results with confidence
                        scores and visual markers.
                      </CardDescription>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="technology" className="mt-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800">
                        <Brain className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="mt-4">Deep Learning</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">
                        Our system uses convolutional neural networks trained on
                        thousands of annotated lung scans to identify patterns
                        associated with malignant and benign tumors.
                      </CardDescription>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800">
                        <Shield className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="mt-4">Medical Validation</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">
                        Our algorithms have been validated against diagnoses
                        from expert radiologists to ensure accuracy and
                        reliability in clinical settings.
                      </CardDescription>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="benefits" className="mt-6">
                <div className="grid gap-6 md:grid-cols-3">
                  <Card>
                    <CardHeader>
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800">
                        <CheckCircle2 className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="mt-4">Early Detection</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">
                        Identify potential malignancies at earlier stages when
                        treatment is most effective.
                      </CardDescription>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800">
                        <CheckCircle2 className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="mt-4">
                        Reduced False Negatives
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">
                        Our AI helps catch cases that might be missed in
                        standard screenings, improving diagnostic accuracy.
                      </CardDescription>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800">
                        <CheckCircle2 className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="mt-4">Decision Support</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">
                        Provide additional insights to help medical
                        professionals make more informed treatment decisions.
                      </CardDescription>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50 dark:bg-slate-900">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 md:grid-cols-2 lg:gap-16 items-center">
              <div>
                <Badge variant="outline" className="mb-4">
                  For Medical Professionals
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl mb-4">
                  Trusted by Leading Institutions
                </h2>
                <p className="text-muted-foreground text-lg mb-6">
                  Our AI-powered platform is designed to complement the
                  expertise of radiologists and oncologists, providing a
                  reliable second opinion.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { stat: "95%", desc: "Accuracy in clinical trials" },
                    { stat: "80%", desc: "Early detection improvement" },
                    { stat: "3x", desc: "Faster than manual review" },
                    { stat: "24/7", desc: "Availability for analysis" },
                  ].map((item, i) => (
                    <HoverCard key={i}>
                      <HoverCardTrigger asChild>
                        <Card className="cursor-pointer hover:border-primary transition-colors">
                          <CardHeader className="pb-2">
                            <CardTitle className="text-2xl">
                              {item.stat}
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <CardDescription>{item.desc}</CardDescription>
                          </CardContent>
                        </Card>
                      </HoverCardTrigger>
                      <HoverCardContent className="w-80">
                        <div className="space-y-2">
                          <h4 className="text-sm font-semibold">
                            {item.stat} - {item.desc}
                          </h4>
                          <p className="text-sm">
                            Based on our internal testing and validation with
                            partner medical institutions. Results may vary based
                            on image quality and equipment used.
                          </p>
                        </div>
                      </HoverCardContent>
                    </HoverCard>
                  ))}
                </div>
                <div className="mt-8">
                  <Link href="/upload">
                    <Button size="lg" className="gap-2">
                      Try It Now <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-slate-100 to-slate-50 rounded-3xl -z-10 dark:from-slate-800 dark:to-slate-900"></div>
                <img
                  src="/lung.jpg?height=500&width=600"
                  width={600}
                  height={500}
                  alt="Medical professionals using LungScan AI"
                  className="rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>
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
              href="https://t.me/Smail_Oussama"
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
