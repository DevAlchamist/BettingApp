'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TrendingUp, Users, Dice1 as Dice, Car as Cards, Gamepad2 } from 'lucide-react';
import Link from 'next/link';

const games = [
  {
    id: 'aviator',
    name: 'Aviator',
    description: 'Watch the multiplier grow and cash out before the plane flies away!',
    icon: TrendingUp,
    players: 1250,
    maxWin: '100x',
  },
  {
    id: 'color',
    name: 'Color Game',
    description: 'Bet on Red, Green, or Blue and multiply your winnings!',
    icon: Users,
    players: 890,
    maxWin: '3x',
  },
  {
    id: 'dice',
    name: 'Dice Roll',
    description: 'Predict the outcome of the dice roll and win big!',
    icon: Dice,
    players: 645,
    maxWin: '50x',
  },
  {
    id: 'blackjack',
    name: 'Blackjack',
    description: 'Classic card game against the dealer. Get closest to 21!',
    icon: Cards,
    players: 432,
    maxWin: '3x',
  },
];

export default function GamesPage() {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold flex items-center gap-2">
              <Gamepad2 className="w-8 h-8" />
              Available Games
            </h1>
            <p className="text-muted-foreground mt-1">Choose from our selection of exciting games</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {games.map((game) => (
            <Link key={game.id} href={`/game/${game.id}`}>
              <Card className="hover:bg-accent/50 transition-colors cursor-pointer h-full">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <game.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{game.name}</CardTitle>
                  <CardDescription>{game.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">Live Players</p>
                      <p className="font-medium">{game.players}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">Max Win</p>
                      <p className="font-medium">{game.maxWin}</p>
                    </div>
                    <Button>Play Now</Button>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}