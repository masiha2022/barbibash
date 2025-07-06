import React, { useState } from 'react';
import { Gender } from '../types';
import FemaleIcon from './icons/FemaleIcon';
import MaleIcon from './icons/MaleIcon';

interface InputFormProps {
    onCalculate: (gender: Gender, age: number, weight: number, height: number) => void;
}

const InputForm: React.FC<InputFormProps> = ({ onCalculate }) => {
    const [gender, setGender] = useState<Gender>(Gender.Female);
    const [age, setAge] = useState<string>('');
    const [weight, setWeight] = useState<string>('');
    const [height, setHeight] = useState<string>('');
    const [error, setError] = useState<string>('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const ageNum = parseInt(age, 10);
        const weightNum = parseFloat(weight);
        const heightNum = parseFloat(height);

        if (isNaN(ageNum) || isNaN(weightNum) || isNaN(heightNum) || ageNum <= 0 || weightNum <= 0 || heightNum <= 0) {
            setError('لطفاً برای تمام موارد، اعداد معتبر و مثبت وارد کنید.');
            return;
        }
        setError('');
        onCalculate(gender, ageNum, weightNum, heightNum);
    };

    const inputClasses = "w-full bg-white/20 placeholder-white/70 text-white text-center text-lg rounded-xl p-3 border-2 border-transparent focus:border-white focus:outline-none transition duration-300";

    return (
        <div className="p-8 space-y-6">
            <h1 className="text-3xl font-bold text-center text-white drop-shadow-lg">محاسبه‌گر سلامتی</h1>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label className="block text-center mb-2 font-medium text-white/90">جنسیت</label>
                    <div className="grid grid-cols-2 gap-4">
                        <button type="button" onClick={() => setGender(Gender.Female)} className={`p-4 rounded-xl flex flex-col items-center justify-center transition-all duration-300 ${gender === Gender.Female ? 'bg-white/30 ring-2 ring-white' : 'bg-white/10'}`}>
                            <FemaleIcon className="w-8 h-8 mb-2" />
                            <span className="font-semibold">زن</span>
                        </button>
                        <button type="button" onClick={() => setGender(Gender.Male)} className={`p-4 rounded-xl flex flex-col items-center justify-center transition-all duration-300 ${gender === Gender.Male ? 'bg-white/30 ring-2 ring-white' : 'bg-white/10'}`}>
                            <MaleIcon className="w-8 h-8 mb-2" />
                            <span className="font-semibold">مرد</span>
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                        <label htmlFor="age" className="block text-center mb-2 font-medium text-white/90">سن</label>
                        <input id="age" type="number" value={age} onChange={(e) => setAge(e.target.value)} placeholder="سال" className={inputClasses} />
                    </div>
                    <div>
                        <label htmlFor="weight" className="block text-center mb-2 font-medium text-white/90">وزن</label>
                        <input id="weight" type="number" value={weight} onChange={(e) => setWeight(e.target.value)} placeholder="کیلوگرم" className={inputClasses} />
                    </div>
                    <div>
                        <label htmlFor="height" className="block text-center mb-2 font-medium text-white/90">قد</label>
                        <input id="height" type="number" value={height} onChange={(e) => setHeight(e.target.value)} placeholder="سانتی‌متر" className={inputClasses} />
                    </div>
                </div>

                {error && <p className="text-center text-red-300 bg-red-900/50 p-2 rounded-lg">{error}</p>}

                <button type="submit" className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-4 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out">
                    محاسبه کن
                </button>
            </form>
        </div>
    );
};

export default InputForm;