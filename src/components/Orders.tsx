import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ShoppingBag, Plus, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/hooks/useLanguage';

interface Order {
  id: string;
  product: string;
  amount: number;
  status: 'pending' | 'paid' | 'failed';
  createdAt: Date;
}

export function Orders() {
  const [orders, setOrders] = useState<Order[]>([
    { id: '1', product: 'Leather Handbag Collection', amount: 75000, status: 'pending', createdAt: new Date() },
    { id: '2', product: 'Digital Marketing Course', amount: 35000, status: 'paid', createdAt: new Date(Date.now() - 86400000) },
    { id: '3', product: 'Custom Web Design Package', amount: 250000, status: 'failed', createdAt: new Date(Date.now() - 172800000) },
    { id: '4', product: 'Photography Session Bundle', amount: 95000, status: 'paid', createdAt: new Date(Date.now() - 259200000) },
  ]);
  const [showAddOrder, setShowAddOrder] = useState(false);
  const [newOrder, setNewOrder] = useState({ product: '', amount: '' });
  const { toast } = useToast();
  const { t } = useLanguage();

  const simulatePayment = (orderId: string) => {
    setOrders(prev => prev.map(order => 
      order.id === orderId ? { ...order, status: 'pending' } : order
    ));

    toast({
      title: t('paymentSimulationStarted'),
      description: t('paymentProcessing'),
    });

    setTimeout(() => {
      const success = Math.random() > 0.2;
      setOrders(prev => prev.map(order => 
        order.id === orderId 
          ? { ...order, status: success ? 'paid' : 'failed' } 
          : order
      ));

      toast({
        title: success ? t('paymentSuccessful') : t('paymentFailedTitle'),
        description: success 
          ? t('paymentSuccessfulDesc')
          : t('paymentFailedDesc'),
        variant: success ? "default" : "destructive",
      });
    }, 5000);
  };

  const addOrder = () => {
    if (newOrder.product && newOrder.amount) {
      const order: Order = {
        id: Date.now().toString(),
        product: newOrder.product,
        amount: parseFloat(newOrder.amount),
        status: 'pending',
        createdAt: new Date()
      };
      setOrders(prev => [order, ...prev]);
      setNewOrder({ product: '', amount: '' });
      setShowAddOrder(false);
      
      toast({
        title: t('orderCreated'),
        description: t('orderCreatedDesc'),
      });

      // Auto-simulate payment after 2 seconds
      setTimeout(() => simulatePayment(order.id), 2000);
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending':
        return <Clock className="h-4 w-4 text-yellow-500 animate-bounce-gentle" />;
      case 'paid':
        return <CheckCircle className="h-4 w-4 text-ghala-green animate-scale-in" />;
      case 'failed':
        return <AlertCircle className="h-4 w-4 text-red-500" />;
      default:
        return null;
    }
  };

  const getStatusBadge = (status: string) => {
    const variants = {
      pending: 'bg-yellow-100 text-yellow-800 animate-bounce-gentle',
      paid: 'bg-green-100 text-ghala-green',
      failed: 'bg-red-100 text-red-800'
    };

    return (
      <Badge className={`${variants[status as keyof typeof variants]} border-0`}>
        {getStatusIcon(status)}
        <span className="ml-1 capitalize">{t(status)}</span>
      </Badge>
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center animate-slide-up">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">{t('orders')}</h1>
          <p className="text-gray-600 mt-1">{t('manageOrders')}</p>
        </div>
        <Button
          onClick={() => setShowAddOrder(true)}
          className="bg-ghala-green hover:bg-ghala-green-dark text-white"
        >
          <Plus className="h-4 w-4 mr-2" />
          {t('addOrder')}
        </Button>
      </div>

      {/* Add Order Form */}
      {showAddOrder && (
        <Card className="animate-scale-in">
          <CardHeader>
            <CardTitle>{t('createNewOrder')}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="product">{t('productName')}</Label>
              <Input
                id="product"
                value={newOrder.product}
                onChange={(e) => setNewOrder(prev => ({ ...prev, product: e.target.value }))}
                placeholder={t('enterProductName')}
                className="mt-1 focus:ring-ghala-green focus:border-ghala-green"
              />
            </div>
            <div>
              <Label htmlFor="amount">{t('amount')}</Label>
              <Input
                id="amount"
                type="number"
                value={newOrder.amount}
                onChange={(e) => setNewOrder(prev => ({ ...prev, amount: e.target.value }))}
                placeholder="50,000"
                className="mt-1 focus:ring-ghala-green focus:border-ghala-green"
              />
            </div>
            <div className="flex space-x-2">
              <Button
                onClick={addOrder}
                className="bg-ghala-green hover:bg-ghala-green-dark text-white"
              >
                {t('createOrder')}
              </Button>
              <Button
                variant="outline"
                onClick={() => {
                  setShowAddOrder(false);
                  setNewOrder({ product: '', amount: '' });
                }}
              >
                {t('cancel')}
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Orders Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {orders.map((order, index) => (
          <Card 
            key={order.id} 
            className="hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-ghala-green bg-opacity-10 rounded-full flex items-center justify-center">
                    <ShoppingBag className="h-4 w-4 text-ghala-green" />
                  </div>
                  <CardTitle className="text-lg">{order.product}</CardTitle>
                </div>
                {getStatusBadge(order.status)}
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-gray-900">
                  TSh {order.amount.toLocaleString()}
                </span>
                <span className="text-sm text-gray-500">
                  {t('order')} #{order.id}
                </span>
              </div>
              
              <div className="text-sm text-gray-500">
                Created: {order.createdAt.toLocaleDateString()} at {order.createdAt.toLocaleTimeString()}
              </div>

              {order.status === 'failed' && (
                <Button
                  onClick={() => simulatePayment(order.id)}
                  className="w-full bg-ghala-green hover:bg-ghala-green-dark text-white relative overflow-hidden group"
                >
                  <span className="relative z-10">{t('simulatePayment')}</span>
                  <div className="absolute inset-0 bg-white opacity-25 transform scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full"></div>
                </Button>
              )}

              {order.status === 'pending' && (
                <div className="flex items-center justify-center space-x-2 text-yellow-600">
                  <Clock className="h-4 w-4 animate-spin" />
                  <span className="text-sm">{t('processingPayment')}</span>
                </div>
              )}

              {order.status === 'paid' && (
                <div className="flex items-center justify-center space-x-2 text-ghala-green">
                  <CheckCircle className="h-4 w-4" />
                  <span className="text-sm font-medium">{t('paymentConfirmed')}</span>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
