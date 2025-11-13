import axios from 'axios';
import type { StrapiResponse, StrapiArticle, StrapiCategory, StrapiAuthResponse } from '@/types/strapi';

// IMPORTANTE: Cambiar esta URL por la URL de tu instancia de Strapi
const STRAPI_URL = import.meta.env.VITE_STRAPI_URL || 'http://localhost:1337';
const API_URL = `${STRAPI_URL}/api`;

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor para agregar el token JWT a las peticiones
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('strapiToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const strapiService = {
  // Autenticación
  async login(identifier: string, password: string): Promise<StrapiAuthResponse> {
    const response = await api.post('/auth/local', { identifier, password });
    if (response.data.jwt) {
      localStorage.setItem('strapiToken', response.data.jwt);
      localStorage.setItem('strapiUser', JSON.stringify(response.data.user));
    }
    return response.data;
  },

  logout() {
    localStorage.removeItem('strapiToken');
    localStorage.removeItem('strapiUser');
  },

  isAuthenticated(): boolean {
    return !!localStorage.getItem('strapiToken');
  },

  getCurrentUser() {
    const userStr = localStorage.getItem('strapiUser');
    return userStr ? JSON.parse(userStr) : null;
  },

  // Artículos
  async getArticles(filters?: {
    category?: string;
    search?: string;
    startDate?: string;
    endDate?: string;
    page?: number;
    pageSize?: number;
  }): Promise<StrapiResponse<StrapiArticle[]>> {
    const params: any = {
      populate: ['featuredimage', 'author', 'author.avatar', 'category'],
      sort: ['publishDate:desc'],
      'pagination[page]': filters?.page || 1,
      'pagination[pageSize]': filters?.pageSize || 9,
    };

    // Filtros
    if (filters?.category) {
      params['filters[category][slug][$eq]'] = filters.category;
    }

    if (filters?.search) {
      params['filters[$or][0][title][$containsi]'] = filters.search;
      params['filters[$or][1][description][$containsi]'] = filters.search;
    }

    if (filters?.startDate) {
      params['filters[publishDate][$gte]'] = filters.startDate;
    }

    if (filters?.endDate) {
      params['filters[publishDate][$lte]'] = filters.endDate;
    }

    const response = await api.get('/articles', { params });
    return response.data;
  },

  async getArticleBySlug(slug: string): Promise<StrapiArticle | null> {
    try {
      const response = await api.get('/articles', {
        params: {
          'filters[slug][$eq]': slug,
          populate: ['featuredimage', 'author', 'author.avatar', 'category', 'blocks'],
        },
      });
      return response.data.data[0] || null;
    } catch (error) {
      console.error('Error fetching article:', error);
      return null;
    }
  },

  async getArticleById(id: string): Promise<StrapiArticle | null> {
    try {
      const response = await api.get(`/articles/${id}`, {
        params: {
          populate: ['featuredimage', 'author', 'author.avatar', 'category', 'blocks'],
        },
      });
      return response.data.data;
    } catch (error) {
      console.error('Error fetching article:', error);
      return null;
    }
  },

  async createArticle(data: Partial<StrapiArticle>): Promise<StrapiArticle> {
    const response = await api.post('/articles', { data });
    return response.data.data;
  },

  async updateArticle(id: string, data: Partial<StrapiArticle>): Promise<StrapiArticle> {
    const response = await api.put(`/articles/${id}`, { data });
    return response.data.data;
  },

  async deleteArticle(id: string): Promise<void> {
    await api.delete(`/articles/${id}`);
  },

  // Categorías
  async getCategories(): Promise<StrapiCategory[]> {
    try {
      const response = await api.get('/categories', {
        params: {
          sort: ['name:asc'],
        },
      });
      return response.data.data;
    } catch (error) {
      console.error('Error fetching categories:', error);
      return [];
    }
  },

  // Upload de imágenes
  async uploadImage(file: File): Promise<any> {
    const formData = new FormData();
    formData.append('files', file);

    const response = await api.post('/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return response.data[0];
  },
};
