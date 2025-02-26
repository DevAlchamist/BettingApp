"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CheckCircle, Pencil, Send } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface Report {
  id: string;
  user: string;
  type: string;
  status: "Pending" | "In Progress" | "Resolved";
  date: string;
  description: string;
}

const reportsData: Report[] = [
  {
    id: "RPT-001",
    user: "John Doe",
    type: "Bug",
    status: "Pending",
    date: "2024-02-25",
    description:
      "The submit button does not respond after clicking. Users are unable to complete their actions, causing frustration.",
  },
  {
    id: "RPT-002",
    user: "Jane Smith",
    type: "Payment Issue",
    status: "In Progress",
    date: "2024-02-24",
    description:
      "User attempted to make a payment but was charged twice. Requires investigation and refund process initiation.",
  },
  {
    id: "RPT-003",
    user: "Alice Brown",
    type: "UI Issue",
    status: "Resolved",
    date: "2024-02-23",
    description:
      "The navigation bar does not collapse on mobile screens, making it hard to use the site on smaller devices.",
  },
];

export default function ReportsPage() {
  const [reports, setReports] = useState<Report[]>(reportsData);
  const [filterStatus, setFilterStatus] = useState<string>("all");
  const [showSuccess, setShowSuccess] = useState<boolean>(false);
  const [selectedReport, setSelectedReport] = useState<Report | null>(null);
  const [emailSentStatus, setEmailSentStatus] = useState<{
    [key: string]: boolean;
  }>({});

  const handleResolve = (id: string) => {
    setReports((prevReports) =>
      prevReports.map((report) =>
        report.id === id ? { ...report, status: "Resolved" } : report
      )
    );
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const handleEditClick = (report: Report) => {
    setSelectedReport(report);
  };

  const handleSendEmail = (id: string) => {
    setEmailSentStatus((prev) => ({ ...prev, [id]: true }));
    setTimeout(() => {
      setEmailSentStatus((prev) => ({ ...prev, [id]: false }));
    }, 3000);
  };

  const filteredReports =
    filterStatus === "all"
      ? reports
      : reports.filter((report) => report.status === filterStatus);

  return (
    <div className="p-6 w-full mx-auto space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-bold">📊 User Reports</CardTitle>
          <p className="text-gray-500 text-sm">
            Manage and resolve user reports.
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-4">
            <label className="text-gray-600 text-sm">Filter by Status:</label>
            <Select value={filterStatus} onValueChange={setFilterStatus}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="Pending">Pending</SelectItem>
                <SelectItem value="In Progress">In Progress</SelectItem>
                <SelectItem value="Resolved">Resolved</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>User</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredReports.map((report) => (
                <TableRow key={report.id}>
                  <TableCell>{report.id}</TableCell>
                  <TableCell>{report.user}</TableCell>
                  <TableCell>{report.type}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        report.status === "Resolved" ? "secondary" : "default"
                      }
                    >
                      {report.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{report.date}</TableCell>
                  <TableCell className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleEditClick(report)}
                    >
                      <Pencil className="w-4 h-4 mr-1" /> View
                    </Button>
                    <Button
                      size="sm"
                      variant={
                        emailSentStatus[report.id] ? "secondary" : "default"
                      }
                      onClick={() => handleSendEmail(report.id)}
                      disabled={emailSentStatus[report.id]}
                    >
                      <Send className="w-4 h-4 mr-1" />
                      {emailSentStatus[report.id]
                        ? "Email Sent ✅"
                        : "Send Email"}
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {showSuccess && (
        <Alert variant="default">
          <AlertTitle>✅ Report Resolved!</AlertTitle>
          <AlertDescription>
            The issue has been marked as resolved.
          </AlertDescription>
        </Alert>
      )}

      {selectedReport && (
        <Dialog open={true} onOpenChange={() => setSelectedReport(null)}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Report Details</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <Input value={selectedReport.user} disabled className="" />
              <Input value={selectedReport.type} disabled className="" />
              <div className="border p-3 rounded-md ">
                <p className="text-sm text-gray-600 font-semibold">
                  Issue Description:
                </p>
                <p className="text-gray-800">{selectedReport.description}</p>
              </div>
            </div>
            <DialogFooter>
              <Button onClick={() => setSelectedReport(null)}>Close</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
