'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Edit, Trash, X } from 'lucide-react';

const demoBets = [
  { id: 1, user: 'John Doe', amount: 100, odds: '2.5', status: 'Won', betTime: '2024-02-20 14:30' },
  { id: 2, user: 'Jane Smith', amount: 50, odds: '1.8', status: 'Lost', betTime: '2024-02-21 16:15' },
  { id: 3, user: 'Alice Brown', amount: 200, odds: '3.2', status: 'Pending', betTime: '2024-02-22 18:00' },
  { id: 4, user: 'Bob White', amount: 75, odds: '2.1', status: 'Won', betTime: '2024-02-23 20:45' },
];

type Bet = {
  id: number;
  user: string;
  amount: number;
  odds: string;
  status: string;
  betTime: string;
};

export default function BetsPage() {
  const [bets, setBets] = useState<Bet[]>(demoBets);
  const [selectedBet, setSelectedBet] = useState<Bet | null>(null);

  const handleEdit = (id: number, field: keyof Bet, value: string | number) => {
    setBets((prevBets) =>
      prevBets.map((bet) => (bet.id === id ? { ...bet, [field]: value } : bet))
    );
  };

  return (
    <div className="p-6">
      <Card>
        <CardHeader>
          <CardTitle>Bets</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>User</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Odds</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {bets.map((bet) => (
                <TableRow key={bet.id}>
                  <TableCell>{bet.user}</TableCell>
                  <TableCell>${bet.amount}</TableCell>
                  <TableCell>{bet.odds}</TableCell>
                  <TableCell>{bet.status}</TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm" className="mr-2" onClick={() => setSelectedBet(bet)}>
                      <Edit className="w-4 h-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Edit Bet Modal */}
      {selectedBet && (
        <Dialog open={!!selectedBet} onOpenChange={() => setSelectedBet(null)}>
          <DialogContent className="p-6">
            <DialogHeader>
              <DialogTitle>Edit Bet</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <Input
                value={selectedBet.user}
                onChange={(e) => handleEdit(selectedBet.id, 'user', e.target.value)}
                placeholder="User Name"
              />
              <Input
                type="number"
                value={selectedBet.amount}
                onChange={(e) => handleEdit(selectedBet.id, 'amount', Number(e.target.value))}
                placeholder="Bet Amount"
              />
              <Input
                type="text"
                value={selectedBet.betTime}
                onChange={(e) => handleEdit(selectedBet.id, 'betTime', e.target.value)}
                placeholder="Bet Time"
              />
              <p><strong>Odds:</strong> {selectedBet.odds} (Uneditable)</p>
              <p><strong>Status:</strong> {selectedBet.status} (Uneditable)</p>
            </div>
            <DialogFooter className="flex justify-end">
              <Button variant="outline" onClick={() => setSelectedBet(null)}>
                <X className="w-4 h-4 mr-2" /> Close
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
