'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  CircleDollarSign,
  TrendingUp,
  TrendingDown,
  Clock,
  CheckCircle2,
  XCircle,
  Filter,
} from 'lucide-react';

const transactions = [
  {
    id: 1,
    type: 'deposit',
    amount: 5000,
    status: 'completed',
    date: '2024-03-20 14:30',
    method: 'UPI',
  },
  {
    id: 2,
    type: 'withdrawal',
    amount: 2000,
    status: 'pending',
    date: '2024-03-19 16:45',
    method: 'Bank Transfer',
  },
  {
    id: 3,
    type: 'deposit',
    amount: 3000,
    status: 'completed',
    date: '2024-03-18 09:15',
    method: 'Card',
  },
  {
    id: 4,
    type: 'withdrawal',
    amount: 1500,
    status: 'failed',
    date: '2024-03-17 11:20',
    method: 'UPI',
  },
];

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'completed':
      return <CheckCircle2 className="w-5 h-5 text-green-500" />;
    case 'pending':
      return <Clock className="w-5 h-5 text-yellow-500" />;
    case 'failed':
      return <XCircle className="w-5 h-5 text-red-500" />;
    default:
      return null;
  }
};

export default function WalletPage() {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Wallet Overview */}
        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="space-y-2">
                <p className="text-lg text-muted-foreground">Total Balance</p>
                <h1 className="text-4xl font-bold">₹25,000</h1>
              </div>
              <div className="flex gap-4">
                <Button size="lg" className="gap-2">
                  <CircleDollarSign className="w-5 h-5" />
                  Deposit
                </Button>
                <Button size="lg" variant="outline" className="gap-2">
                  <TrendingUp className="w-5 h-5" />
                  Withdraw
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0">
              <CardTitle className="text-sm font-medium">Total Deposited</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₹50,000</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0">
              <CardTitle className="text-sm font-medium">Total Withdrawn</CardTitle>
              <TrendingDown className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₹25,000</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0">
              <CardTitle className="text-sm font-medium">Pending Transactions</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2</div>
            </CardContent>
          </Card>
        </div>

        {/* Transactions */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Transaction History</CardTitle>
                <CardDescription>View all your deposits and withdrawals</CardDescription>
              </div>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="all" className="w-full">
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="deposits">Deposits</TabsTrigger>
                <TabsTrigger value="withdrawals">Withdrawals</TabsTrigger>
              </TabsList>
              <TabsContent value="all" className="mt-4">
                <div className="space-y-4">
                  {transactions.map((transaction) => (
                    <div
                      key={transaction.id}
                      className="flex items-center justify-between p-4 rounded-lg bg-accent/50"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          {transaction.type === 'deposit' ? (
                            <TrendingUp className="w-5 h-5" />
                          ) : (
                            <TrendingDown className="w-5 h-5" />
                          )}
                        </div>
                        <div>
                          <h4 className="font-medium capitalize">{transaction.type}</h4>
                          <p className="text-sm text-muted-foreground">{transaction.method}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">₹{transaction.amount}</p>
                        <div className="flex items-center gap-1 justify-end">
                          {getStatusIcon(transaction.status)}
                          <p className="text-sm capitalize">{transaction.status}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="deposits">
                <div className="space-y-4">
                  {transactions
                    .filter((t) => t.type === 'deposit')
                    .map((transaction) => (
                      <div
                        key={transaction.id}
                        className="flex items-center justify-between p-4 rounded-lg bg-accent/50"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                            <TrendingUp className="w-5 h-5" />
                          </div>
                          <div>
                            <h4 className="font-medium capitalize">{transaction.type}</h4>
                            <p className="text-sm text-muted-foreground">{transaction.method}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">₹{transaction.amount}</p>
                          <div className="flex items-center gap-1 justify-end">
                            {getStatusIcon(transaction.status)}
                            <p className="text-sm capitalize">{transaction.status}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </TabsContent>
              <TabsContent value="withdrawals">
                <div className="space-y-4">
                  {transactions
                    .filter((t) => t.type === 'withdrawal')
                    .map((transaction) => (
                      <div
                        key={transaction.id}
                        className="flex items-center justify-between p-4 rounded-lg bg-accent/50"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                            <TrendingDown className="w-5 h-5" />
                          </div>
                          <div>
                            <h4 className="font-medium capitalize">{transaction.type}</h4>
                            <p className="text-sm text-muted-foreground">{transaction.method}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">₹{transaction.amount}</p>
                          <div className="flex items-center gap-1 justify-end">
                            {getStatusIcon(transaction.status)}
                            <p className="text-sm capitalize">{transaction.status}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}