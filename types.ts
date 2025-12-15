export interface Program {
  id: string;
  title: string;
  category: 'Sport' | 'Social' | 'Management';
  shortDescription: string;
  longDescription: string;
  stats: { label: string; value: string }[];
  image: string;
}

export interface DonationTier {
  id: string;
  amount: number;
  title: string;
  description: string;
  impact: string;
}

export interface ImpactStat {
  label: string;
  value: number;
  suffix: string;
  description: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export enum FormType {
  DONATION = 'DONATION',
  CSR = 'CSR',
  ATHLETE = 'ATHLETE',
  VOLUNTEER = 'VOLUNTEER'
}