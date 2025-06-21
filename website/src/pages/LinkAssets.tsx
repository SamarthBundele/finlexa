
import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Plus, Trash2, Building, Landmark, CreditCard } from 'lucide-react';

const LinkAssets = () => {
  const [assets, setAssets] = useState([
    { id: 1, type: 'Bank Account', name: 'Chase Checking', balance: 15000, institution: 'JPMorgan Chase' },
    { id: 2, type: 'Investment Account', name: 'Fidelity 401k', balance: 85000, institution: 'Fidelity' }
  ]);

  const [newAsset, setNewAsset] = useState({
    type: '',
    name: '',
    institution: '',
    accountNumber: '',
    balance: ''
  });

  const assetTypes = [
    'Bank Account',
    'Investment Account',
    'Retirement Account',
    'Crypto Wallet',
    'Real Estate',
    'Insurance Policy',
    'Other'
  ];

  const handleAddAsset = (e: React.FormEvent) => {
    e.preventDefault();
    const asset = {
      id: Date.now(),
      type: newAsset.type,
      name: newAsset.name,
      balance: parseFloat(newAsset.balance) || 0,
      institution: newAsset.institution
    };
    setAssets([...assets, asset]);
    setNewAsset({ type: '', name: '', institution: '', accountNumber: '', balance: '' });
  };

  const removeAsset = (id: number) => {
    setAssets(assets.filter(asset => asset.id !== id));
  };

  const getAssetIcon = (type: string) => {
    switch (type) {
      case 'Bank Account':
        return <Landmark className="h-5 w-5" />;
      case 'Investment Account':
      case 'Retirement Account':
        return <Building className="h-5 w-5" />;
      default:
        return <CreditCard className="h-5 w-5" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Link Your Assets</h1>
          <p className="text-gray-600">Connect your financial accounts to get a complete view of your portfolio.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Add New Asset */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Plus className="h-5 w-5 mr-2 text-finlexa-blue" />
                Add New Asset
              </CardTitle>
              <CardDescription>
                Connect a new financial account or asset to your portfolio
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleAddAsset} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="assetType">Asset Type</Label>
                  <Select value={newAsset.type} onValueChange={(value) => setNewAsset({...newAsset, type: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select asset type" />
                    </SelectTrigger>
                    <SelectContent>
                      {assetTypes.map((type) => (
                        <SelectItem key={type} value={type}>{type}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="assetName">Asset Name</Label>
                  <Input
                    id="assetName"
                    placeholder="e.g., Chase Checking Account"
                    value={newAsset.name}
                    onChange={(e) => setNewAsset({...newAsset, name: e.target.value})}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="institution">Institution</Label>
                  <Input
                    id="institution"
                    placeholder="e.g., JPMorgan Chase"
                    value={newAsset.institution}
                    onChange={(e) => setNewAsset({...newAsset, institution: e.target.value})}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="accountNumber">Account Number (Last 4 digits)</Label>
                  <Input
                    id="accountNumber"
                    placeholder="****1234"
                    value={newAsset.accountNumber}
                    onChange={(e) => setNewAsset({...newAsset, accountNumber: e.target.value})}
                    maxLength={4}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="balance">Current Balance</Label>
                  <Input
                    id="balance"
                    type="number"
                    placeholder="0.00"
                    value={newAsset.balance}
                    onChange={(e) => setNewAsset({...newAsset, balance: e.target.value})}
                    step="0.01"
                    required
                  />
                </div>

                <Button type="submit" className="w-full finlexa-gradient text-white">
                  Add Asset
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Linked Assets */}
          <Card>
            <CardHeader>
              <CardTitle>Your Linked Assets</CardTitle>
              <CardDescription>
                Manage your connected financial accounts
              </CardDescription>
            </CardHeader>
            <CardContent>
              {assets.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  <Building className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>No assets linked yet</p>
                  <p className="text-sm">Add your first asset to get started</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {assets.map((asset) => (
                    <div key={asset.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="text-finlexa-blue">
                          {getAssetIcon(asset.type)}
                        </div>
                        <div>
                          <div className="font-semibold">{asset.name}</div>
                          <div className="text-sm text-gray-600">{asset.institution}</div>
                          <Badge variant="secondary" className="mt-1">
                            {asset.type}
                          </Badge>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="text-right">
                          <div className="font-semibold">${asset.balance.toLocaleString()}</div>
                          <div className="text-sm text-gray-600">Current Balance</div>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeAsset(asset.id)}
                          className="text-red-600 hover:text-red-700 hover:bg-red-50"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Security Information */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="text-finlexa-blue">Security & Privacy</CardTitle>
          </CardHeader>
          <CardContent className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-finlexa-lightblue rounded-full p-3 w-12 h-12 mx-auto mb-3">
                <Building className="h-6 w-6 text-finlexa-blue" />
              </div>
              <h3 className="font-semibold mb-2">Bank-Level Encryption</h3>
              <p className="text-sm text-gray-600">Your data is protected with 256-bit SSL encryption</p>
            </div>
            <div className="text-center">
              <div className="bg-finlexa-lightblue rounded-full p-3 w-12 h-12 mx-auto mb-3">
                <CreditCard className="h-6 w-6 text-finlexa-blue" />
              </div>
              <h3 className="font-semibold mb-2">Read-Only Access</h3>
              <p className="text-sm text-gray-600">We can only view your data, never make transactions</p>
            </div>
            <div className="text-center">
              <div className="bg-finlexa-lightblue rounded-full p-3 w-12 h-12 mx-auto mb-3">
                <Landmark className="h-6 w-6 text-finlexa-blue" />
              </div>
              <h3 className="font-semibold mb-2">Never Stored</h3>
              <p className="text-sm text-gray-600">Your credentials are never stored on our servers</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LinkAssets;
