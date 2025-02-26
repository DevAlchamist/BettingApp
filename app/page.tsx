import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CircleDollarSign, Gamepad2, TrendingUp, Users, Dice1 as Dice, Shield, Gift, MessageSquare } from 'lucide-react';
import Link from 'next/link';

const games = [
  {
    id: 'aviator',
    name: 'Aviator',
    description: 'Watch the multiplier grow and cash out before the plane flies away!',
    icon: TrendingUp,
    minBet: '₹10',
    maxWin: '100x',
    players: 1250,
  },
  {
    id: 'color',
    name: 'Color Game',
    description: 'Bet on Red, Green, or Blue and multiply your winnings!',
    icon: Users,
    minBet: '₹20',
    maxWin: '14x',
    players: 890,
  },
];

const winners = [
  { name: 'Alex S.', game: 'Aviator', amount: '₹15,000', time: '2m ago' },
  { name: 'Maria G.', game: 'Color Game', amount: '₹12,500', time: '5m ago' },
  { name: 'John D.', game: 'Aviator', amount: '₹10,000', time: '8m ago' },
];

const features = [
  {
    icon: Shield,
    title: 'Secure Platform',
    description: 'Industry-leading security measures to protect your funds',
  },
  {
    icon: Gift,
    title: 'Instant Rewards',
    description: 'Withdraw your winnings instantly to your account',
  },
  {
    icon: MessageSquare,
    title: '24/7 Support',
    description: 'Our team is always here to help you',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col items-center text-center space-y-8">
            <h1 className="text-5xl md:text-7xl font-extrabold">
              Bet, Play & Win Big!
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Experience the thrill of next-generation betting with instant payouts
              and provably fair games
            </p>
            <div className="flex gap-4 mt-8">
              <Link href="/signup">
                <Button size="lg" className="cta-button">
                  <CircleDollarSign className="w-5 h-5 mr-2" />
                  Start Playing
                </Button>
              </Link>
              <Link href="/games">
                <Button size="lg" variant="outline" className="outline-button">
                  <Gamepad2 className="w-5 h-5 mr-2" />
                  Browse Games
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Games */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <h2 className="section-title text-center">Popular Games</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {games.map((game) => (
              <Link key={game.id} href={`/game/${game.id}`}>
                <Card className="game-card">
                  <div className="feature-icon">
                    <game.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{game.name}</h3>
                  <p className="text-muted-foreground mb-4">{game.description}</p>
                  <div className="flex justify-between items-center">
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">Min Bet</p>
                      <p className="font-semibold">{game.minBet}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">Max Win</p>
                      <p className="font-semibold">{game.maxWin}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">Players</p>
                      <p className="font-semibold">{game.players}</p>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Live Winners */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <h2 className="section-title text-center">Live Winners</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {winners.map((winner, index) => (
              <div key={index} className="winner-card">
                <div className="avatar">
                  {winner.name.charAt(0)}
                </div>
                <div className="flex-1">
                  <p className="font-semibold">{winner.name}</p>
                  <p className="text-sm text-muted-foreground">
                    Won {winner.amount} on {winner.game}
                  </p>
                  <p className="text-xs text-muted-foreground">{winner.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <h2 className="section-title text-center">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {features.map((feature, index) => (
              <Card key={index} className="stat-card">
                <div className="feature-icon">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Winning?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of players and start winning today
          </p>
          <Link href="/signup">
            <Button size="lg" className="cta-button">
              Create Account
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}