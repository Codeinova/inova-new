import { useState, useEffect } from 'react';
import { Search, Filter } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { strapiService } from '@/services/strapiService';
import type { StrapiCategory } from '@/types/strapi';

interface ArticleFiltersProps {
  onFilterChange: (filters: {
    search: string;
    category: string;
    startDate: string;
    endDate: string;
  }) => void;
}

export const ArticleFilters = ({ onFilterChange }: ArticleFiltersProps) => {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [categories, setCategories] = useState<StrapiCategory[]>([]);

  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = async () => {
    const cats = await strapiService.getCategories();
    setCategories(cats);
  };

  const handleApplyFilters = () => {
    onFilterChange({ search, category, startDate, endDate });
  };

  const handleReset = () => {
    setSearch('');
    setCategory('');
    setStartDate('');
    setEndDate('');
    onFilterChange({ search: '', category: '', startDate: '', endDate: '' });
  };

  return (
    <div className="bg-card border rounded-lg p-6 space-y-4">
      <div className="flex items-center gap-2 mb-4">
        <Filter className="h-5 w-5 text-primary" />
        <h3 className="text-lg font-semibold">Filtros de Búsqueda</h3>
      </div>

      {/* Search */}
      <div className="space-y-2">
        <label className="text-sm font-medium">Buscar</label>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Buscar por título o descripción..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10"
            onKeyDown={(e) => e.key === 'Enter' && handleApplyFilters()}
          />
        </div>
      </div>

      {/* Category */}
      <div className="space-y-2">
        <label className="text-sm font-medium">Categoría</label>
        <Select value={category} onValueChange={setCategory}>
          <SelectTrigger>
            <SelectValue placeholder="Todas las categorías" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todas las categorías</SelectItem>
            {categories.map((cat) => (
              <SelectItem key={cat.id} value={cat.slug}>
                {cat.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Date Range */}
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Desde</label>
          <Input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Hasta</label>
          <Input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-2 pt-2">
        <Button onClick={handleApplyFilters} className="flex-1">
          Aplicar Filtros
        </Button>
        <Button onClick={handleReset} variant="outline" className="flex-1">
          Limpiar
        </Button>
      </div>
    </div>
  );
};
