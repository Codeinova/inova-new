import { useState, useEffect } from 'react';
import { Plus, LogIn, LogOut, Layout } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ArticleCard } from '@/components/novedades/ArticleCard';
import { ArticleFilters } from '@/components/novedades/ArticleFilters';
import { AdminLoginModal } from '@/components/novedades/AdminLoginModal';
import { strapiService } from '@/services/strapiService';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import type { StrapiArticle } from '@/types/strapi';
import { Skeleton } from '@/components/ui/skeleton';

const Novedades = () => {
  const [articles, setArticles] = useState<StrapiArticle[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [filters, setFilters] = useState({
    search: '',
    category: '',
    startDate: '',
    endDate: '',
  });
  
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    loadArticles();
  }, [filters]);

  const loadArticles = async () => {
    setIsLoading(true);
    try {
      const response = await strapiService.getArticles({
        search: filters.search || undefined,
        category: filters.category !== 'all' ? filters.category : undefined,
        startDate: filters.startDate || undefined,
        endDate: filters.endDate || undefined,
      });
      setArticles(response.data);
    } catch (error) {
      console.error('Error loading articles:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFilterChange = (newFilters: typeof filters) => {
    setFilters(newFilters);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-innova-yellow/10 via-background to-innova-yellow-light/10 py-20 border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Novedades
            </h1>
            <p className="text-xl text-muted-foreground">
              Mantente informado sobre las últimas actualizaciones tecnológicas e innovaciones
            </p>
          </div>

          {/* Admin Actions */}
          <div className="flex justify-center gap-4 mt-8">
            {isAuthenticated ? (
              <>
                <Button
                  onClick={() => navigate('/admin/novedades')}
                  size="lg"
                  className="gap-2"
                >
                  <Layout className="h-5 w-5" />
                  Panel Admin
                </Button>
                <Button
                  onClick={logout}
                  variant="outline"
                  size="lg"
                  className="gap-2"
                >
                  <LogOut className="h-5 w-5" />
                  Cerrar Sesión
                </Button>
              </>
            ) : (
              <Button
                onClick={() => setShowLoginModal(true)}
                variant="outline"
                size="lg"
                className="gap-2"
              >
                <LogIn className="h-5 w-5" />
                Acceso Administrador
              </Button>
            )}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-4">
                <ArticleFilters onFilterChange={handleFilterChange} />
              </div>
            </aside>

            {/* Articles Grid */}
            <div className="lg:col-span-3">
              {isLoading ? (
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="space-y-4">
                      <Skeleton className="aspect-video w-full" />
                      <Skeleton className="h-4 w-3/4" />
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-full" />
                    </div>
                  ))}
                </div>
              ) : articles.length === 0 ? (
                <div className="text-center py-16">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4">
                    <Plus className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">No hay artículos disponibles</h3>
                  <p className="text-muted-foreground">
                    {filters.search || filters.category || filters.startDate || filters.endDate
                      ? 'No se encontraron artículos con los filtros aplicados'
                      : 'Aún no hay artículos publicados'}
                  </p>
                </div>
              ) : (
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {articles.map((article) => (
                    <ArticleCard key={article.id} article={article} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Login Modal */}
      <AdminLoginModal
        open={showLoginModal}
        onOpenChange={setShowLoginModal}
      />
    </div>
  );
};

export default Novedades;
