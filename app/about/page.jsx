import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
    Microscope,
    Upload,
    FileImage,
    ArrowRight,
    Brain,
    Database,
    Shield,
    CheckCircle2,
    Users,
    Building,
    GraduationCap,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export default function AboutPage() {
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
                    </div>
                </div>
            </header>
            <main className="flex-1">
                <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-background">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <Badge variant="outline" className="mb-2">
                                About Us
                            </Badge>
                            <div className="space-y-2">
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">About LungScan AI</h1>
                                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Our mission is to improve early detection and diagnosis of lung cancer through advanced AI technology.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6">
                        <Tabs defaultValue="technology" className="w-full">
                            <TabsList className="grid w-full grid-cols-3 mb-8">
                                <TabsTrigger value="technology">Our Technology</TabsTrigger>
                                <TabsTrigger value="team">Our Team</TabsTrigger>
                                <TabsTrigger value="research">Research</TabsTrigger>
                            </TabsList>

                            <TabsContent value="technology">
                                <div className="grid gap-10 md:grid-cols-2 lg:gap-16 items-center">
                                    <div>
                                        <h2 className="text-2xl font-bold tracking-tighter md:text-3xl mb-4">State-of-the-Art AI</h2>
                                        <p className="text-muted-foreground text-lg mb-6">
                                            LungScan AI uses state-of-the-art deep learning models trained on thousands of annotated lung scan
                                            images. Our technology can detect potential malignancies with high accuracy, helping radiologists
                                            and oncologists make more informed decisions.
                                        </p>
                                        <div className="grid gap-4 md:grid-cols-2">
                                            <Card className="bg-slate-50 dark:bg-slate-900 border-none">
                                                <CardHeader className="pb-2">
                                                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                                                        <Brain className="h-6 w-6 text-primary" />
                                                    </div>
                                                    <CardTitle className="text-lg">Deep Learning</CardTitle>
                                                </CardHeader>
                                                <CardContent>
                                                    <CardDescription className="text-base">
                                                        Advanced neural networks trained on diverse datasets for accurate classification.
                                                    </CardDescription>
                                                </CardContent>
                                            </Card>
                                            <Card className="bg-slate-50 dark:bg-slate-900 border-none">
                                                <CardHeader className="pb-2">
                                                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                                                        <Database className="h-6 w-6 text-primary" />
                                                    </div>
                                                    <CardTitle className="text-lg">Large Dataset</CardTitle>
                                                </CardHeader>
                                                <CardContent>
                                                    <CardDescription className="text-base">
                                                        Trained on thousands of annotated medical images for robust performance.
                                                    </CardDescription>
                                                </CardContent>
                                            </Card>
                                        </div>
                                    </div>
                                    <div className="relative">
                                        <div className="absolute inset-0 bg-gradient-to-r from-slate-100 to-slate-50 rounded-3xl -z-10 dark:from-slate-800 dark:to-slate-900"></div>
                                        <img
                                            src="/IT.png?height=400&width=500"
                                            width={500}
                                            height={400}
                                            alt="AI technology visualization"
                                            className="rounded-xl object-cover"
                                        />
                                    </div>
                                </div>

                                <div className="mt-16">
                                    <h3 className="text-xl font-bold mb-6 text-center">How Our Technology Helps</h3>
                                    <div className="grid md:grid-cols-3 gap-6">
                                        <Card>
                                            <CardHeader>
                                                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                                                    <FileImage className="h-6 w-6 text-primary" />
                                                </div>
                                                <CardTitle>Early Detection</CardTitle>
                                            </CardHeader>
                                            <CardContent>
                                                <CardDescription className="text-base">
                                                    Identify potential malignancies at earlier stages when treatment is most effective.
                                                </CardDescription>
                                            </CardContent>
                                        </Card>
                                        <Card>
                                            <CardHeader>
                                                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                                                    <Shield className="h-6 w-6 text-primary" />
                                                </div>
                                                <CardTitle>Reduced False Negatives</CardTitle>
                                            </CardHeader>
                                            <CardContent>
                                                <CardDescription className="text-base">
                                                    Our AI helps catch cases that might be missed in standard screenings, improving diagnostic
                                                    accuracy.
                                                </CardDescription>
                                            </CardContent>
                                        </Card>
                                        <Card>
                                            <CardHeader>
                                                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                                                    <Microscope className="h-6 w-6 text-primary" />
                                                </div>
                                                <CardTitle>Decision Support</CardTitle>
                                            </CardHeader>
                                            <CardContent>
                                                <CardDescription className="text-base">
                                                    Provide additional insights to help medical professionals make more informed treatment
                                                    decisions.
                                                </CardDescription>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </div>
                            </TabsContent>

                            <TabsContent value="team">
                                <div className="text-center mb-10">
                                    <h2 className="text-2xl font-bold tracking-tighter md:text-3xl mb-4">Our Expert Team</h2>
                                    <p className="max-w-[800px] mx-auto text-muted-foreground text-lg">
                                        LungScan AI brings together experts in artificial intelligence, medical imaging, and oncology to
                                        create cutting-edge diagnostic tools.
                                    </p>
                                </div>

                                <div className="grid md:grid-cols-3 gap-6">
                                    {[
                                        {
                                            name: "Dr. Sarah Chen",
                                            role: "Chief Medical Officer",
                                            icon: <Users className="h-6 w-6 text-primary" />,
                                            bio: "Board-certified radiologist with 15 years of experience in thoracic imaging and early cancer detection.",
                                        },
                                        {
                                            name: "Dr. Michael Rodriguez",
                                            role: "AI Research Director",
                                            icon: <Brain className="h-6 w-6 text-primary" />,
                                            bio: "PhD in Computer Science with specialization in medical image analysis and deep learning architectures.",
                                        },
                                        {
                                            name: "Dr. Emily Johnson",
                                            role: "Clinical Integration Lead",
                                            icon: <Building className="h-6 w-6 text-primary" />,
                                            bio: "Oncologist focused on integrating AI tools into clinical workflows and improving patient outcomes.",
                                        },
                                    ].map((person, i) => (
                                        <Card key={i}>
                                            <CardHeader>
                                                <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                                                    {person.icon}
                                                </div>
                                                <CardTitle>{person.name}</CardTitle>
                                                <CardDescription className="text-primary font-medium">{person.role}</CardDescription>
                                            </CardHeader>
                                            <CardContent>
                                                <p className="text-muted-foreground">{person.bio}</p>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>

                                <div className="mt-12 text-center">
                                    <h3 className="text-xl font-bold mb-4">Our Partners</h3>
                                    <div className="flex flex-wrap justify-center gap-8 mt-6">
                                        {["University Medical Center", "National Cancer Institute", "Global AI Research"].map(
                                            (partner, i) => (
                                                <div key={i} className="flex items-center gap-2 p-4 border rounded-lg min-w-[200px]">
                                                    <div className="h-10 w-10 rounded-md bg-primary/10 flex items-center justify-center">
                                                        <Building className="h-5 w-5 text-primary" />
                                                    </div>
                                                    <span className="font-medium">{partner}</span>
                                                </div>
                                            ),
                                        )}
                                    </div>
                                </div>
                            </TabsContent>

                            <TabsContent value="research">
                                <div className="text-center mb-10">
                                    <h2 className="text-2xl font-bold tracking-tighter md:text-3xl mb-4">Our Research</h2>
                                    <p className="max-w-[800px] mx-auto text-muted-foreground text-lg">
                                        LungScan AI is built on rigorous research and continuous improvement through clinical validation.
                                    </p>
                                </div>

                                <div className="grid md:grid-cols-2 gap-8">
                                    <Card>
                                        <CardHeader>
                                            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                                                <GraduationCap className="h-6 w-6 text-primary" />
                                            </div>
                                            <CardTitle>Clinical Validation</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-muted-foreground mb-4">
                                                Our AI models have been validated in multiple clinical settings with diverse patient populations
                                                to ensure accuracy and reliability.
                                            </p>
                                            <div className="space-y-2">
                                                <div className="flex justify-between items-center">
                                                    <span>Sensitivity</span>
                                                    <span className="font-medium">94.3%</span>
                                                </div>
                                                <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                                                    <div className="bg-primary h-2 rounded-full" style={{ width: "94.3%" }}></div>
                                                </div>

                                                <div className="flex justify-between items-center mt-2">
                                                    <span>Specificity</span>
                                                    <span className="font-medium">91.7%</span>
                                                </div>
                                                <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                                                    <div className="bg-primary h-2 rounded-full" style={{ width: "91.7%" }}></div>
                                                </div>
                                            </div>
                                        </CardContent>
                                        <CardFooter>
                                            <p className="text-sm text-muted-foreground">
                                                Based on a study of 5,000+ patient scans across 12 medical centers.
                                            </p>
                                        </CardFooter>
                                    </Card>

                                    <Card>
                                        <CardHeader>
                                            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                                                <FileImage className="h-6 w-6 text-primary" />
                                            </div>
                                            <CardTitle>Publications</CardTitle>
                                        </CardHeader>
                                        <CardContent className="space-y-4">
                                            {[
                                                {
                                                    title: "Deep Learning for Early Lung Cancer Detection: A Comparative Study",
                                                    journal: "Journal of Medical Imaging",
                                                    year: "2023",
                                                },
                                                {
                                                    title: "Improving Radiologist Workflow with AI-Assisted Diagnosis",
                                                    journal: "Clinical Oncology Research",
                                                    year: "2022",
                                                },
                                                {
                                                    title: "Transfer Learning Approaches for Low-Resource Medical Imaging",
                                                    journal: "AI in Medicine",
                                                    year: "2021",
                                                },
                                            ].map((pub, i) => (
                                                <div key={i} className="p-3 bg-slate-50 dark:bg-slate-900 rounded-lg">
                                                    <h4 className="font-medium">{pub.title}</h4>
                                                    <div className="flex justify-between mt-1 text-sm text-muted-foreground">
                                                        <span>{pub.journal}</span>
                                                        <span>{pub.year}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </CardContent>
                                        <CardFooter>
                                            <Button variant="outline" className="w-full">
                                                View All Publications
                                            </Button>
                                        </CardFooter>
                                    </Card>
                                </div>

                                <div className="mt-12 p-6 bg-slate-50 dark:bg-slate-900 rounded-xl">
                                    <h3 className="text-xl font-bold mb-4">Ongoing Research</h3>
                                    <div className="space-y-4">
                                        <div className="flex gap-3">
                                            <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                                            <div>
                                                <h4 className="font-medium">Multi-modal Integration</h4>
                                                <p className="text-muted-foreground">
                                                    Combining CT scans with patient history and genomic data for more accurate predictions.
                                                </p>
                                            </div>
                                        </div>
                                        <Separator />
                                        <div className="flex gap-3">
                                            <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                                            <div>
                                                <h4 className="font-medium">Explainable AI</h4>
                                                <p className="text-muted-foreground">
                                                    Developing methods to make AI decisions more transparent and interpretable for clinicians.
                                                </p>
                                            </div>
                                        </div>
                                        <Separator />
                                        <div className="flex gap-3">
                                            <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                                            <div>
                                                <h4 className="font-medium">Longitudinal Analysis</h4>
                                                <p className="text-muted-foreground">
                                                    Tracking changes in lung nodules over time to improve early detection of malignant
                                                    transformations.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </TabsContent>
                        </Tabs>
                    </div>
                </section>

                <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50 dark:bg-slate-900">
                    <div className="container px-4 md:px-6">
                        <div className="grid gap-10 md:grid-cols-2 lg:gap-16">
                            <div className="flex items-center justify-center order-last md:order-first">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-gradient-to-r from-slate-100 to-slate-50 rounded-3xl -z-10 dark:from-slate-800 dark:to-slate-900"></div>
                                    <img
                                        src="/placeholder.svg?height=400&width=500"
                                        width={500}
                                        height={400}
                                        alt="Medical team using LungScan AI"
                                        className="rounded-xl object-cover"
                                    />
                                </div>
                            </div>
                            <div>
                                <Badge variant="outline" className="mb-4">
                                    For Medical Professionals
                                </Badge>
                                <h2 className="text-2xl font-bold tracking-tighter md:text-3xl mb-4">Enhancing Clinical Practice</h2>
                                <p className="text-muted-foreground text-lg mb-6">
                                    LungScan AI is designed to complement the expertise of radiologists and oncologists, not replace it.
                                    Our tool provides a second opinion and helps highlight areas of concern that might warrant closer
                                    examination.
                                </p>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3 bg-white dark:bg-slate-800 p-3 rounded-lg">
                                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                                        <div>
                                            <h3 className="font-medium">Streamlined Workflow</h3>
                                            <p className="text-sm text-muted-foreground">
                                                Integrate seamlessly into existing diagnostic processes with minimal disruption
                                            </p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3 bg-white dark:bg-slate-800 p-3 rounded-lg">
                                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                                        <div>
                                            <h3 className="font-medium">Detailed Reports</h3>
                                            <p className="text-sm text-muted-foreground">
                                                Generate comprehensive analysis with visual markers and confidence scores
                                            </p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3 bg-white dark:bg-slate-800 p-3 rounded-lg">
                                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                                        <div>
                                            <h3 className="font-medium">Continuous Learning</h3>
                                            <p className="text-sm text-muted-foreground">
                                                Our models improve over time with more data and feedback from medical professionals
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                                <div className="mt-8">
                                    <Link href="/upload">
                                        <Button size="lg" className="gap-2">
                                            Try It Now <ArrowRight className="h-4 w-4" />
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="w-full border-t py-6 bg-slate-50 dark:bg-slate-900">
                <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
                    <div className="flex items-center gap-2">
                        <Microscope className="h-5 w-7  text-primary" />
                        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                            © {new Date().getFullYear()} LungScan AI. All rights reserved.
                        </p>
                    </div>
                    <div className="flex items-center gap-4">
                        <Link href="/terms" className="text-sm text-muted-foreground hover:underline">
                            Terms
                        </Link>
                        <Link href="/privacy" className="text-sm text-muted-foreground hover:underline">
                            Privacy
                        </Link>
                        <a href="mailto:your-email@example.com" className="text-sm text-muted-foreground hover:underline">
                            Contact
                        </a>

                    </div>
                </div>
            </footer>
        </div>
    )
}
