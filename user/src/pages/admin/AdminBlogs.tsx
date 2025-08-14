import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Pencil, Trash2, Plus, Search, Filter, Eye, EyeOff } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '../../components/ui/select';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../../components/ui/dialog';
import { Label } from '../../components/ui/label';
import { Textarea } from '../../components/ui/textarea';
import { useToast } from '../../hooks/use-toast';
import { blogApi, ApiError } from '../../utils/api';
import { useAuth } from '../../contexts/AuthContext';

interface Blog {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  status: 'published' | 'draft';
  isPublished: boolean;
  isFeatured: boolean;
  tags: string[];
  authorId: string;
  createdAt: string;
  updatedAt: string;
}

const AdminBlogs: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
    total: 0,
    pages: 0,
  });
  
  // Filters
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'published' | 'draft'>('all');
  
  // Modal states
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingBlog, setEditingBlog] = useState<Blog | null>(null);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [blogToDelete, setBlogToDelete] = useState<Blog | null>(null);
  
  // Form state
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    category: '',
    status: 'draft' as 'published' | 'draft',
    tags: '',
    isFeatured: false,
  });

  const { toast } = useToast();
  const navigate = useNavigate();
  const { user } = useAuth();

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const response = await blogApi.getAll({
        page: pagination.page,
        limit: pagination.limit,
        status: statusFilter === 'all' ? undefined : statusFilter,
        search: searchTerm || undefined,
      });
      
      setBlogs(response.blogs);
      setPagination(response.pagination);
    } catch (error) {
      console.error('Error fetching blogs:', error);
      toast({
        title: 'Error',
        description: error instanceof ApiError ? error.message : 'Failed to fetch blogs',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, [pagination.page, statusFilter, searchTerm]);

  const handleSearch = () => {
    setPagination(prev => ({ ...prev, page: 1 }));
    fetchBlogs();
  };

  const resetForm = () => {
    setFormData({
      title: '',
      excerpt: '',
      content: '',
      category: '',
      status: 'draft',
      tags: '',
      isFeatured: false,
    });
  };

  const handleCreateBlog = async () => {
    try {
      const blogData = {
        ...formData,
        tags: formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag),
        isPublished: formData.status === 'published',
      };
      
      await blogApi.create(blogData);
      
      toast({
        title: 'Success',
        description: 'Blog created successfully',
      });
      
      setIsCreateModalOpen(false);
      resetForm();
      fetchBlogs();
    } catch (error) {
      console.error('Error creating blog:', error);
      toast({
        title: 'Error',
        description: error instanceof ApiError ? error.message : 'Failed to create blog',
        variant: 'destructive',
      });
    }
  };

  const handleEditBlog = async () => {
    if (!editingBlog) return;
    
    try {
      const blogData = {
        ...formData,
        tags: formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag),
        isPublished: formData.status === 'published',
      };
      
      await blogApi.update(editingBlog._id, blogData);
      
      toast({
        title: 'Success',
        description: 'Blog updated successfully',
      });
      
      setIsEditModalOpen(false);
      setEditingBlog(null);
      resetForm();
      fetchBlogs();
    } catch (error) {
      console.error('Error updating blog:', error);
      toast({
        title: 'Error',
        description: error instanceof ApiError ? error.message : 'Failed to update blog',
        variant: 'destructive',
      });
    }
  };

  const handleDeleteBlog = async () => {
    if (!blogToDelete) return;
    
    try {
      await blogApi.delete(blogToDelete._id);
      
      toast({
        title: 'Success',
        description: 'Blog deleted successfully',
      });
      
      setIsDeleteDialogOpen(false);
      setBlogToDelete(null);
      fetchBlogs();
    } catch (error) {
      console.error('Error deleting blog:', error);
      toast({
        title: 'Error',
        description: error instanceof ApiError ? error.message : 'Failed to delete blog',
        variant: 'destructive',
      });
    }
  };

  const openEditModal = (blog: Blog) => {
    setEditingBlog(blog);
    setFormData({
      title: blog.title,
      excerpt: blog.excerpt,
      content: blog.content,
      category: blog.category,
      status: blog.status,
      tags: blog.tags.join(', '),
      isFeatured: blog.isFeatured,
    });
    setIsEditModalOpen(true);
  };

  const openDeleteDialog = (blog: Blog) => {
    setBlogToDelete(blog);
    setIsDeleteDialogOpen(true);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Manage Blogs</h1>
            <p className="text-gray-600 mt-1">Create and manage your blog posts</p>
          </div>
          <div className="flex gap-4">
            <Link to="/admin">
              <Button variant="outline">Back to Dashboard</Button>
            </Link>
            <Dialog open={isCreateModalOpen} onOpenChange={setIsCreateModalOpen}>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="w-4 h-4 mr-2" />
                  Create Blog
                </Button>
              </DialogTrigger>
            </Dialog>
          </div>
        </div>

        {/* Filters */}
        <Card className="mb-6">
          <CardContent className="p-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    placeholder="Search blogs..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                    onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                  />
                </div>
              </div>
              <Select value={statusFilter} onValueChange={(value: any) => setStatusFilter(value)}>
                <SelectTrigger className="w-[180px]">
                  <Filter className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="published">Published</SelectItem>
                  <SelectItem value="draft">Draft</SelectItem>
                </SelectContent>
              </Select>
              <Button onClick={handleSearch}>Search</Button>
            </div>
          </CardContent>
        </Card>

        {/* Blogs List */}
        <Card>
          <CardHeader>
            <CardTitle>Blog Posts ({pagination.total})</CardTitle>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="text-center py-8">Loading blogs...</div>
            ) : blogs.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                No blogs found. Create your first blog post!
              </div>
            ) : (
              <div className="space-y-4">
                {blogs.map((blog) => (
                  <div
                    key={blog._id}
                    className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-semibold text-lg">{blog.title}</h3>
                        <Badge variant={blog.status === 'published' ? 'default' : 'secondary'}>
                          {blog.status}
                        </Badge>
                        {blog.isFeatured && (
                          <Badge variant="outline">Featured</Badge>
                        )}
                        {blog.isPublished ? (
                          <Eye className="w-4 h-4 text-green-600" />
                        ) : (
                          <EyeOff className="w-4 h-4 text-gray-400" />
                        )}
                      </div>
                      <p className="text-gray-600 text-sm mb-2">{blog.excerpt}</p>
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <span>Category: {blog.category}</span>
                        <span>Created: {formatDate(blog.createdAt)}</span>
                        <span>Updated: {formatDate(blog.updatedAt)}</span>
                      </div>
                      {blog.tags.length > 0 && (
                        <div className="flex gap-1 mt-2">
                          {blog.tags.map((tag, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="flex items-center gap-2 ml-4">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => openEditModal(blog)}
                      >
                        <Pencil className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => openDeleteDialog(blog)}
                        className="text-red-600 hover:text-red-700"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Pagination */}
            {pagination.pages > 1 && (
              <div className="flex justify-center items-center gap-2 mt-6">
                <Button
                  variant="outline"
                  size="sm"
                  disabled={pagination.page === 1}
                  onClick={() => setPagination(prev => ({ ...prev, page: prev.page - 1 }))}
                >
                  Previous
                </Button>
                <span className="text-sm text-gray-600">
                  Page {pagination.page} of {pagination.pages}
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  disabled={pagination.page === pagination.pages}
                  onClick={() => setPagination(prev => ({ ...prev, page: prev.page + 1 }))}
                >
                  Next
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Create/Edit Blog Modal */}
      <Dialog open={isCreateModalOpen || isEditModalOpen} onOpenChange={(open) => {
        if (!open) {
          setIsCreateModalOpen(false);
          setIsEditModalOpen(false);
          setEditingBlog(null);
          resetForm();
        }
      }}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              {isCreateModalOpen ? 'Create New Blog' : 'Edit Blog'}
            </DialogTitle>
            <DialogDescription>
              Fill in the details below to {isCreateModalOpen ? 'create' : 'update'} the blog post.
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                placeholder="Enter blog title"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Input
                id="category"
                value={formData.category}
                onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
                placeholder="Enter blog category"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="excerpt">Excerpt</Label>
              <Textarea
                id="excerpt"
                value={formData.excerpt}
                onChange={(e) => setFormData(prev => ({ ...prev, excerpt: e.target.value }))}
                placeholder="Brief description of the blog post"
                rows={3}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="content">Content</Label>
              <Textarea
                id="content"
                value={formData.content}
                onChange={(e) => setFormData(prev => ({ ...prev, content: e.target.value }))}
                placeholder="Full blog content"
                rows={8}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="tags">Tags (comma-separated)</Label>
              <Input
                id="tags"
                value={formData.tags}
                onChange={(e) => setFormData(prev => ({ ...prev, tags: e.target.value }))}
                placeholder="tag1, tag2, tag3"
              />
            </div>
            
            <div className="flex items-center gap-4">
              <div className="space-y-2">
                <Label htmlFor="status">Status</Label>
                <Select value={formData.status} onValueChange={(value: any) => setFormData(prev => ({ ...prev, status: value }))}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="draft">Draft</SelectItem>
                    <SelectItem value="published">Published</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="featured"
                  checked={formData.isFeatured}
                  onChange={(e) => setFormData(prev => ({ ...prev, isFeatured: e.target.checked }))}
                  className="rounded"
                />
                <Label htmlFor="featured">Featured</Label>
              </div>
            </div>
          </div>
          
          <DialogFooter>
            <Button variant="outline" onClick={() => {
              setIsCreateModalOpen(false);
              setIsEditModalOpen(false);
              setEditingBlog(null);
              resetForm();
            }}>
              Cancel
            </Button>
            <Button onClick={isCreateModalOpen ? handleCreateBlog : handleEditBlog}>
              {isCreateModalOpen ? 'Create Blog' : 'Update Blog'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete Blog</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete "{blogToDelete?.title}"? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDeleteDialogOpen(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={handleDeleteBlog}>
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminBlogs;
