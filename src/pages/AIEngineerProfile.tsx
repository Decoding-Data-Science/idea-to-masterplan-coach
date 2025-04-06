
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Briefcase, FileText, User } from "lucide-react";

const AIEngineerProfile = () => {
  // AI Engineer profile data
  const profile = {
    name: "Morgan Ramirez",
    title: "Senior AI Engineer",
    location: "Austin, TX",
    about: "AI engineer with 6+ years of experience building and deploying machine learning models at scale. Specialized in NLP, computer vision, and MLOps. Passionate about creating AI solutions that solve real-world problems.",
    avatar: "/photo-1498050108023-c5249f4df085",
    skills: ["TensorFlow", "PyTorch", "Natural Language Processing", "Computer Vision", "MLOps", "Python", "Deep Learning", "Generative AI", "LLMs", "Kubernetes", "Docker", "React"],
    experience: [
      {
        id: 1,
        company: "AI Innovations Inc.",
        role: "Senior AI Engineer",
        duration: "2021 - Present",
        description: "Lead a team of ML engineers developing large language models for enterprise applications. Implemented MLOps pipelines that reduced model deployment time by 60%."
      },
      {
        id: 2,
        company: "DataTech Solutions",
        role: "Machine Learning Engineer",
        duration: "2018 - 2021",
        description: "Developed computer vision systems for retail analytics. Created custom object detection models that achieved 94% accuracy in identifying products on store shelves."
      },
      {
        id: 3,
        company: "StartupAI",
        role: "AI Developer",
        duration: "2016 - 2018",
        description: "Built NLP systems for sentiment analysis and text classification. Contributed to open-source machine learning libraries."
      }
    ],
    projects: [
      {
        id: 1,
        name: "Conversational AI Assistant",
        description: "A domain-specific language model fine-tuned for customer support in the healthcare industry. Reduced response time by 80% while maintaining high accuracy.",
        technologies: ["PyTorch", "Transformers", "HuggingFace", "FastAPI"]
      },
      {
        id: 2,
        name: "Vision-based Quality Control System",
        description: "Computer vision system that automatically detects manufacturing defects with 98% precision. Deployed on edge devices in multiple factory locations.",
        technologies: ["TensorFlow", "OpenCV", "Kubernetes", "TensorRT"]
      },
      {
        id: 3,
        name: "Predictive Maintenance Platform",
        description: "End-to-end solution that predicts equipment failures before they occur using sensor data. Reduced downtime by 40% for industrial clients.",
        technologies: ["Python", "Scikit-learn", "Time Series Analysis", "AWS SageMaker"]
      }
    ],
    education: [
      {
        id: 1,
        institution: "Stanford University",
        degree: "M.S. Computer Science, AI Specialization",
        year: "2014 - 2016"
      },
      {
        id: 2,
        institution: "University of Washington",
        degree: "B.S. Computer Science",
        year: "2010 - 2014"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Profile Header */}
        <Card className="mb-8 overflow-hidden">
          <div className="h-32 bg-gradient-to-r from-teal-400 to-emerald-500"></div>
          <CardContent className="relative pt-0">
            <div className="flex flex-col md:flex-row gap-6 -mt-16">
              <Avatar className="h-32 w-32 border-4 border-white bg-white shadow-md">
                <AvatarImage src={profile.avatar} alt={profile.name} />
                <AvatarFallback>{profile.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <div className="pt-16 md:pt-4 flex-grow">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                  <div>
                    <h1 className="text-2xl font-bold">{profile.name}</h1>
                    <p className="text-gray-600">{profile.title}</p>
                    <p className="text-gray-500 text-sm">{profile.location}</p>
                  </div>
                  <Button variant="outline" className="bg-white hover:bg-gray-100">Contact</Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Profile Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  About
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{profile.about}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {profile.skills.map((skill, index) => (
                    <Badge key={index} variant="outline" className="bg-gray-100 text-gray-700">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Education</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {profile.education.map((edu) => (
                  <div key={edu.id}>
                    <h3 className="font-semibold">{edu.institution}</h3>
                    <p className="text-gray-600">{edu.degree}</p>
                    <p className="text-gray-500 text-sm">{edu.year}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Right Column (wider) */}
          <div className="md:col-span-2">
            <Tabs defaultValue="experience" className="w-full">
              <TabsList className="w-full grid grid-cols-2 mb-6 bg-gray-100">
                <TabsTrigger value="experience" className="flex items-center gap-2 data-[state=active]:bg-white">
                  <Briefcase className="h-4 w-4" />
                  Experience
                </TabsTrigger>
                <TabsTrigger value="projects" className="flex items-center gap-2 data-[state=active]:bg-white">
                  <FileText className="h-4 w-4" />
                  Projects
                </TabsTrigger>
              </TabsList>

              <TabsContent value="experience" className="space-y-6">
                {profile.experience.map((exp) => (
                  <Card key={exp.id}>
                    <CardContent className="pt-6">
                      <div className="flex flex-col md:flex-row justify-between mb-2">
                        <h3 className="font-semibold text-lg">{exp.role}</h3>
                        <span className="text-gray-500">{exp.duration}</span>
                      </div>
                      <p className="text-gray-600 font-medium mb-3">{exp.company}</p>
                      <p className="text-gray-600">{exp.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="projects" className="space-y-6">
                {profile.projects.map((project) => (
                  <Card key={project.id}>
                    <CardContent className="pt-6">
                      <h3 className="font-semibold text-lg mb-2">{project.name}</h3>
                      <p className="text-gray-600 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, index) => (
                          <Badge key={index} variant="outline" className="bg-gray-50">{tech}</Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIEngineerProfile;
