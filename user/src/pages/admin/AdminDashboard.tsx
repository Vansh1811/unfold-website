import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { 
  FileText, 
  Settings, 
  Users, 
  BarChart3, 
  PenTool, 
  LogOut,
  Bell,
  Search
} from 'lucide-react';

const AdminDashboard: React.FC = () => {
  const { admin, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  const dashboardCards = [
    {
      title: 'Manage Blogs',
      description: 'Create, edit, and publish blog posts',
      icon: <FileText className="h-8 w-8 text-blue-600" />,
      link: '/admin/blogs',
      color: 'bg-blue-50 hover:bg-blue-100'
    },
    {
      title: 'Manage Services',
      description: 'Create and update your service offerings',
      icon: <Settings className="h-8 w-8 text-green-600" />,
      link: '/admin/services',
      color: 'bg-green-50 hover:bg-green-100'
    },
    {
      title: 'Analytics',
      description: 'View website performance and insights',
      icon: <BarChart3 className="h-8 w-8 text-purple-600" />,
      link: '/admin/analytics',
      color: 'bg-purple-50 hover:bg-purple-100'
    },
    {
      title: 'Content Editor',
      description: 'Edit website content and pages',
      icon: <PenTool className="h-8 w-8 text-orange-600" />,
      link: '/admin/content',
      color: 'bg-orange-50 hover:bg-orange-100'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
              <p className="text-sm text-gray-600">Welcome back, {admin?.name}</p>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
              <Button variant="outline" size="sm">
                <Bell className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm" onClick={handleLogout}>
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Welcome to Your Admin Dashboard</CardTitle>
              <CardDescription>
                Manage your website content, services, and blog posts from here. 
                You are logged in as <strong>{admin?.role}</strong>.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* Quick Actions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-8">
          {dashboardCards.map((card, index) => (
            <Link key={index} to={card.link} className="block">
              <Card className={`transition-colors duration-200 ${card.color} border-2 hover:border-gray-300`}>
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-lg bg-white">
                      {card.icon}
                    </div>
                    <div>
                      <CardTitle className="text-lg">{card.title}</CardTitle>
                      <CardDescription className="text-sm">
                        {card.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>

        {/* Recent Activity Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Recent Blog Posts</CardTitle>
              <CardDescription>Your latest blog activity</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-6 text-gray-500">
                <FileText className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p>No recent blog posts</p>
                <Link to="/admin/blogs">
                  <Button variant="outline" size="sm" className="mt-2">
                    Create New Post
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent Services</CardTitle>
              <CardDescription>Your latest service updates</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-6 text-gray-500">
                <Settings className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p>No recent service updates</p>
                <Link to="/admin/services">
                  <Button variant="outline" size="sm" className="mt-2">
                    Manage Services
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
