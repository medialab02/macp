import { MapPin, Clock, Shield, Award, CheckCircle } from "lucide-react";

const slaInfo = [
  { label: "Primera respuesta", value: "< 4 horas hábiles" },
  { label: "Cotización formal", value: "< 24 horas hábiles" },
  { label: "Llamada de seguimiento", value: "< 48 horas hábiles" },
];

const benefits = [
  "Asesoría sin compromiso",
  "Cotización personalizada",
  "Demo de productos disponible",
  "Financiamiento flexible",
];

export function ContactInfo() {
  return (
    <div className="space-y-6">
      {/* Office Info Card */}
      <div className="bg-card rounded-2xl border border-border p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">
          Oficina principal
        </h3>
        
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <MapPin className="h-5 w-5 text-primary mt-0.5" />
            <div>
              <p className="text-foreground">Bogotá, Colombia</p>
              <p className="text-sm text-muted-foreground">
                Cra 15 #93-75, Oficina 501
              </p>
              <p className="text-sm text-muted-foreground">
                Edificio Tierra Firme
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <Clock className="h-5 w-5 text-primary mt-0.5" />
            <div>
              <p className="text-foreground">Horario de atención</p>
              <p className="text-sm text-muted-foreground">
                Lunes a Viernes: 8:00 AM - 6:00 PM
              </p>
              <p className="text-sm text-muted-foreground">
                Sábados: 9:00 AM - 1:00 PM
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* SLA Card */}
      <div className="bg-card rounded-2xl border border-border p-6">
        <div className="flex items-center gap-2 mb-4">
          <Shield className="h-5 w-5 text-primary" />
          <h3 className="text-lg font-semibold text-foreground">
            Tiempos de respuesta
          </h3>
        </div>
        
        <div className="space-y-3">
          {slaInfo.map((item, idx) => (
            <div 
              key={idx}
              className="flex justify-between items-center py-2 border-b border-border last:border-0"
            >
              <span className="text-sm text-muted-foreground">{item.label}</span>
              <span className="text-sm font-medium text-foreground">{item.value}</span>
            </div>
          ))}
        </div>
        
        <p className="mt-4 text-xs text-muted-foreground">
          * Tiempos estimados en días hábiles. Urgencias se atienden con prioridad.
        </p>
      </div>

      {/* Benefits Card */}
      <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl border border-primary/20 p-6">
        <div className="flex items-center gap-2 mb-4">
          <Award className="h-5 w-5 text-primary" />
          <h3 className="text-lg font-semibold text-foreground">
            ¿Por qué contactarnos?
          </h3>
        </div>
        
        <ul className="space-y-3">
          {benefits.map((benefit, idx) => (
            <li key={idx} className="flex items-center gap-2 text-sm text-foreground">
              <CheckCircle className="h-4 w-4 text-primary" />
              {benefit}
            </li>
          ))}
        </ul>
      </div>

      {/* Trust Badge */}
      <div className="flex items-center justify-center gap-4 py-4">
        <div className="text-center">
          <p className="text-2xl font-bold text-foreground">15+</p>
          <p className="text-xs text-muted-foreground">Años de experiencia</p>
        </div>
        <div className="w-px h-12 bg-border" />
        <div className="text-center">
          <p className="text-2xl font-bold text-foreground">500+</p>
          <p className="text-xs text-muted-foreground">Empresas atendidas</p>
        </div>
        <div className="w-px h-12 bg-border" />
        <div className="text-center">
          <p className="text-2xl font-bold text-foreground">98%</p>
          <p className="text-xs text-muted-foreground">Satisfacción</p>
        </div>
      </div>
    </div>
  );
}
