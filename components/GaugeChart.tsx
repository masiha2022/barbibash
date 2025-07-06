import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

interface GaugeChartProps {
    bmi: number;
}

const GAUGE_MIN_BMI = 15;
const GAUGE_MAX_BMI = 40;
const GAUGE_RANGE = GAUGE_MAX_BMI - GAUGE_MIN_BMI;

const data = [
    { name: 'Underweight', value: 3.5, color: '#3b82f6' }, // 15 - 18.5
    { name: 'Healthy', value: 6.5, color: '#22c55e' }, // 18.5 - 25
    { name: 'Overweight', value: 5, color: '#facc15' },   // 25 - 30
    { name: 'Obese', value: 10, color: '#ef4444' },     // 30 - 40
];

const Needle: React.FC<any> = ({ cx, cy, radius, angle }) => {
    const length = radius * 0.8;
    const x1 = cx;
    const y1 = cy;
    const x2 = cx + length * Math.cos(-angle * Math.PI / 180);
    const y2 = cy + length * Math.sin(-angle * Math.PI / 180);
  
    return (
        <g>
            <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="white" strokeWidth="3" strokeLinecap="round" />
            <circle cx={cx} cy={cy} r="6" fill="white" stroke="none" />
        </g>
    );
};


const GaugeChart: React.FC<GaugeChartProps> = ({ bmi }) => {
    const clampedBmi = Math.max(GAUGE_MIN_BMI, Math.min(GAUGE_MAX_BMI, bmi));
    const angle = 180 * (1 - (clampedBmi - GAUGE_MIN_BMI) / GAUGE_RANGE);

    return (
        <div style={{ width: '100%', height: 150 }}>
            <ResponsiveContainer>
                <PieChart>
                    <Pie
                        data={data}
                        dataKey="value"
                        startAngle={180}
                        endAngle={0}
                        innerRadius="60%"
                        outerRadius="100%"
                        cy="100%"
                        paddingAngle={2}
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} stroke={entry.color} />
                        ))}
                    </Pie>
                    <Needle angle={angle} />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};

export default GaugeChart;
