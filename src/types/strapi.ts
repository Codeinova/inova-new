export interface StrapiImage {
  id: number;
  url: string;
  alternativeText?: string;
  caption?: string;
  width: number;
  height: number;
}

export interface StrapiAuthor {
  id: number;
  documentId: string;
  name: string;
  email: string;
  avatar?: StrapiImage;
  role?: string;
  bio?: string;
}

export interface StrapiCategory {
  id: number;
  documentId: string;
  name: string;
  slug: string;
  description?: string;
  status?: string;
}

export interface StrapiArticle {
  id: number;
  documentId: string;
  titulo: string;
  title?: string; // Para compatibilidad
  description: string;
  slug: string;
  featuredImage?: StrapiImage;
  featuredimage?: StrapiImage; // Para compatibilidad
  author?: StrapiAuthor;
  category?: StrapiCategory;
  blocks?: any[];
  content?: string;
  publishDate: string;
  estatus?: 'draft' | 'published';
  status?: string; // Para compatibilidad
  createdAt: string;
  updatedAt: string;
}

export interface StrapiResponse<T> {
  data: T;
  meta?: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface StrapiAuthResponse {
  jwt: string;
  user: {
    id: number;
    username: string;
    email: string;
  };
}
