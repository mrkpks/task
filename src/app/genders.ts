export interface Gender {
  key: string;
  value: string;
}

export const GENDERS: Gender[] = [
  { key: 'both', value: 'Male & Female' },
  { key: 'male', value: 'Male' },
  { key: 'female', value: 'Female' }
];
