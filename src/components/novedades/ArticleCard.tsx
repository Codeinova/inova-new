import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { Calendar, User } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { StrapiArticle } from '@/types/strapi';

interface ArticleCardProps {
  article: StrapiArticle;
}

export const ArticleCard = ({ article }: ArticleCardProps) => {
  const imageUrl = article.featuredimage?.url 
    ? `${import.meta.env.VITE_STRAPI_URL || 'http://localhost:1337'}${article.featuredimage.url}` 
    : null;

  const publishDate = article.publishDate ? new Date(article.publishDate) : new Date(article.createdAt);

  return (
    <Link to={`/novedades/${article.slug}`}>
      <Card className="h-full overflow-hidden transition-all hover:shadow-lg hover:scale-[1.02] group">
        {imageUrl && (
          <div className="aspect-video overflow-hidden bg-muted">
            <img
              src={imageUrl}
              alt={article.featuredimage?.alternativeText || article.title}
              className="h-full w-full object-cover transition-transform group-hover:scale-110"
            />
          </div>
        )}
        
        <CardHeader className="space-y-2">
          {article.category && (
            <Badge className="w-fit bg-innova-yellow hover:bg-innova-yellow-light text-foreground">
              {article.category.name}
            </Badge>
          )}
          
          <h3 className="text-xl font-bold line-clamp-2 group-hover:text-primary transition-colors">
            {article.title}
          </h3>
        </CardHeader>

        <CardContent>
          <p className="text-muted-foreground line-clamp-3">
            {article.description}
          </p>
        </CardContent>

        <CardFooter className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span>{format(publishDate, 'dd MMM yyyy', { locale: es })}</span>
          </div>
          
          {article.author && (
            <div className="flex items-center gap-1">
              <User className="h-4 w-4" />
              <span>{article.author.name}</span>
            </div>
          )}
        </CardFooter>
      </Card>
    </Link>
  );
};
