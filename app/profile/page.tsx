'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import {
  User,
  Mail,
  Phone,
  Shield,
  Key,
  LogOut,
  Copy,
  Award,
  Clock,
} from 'lucide-react';

const recentActivity = [
  {
    type: 'bet',
    game: 'Aviator',
    amount: 500,
    result: 'win',
    date: '2024-03-20 14:30',
  },
  {
    type: 'withdrawal',
    amount: 1000,
    status: 'completed',
    date: '2024-03-19 16:45',
  },
  {
    type: 'deposit',
    amount: 2000,
    status: 'completed',
    date: '2024-03-18 09:15',
  },
];

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Profile Header */}
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <Avatar className="w-24 h-24">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-2xl font-bold">John Doe</h1>
                <p className="text-muted-foreground">Member since March 2024</p>
                <div className="flex flex-wrap gap-2 mt-2 justify-center md:justify-start">
                  <Badge variant="secondary">Level 5</Badge>
                  <Badge variant="secondary">VIP Member</Badge>
                  <Badge className="bg-green-500">Verified</Badge>
                </div>
              </div>
              <Button variant="outline">Edit Profile</Button>
            </div>
          </CardContent>
        </Card>

        {/* Main Content */}
        <Tabs defaultValue="details" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="details">Account Details</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
            <TabsTrigger value="activity">Activity</TabsTrigger>
          </TabsList>

          <TabsContent value="details" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Full Name</Label>
                    <div className="flex">
                      <Input value="John Doe" readOnly />
                      <Button variant="ghost" size="icon" className="ml-2">
                        <User className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Email</Label>
                    <div className="flex">
                      <Input value="john@example.com" readOnly />
                      <Button variant="ghost" size="icon" className="ml-2">
                        <Mail className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Phone</Label>
                    <div className="flex">
                      <Input value="+1234567890" readOnly />
                      <Button variant="ghost" size="icon" className="ml-2">
                        <Phone className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Referral Code</Label>
                    <div className="flex">
                      <Input value="JOHN123" readOnly />
                      <Button variant="ghost" size="icon" className="ml-2">
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Statistics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 rounded-lg bg-accent/50 space-y-2">
                    <div className="flex items-center gap-2">
                      <Award className="w-5 h-5 text-primary" />
                      <span className="font-medium">Total Wins</span>
                    </div>
                    <p className="text-2xl font-bold">156</p>
                  </div>
                  <div className="p-4 rounded-lg bg-accent/50 space-y-2">
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-primary" />
                      <span className="font-medium">Play Time</span>
                    </div>
                    <p className="text-2xl font-bold">48h</p>
                  </div>
                  <div className="p-4 rounded-lg bg-accent/50 space-y-2">
                    <div className="flex items-center gap-2">
                      <Award className="w-5 h-5 text-primary" />
                      <span className="font-medium">Win Rate</span>
                    </div>
                    <p className="text-2xl font-bold">64%</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="security" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Security Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <Shield className="w-5 h-5" />
                      <span className="font-medium">Two-Factor Authentication</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Add an extra layer of security to your account
                    </p>
                  </div>
                  <Button variant="outline">Enable</Button>
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <Key className="w-5 h-5" />
                      <span className="font-medium">Change Password</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Update your password regularly
                    </p>
                  </div>
                  <Button variant="outline">Update</Button>
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <LogOut className="w-5 h-5" />
                      <span className="font-medium">Active Sessions</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Manage your active login sessions
                    </p>
                  </div>
                  <Button variant="outline">View All</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="activity" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 rounded-lg bg-accent/50"
                    >
                      <div>
                        <p className="font-medium capitalize">
                          {activity.type === 'bet'
                            ? `${activity.game} Game Bet`
                            : `${activity.type.charAt(0).toUpperCase()}${activity.type.slice(
                                1
                              )}`}
                        </p>
                        <p className="text-sm text-muted-foreground">{activity.date}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">₹{activity.amount}</p>
                        {activity.result && (
                          <p
                            className={`text-sm ${
                              activity.result === 'win'
                                ? 'text-green-500'
                                : 'text-red-500'
                            }`}
                          >
                            {activity.result.toUpperCase()}
                          </p>
                        )}
                        {activity.status && (
                          <p className="text-sm text-muted-foreground capitalize">
                            {activity.status}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}