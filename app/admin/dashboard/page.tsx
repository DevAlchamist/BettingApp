"use client";
import { Card, CardContent } from "@/components/ui/card";
import {
  LineChart,
  BarChart,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Line,
  Bar,
  ResponsiveContainer,
} from "recharts";
import { Users, DollarSign, ChartLine, CheckCircle } from "lucide-react";

const userGrowthData = [
  { month: "Jan", users: 200 },
  { month: "Feb", users: 400 },
  { month: "Mar", users: 600 },
  { month: "Apr", users: 800 },
  { month: "May", users: 1000 },
  { month: "Jun", users: 1300 },
];

const bettingTrendsData = [
  { month: "Jan", bets: 500 },
  { month: "Feb", bets: 700 },
  { month: "Mar", bets: 900 },
  { month: "Apr", bets: 1200 },
  { month: "May", bets: 1500 },
  { month: "Jun", bets: 1800 },
];

const Dashboard = () => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="section-title">Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="stat-card">
          <CardContent className="flex items-center gap-4">
            <Users className="h-8 w-8" />
            <div>
              <p className="text-muted-foreground text-sm">Total Users</p>
              <h3 className="text-2xl font-bold">1,245</h3>
            </div>
          </CardContent>
        </Card>

        <Card className="stat-card">
          <CardContent className="flex items-center gap-4">
            <ChartLine className="h-8 w-8" />
            <div>
              <p className="text-muted-foreground text-sm">Total Bets</p>
              <h3 className="text-2xl font-bold">8,420</h3>
            </div>
          </CardContent>
        </Card>

        <Card className="stat-card">
          <CardContent className="flex items-center gap-4">
            <DollarSign className="h-8 w-8" />
            <div>
              <p className="text-muted-foreground text-sm">Total Revenue</p>
              <h3 className="text-2xl font-bold">$25,340</h3>
            </div>
          </CardContent>
        </Card>

        <Card className="stat-card">
          <CardContent className="flex items-center gap-4">
            <CheckCircle className="h-8 w-8" />
            <div>
              <p className="text-muted-foreground text-sm">
                Successful Transactions
              </p>
              <h3 className="text-2xl font-bold">6,789</h3>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="game-card">
          <CardContent>
            <h2 className="text-xl font-bold mb-4">User Engagements</h2>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={userGrowthData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="users" stroke="#4F46E5" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="game-card">
          <CardContent>
            <h2 className="text-xl font-bold mb-4">Betting Trends</h2>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={bettingTrendsData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="bets" fill="#10B981" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
