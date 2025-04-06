
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Search } from "lucide-react";
import { toast } from "sonner";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
    
    // Check if search query is related to AI engineering
    const aiRelatedTerms = ["ai", "artificial intelligence", "machine learning", "ml", "deep learning", "nlp"];
    
    if (searchQuery.trim().length === 0) {
      toast.error("Please enter a search term");
      return;
    }
    
    const searchLower = searchQuery.toLowerCase();
    const isAIRelated = aiRelatedTerms.some(term => searchLower.includes(term));
    
    if (isAIRelated) {
      toast.success(`Found AI talent matching "${searchQuery}"`);
      navigate("/ai-engineer");
    } else {
      toast.info("No matching talent found for this search term. Try searching for 'AI' or 'Machine Learning'");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="pt-16 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
            Connect Talent With Opportunity
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            A discovery platform where talented professionals showcase their skills and recruiters find the perfect match through intelligent search.
          </p>
          
          {/* Search Bar */}
          <form onSubmit={handleSearch} className="flex flex-col md:flex-row justify-center gap-3 max-w-2xl mx-auto">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for skills, roles, or experience..."
                className="pl-10 h-12 w-full"
              />
            </div>
            <Button type="submit" className="h-12 px-6">
              Find Talent
            </Button>
          </form>
        </div>

        {/* For Professionals Section */}
        <div className="grid md:grid-cols-2 gap-10 mb-20">
          <Card className="overflow-hidden border-0 shadow-lg transition-transform hover:shadow-xl">
            <div className="h-3 bg-purple-600"></div>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">For Professionals</h2>
              <p className="text-gray-600 mb-6">
                Showcase your skills, experience, and projects. Stand out to recruiters looking for your unique talents.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="mr-2 text-purple-600">✓</span>
                  Create a comprehensive professional profile
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-purple-600">✓</span>
                  Highlight your projects and accomplishments
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-purple-600">✓</span>
                  Get discovered by top companies and recruiters
                </li>
              </ul>
              <Button 
                className="w-full" 
                variant="outline" 
                onClick={() => navigate("/create-profile")}
              >
                Create Your Profile
              </Button>
            </CardContent>
          </Card>
          
          <Card className="overflow-hidden border-0 shadow-lg transition-transform hover:shadow-xl">
            <div className="h-3 bg-blue-600"></div>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">For Recruiters</h2>
              <p className="text-gray-600 mb-6">
                Find the perfect candidates quickly with our powerful natural language search. Filter by skills, experience, and more.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="mr-2 text-blue-600">✓</span>
                  Search with natural language queries
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-600">✓</span>
                  Filter candidates based on specific requirements
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-600">✓</span>
                  Contact promising candidates directly
                </li>
              </ul>
              <Button 
                className="w-full"
                onClick={() => navigate("/recruiting")}
              >
                Start Recruiting
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* How It Works Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 text-xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Create Profile</h3>
              <p className="text-gray-600">
                Professionals build detailed profiles showcasing their skills, experience, and portfolio.
              </p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Discover Talent</h3>
              <p className="text-gray-600">
                Recruiters search using natural language to find candidates matching their specific needs.
              </p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 text-xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Connect</h3>
              <p className="text-gray-600">
                Direct communication between recruiters and candidates leads to perfect matches.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-200 py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Platform</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-10 pt-6 border-t border-gray-700 text-center">
            <p>© {new Date().getFullYear()} Talent Discovery Platform. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
