
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ShoppingBag, DollarSign, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface Order {
  id: string;
  product: string;
  amount: number;
  status: 'pending' | 'paid' | 'failed';
  createdAt: Date;
}

export function Dashboard() {
  const [orders, setOrders] = useState<Order[]>([
    { id: '1', product: 'Premium Subscription', amount: 99.99, status: 'pending', createdAt: new Date() },
    { id: '2', product: 'Digital Course', amount: 49.99, status: 'paid', createdAt: new Date(Date.now() - 86400000) },
    { id: '3', product: 'Consultation Call', amount: 150.00, status: 'failed', createdAt: new Date(Date.now() - 172800000) },
  ]);
  const { toast } = useToast();

  const simulatePayment = (orderId: string) => {
    setOrders(prev => prev.map(order => 
      order.id === orderId ? { ...order, status: 'pending' } : order
    ));

    toast({
      title: "Payment Simulation Started",
      description: "Processing payment... Please wait.",
    });

    setTimeout(() => {
      const success = Math.random() > 0.2; // 80% success rate
      setOrders(prev => prev.map(order => 
        order.id === orderId 
          ? { ...order, status: success ? 'paid' : 'failed' } 
          : order
      ));

      toast({
        title: success ? "Payment Successful!" : "Payment Failed",
        description: success 
          ? "The payment has been processed successfully." 
          : "Payment processing failed. Please try again.",
        variant: success ? "default" : "destructive",
      });
    }, 5000);
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
        <span className="ml-1 capitalize">{status}</span>
      </Badge>
    );
  };

  const stats = {
    totalOrders: orders.length,
    pendingOrders: orders.filter(o => o.status === 'pending').length,
    totalRevenue: orders.filter(o => o.status === 'paid').reduce((sum, o) => sum + o.amount, 0),
    successRate: orders.length > 0 ? (orders.filter(o => o.status === 'paid').length / orders.length * 100).toFixed(1) : 0
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="animate-slide-up">
        <h1 className="text-3xl font-bold text-gray-900">Merchant Dashboard</h1>
        <p className="text-gray-600 mt-1">Monitor your orders and payments in real-time</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: 'Total Orders', value: stats.totalOrders, icon: ShoppingBag, color: 'text-blue-600' },
          { title: 'Pending Orders', value: stats.pendingOrders, icon: Clock, color: 'text-yellow-600' },
          { title: 'Total Revenue', value: `$${stats.totalRevenue.toFixed(2)}`, icon: DollarSign, color: 'text-ghala-green' },
          { title: 'Success Rate', value: `${stats.successRate}%`, icon: CheckCircle, color: 'text-ghala-green' },
        ].map((stat, index) => (
          <Card 
            key={stat.title} 
            className="hover:shadow-lg transition-all duration-300 hover:scale-105 animate-slide-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">{stat.title}</CardTitle>
              <stat.icon className={`h-5 w-5 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Orders */}
      <Card className="animate-slide-up" style={{ animationDelay: '400ms' }}>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <ShoppingBag className="h-5 w-5 text-ghala-green" />
            <span>Recent Orders</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {orders.map((order, index) => (
              <div 
                key={order.id} 
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200 animate-fade-in"
                style={{ animationDelay: `${(index + 5) * 100}ms` }}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-ghala-green bg-opacity-10 rounded-full flex items-center justify-center">
                    <ShoppingBag className="h-5 w-5 text-ghala-green" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{order.product}</p>
                    <p className="text-sm text-gray-500">
                      {order.createdAt.toLocaleDateString()} at {order.createdAt.toLocaleTimeString()}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="font-semibold text-gray-900">${order.amount.toFixed(2)}</span>
                  {getStatusBadge(order.status)}
                  {order.status === 'failed' && (
                    <Button
                      size="sm"
                      onClick={() => simulatePayment(order.id)}
                      className="bg-ghala-green hover:bg-ghala-green-dark text-white relative overflow-hidden group"
                    >
                      <span className="relative z-10">Retry Payment</span>
                      <div className="absolute inset-0 bg-white opacity-25 transform scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full"></div>
                    </Button>
                  )}
                  {order.status === 'pending' && (
                    <div className="text-sm text-gray-500 animate-pulse">Processing...</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
