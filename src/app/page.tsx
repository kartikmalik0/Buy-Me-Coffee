'use client'

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Rocket, Star, Fuel, DollarSign } from 'lucide-react';

export default function Home() {
  const [fuel, setFuel] = useState('');
  const [rocketHeight, setRocketHeight] = useState(0);

  useEffect(() => {
    setRocketHeight(Math.min(parseInt(fuel) * 2, 100));
  }, [fuel]);

  const handleFuelClick = (value: number) => {
    setFuel(value.toString());
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 via-purple-900 to-pink-800 py-12 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12 animate-fade-in">
          <div className="relative w-40 h-40 mx-auto mb-6">
            <div className="absolute inset-0 bg-blue-500 rounded-full animate-pulse opacity-50"></div>
            <Rocket className="relative z-10 w-full h-full text-white animate-bounce" />
          </div>
          <h1 className="text-6xl font-extrabold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-400">Fuel My Rocket</h1>
          <p className="text-xl text-blue-200">Help me reach the stars, one gallon at a time!</p>
        </header>

        <main className="space-y-8">
          <div className="bg-white bg-opacity-10 backdrop-blur-lg shadow-xl rounded-2xl p-8 animate-slide-up">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="w-full md:w-2/3 space-y-6">
                <h2 className="text-3xl font-bold mb-6 text-blue-300">Choose Your Fuel</h2>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {[5, 10, 20].map((fuelAmount) => (
                    <Button
                      key={fuelAmount}
                      variant="outline"
                      className={`h-24 flex flex-col items-center justify-center ${fuel === fuelAmount.toString() ? 'bg-blue-600' : 'bg-blue-900'
                        } hover:bg-blue-700 border-blue-500 text-white transition-all duration-300 ease-in-out transform hover:scale-105`}
                      onClick={() => handleFuelClick(fuelAmount)}
                    >
                      <Fuel className="w-8 h-8 mb-2" />
                      <span className="text-lg font-semibold">${fuelAmount}</span>
                    </Button>
                  ))}
                </div>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="custom-fuel" className="text-blue-300 text-lg font-semibold">Custom Fuel Amount</Label>
                    <div className="mt-1 relative">
                      <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400" />
                      <Input
                        type="number"
                        id="custom-fuel"
                        placeholder="Enter amount"
                        min="1"
                        step="1"
                        className="pl-10 text-lg bg-blue-900 border-blue-700 text-white placeholder-blue-300"
                        value={fuel}
                        onChange={(e) => setFuel(e.target.value)}
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="name" className="text-blue-300">Astronaut Name (optional)</Label>
                    <Input type="text" id="name" placeholder="Your space name" className="mt-1 bg-blue-900 border-blue-700 text-white placeholder-blue-300" />
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-blue-300">Mission Log (optional)</Label>
                    <Textarea id="message" placeholder="Leave a message for the cosmos..." className="mt-1 bg-blue-900 border-blue-700 text-white placeholder-blue-300" />
                  </div>
                </div>
                <Button className="w-full mt-6 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white text-lg py-6">
                  Launch Support
                </Button>
              </div>
              <div className="w-full md:w-1/3 flex flex-col items-center justify-end">
                <div className="w-full h-80 bg-gradient-to-b from-transparent to-blue-900 rounded-full relative overflow-hidden">
                  <div
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 transition-all duration-1000 ease-in-out"
                    style={{ height: `${rocketHeight}%` }}
                  >
                    <Rocket className="w-20 h-20 text-white" />
                    <div className="w-8 h-32 bg-gradient-to-b from-orange-500 to-yellow-500 rounded-full absolute bottom-0 left-1/2 transform -translate-x-1/2" />
                  </div>
                </div>
                <p className="text-xl font-bold mt-4 text-blue-300">Fuel Level: {rocketHeight}%</p>
              </div>
            </div>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-lg shadow-xl rounded-2xl p-8 animate-slide-up">
            <h2 className="text-3xl font-bold mb-6 text-blue-300">Star Navigators</h2>
            <ul className="space-y-4">
              {[
                { name: 'Cosmic Chris', amount: 15, message: 'To infinity and beyond!' },
                { name: 'Stellar Sarah', amount: 25, message: 'Your projects are out of this world!' },
                { name: 'Anon Astronaut', amount: 10, message: 'Keep reaching for the stars!' },
              ].map((supporter, index) => (
                <li key={index} className="flex items-start bg-blue-900 bg-opacity-50 rounded-lg p-4 transition-all duration-300 ease-in-out hover:bg-opacity-70">
                  <Star className="w-5 h-5 mr-3 text-yellow-400 mt-1 animate-pulse" />
                  <div>
                    <p className="font-semibold text-blue-200">
                      {supporter.name} <span className="font-normal text-blue-300">fueled ${supporter.amount}</span>
                    </p>
                    <p className="text-sm text-blue-400 mt-1">{supporter.message}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </main>
      </div>
    </div>
  );
}