import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Pagination } from "@/components/ui/pagination";

const LLMDirectory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [modelSize, setModelSize] = useState([0, 100]);
  const [language, setLanguage] = useState('');
  const [selectedModels, setSelectedModels] = useState([]);

  // Mock data for LLM models
  const mockModels = [
    { id: 1, name: 'GPT-3', description: 'Large language model by OpenAI', tags: ['Proprietary', 'Text Generation'], size: 175, language: 'English' },
    { id: 2, name: 'BERT', description: 'Bidirectional Encoder Representations from Transformers', tags: ['Open Source', 'NLP'], size: 340, language: 'Multilingual' },
    // Add more mock models here
  ];

  const handleCategoryChange = (category) => {
    setSelectedCategories(prev => 
      prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]
    );
  };

  const handleCompare = (model) => {
    setSelectedModels(prev => [...prev, model]);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Explore LLM Models</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="col-span-1">
          <Input
            placeholder="Search models..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="mb-4"
          />
          <div className="space-y-2 mb-4">
            <Checkbox id="openSource" onCheckedChange={() => handleCategoryChange('Open Source')} />
            <label htmlFor="openSource" className="ml-2">Open Source</label>
          </div>
          <div className="space-y-2 mb-4">
            <Checkbox id="proprietary" onCheckedChange={() => handleCategoryChange('Proprietary')} />
            <label htmlFor="proprietary" className="ml-2">Proprietary</label>
          </div>
          <Slider
            defaultValue={[0, 100]}
            max={100}
            step={1}
            value={modelSize}
            onValueChange={setModelSize}
            className="mb-4"
          />
          <Select onValueChange={setLanguage}>
            <SelectTrigger>
              <SelectValue placeholder="Select language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="english">English</SelectItem>
              <SelectItem value="multilingual">Multilingual</SelectItem>
            </SelectContent>
          </Select>
          <div className="mt-4">
            <h3 className="font-semibold mb-2">Selected for Comparison:</h3>
            {selectedModels.map(model => (
              <div key={model.id} className="mb-1">{model.name}</div>
            ))}
            {selectedModels.length > 0 && (
              <Button variant="outline" onClick={() => setSelectedModels([])} className="mt-2">
                Clear Selection
              </Button>
            )}
          </div>
        </div>
        <div className="col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {mockModels.map(model => (
              <Card key={model.id}>
                <CardHeader>
                  <CardTitle>{model.name}</CardTitle>
                  <CardDescription>{model.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  {model.tags.map(tag => (
                    <Badge key={tag} variant="secondary" className="mr-1">{tag}</Badge>
                  ))}
                </CardContent>
                <CardFooter>
                  <Button onClick={() => handleCompare(model)}>Compare</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <Pagination className="mt-4" />
        </div>
      </div>
    </div>
  );
};

export default LLMDirectory;