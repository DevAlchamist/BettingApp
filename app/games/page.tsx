'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TrendingUp, Users, Dice1 as Dice, Car as Cards, Gamepad2, ShieldCheck, Clock, DollarSign } from 'lucide-react';
import Link from 'next/link';

const games = [
  {
    id: 'aviator',
    name: 'Aviator',
    description: 'A high-risk, high-reward multiplier game where timing is everything! Cash out before the plane flies away.',
    icon: TrendingUp,
    players: 1250,
    maxWin: '100x',
    difficulty: 'High',
    strategy: 'Watch previous rounds to estimate multipliers and exit at the right moment.',
  },
  {
    id: 'color',
    name: 'Color Game',
    description: 'Simple and fun! Bet on Red, Green, or Blue to multiply your winnings based on probability.',
    icon: Users,
    players: 890,
    maxWin: '3x',
    difficulty: 'Low',
    strategy: 'Analyze past trends and place strategic bets based on probability distribution.',
  },
  {
    id: 'dice',
    name: 'Dice Roll',
    description: 'Predict the outcome of a six-sided dice roll. Higher risks mean higher rewards!',
    icon: Dice,
    players: 645,
    maxWin: '50x',
    difficulty: 'Medium',
    strategy: 'Use probability analysis to balance risk and reward on higher multiplier bets.',
  },
  {
    id: 'blackjack',
    name: 'Blackjack',
    description: 'Classic 21-point card game. Play against the dealer and aim for the perfect hand!',
    icon: Cards,
    players: 432,
    maxWin: '3x',
    difficulty: 'Medium',
    strategy: 'Use basic Blackjack strategy (hit, stand, double down) for the best odds against the dealer.',
  },
];

const benefits = [
  {
    icon: ShieldCheck,
    title: 'Safe & Secure',
    description: 'We prioritize security with fair gameplay and encrypted transactions.',
  },
  {
    icon: Clock,
    title: 'Instant Games',
    description: 'No waiting! Start playing instantly with zero lag or interruptions.',
  },
  {
    icon: DollarSign,
    title: 'Fast Payouts',
    description: 'Withdraw your winnings quickly with our hassle-free process.',
  },
];

export default function GamesPage() {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* 🎮 Page Title */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold flex items-center gap-2">
              <Gamepad2 className="w-8 h-8" />
              Available Games
            </h1>
            <p className="text-muted-foreground mt-1">
              Explore our diverse selection of games, each with its own unique challenges and rewards.
            </p>
          </div>
        </div>

        {/* 🎲 Game Cards */}
        <div className="grid grid-cols-1 gap-6">
          {games.map((game) => (
            <Link key={game.id} href={`/game/${game.id}`}>
              <Card className="hover:bg-accent/50 transition-all cursor-pointer flex items-center gap-6 p-4 md:p-6">
                {/* Game Icon */}
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-lg bg-primary/10 flex items-center justify-center">
                  <game.icon className="w-10 h-10 text-primary" />
                </div>

                {/* Game Information */}
                <div className="flex-1">
                  <CardHeader className="p-0">
                    <CardTitle className="text-xl">{game.name}</CardTitle>
                    <CardDescription>{game.description}</CardDescription>
                  </CardHeader>

                  {/* Game Details */}
                  <CardContent className="p-0 mt-3">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Live Players</p>
                        <p className="font-medium">{game.players}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Max Win</p>
                        <p className="font-medium">{game.maxWin}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Difficulty</p>
                        <p className="font-medium">{game.difficulty}</p>
                      </div>
                    </div>

                    {/* Strategy */}
                    <p className="text-sm text-muted-foreground mt-2">
                      <strong>Strategy:</strong> {game.strategy}
                    </p>
                  </CardContent>
                </div>

                {/* Play Button */}
                <Button className="ml-auto">Play Now</Button>
              </Card>
            </Link>
          ))}
        </div>

        {/* 📖 How to Play Section */}
        <div className="bg-muted rounded-xl p-6 md:p-10">
          <h2 className="text-2xl font-bold">How to Play</h2>
          <p className="text-muted-foreground mt-2">New here? Follow these simple steps to get started:</p>
          <ul className="list-disc list-inside mt-4 space-y-2 text-muted-foreground">
            <li>📌 Choose a game from the list above.</li>
            <li>📝 Read the game rules and strategies.</li>
            <li>💰 Place your bets wisely.</li>
            <li>🎉 Enjoy and cash out your winnings!</li>
          </ul>
        </div>

        {/* 💎 Why Choose Us? Section */}
        <div>
          <h2 className="text-2xl font-bold text-center">Why Choose Us?</h2>
          <p className="text-muted-foreground text-center mt-1">Experience the best online gaming platform with these benefits:</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-6 flex flex-col items-center text-center">
                <benefit.icon className="w-10 h-10 text-primary" />
                <CardTitle className="mt-4">{benefit.title}</CardTitle>
                <CardDescription className="mt-1">{benefit.description}</CardDescription>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
