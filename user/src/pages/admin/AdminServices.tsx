import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Pencil, Trash2, Plus, Search, Filter, Eye, EyeOff, ToggleLeft, ToggleRight, ArrowUpDown } from 'lucide-react';
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
import { serviceApi, ApiError } from '../../utils/api';
import { useAuth } from '../../contexts/AuthContext';

interface Service {
  _id: string;
  title: string;
  slug: string;
  shortDescription: string;
  description: string;
  features: string[];
  category: string;
  isActive: boolean;
  isFeatured: boolean;
  displayOrder: number;
  pricing: {
    type: 'fixed' | 'hourly' | 'custom';
    basePrice?: number;
    currency: string;
    customText?: string;
  };
  tags: string[];
  relatedServices: string[];
  meta: {
    title?: string;
    description?: string;
    keywords?: string[];
  };
  createdAt: string;
  updatedAt: string;
}

const AdminServices: React.FC = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
    total: 0,
    pages: 0,
  });
  
  // Filters
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'active' | 'inactive'>('all');
  const [categoryFilter, setCategoryFilter] = useState('');
  
  // Modal states
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingService, setEditingService] = useState<Service | null>(null);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [serviceToDelete, setServiceToDelete] = useState<Service | null>(null);
  
  // Form state
  const [formData, setFormData] = useState({
    title: '',
    shortDescription: '',
    description: '',
    features: '',
    category: '',
    isActive: true,
    isFeatured: false,
    displayOrder: 0,
    pricingType: 'custom' as 'fixed' | 'hourly' | 'custom',
    basePrice: '',
    currency: 'USD',
    customText: '',
    tags: '',
    metaTitle: '',
    metaDescription: '',
    metaKeywords: '',
  });

  const { toast } = useToast();
  const { user } = useAuth();

  const fetchServices = async () => {
    try {
      setLoading(true);
      const response = await serviceApi.getAll({
        page: pagination.page,
        limit: pagination.limit,
        status: statusFilter === 'all' ? undefined : statusFilter,
        category: categoryFilter || undefined,
        search: searchTerm || undefined,
      });
      
      setServices(response.services);
      setPagination(response.pagination);
    } catch (error) {
      console.error('Error fetching services:', error);
      toast({
        title: 'Error',
        description: error instanceof ApiError ? error.message : 'Failed to fetch services',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServices();
  }, [pagination.page, statusFilter, categoryFilter, searchTerm]);

  const handleSearch = () => {
    setPagination(prev => ({ ...prev, page: 1 }));
    fetchServices();
  };

  const resetForm = () => {
    setFormData({
      title: '',
      shortDescription: '',
      description: '',
      features: '',
      category: '',
      isActive: true,
      isFeatured: false,
      displayOrder: 0,
      pricingType: 'custom',
      basePrice: '',
      currency: 'USD',
      customText: '',
      tags: '',
      metaTitle: '',
      metaDescription: '',
      metaKeywords: '',
    });
  };

  const handleCreateService = async () => {
    try {
      const serviceData = {
        title: formData.title,
        shortDescription: formData.shortDescription,
        description: formData.description,
        features: formData.features.split('\n').map(f => f.trim()).filter(f => f),
        category: formData.category,
        isActive: formData.isActive,
        isFeatured: formData.isFeatured,
        displayOrder: parseInt(formData.displayOrder.toString()) || 0,
        pricing: {
          type: formData.pricingType,
          ...(formData.pricingType !== 'custom' && formData.basePrice && {
            basePrice: parseFloat(formData.basePrice),
          }),
          currency: formData.currency,
          ...(formData.pricingType === 'custom' && formData.customText && {
            customText: formData.customText,
          }),
        },
        tags: formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag),
        meta: {
          ...(formData.metaTitle && { title: formData.metaTitle }),
          ...(formData.metaDescription && { description: formData.metaDescription }),
          ...(formData.metaKeywords && { 
            keywords: formData.metaKeywords.split(',').map(k => k.trim()).filter(k => k) 
          }),
        },
      };
      
      await serviceApi.create(serviceData);
      
      toast({
        title: 'Success',
        description: 'Service created successfully',
      });
      
      setIsCreateModalOpen(false);
      resetForm();
      fetchServices();
    } catch (error) {
      console.error('Error creating service:', error);
      toast({
        title: 'Error',
        description: error instanceof ApiError ? error.message : 'Failed to create service',
        variant: 'destructive',
      });
    }
  };

  const handleEditService = async () => {
    if (!editingService) return;
    
    try {
      const serviceData = {
        title: formData.title,
        shortDescription: formData.shortDescription,
        description: formData.description,
        features: formData.features.split('\n').map(f => f.trim()).filter(f => f),
        category: formData.category,
        isActive: formData.isActive,
        isFeatured: formData.isFeatured,
        displayOrder: parseInt(formData.displayOrder.toString()) || 0,
        pricing: {
          type: formData.pricingType,
          ...(formData.pricingType !== 'custom' && formData.basePrice && {
            basePrice: parseFloat(formData.basePrice),
          }),
          currency: formData.currency,
          ...(formData.pricingType === 'custom' && formData.customText && {
            customText: formData.customText,
          }),
        },
        tags: formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag),
        meta: {
          ...(formData.metaTitle && { title: formData.metaTitle }),
          ...(formData.metaDescription && { description: formData.metaDescription }),
          ...(formData.metaKeywords && { 
            keywords: formData.metaKeywords.split(',').map(k => k.trim()).filter(k => k) 
          }),
        },
      };
      
      await serviceApi.update(editingService._id, serviceData);
      
      toast({
        title: 'Success',
        description: 'Service updated successfully',
      });
      
      setIsEditModalOpen(false);
      setEditingService(null);
      resetForm();
      fetchServices();
    } catch (error) {
      console.error('Error updating service:', error);
      toast({
        title: 'Error',
        description: error instanceof ApiError ? error.message : 'Failed to update service',
        variant: 'destructive',
      });
    }
  };

  const handleDeleteService = async () => {
    if (!serviceToDelete) return;
    
    try {
      await serviceApi.delete(serviceToDelete._id);
      
      toast({
        title: 'Success',
        description: 'Service deleted successfully',
      });
      
      setIsDeleteDialogOpen(false);
      setServiceToDelete(null);
      fetchServices();
    } catch (error) {
      console.error('Error deleting service:', error);
      toast({
        title: 'Error',
        description: error instanceof ApiError ? error.message : 'Failed to delete service',
        variant: 'destructive',
      });
    }
  };

  const handleToggleStatus = async (service: Service) => {
    try {
      await serviceApi.toggleStatus(service._id);
      
      toast({
        title: 'Success',
        description: `Service ${service.isActive ? 'deactivated' : 'activated'} successfully`,
      });
      
      fetchServices();
    } catch (error) {
      console.error('Error toggling service status:', error);
      toast({
        title: 'Error',
        description: error instanceof ApiError ? error.message : 'Failed to toggle service status',
        variant: 'destructive',
      });
    }
  };

  const openEditModal = (service: Service) => {
    setEditingService(service);
    setFormData({
      title: service.title,
      shortDescription: service.shortDescription,
      description: service.description,
      features: service.features.join('\n'),
      category: service.category,
      isActive: service.isActive,
      isFeatured: service.isFeatured,
      displayOrder: service.displayOrder,
      pricingType: service.pricing.type,
      basePrice: service.pricing.basePrice?.toString() || '',
      currency: service.pricing.currency,
      customText: service.pricing.customText || '',
      tags: service.tags.join(', '),
      metaTitle: service.meta.title || '',
      metaDescription: service.meta.description || '',
      metaKeywords: service.meta.keywords?.join(', ') || '',
    });
    setIsEditModalOpen(true);
  };

  const openDeleteDialog = (service: Service) => {
    setServiceToDelete(service);
    setIsDeleteDialogOpen(true);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const formatPrice = (service: Service) => {
    const { pricing } = service;
    if (pricing.type === 'custom') {
      return pricing.customText || 'Contact for pricing';
    }
    if (pricing.basePrice) {
      const symbol = pricing.currency === 'USD' ? '$' : pricing.currency;
      return `${symbol}${pricing.basePrice}${pricing.type === 'hourly' ? '/hr' : ''}`;
    }
    return 'Price not set';
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Manage Services</h1>
            <p className="text-gray-600 mt-1">Create and manage your services</p>
          </div>
          <div className="flex gap-4">
            <Link to="/admin">
              <Button variant="outline">Back to Dashboard</Button>
            </Link>
            <Dialog open={isCreateModalOpen} onOpenChange={setIsCreateModalOpen}>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="w-4 h-4 mr-2" />
                  Create Service
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
                    placeholder="Search services..."
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
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="inactive">Inactive</SelectItem>
                </SelectContent>
              </Select>
              <Input
                placeholder="Category..."
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="w-[180px]"
              />
              <Button onClick={handleSearch}>Search</Button>
            </div>
          </CardContent>
        </Card>

        {/* Services List */}
        <Card>
          <CardHeader>
            <CardTitle>Services ({pagination.total})</CardTitle>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="text-center py-8">Loading services...</div>
            ) : services.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                No services found. Create your first service!
              </div>
            ) : (
              <div className="space-y-4">
                {services.map((service) => (
                  <div
                    key={service._id}
                    className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-semibold text-lg">{service.title}</h3>
                        <Badge variant={service.isActive ? 'default' : 'secondary'}>
                          {service.isActive ? 'Active' : 'Inactive'}
                        </Badge>
                        {service.isFeatured && (
                          <Badge variant="outline">Featured</Badge>
                        )}
                        {service.isActive ? (
                          <Eye className="w-4 h-4 text-green-600" />
                        ) : (
                          <EyeOff className="w-4 h-4 text-gray-400" />
                        )}
                        <span className="text-xs text-gray-500 flex items-center gap-1">
                          <ArrowUpDown className="w-3 h-3" />
                          {service.displayOrder}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm mb-2">{service.shortDescription}</p>
                      <div className="flex items-center gap-4 text-xs text-gray-500 mb-2">
                        <span>Category: {service.category}</span>
                        <span>Price: {formatPrice(service)}</span>
                        <span>Created: {formatDate(service.createdAt)}</span>
                        <span>Updated: {formatDate(service.updatedAt)}</span>
                      </div>
                      {service.features.length > 0 && (
                        <div className="text-xs text-gray-600 mb-2">
                          Features: {service.features.slice(0, 3).join(', ')}
                          {service.features.length > 3 && '...'}
                        </div>
                      )}
                      {service.tags.length > 0 && (
                        <div className="flex gap-1 mt-2">
                          {service.tags.slice(0, 5).map((tag, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                          {service.tags.length > 5 && (
                            <Badge variant="outline" className="text-xs">
                              +{service.tags.length - 5} more
                            </Badge>
                          )}
                        </div>
                      )}
                    </div>
                    <div className="flex items-center gap-2 ml-4">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleToggleStatus(service)}
                        className={service.isActive ? 'text-orange-600' : 'text-green-600'}
                      >
                        {service.isActive ? (
                          <ToggleRight className="w-4 h-4" />
                        ) : (
                          <ToggleLeft className="w-4 h-4" />
                        )}
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => openEditModal(service)}
                      >
                        <Pencil className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => openDeleteDialog(service)}
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

      {/* Create/Edit Service Modal */}
      <Dialog open={isCreateModalOpen || isEditModalOpen} onOpenChange={(open) => {
        if (!open) {
          setIsCreateModalOpen(false);
          setIsEditModalOpen(false);
          setEditingService(null);
          resetForm();
        }
      }}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              {isCreateModalOpen ? 'Create New Service' : 'Edit Service'}
            </DialogTitle>
            <DialogDescription>
              Fill in the details below to {isCreateModalOpen ? 'create' : 'update'} the service.
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4 py-4">
            {/* Basic Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                  placeholder="Enter service title"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Input
                  id="category"
                  value={formData.category}
                  onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
                  placeholder="Enter service category"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="shortDescription">Short Description</Label>
              <Textarea
                id="shortDescription"
                value={formData.shortDescription}
                onChange={(e) => setFormData(prev => ({ ...prev, shortDescription: e.target.value }))}
                placeholder="Brief description of the service"
                rows={2}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="description">Full Description</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                placeholder="Detailed description of the service"
                rows={4}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="features">Features (one per line)</Label>
              <Textarea
                id="features"
                value={formData.features}
                onChange={(e) => setFormData(prev => ({ ...prev, features: e.target.value }))}
                placeholder="Feature 1&#10;Feature 2&#10;Feature 3"
                rows={4}
              />
            </div>

            {/* Pricing */}
            <div className="space-y-4 border-t pt-4">
              <h4 className="font-semibold">Pricing Information</h4>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="pricingType">Pricing Type</Label>
                  <Select value={formData.pricingType} onValueChange={(value: any) => setFormData(prev => ({ ...prev, pricingType: value }))}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="fixed">Fixed Price</SelectItem>
                      <SelectItem value="hourly">Hourly Rate</SelectItem>
                      <SelectItem value="custom">Custom Text</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                {formData.pricingType !== 'custom' && (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="basePrice">Base Price</Label>
                      <Input
                        id="basePrice"
                        type="number"
                        value={formData.basePrice}
                        onChange={(e) => setFormData(prev => ({ ...prev, basePrice: e.target.value }))}
                        placeholder="0.00"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="currency">Currency</Label>
                      <Select value={formData.currency} onValueChange={(value) => setFormData(prev => ({ ...prev, currency: value }))}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="USD">USD</SelectItem>
                          <SelectItem value="EUR">EUR</SelectItem>
                          <SelectItem value="GBP">GBP</SelectItem>
                          <SelectItem value="INR">INR</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </>
                )}
                
                {formData.pricingType === 'custom' && (
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="customText">Custom Pricing Text</Label>
                    <Input
                      id="customText"
                      value={formData.customText}
                      onChange={(e) => setFormData(prev => ({ ...prev, customText: e.target.value }))}
                      placeholder="Contact for pricing"
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Additional Information */}
            <div className="space-y-4 border-t pt-4">
              <h4 className="font-semibold">Additional Information</h4>
              
              <div className="space-y-2">
                <Label htmlFor="tags">Tags (comma-separated)</Label>
                <Input
                  id="tags"
                  value={formData.tags}
                  onChange={(e) => setFormData(prev => ({ ...prev, tags: e.target.value }))}
                  placeholder="tag1, tag2, tag3"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="displayOrder">Display Order</Label>
                  <Input
                    id="displayOrder"
                    type="number"
                    value={formData.displayOrder}
                    onChange={(e) => setFormData(prev => ({ ...prev, displayOrder: parseInt(e.target.value) || 0 }))}
                    placeholder="0"
                  />
                </div>
                
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="active"
                    checked={formData.isActive}
                    onChange={(e) => setFormData(prev => ({ ...prev, isActive: e.target.checked }))}
                    className="rounded"
                  />
                  <Label htmlFor="active">Active</Label>
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

            {/* SEO Meta */}
            <div className="space-y-4 border-t pt-4">
              <h4 className="font-semibold">SEO Meta Information</h4>
              
              <div className="space-y-2">
                <Label htmlFor="metaTitle">Meta Title</Label>
                <Input
                  id="metaTitle"
                  value={formData.metaTitle}
                  onChange={(e) => setFormData(prev => ({ ...prev, metaTitle: e.target.value }))}
                  placeholder="SEO title for search engines"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="metaDescription">Meta Description</Label>
                <Textarea
                  id="metaDescription"
                  value={formData.metaDescription}
                  onChange={(e) => setFormData(prev => ({ ...prev, metaDescription: e.target.value }))}
                  placeholder="SEO description for search engines"
                  rows={2}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="metaKeywords">Meta Keywords (comma-separated)</Label>
                <Input
                  id="metaKeywords"
                  value={formData.metaKeywords}
                  onChange={(e) => setFormData(prev => ({ ...prev, metaKeywords: e.target.value }))}
                  placeholder="keyword1, keyword2, keyword3"
                />
              </div>
            </div>
          </div>
          
          <DialogFooter>
            <Button variant="outline" onClick={() => {
              setIsCreateModalOpen(false);
              setIsEditModalOpen(false);
              setEditingService(null);
              resetForm();
            }}>
              Cancel
            </Button>
            <Button onClick={isCreateModalOpen ? handleCreateService : handleEditService}>
              {isCreateModalOpen ? 'Create Service' : 'Update Service'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete Service</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete "{serviceToDelete?.title}"? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDeleteDialogOpen(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={handleDeleteService}>
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminServices;
