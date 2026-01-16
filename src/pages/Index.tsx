import { Link } from 'react-router-dom';
import { ArrowRight, Newspaper } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-innova-yellow/10 via-background to-innova-yellow-light/10">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-innova-yellow to-innova-yellow-light bg-clip-text text-transparent">
              IN OVA
            </h1>
            <p className="text-2xl md:text-3xl font-semibold text-foreground">
              Inteligencia Colectiva para el Ecosistema Digital
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Transformando la cadena de valor de organizaciones rurales a través de la innovación tecnológica y el análisis de datos
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Link to="/novedades">
              <Button size="lg" className="gap-2 text-lg px-8 py-6">
                <Newspaper className="h-5 w-5" />
                Ver Novedades
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6 pt-16">
            <div className="p-6 rounded-lg bg-card border border-border/50 hover:border-primary/50 transition-colors">
              <h3 className="text-xl font-bold mb-2">Captura de Datos</h3>
              <p className="text-muted-foreground">
                Integración multiplataforma para recolección eficiente de información
              </p>
            </div>
            <div className="p-6 rounded-lg bg-card border border-border/50 hover:border-primary/50 transition-colors">
              <h3 className="text-xl font-bold mb-2">Analítica BI</h3>
              <p className="text-muted-foreground">
                Dashboards y reportes inteligentes para toma de decisiones
              </p>
            </div>
            <div className="p-6 rounded-lg bg-card border border-border/50 hover:border-primary/50 transition-colors">
              <h3 className="text-xl font-bold mb-2">Impacto Real</h3>
              <p className="text-muted-foreground">
                Transformando datos en acción para el desarrollo sostenible
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
