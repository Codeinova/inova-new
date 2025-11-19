import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Save, Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useAuth } from '@/contexts/AuthContext';
import { strapiService } from '@/services/strapiService';
import { useToast } from '@/hooks/use-toast';
import type { StrapiCategory, StrapiArticle } from '@/types/strapi';

const ArticleForm = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const { toast } = useToast();

  const [isLoading, setIsLoading] = useState(false);
  const [categories, setCategories] = useState<StrapiCategory[]>([]);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  
  const [formData, setFormData] = useState({
    titulo: '',
    description: '',
    slug: '',
    content: '',
    category: '',
    publishDate: new Date().toISOString().split('T')[0],
    estatus: 'published',
  });

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/novedades');
      return;
    }
    loadCategories();
    if (id) {
      loadArticle(id);
    }
  }, [id, isAuthenticated]);

  const loadCategories = async () => {
    const cats = await strapiService.getCategories();
    setCategories(cats);
  };

  const loadArticle = async (articleId: string) => {
    try {
      const article = await strapiService.getArticleById(articleId);
      if (article) {
        setFormData({
          titulo: article.titulo,
          description: article.description,
          slug: article.slug,
          content: article.content || '',
          category: article.category?.documentId || '',
          publishDate: article.publishDate
            ? new Date(article.publishDate).toISOString().split('T')[0]
            : new Date().toISOString().split('T')[0],
          estatus: article.estatus || 'published',
        });

        if ((article.featuredImage || article.featuredimage)?.url) {
          setImagePreview(
            `${import.meta.env.VITE_STRAPI_URL || 'http://localhost:1337'}${(article.featuredImage || article.featuredimage)?.url}`
          );
        }
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'No se pudo cargar el artículo',
        variant: 'destructive',
      });
    }
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  };

  const handleTitleChange = (titulo: string) => {
    setFormData(prev => ({
      ...prev,
      titulo,
      slug: generateSlug(titulo),
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      let imageId = null;

      // Upload image if present
      if (imageFile) {
        const uploadedImage = await strapiService.uploadImage(imageFile);
        imageId = uploadedImage.id;
      }

      const articleData: any = {
        titulo: formData.titulo,
        description: formData.description,
        slug: formData.slug,
        content: formData.content,
        publishDate: formData.publishDate,
        estatus: formData.estatus,
      };

      if (imageId) {
        articleData.featuredImage = imageId;
      }

      if (formData.category) {
        articleData.category = formData.category;
      }

      if (id) {
        await strapiService.updateArticle(id, articleData);
        toast({
          title: 'Artículo actualizado',
          description: 'El artículo se actualizó correctamente',
        });
      } else {
        await strapiService.createArticle(articleData);
        toast({
          title: 'Artículo creado',
          description: 'El artículo se creó correctamente',
        });
      }

      navigate('/admin/novedades');
    } catch (error: any) {
      console.error('Error saving article:', error);
      toast({
        title: 'Error',
        description: error.response?.data?.error?.message || 'No se pudo guardar el artículo',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="border-b bg-gradient-to-br from-innova-yellow/5 to-background">
        <div className="container mx-auto px-4 py-6">
          <Button
            onClick={() => navigate('/admin/novedades')}
            variant="ghost"
            className="mb-4"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver al Panel
          </Button>
          <h1 className="text-3xl font-bold">
            {id ? 'Editar Artículo' : 'Nuevo Artículo'}
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <form onSubmit={handleSubmit}>
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Contenido Principal</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">Título *</Label>
                    <Input
                      id="title"
                      value={formData.titulo}
                      onChange={(e) => handleTitleChange(e.target.value)}
                      required
                      placeholder="Título del artículo"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="slug">Slug (URL)</Label>
                    <Input
                      id="slug"
                      value={formData.slug}
                      onChange={(e) =>
                        setFormData({ ...formData, slug: e.target.value })
                      }
                      placeholder="url-del-articulo"
                    />
                    <p className="text-xs text-muted-foreground">
                      Se genera automáticamente del título
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Descripción *</Label>
                    <Textarea
                      id="description"
                      value={formData.description}
                      onChange={(e) =>
                        setFormData({ ...formData, description: e.target.value })
                      }
                      required
                      rows={3}
                      placeholder="Breve descripción del artículo"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="content">Contenido (Markdown)</Label>
                    <Textarea
                      id="content"
                      value={formData.content}
                      onChange={(e) =>
                        setFormData({ ...formData, content: e.target.value })
                      }
                      rows={15}
                      placeholder="Escribe el contenido en formato Markdown..."
                      className="font-mono text-sm"
                    />
                    <p className="text-xs text-muted-foreground">
                      Puedes usar Markdown para dar formato al texto
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Publicación</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="status">Estado</Label>
                    <Select
                      value={formData.estatus}
                      onValueChange={(value) =>
                        setFormData({ ...formData, estatus: value })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="published">Publicado</SelectItem>
                        <SelectItem value="draft">Borrador</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="publishDate">Fecha de Publicación</Label>
                    <Input
                      id="publishDate"
                      type="date"
                      value={formData.publishDate}
                      onChange={(e) =>
                        setFormData({ ...formData, publishDate: e.target.value })
                      }
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="category">Categoría</Label>
                    <Select
                      value={formData.category}
                      onValueChange={(value) =>
                        setFormData({ ...formData, category: value })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona una categoría" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((cat) => (
                          <SelectItem key={cat.id} value={cat.documentId}>
                            {cat.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <Button type="submit" disabled={isLoading} className="w-full">
                    <Save className="mr-2 h-4 w-4" />
                    {isLoading
                      ? 'Guardando...'
                      : id
                      ? 'Actualizar Artículo'
                      : 'Crear Artículo'}
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Imagen Destacada</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {imagePreview && (
                    <div className="relative aspect-video rounded-lg overflow-hidden">
                      <img
                        src={imagePreview}
                        alt="Preview"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}

                  <div className="space-y-2">
                    <Label htmlFor="image">
                      {imagePreview ? 'Cambiar Imagen' : 'Subir Imagen'}
                    </Label>
                    <div className="flex items-center gap-2">
                      <Input
                        id="image"
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="cursor-pointer"
                      />
                      <Upload className="h-4 w-4 text-muted-foreground" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ArticleForm;
