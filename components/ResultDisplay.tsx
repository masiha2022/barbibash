import React from 'react';
import { BmiResult } from '../types';
import GaugeChart from './GaugeChart';
import InstagramIcon from './icons/InstagramIcon';
import SparkleIcon from './icons/SparkleIcon';

interface ResultDisplayProps {
    result: BmiResult;
    onReset: () => void;
    isLoadingSuggestion: boolean;
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({ result, onReset, isLoadingSuggestion }) => {
    
    const getWeightMessage = () => {
        if (result.category === 'وزن سالم') {
            return "شما در محدوده وزن سالم قرار دارید. به کار خوب خود ادامه دهید!";
        }
        if (result.category === 'کمبود وزن') {
            return `شما برای رسیدن به وزن سالم، بهتر است حدود ${result.weightDifference} کیلوگرم وزن اضافه کنید.`;
        }
        return `شما برای رسیدن به وزن سالم، بهتر است حدود ${result.weightDifference} کیلوگرم وزن کم کنید.`;
    };

    return (
        <div className="p-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-4 drop-shadow-lg">نتیجه شما</h2>
            
            <GaugeChart bmi={result.bmi} />

            <p className="text-6xl font-bold mt-4 drop-shadow-md">{result.bmi}</p>
            <p className={`text-2xl font-semibold ${result.categoryColor}`}>{result.category}</p>

            <div className="my-6 p-4 bg-white/10 rounded-xl space-y-2">
                <p className="text-lg">محدوده وزن سالم برای شما:</p>
                <p className="font-bold text-xl">{result.healthyWeightRange.min} کیلوگرم - {result.healthyWeightRange.max} کیلوگرم</p>
                <p className="mt-2 text-white/80">{getWeightMessage()}</p>
            </div>

            {/* AI Suggestion Box */}
            <div className="my-6 p-4 bg-purple-500/30 rounded-xl space-y-2 min-h-[80px] flex flex-col justify-center items-center">
                <div className="flex items-center gap-2">
                    <SparkleIcon className="w-6 h-6 text-yellow-300" />
                    <h3 className="font-bold text-lg">پیشنهاد هوشمند</h3>
                </div>
                {isLoadingSuggestion ? (
                    <p className="text-white/80 animate-pulse">در حال دریافت پیشنهاد...</p>
                ) : (
                    <p className="text-white/90">{result.suggestion || "امکان دریافت پیشنهاد وجود نداشت."}</p>
                )}
            </div>
            
            <p className="text-white/80 text-sm mb-6">این یک تخمین است. برای مشاوره شخصی با یک متخصص مشورت کنید.</p>
            
            <div className="space-y-4">
                 <a 
                    href="https://www.instagram.com/barbibash" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white font-bold py-4 px-4 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out"
                >
                    <InstagramIcon className="w-6 h-6" />
                    باربی باش در اینستاگرام
                </a>

                <button 
                    onClick={onReset} 
                    className="w-full bg-white/20 hover:bg-white/30 text-white font-bold py-3 rounded-xl transform hover:scale-105 transition-all duration-300 ease-in-out"
                >
                    محاسبه مجدد
                </button>
            </div>
        </div>
    );
};

export default ResultDisplay;