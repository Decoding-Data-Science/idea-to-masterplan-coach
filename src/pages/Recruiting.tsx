
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { toast } from "sonner";
import { ArrowLeft, Search } from "lucide-react";

const Recruiting = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  
  // Mock data for demonstration purposes
  const [talents] = useState([
    {
      id: 1,
      name: "Alex Johnson",
      title: "Senior Software Engineer",
      avatar: "/placeholder.svg",
      skills: ["React", "TypeScript", "Node.js", "AWS", "GraphQL"]
    },
    {
      id: 2,
      name: "Sophia Chen",
      title: "AI Engineer",
      avatar: "/placeholder.svg",
      skills: ["Python", "Machine Learning", "TensorFlow", "NLP", "Data Science"]
    },
    {
      id: 3,
      name: "Marcus Williams",
      title: "UX/UI Designer",
      avatar: "/placeholder.svg",
      skills: ["Figma", "Adobe XD", "User Research", "Wireframing", "Prototyping"]
    }
  ]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!searchQuery.trim()) {
      toast.error("Please enter a search term");
      return;
    }
    
    // In a real app, we would filter results based on search query
    toast.success(`Searching for "${searchQuery}"`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <Button 
          variant="ghost" 
          className="mb-6 flex items-center gap-2" 
          onClick={() => navigate("/")}
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Button>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Talent Recruitment Portal</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSearch} className="flex gap-3 max-w-3xl mb-4">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for talent by skills, experience, or role..."
                  className="pl-10 h-12"
                />
              </div>
              <Button type="submit" className="h-12">
                Find Talent
              </Button>
            </form>

            <Tabs defaultValue="all">
              <TabsList className="mb-6">
                <TabsTrigger value="all">All Talent</TabsTrigger>
                <TabsTrigger value="tech">Engineering</TabsTrigger>
                <TabsTrigger value="design">Design</TabsTrigger>
                <TabsTrigger value="ai">AI & Data</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="space-y-4">
                {talents.map((talent) => (
                  <Card key={talent.id} className="cursor-pointer hover:shadow-md transition-shadow">
                    <CardContent className="p-6 flex flex-col md:flex-row gap-4 items-center md:items-start">
                      <Avatar className="h-20 w-20">
                        <AvatarImage src={talent.avatar} />
                        <AvatarFallback>{talent.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      
                      <div className="flex-grow text-center md:text-left">
                        <h3 className="font-semibold text-lg">{talent.name}</h3>
                        <p className="text-gray-600 mb-3">{talent.title}</p>
                        <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                          {talent.skills.map((skill, index) => (
                            <Badge key={index} variant="secondary">{skill}</Badge>
                          ))}
                        </div>
                      </div>

                      <Button 
                        onClick={() => {
                          if (talent.title === "AI Engineer") {
                            navigate("/ai-engineer");
                          } else {
                            navigate("/profile");
                          }
                        }}
                      >
                        View Profile
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="tech">
                <Card>
                  <CardContent className="p-6">
                    <p>Engineering talents will be displayed here.</p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="design">
                <Card>
                  <CardContent className="p-6">
                    <p>Design talents will be displayed here.</p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="ai">
                <Card>
                  <CardContent className="p-6">
                    <p>AI & Data talents will be displayed here.</p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Recruiting;
