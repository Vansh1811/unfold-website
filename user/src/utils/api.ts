// Prefer env variable, fall back to localhost for local development
const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api/v1';

interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: {
    message: string;
    code: number;
    details?: string[];
  };
}

class ApiError extends Error {
  constructor(public status: number, message: string) {
    super(message);
    this.name = 'ApiError';
  }
}

const getToken = () => localStorage.getItem('adminToken');

const makeRequest = async <T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> => {
  const token = getToken();
  const url = `${API_BASE_URL}${endpoint}`;

  const config: RequestInit = {
    headers: {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
      ...options.headers,
    },
    ...options,
  };

  try {
    const response = await fetch(url, config);
    const data: ApiResponse<T> = await response.json();

    if (!response.ok) {
      throw new ApiError(
        response.status,
        data.error?.message || `HTTP error! status: ${response.status}`
      );
    }

    if (!data.success) {
      throw new ApiError(
        data.error?.code || 500,
        data.error?.message || 'API request failed'
      );
    }

    return data.data as T;
  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    }
    throw new ApiError(
      500,
      error instanceof Error ? error.message : 'Network error'
    );
  }
};

// Blog API functions
export const blogApi = {
  getAll: (params?: {
    page?: number;
    limit?: number;
    status?: 'published' | 'draft' | 'all';
    search?: string;
  }) => {
    const searchParams = new URLSearchParams();
    if (params?.page) searchParams.append('page', params.page.toString());
    if (params?.limit) searchParams.append('limit', params.limit.toString());
    if (params?.status) searchParams.append('status', params.status);
    if (params?.search) searchParams.append('search', params.search);

    return makeRequest<{
      blogs: any[];
      pagination: {
        page: number;
        limit: number;
        total: number;
        pages: number;
      };
    }>(`/blog/admin?${searchParams.toString()}`);
  },

  getById: (id: string) => makeRequest<{ blog: any }>(`/blog/admin/${id}`),

  create: (blogData: any) =>
    makeRequest<{ blog: any }>('/blog/admin', {
      method: 'POST',
      body: JSON.stringify(blogData),
    }),

  update: (id: string, blogData: any) =>
    makeRequest<{ blog: any }>(`/blog/admin/${id}`, {
      method: 'PUT',
      body: JSON.stringify(blogData),
    }),

  delete: (id: string) =>
    makeRequest<{ message: string }>(`/blog/admin/${id}`, {
      method: 'DELETE',
    }),
};

// Service API functions
export const serviceApi = {
  getAll: (params?: {
    page?: number;
    limit?: number;
    status?: 'active' | 'inactive' | 'all';
    category?: string;
    search?: string;
  }) => {
    const searchParams = new URLSearchParams();
    if (params?.page) searchParams.append('page', params.page.toString());
    if (params?.limit) searchParams.append('limit', params.limit.toString());
    if (params?.status) searchParams.append('status', params.status);
    if (params?.category) searchParams.append('category', params.category);
    if (params?.search) searchParams.append('search', params.search);

    return makeRequest<{
      services: any[];
      pagination: {
        page: number;
        limit: number;
        total: number;
        pages: number;
      };
      statistics: any;
    }>(`/services/admin/all?${searchParams.toString()}`);
  },

  getStats: () =>
    makeRequest<{
      summary: {
        total: number;
        active: number;
        inactive: number;
        featured: number;
      };
      byCategory: any[];
      popularTags: any[];
    }>('/services/admin/stats'),

  create: (serviceData: any) =>
    makeRequest<{ service: any }>('/services/admin/create', {
      method: 'POST',
      body: JSON.stringify(serviceData),
    }),

  update: (id: string, serviceData: any) =>
    makeRequest<{ service: any }>(`/services/admin/${id}`, {
      method: 'PUT',
      body: JSON.stringify(serviceData),
    }),

  delete: (id: string) =>
    makeRequest<{ message: string }>(`/services/admin/${id}`, {
      method: 'DELETE',
    }),

  toggleStatus: (id: string) =>
    makeRequest<{ service: any }>(`/services/admin/${id}/toggle-status`, {
      method: 'PATCH',
    }),

  updateDisplayOrder: (services: { id: string; displayOrder: number }[]) =>
    makeRequest<{ message: string }>('/services/admin/bulk-order', {
      method: 'PATCH',
      body: JSON.stringify({ services }),
    }),
};

export { ApiError };
