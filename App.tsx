import React, { useState, useCallback } from 'react';
import InputForm from './components/InputForm';
import ResultDisplay from './components/ResultDisplay';
import { BmiResult, Gender } from './types';
import { GoogleGenAI } from '@google/genai';

const App: React.FC = () => {
    const [result, setResult] = useState<BmiResult | null>(null);
    const [isLoadingSuggestion, setIsLoadingSuggestion] = useState(false);

    const fetchSuggestion = useCallback(async (bmiCategory: string) => {
        setIsLoadingSuggestion(true);
        try {
            if (!process.env.API_KEY) {
                throw new Error("API key not found.");
            }
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
            const prompt = `شما یک مربی سلامتی و تناسب اندام هستید. برای فردی با شاخص توده بدنی در دسته '${bmiCategory}' یک توصیه کوتاه، مثبت و انگیزشی در حد یک جمله به زبان فارسی بنویسید. توصیه شما نباید جنبه مشاوره پزشکی داشته باشد.`;
            
            const response = await ai.models.generateContent({
                model: 'gemini-2.5-flash-preview-04-17',
                contents: prompt,
            });
            
            const suggestion = response.text;
            setResult(prevResult => prevResult ? { ...prevResult, suggestion } : null);

        } catch (error) {
            console.error("Error fetching suggestion:", error);
            // Optionally set an error message in the state to show the user
        } finally {
            setIsLoadingSuggestion(false);
        }
    }, []);

    const calculateBmi = useCallback((gender: Gender, age: number, weight: number, height: number) => {
        if (weight > 0 && height > 0) {
            const heightInMeters = height / 100;
            const bmi = weight / (heightInMeters * heightInMeters);

            let category = '';
            let categoryColor = '';
            let weightDifference = 0;

            const minHealthyWeight = 18.5 * heightInMeters * heightInMeters;
            const maxHealthyWeight = 24.9 * heightInMeters * heightInMeters;

            if (bmi < 18.5) {
                category = 'کمبود وزن';
                categoryColor = 'text-blue-400';
                weightDifference = minHealthyWeight - weight;
            } else if (bmi < 25) {
                category = 'وزن سالم';
                categoryColor = 'text-green-400';
                weightDifference = 0;
            } else if (bmi < 30) {
                category = 'اضافه وزن';
                categoryColor = 'text-yellow-400';
                weightDifference = weight - maxHealthyWeight;
            } else {
                category = 'چاقی';
                categoryColor = 'text-red-500';
                weightDifference = weight - maxHealthyWeight;
            }

            const newResult: BmiResult = {
                bmi: parseFloat(bmi.toFixed(1)),
                category,
                categoryColor,
                healthyWeightRange: {
                    min: parseFloat(minHealthyWeight.toFixed(1)),
                    max: parseFloat(maxHealthyWeight.toFixed(1)),
                },
                weightDifference: parseFloat(weightDifference.toFixed(1)),
            };

            setResult(newResult);
            fetchSuggestion(category);
        }
    }, [fetchSuggestion]);

    const handleReset = () => {
        setResult(null);
    };

    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-pink-300 via-purple-400 to-indigo-500 text-white p-4 flex flex-col items-center justify-center">
            <main className="w-full max-w-md mx-auto">
                <div className="bg-white/20 backdrop-blur-xl rounded-3xl shadow-2xl transition-all duration-500 ease-in-out">
                    {!result ? (
                        <InputForm onCalculate={calculateBmi} />
                    ) : (
                        <ResultDisplay result={result} onReset={handleReset} isLoadingSuggestion={isLoadingSuggestion} />
                    )}
                </div>
                 <footer className="text-center mt-4 text-white/70 text-sm">
                    <p>قدرت گرفته از هوش مصنوعی Gemini</p>
                </footer>
            </main>
        </div>
    );
};

export default App;