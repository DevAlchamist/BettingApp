"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Info } from "lucide-react";

export default function ReportIssuesPage() {
  const [issueType, setIssueType] = useState("bug");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    console.log({ issueType, title, description });
    setSubmitted(true);

    // Reset fields after submission
    setTimeout(() => {
      setTitle("");
      setDescription("");
      setIssueType("bug");
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="p-6 max-w-3xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-bold">🛠️ Report an Issue</CardTitle>
          <p className="text-gray-500 text-sm">
            Facing any issues? Let us know and we'll get it fixed as soon as possible.
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Issue Type Selection */}
          <div>
            <Label className="flex items-center gap-2">
              Issue Type
              <Info className="w-4 h-4 text-gray-500" />
            </Label>
            <p className="text-xs text-gray-500">Select the category that best describes your issue.</p>
            <Select value={issueType} onValueChange={setIssueType}>
              <SelectTrigger>
                <SelectValue placeholder="Select issue type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="bug">🐞 Bug / Error</SelectItem>
                <SelectItem value="payment">💰 Payment Issue</SelectItem>
                <SelectItem value="ui">🎨 UI / UX Issue</SelectItem>
                <SelectItem value="feature">✨ Feature Request</SelectItem>
                <SelectItem value="other">📝 Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Issue Title */}
          <div>
            <Label htmlFor="title">Title</Label>
            <p className="text-xs text-gray-500">Provide a short and clear title for your issue.</p>
            <Input id="title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Example: Payment not processing" />
          </div>

          {/* Issue Description */}
          <div>
            <Label htmlFor="description">Description</Label>
            <p className="text-xs text-gray-500">Describe the issue in detail. Include steps to reproduce if possible.</p>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Example: When I try to make a payment using PayPal, it fails with error XYZ."
            />
          </div>

          {/* Submit Button */}
          <Button onClick={handleSubmit} disabled={!title || !description}>
            🚀 Submit Report
          </Button>
        </CardContent>
      </Card>

      {/* Success Message */}
      {submitted && (
        <Alert variant="default">
          <AlertTitle>✅ Issue Submitted!</AlertTitle>
          <AlertDescription>Thank you for reporting! Our team will review and take action.</AlertDescription>
        </Alert>
      )}
    </div>
  );
}
