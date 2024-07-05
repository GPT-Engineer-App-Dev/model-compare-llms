import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { GitCompare } from "lucide-react";

const ComparisonModal = () => {
  // This would typically come from a state management solution or props
  const selectedModels = [
    { id: 1, name: 'GPT-3', parameters: '175B', language: 'English', performance: 'High' },
    { id: 2, name: 'BERT', parameters: '340M', language: 'Multilingual', performance: 'Medium' },
  ];

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="fixed bottom-4 right-4">
          <GitCompare className="mr-2 h-4 w-4" />
          Compare Models
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>Model Comparison</DialogTitle>
          <DialogDescription>
            Compare the selected LLM models side by side.
          </DialogDescription>
        </DialogHeader>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Model</TableHead>
              <TableHead>Parameters</TableHead>
              <TableHead>Primary Language</TableHead>
              <TableHead>Performance</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {selectedModels.map((model) => (
              <TableRow key={model.id}>
                <TableCell>{model.name}</TableCell>
                <TableCell>{model.parameters}</TableCell>
                <TableCell>{model.language}</TableCell>
                <TableCell>{model.performance}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </DialogContent>
    </Dialog>
  );
};

export default ComparisonModal;