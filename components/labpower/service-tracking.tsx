"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Search, Package, Clock, CheckCircle2, AlertCircle, XCircle } from "lucide-react";

interface ServiceOrder {
  id: string;
  customerId: string;
  serialNumber: string;
  device: string;
  issue: string;
  status: "Waiting" | "In progress" | "Pending parts" | "Waiting for authorization" | "Notified" | "Completed" | "Stored";
  lastUpdate: string;
  estimatedDelivery?: string;
}

const mockOrders: ServiceOrder[] = [
  {
    id: "LP-2024-001",
    customerId: "C12345",
    serialNumber: "FVFX3456YHK9",
    device: "MacBook Pro 13\" 2020",
    issue: "Pantalla con líneas verticales",
    status: "In progress",
    lastUpdate: "2024-02-05",
    estimatedDelivery: "2024-02-10",
  },
  {
    id: "LP-2024-002",
    customerId: "C67890",
    serialNumber: "C02YD0ABJG5H",
    device: "iPhone 13 Pro",
    issue: "Batería se descarga rápido",
    status: "Waiting for authorization",
    lastUpdate: "2024-02-04",
  },
  {
    id: "LP-2024-003",
    customerId: "C11223",
    serialNumber: "DMPH234RJK90",
    device: "iPad Air 4",
    issue: "No carga",
    status: "Completed",
    lastUpdate: "2024-02-03",
    estimatedDelivery: "2024-02-03",
  },
];

const statusConfig = {
  "Waiting": { icon: Clock, color: "text-yellow-500", bgColor: "bg-yellow-500/10", label: "En espera" },
  "In progress": { icon: Package, color: "text-blue-500", bgColor: "bg-blue-500/10", label: "En progreso" },
  "Pending parts": { icon: AlertCircle, color: "text-orange-500", bgColor: "bg-orange-500/10", label: "Pendiente repuestos" },
  "Waiting for authorization": { icon: AlertCircle, color: "text-amber-500", bgColor: "bg-amber-500/10", label: "Esperando autorización" },
  "Notified": { icon: CheckCircle2, color: "text-cyan-500", bgColor: "bg-cyan-500/10", label: "Notificado" },
  "Completed": { icon: CheckCircle2, color: "text-green-500", bgColor: "bg-green-500/10", label: "Completado" },
  "Stored": { icon: XCircle, color: "text-gray-500", bgColor: "bg-gray-500/10", label: "Almacenado" },
};

export function ServiceTracking() {
  const [searchType, setSearchType] = useState<"order" | "customer" | "serial">("order");
  const [searchValue, setSearchValue] = useState("");
  const [foundOrder, setFoundOrder] = useState<ServiceOrder | null>(null);
  const [notFound, setNotFound] = useState(false);

  const handleSearch = () => {
    setNotFound(false);
    setFoundOrder(null);

    let order: ServiceOrder | undefined;

    if (searchType === "order") {
      order = mockOrders.find(o => o.id.toLowerCase() === searchValue.toLowerCase());
    } else if (searchType === "customer") {
      order = mockOrders.find(o => o.customerId.toLowerCase() === searchValue.toLowerCase());
    } else if (searchType === "serial") {
      order = mockOrders.find(o => o.serialNumber.toLowerCase() === searchValue.toLowerCase());
    }

    if (order) {
      setFoundOrder(order);
    } else {
      setNotFound(true);
    }
  };

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-foreground">
            Seguimiento de Servicio
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Consulta el estado actual de tu dispositivo en reparación
          </p>
        </div>

        <Card className="bg-card border-border/50">
          <CardHeader>
            <CardTitle>Buscar mi orden de servicio</CardTitle>
            <CardDescription>Ingresa uno de los siguientes datos para buscar</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <Tabs value={searchType} onValueChange={(v) => setSearchType(v as typeof searchType)}>
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="order">Número de orden</TabsTrigger>
                <TabsTrigger value="customer">ID de cliente</TabsTrigger>
                <TabsTrigger value="serial">Número de serie</TabsTrigger>
              </TabsList>
              
              <TabsContent value="order" className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="order-search">Número de orden de servicio</Label>
                  <div className="flex gap-2">
                    <Input
                      id="order-search"
                      placeholder="Ej: LP-2024-001"
                      value={searchValue}
                      onChange={(e) => setSearchValue(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                    />
                    <Button onClick={handleSearch}>
                      <Search className="h-4 w-4 mr-2" />
                      Buscar
                    </Button>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="customer" className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="customer-search">ID de cliente</Label>
                  <div className="flex gap-2">
                    <Input
                      id="customer-search"
                      placeholder="Ej: C12345"
                      value={searchValue}
                      onChange={(e) => setSearchValue(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                    />
                    <Button onClick={handleSearch}>
                      <Search className="h-4 w-4 mr-2" />
                      Buscar
                    </Button>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="serial" className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="serial-search">Número de serie del dispositivo</Label>
                  <div className="flex gap-2">
                    <Input
                      id="serial-search"
                      placeholder="Ej: FVFX3456YHK9"
                      value={searchValue}
                      onChange={(e) => setSearchValue(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                    />
                    <Button onClick={handleSearch}>
                      <Search className="h-4 w-4 mr-2" />
                      Buscar
                    </Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>

            {/* Not Found Message */}
            {notFound && (
              <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 text-center">
                <p className="text-red-500 font-medium">No se encontró ninguna orden con los datos ingresados</p>
                <p className="text-sm text-muted-foreground mt-2">Verifica que los datos sean correctos e intenta de nuevo</p>
              </div>
            )}

            {/* Order Found */}
            {foundOrder && (
              <div className="space-y-4 pt-4 border-t border-border">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{foundOrder.device}</h3>
                    <p className="text-sm text-muted-foreground">Orden: {foundOrder.id}</p>
                  </div>
                  <Badge 
                    variant="secondary" 
                    className={`${statusConfig[foundOrder.status].bgColor} ${statusConfig[foundOrder.status].color} border-0`}
                  >
                    {(() => {
                      const StatusIcon = statusConfig[foundOrder.status].icon;
                      return <StatusIcon className="h-3 w-3 mr-1" />;
                    })()}
                    {statusConfig[foundOrder.status].label}
                  </Badge>
                </div>

                <div className="bg-muted/50 rounded-lg p-4 space-y-3">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-muted-foreground">Cliente</p>
                      <p className="font-medium">{foundOrder.customerId}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Serial</p>
                      <p className="font-medium text-sm">{foundOrder.serialNumber}</p>
                    </div>
                  </div>

                  <div>
                    <p className="text-xs text-muted-foreground">Problema reportado</p>
                    <p className="font-medium">{foundOrder.issue}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-muted-foreground">Última actualización</p>
                      <p className="font-medium">{new Date(foundOrder.lastUpdate).toLocaleDateString('es-ES')}</p>
                    </div>
                    {foundOrder.estimatedDelivery && (
                      <div>
                        <p className="text-xs text-muted-foreground">Entrega estimada</p>
                        <p className="font-medium">{new Date(foundOrder.estimatedDelivery).toLocaleDateString('es-ES')}</p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    className="flex-1"
                    onClick={() => {
                      setFoundOrder(null);
                      setSearchValue("");
                    }}
                  >
                    Buscar otra orden
                  </Button>
                  <Button 
                    className="flex-1 bg-accent text-accent-foreground"
                    onClick={() => window.open('https://wa.me/573002345678?text=Consulta sobre orden ' + foundOrder.id, '_blank')}
                  >
                    Contactar soporte
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Demo Data Hint */}
        <div className="mt-6 text-center">
          <p className="text-xs text-muted-foreground">
            Para probar: LP-2024-001, C12345, o FVFX3456YHK9
          </p>
        </div>
      </div>
    </section>
  );
}
