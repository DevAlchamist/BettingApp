'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { TrendingUp, History, Users } from 'lucide-react';

const recentResults = [
  { multiplier: '2.5x', hash: '8f3a...' },
  { multiplier: '1.8x', hash: '2b7c...' },
  { multiplier: '3.2x', hash: '9e4d...' },
  { multiplier: '1.5x', hash: '6a1f...' },
];

const liveBets = [
  { user: 'Player123', amount: 500, cashout: '2.5x' },
  { user: 'Winner88', amount: 1000, cashout: '1.8x' },
  { user: 'BetMaster', amount: 750, cashout: null },
];

export default function AviatorGame() {
  const [betAmount, setBetAmount] = useState(100);
  const [autoCashout, setAutoCashout] = useState(false);
  const [cashoutMultiplier, setCashoutMultiplier] = useState(2);
  const [isFlying, setIsFlying] = useState(false);
  const [currentMultiplier, setCurrentMultiplier] = useState(1);

  useEffect(() => {
    if (isFlying) {
      const interval = setInterval(() => {
        setCurrentMultiplier((prev) => {
          const newValue = prev + 0.1;
          if (newValue > 10 || Math.random() < 0.1) {
            setIsFlying(false);
            clearInterval(interval);
            return 1;
          }
          return newValue;
        });
      }, 100);
      return () => clearInterval(interval);
    }
  }, [isFlying]);

  const handleBet = () => {
    if (!isFlying) {
      setIsFlying(true);
      setCurrentMultiplier(1);
    }
  };

  const handleCashout = () => {
    if (isFlying) {
      setIsFlying(false);
      // Handle winnings calculation here
    }
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Game Display */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="bg-black/50">
              <CardContent className="p-6 h-[400px] relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  {isFlying ? (
                    <div className="text-6xl font-bold text-primary animate-pulse">
                      {currentMultiplier.toFixed(1)}x
                    </div>
                  ) : (
                    <div className="text-2xl text-muted-foreground">
                      Ready to fly
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Betting Controls */}
            <Card>
              <CardContent className="p-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <Label>Bet Amount</Label>
                    <div className="flex gap-2">
                      <Input
                        type="number"
                        value={betAmount}
                        onChange={(e) => setBetAmount(Number(e.target.value))}
                        min={10}
                        max={10000}
                      />
                      <Button variant="outline" onClick={() => setBetAmount(betAmount * 2)}>
                        2x
                      </Button>
                      <Button variant="outline" onClick={() => setBetAmount(Math.max(10, betAmount / 2))}>
                        ½
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Label>Auto Cashout</Label>
                      <Switch
                        checked={autoCashout}
                        onCheckedChange={setAutoCashout}
                      />
                    </div>
                    {autoCashout && (
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm">At multiplier</span>
                          <span className="text-sm font-medium">{cashoutMultiplier}x</span>
                        </div>
                        <Slider
                          value={[cashoutMultiplier]}
                          onValueChange={([value]) => setCashoutMultiplier(value)}
                          min={1.1}
                          max={10}
                          step={0.1}
                        />
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex gap-4">
                  <Button
                    size="lg"
                    className="w-full"
                    onClick={handleBet}
                    disabled={isFlying}
                  >
                    Place Bet
                  </Button>
                  <Button
                    size="lg"
                    variant="secondary"
                    className="w-full"
                    onClick={handleCashout}
                    disabled={!isFlying}
                  >
                    Cash Out
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Live Bets */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Live Bets
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {liveBets.map((bet, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">{bet.user}</p>
                        <p className="text-sm text-muted-foreground">₹{bet.amount}</p>
                      </div>
                      {bet.cashout ? (
                        <span className="text-green-500">{bet.cashout}</span>
                      ) : (
                        <span className="text-primary animate-pulse">Betting</span>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Results */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <History className="w-5 h-5" />
                  Recent Results
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentResults.map((result, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="font-medium">{result.multiplier}</span>
                      <span className="text-sm text-muted-foreground">{result.hash}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}