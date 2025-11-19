import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { strapiService } from '@/services/strapiService';
import type { StrapiArticle } from '@/types/strapi';
import ReactMarkdown from 'react-markdown';

const ArticleDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [article, setArticle] = useState<StrapiArticle | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      loadArticle(slug);
    }
  }, [slug]);

  const loadArticle = async (slug: string) => {
    setIsLoading(true);
    try {
      const data = await strapiService.getArticleBySlug(slug);
      setArticle(data);
    } catch (error) {
      console.error('Error loading article:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <Skeleton className="h-10 w-32 mb-8" />
          <Skeleton className="h-12 w-3/4 mb-4" />
          <Skeleton className="h-6 w-1/2 mb-8" />
          <Skeleton className="aspect-video w-full mb-8" />
          <div className="space-y-4">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>
        </div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Artículo no encontrado</h2>
          <Button onClick={() => navigate('/novedades')}>
            Volver a Novedades
          </Button>
        </div>
      </div>
    );
  }

  const imageUrl = (article.featuredImage || article.featuredimage)?.url
    ? `${import.meta.env.VITE_STRAPI_URL || 'http://localhost:1337'}${(article.featuredImage || article.featuredimage)?.url}`
    : null;

  const publishDate = article.publishDate ? new Date(article.publishDate) : new Date(article.createdAt);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-gradient-to-br from-innova-yellow/5 to-background">
        <div className="container mx-auto px-4 py-8">
          <Button
            onClick={() => navigate('/novedades')}
            variant="ghost"
            className="mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver a Novedades
          </Button>

          <div className="max-w-4xl mx-auto space-y-6">
            {article.category && (
              <Badge className="bg-innova-yellow hover:bg-innova-yellow-light text-foreground">
                <Tag className="h-3 w-3 mr-1" />
                {article.category.name}
              </Badge>
            )}

            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              {article.titulo}
            </h1>

            <p className="text-xl text-muted-foreground">
              {article.description}
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground pt-4">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{format(publishDate, "dd 'de' MMMM, yyyy", { locale: es })}</span>
              </div>

              {article.author && (
                <div className="flex items-center gap-2">
                  {article.author.avatar?.url && (
                    <img
                      src={`${import.meta.env.VITE_STRAPI_URL || 'http://localhost:1337'}${article.author.avatar.url}`}
                      alt={article.author.name}
                      className="h-8 w-8 rounded-full object-cover"
                    />
                  )}
                  <div>
                    <div className="flex items-center gap-1 font-medium text-foreground">
                      <User className="h-4 w-4" />
                      {article.author.name}
                    </div>
                    {article.author.role && (
                      <div className="text-xs">{article.author.role}</div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      {imageUrl && (
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <img
              src={imageUrl}
              alt={(article.featuredImage || article.featuredimage)?.alternativeText || article.titulo}
              className="w-full aspect-video object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}

      {/* Content */}
      <article className="container mx-auto px-4 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            {article.content && (
              <ReactMarkdown>{article.content}</ReactMarkdown>
            )}
          </div>

          {/* Author Bio */}
          {article.author?.bio && (
            <div className="mt-12 p-6 bg-muted rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Sobre el autor</h3>
              <div className="flex gap-4">
                {article.author.avatar?.url && (
                  <img
                    src={`${import.meta.env.VITE_STRAPI_URL || 'http://localhost:1337'}${article.author.avatar.url}`}
                    alt={article.author.name}
                    className="h-16 w-16 rounded-full object-cover flex-shrink-0"
                  />
                )}
                <div>
                  <p className="font-medium text-lg">{article.author.name}</p>
                  {article.author.role && (
                    <p className="text-sm text-muted-foreground mb-2">{article.author.role}</p>
                  )}
                  <p className="text-sm text-muted-foreground">{article.author.bio}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </article>
    </div>
  );
};

export default ArticleDetail;
