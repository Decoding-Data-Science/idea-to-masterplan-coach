
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { ArrowLeft, Upload } from "lucide-react";

const CreateProfile = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    title: "",
    location: "",
    about: "",
    skills: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.fullName || !formData.title || !formData.about) {
      toast.error("Please fill out all required fields");
      return;
    }
    
    // In a real app, we would save the profile data to a database here
    toast.success("Profile created successfully!");
    navigate("/profile");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-3xl mx-auto">
        <Button 
          variant="ghost" 
          className="mb-6 flex items-center gap-2" 
          onClick={() => navigate("/")}
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Button>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Create Your Professional Profile</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="fullName" className="font-medium">
                  Full Name *
                </label>
                <Input
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Your full name"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="title" className="font-medium">
                  Professional Title *
                </label>
                <Input
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="e.g., Senior Software Engineer"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="location" className="font-medium">
                  Location
                </label>
                <Input
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="e.g., San Francisco, CA"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="photo" className="font-medium">
                  Profile Photo
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center">
                  <Upload className="h-10 w-10 text-gray-400 mb-2" />
                  <p className="text-sm text-gray-500">
                    Drag and drop a file here, or click to browse
                  </p>
                  <input
                    type="file"
                    id="photo"
                    className="hidden"
                  />
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => document.getElementById("photo")?.click()}
                    className="mt-4"
                  >
                    Upload Photo
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="about" className="font-medium">
                  About *
                </label>
                <Textarea
                  id="about"
                  name="about"
                  value={formData.about}
                  onChange={handleChange}
                  placeholder="Tell us about yourself, your experience, and your professional journey"
                  rows={5}
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="skills" className="font-medium">
                  Skills (comma-separated)
                </label>
                <Input
                  id="skills"
                  name="skills"
                  value={formData.skills}
                  onChange={handleChange}
                  placeholder="e.g., React, TypeScript, AWS, Machine Learning"
                />
              </div>

              <Button type="submit" className="w-full">
                Create Profile
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CreateProfile;
