import { useState, useEffect } from 'react';
import { Plus, Edit, Trash2, Eye, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '@/contexts/AuthContext';
import { strapiService } from '@/services/strapiService';
import { useToast } from '@/hooks/use-toast';
import type { StrapiArticle } from '@/types/strapi';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

const AdminNovedades = () => {
  const [articles, setArticles] = useState<StrapiArticle[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [deleteArticleId, setDeleteArticleId] = useState<string | null>(null);
  const { isAuthenticated, logout, user } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/novedades');
    } else {
      loadArticles();
    }
  }, [isAuthenticated]);

  const loadArticles = async () => {
    setIsLoading(true);
    try {
      const response = await strapiService.getArticles({ pageSize: 100 });
      setArticles(response.data);
    } catch (error) {
      toast({
        title: 'Error',
        description: 'No se pudieron cargar los artículos',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!deleteArticleId) return;

    try {
      await strapiService.deleteArticle(deleteArticleId);
      toast({
        title: 'Artículo eliminado',
        description: 'El artículo se eliminó correctamente',
      });
      loadArticles();
    } catch (error) {
      toast({
        title: 'Error',
        description: 'No se pudo eliminar el artículo',
        variant: 'destructive',
      });
    } finally {
      setDeleteArticleId(null);
    }
  };

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-gradient-to-br from-innova-yellow/5 to-background">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-4 mb-2">
                <Button
                  onClick={() => navigate('/novedades')}
                  variant="ghost"
                  size="sm"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Volver
                </Button>
                <h1 className="text-3xl font-bold">Panel de Administración</h1>
              </div>
              <p className="text-muted-foreground">
                Gestiona las novedades y artículos del sitio
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-sm font-medium">{user?.username}</p>
                <p className="text-xs text-muted-foreground">{user?.email}</p>
              </div>
              <Button onClick={logout} variant="outline">
                Cerrar Sesión
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
            <CardTitle>Artículos Publicados</CardTitle>
            <Button onClick={() => navigate('/admin/novedades/nuevo')} className="gap-2">
              <Plus className="h-4 w-4" />
              Nuevo Artículo
            </Button>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="text-center py-8">Cargando artículos...</div>
            ) : articles.length === 0 ? (
              <div className="text-center py-16">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4">
                  <Plus className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-2">No hay artículos</h3>
                <p className="text-muted-foreground mb-4">
                  Comienza creando tu primer artículo
                </p>
                <Button onClick={() => navigate('/admin/novedades/nuevo')}>
                  <Plus className="mr-2 h-4 w-4" />
                  Crear Artículo
                </Button>
              </div>
            ) : (
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Título</TableHead>
                      <TableHead>Categoría</TableHead>
                      <TableHead>Autor</TableHead>
                      <TableHead>Fecha</TableHead>
                      <TableHead>Estado</TableHead>
                      <TableHead className="text-right">Acciones</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {articles.map((article) => (
                      <TableRow key={article.id}>
                        <TableCell className="font-medium">
                          {article.titulo}
                        </TableCell>
                        <TableCell>
                          {article.category && (
                            <Badge variant="outline">
                              {article.category.name}
                            </Badge>
                          )}
                        </TableCell>
                        <TableCell>
                          {article.author?.name || 'Sin autor'}
                        </TableCell>
                        <TableCell>
                          {format(
                            new Date(article.publishDate || article.createdAt),
                            'dd/MM/yyyy',
                            { locale: es }
                          )}
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              article.status === 'published'
                                ? 'default'
                                : 'secondary'
                            }
                          >
                            {article.status || 'draft'}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center justify-end gap-2">
                            <Button
                              onClick={() =>
                                navigate(`/novedades/${article.slug}`)
                              }
                              variant="ghost"
                              size="sm"
                            >
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button
                              onClick={() =>
                                navigate(
                                  `/admin/novedades/editar/${article.documentId}`
                                )
                              }
                              variant="ghost"
                              size="sm"
                            >
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button
                              onClick={() =>
                                setDeleteArticleId(article.documentId)
                              }
                              variant="ghost"
                              size="sm"
                              className="text-destructive hover:text-destructive"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Delete Confirmation Dialog */}
      <AlertDialog
        open={!!deleteArticleId}
        onOpenChange={() => setDeleteArticleId(null)}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>¿Estás seguro?</AlertDialogTitle>
            <AlertDialogDescription>
              Esta acción no se puede deshacer. El artículo será eliminado
              permanentemente.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDelete}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              Eliminar
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default AdminNovedades;
