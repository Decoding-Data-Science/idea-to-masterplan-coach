
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FileText, Briefcase, User, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const navigate = useNavigate();
  
  // Mock data - will be replaced with real data later
  const [profile] = useState({
    name: "Alex Johnson",
    title: "Senior Software Engineer",
    location: "San Francisco, CA",
    about: "Passionate software engineer with 8+ years of experience building scalable web applications. Specialized in React, Node.js, and cloud architecture.",
    avatar: "/placeholder.svg",
    skills: ["React", "TypeScript", "Node.js", "AWS", "GraphQL", "System Design", "Team Leadership"],
    experience: [
      {
        id: 1,
        company: "Tech Solutions Inc.",
        role: "Senior Software Engineer",
        duration: "2020 - Present",
        description: "Lead developer for customer-facing applications, managing a team of 5 engineers."
      },
      {
        id: 2,
        company: "WebDev Experts",
        role: "Software Engineer",
        duration: "2017 - 2020",
        description: "Developed and maintained multiple client projects using React and Node.js."
      }
    ],
    projects: [
      {
        id: 1,
        name: "E-commerce Platform",
        description: "A full-stack e-commerce solution with payment processing and inventory management.",
        technologies: ["React", "Node.js", "MongoDB", "Stripe API"]
      },
      {
        id: 2,
        name: "Task Management App",
        description: "Collaborative task management tool for remote teams with real-time updates.",
        technologies: ["React", "Firebase", "Material UI"]
      }
    ],
    education: [
      {
        id: 1,
        institution: "University of California, Berkeley",
        degree: "B.S. Computer Science",
        year: "2013 - 2017"
      }
    ]
  });

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Back button */}
        <Button 
          variant="ghost" 
          className="mb-6 flex items-center gap-2" 
          onClick={() => navigate("/")}
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Button>
        
        {/* Profile Header */}
        <Card className="mb-8 overflow-hidden">
          <div className="h-32 bg-gradient-to-r from-purple-600 to-blue-600"></div>
          <CardContent className="relative pt-6 px-6">
            <div className="flex flex-col md:flex-row gap-6 md:items-end">
              <Avatar className="h-32 w-32 border-4 border-white bg-white shadow-md -mt-16">
                <AvatarImage src={profile.avatar} alt={profile.name} />
                <AvatarFallback>{profile.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <div className="flex-grow">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-2">
                  <div>
                    <h1 className="text-2xl font-bold">{profile.name}</h1>
                    <p className="text-gray-600">{profile.title}</p>
                    <p className="text-gray-500 text-sm">{profile.location}</p>
                  </div>
                  <Button>Contact</Button>
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
                    <Badge key={index} variant="secondary">{skill}</Badge>
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
              <TabsList className="w-full grid grid-cols-2 mb-6">
                <TabsTrigger value="experience" className="flex items-center gap-2">
                  <Briefcase className="h-4 w-4" />
                  Experience
                </TabsTrigger>
                <TabsTrigger value="projects" className="flex items-center gap-2">
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
                          <Badge key={index} variant="outline">{tech}</Badge>
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

export default ProfilePage;
