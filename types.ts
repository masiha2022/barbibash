export enum Gender {
  Male = 'male',
  Female = 'female',
}

export interface BmiResult {
  bmi: number;
  category: string;
  categoryColor: string;
  healthyWeightRange: {
    min: number;
    max: number;
  };
  weightDifference: number;
  suggestion?: string;
}