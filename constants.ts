import { DonationTier, ImpactStat, Program, TeamMember } from './types';

export const IMPACT_STATS: ImpactStat[] = [
  { label: "Children Engaged", value: 10000, suffix: "+", description: "Across grassroots & management" },
  { label: "Elite Athletes", value: 200, suffix: "+", description: "Under structured management" },
  { label: "Girls Participation", value: 40, suffix: "%", description: "Target across all programs" },
  { label: "Coaches Trained", value: 500, suffix: "+", description: "Professional development" }
];

export const DONATION_TIERS: DonationTier[] = [
  {
    id: 'kit',
    amount: 500,
    title: 'Starter Kit',
    description: 'Provide a basic sports kit (shoes/jersey) to a budding athlete.',
    impact: 'Equips 1 Child'
  },
  {
    id: 'training',
    amount: 2500,
    title: 'Monthly Training',
    description: 'Sponsor coaching, nutrition, and field access for one month.',
    impact: 'Supports 1 Athlete/Month'
  },
  {
    id: 'elite',
    amount: 10000,
    title: 'Elite Support',
    description: 'High-performance gear, sports science, and tournament fees.',
    impact: 'Elite Pathway Support'
  },
  {
    id: 'center',
    amount: 50000,
    title: 'Adopt a Center',
    description: 'Help maintain a grassroots training center for a month.',
    impact: 'Impacts 50+ Kids'
  }
];

export const PROGRAMS: Program[] = [
  {
    id: 'hockey',
    title: 'Hockey',
    category: 'Sport',
    shortDescription: "Honouring India's Legacy, Building Tomorrow's Champions.",
    longDescription: "Hockey builds speed, agility, and teamwork. We focus on Punjab and Odisha, providing equipment, astro-turf access, and goalkeeping coaching.",
    stats: [{ label: "Target", value: "5,000 Kids" }, { label: "Goal", value: "20 Centers" }],
    image: "https://picsum.photos/800/600?random=1"
  },
  {
    id: 'kabaddi',
    title: 'Kabaddi',
    category: 'Sport',
    shortDescription: "Strength, Grit and Indigenous Pride.",
    longDescription: "Focused on Haryana and Tamil Nadu. We provide safe mats to reduce injury, specialized strength conditioning, and pathways to the Pro Kabaddi League.",
    stats: [{ label: "Target", value: "3,000 Players" }, { label: "Goal", value: "40 Schools" }],
    image: "https://picsum.photos/800/600?random=2"
  },
  {
    id: 'football',
    title: 'Football',
    category: 'Sport',
    shortDescription: "Growing the Beautiful Game in India.",
    longDescription: "Developing endurance and teamwork in Manipur, Kerala, and Goa. We run academies, U-12 to U-16 leagues, and dedicated girls' teams.",
    stats: [{ label: "Target", value: "7,500 Kids" }, { label: "Goal", value: "50 Teams" }],
    image: "https://picsum.photos/800/600?random=3"
  },
  {
    id: 'girls-empowerment',
    title: "Women's Empowerment",
    category: 'Social',
    shortDescription: "Building agency, confidence, and self-belief.",
    longDescription: "Girls-only training leagues, self-defense workshops, and Women Coaches Fellowship. Addressing the drop-out rate of girls in sports after age 12.",
    stats: [{ label: "Goal", value: "40% Participation" }, { label: "Focus", value: "Safety" }],
    image: "https://picsum.photos/800/600?random=4"
  },
  {
    id: 'mental-health',
    title: 'Mental Health',
    category: 'Social',
    shortDescription: "Resilience beyond the field.",
    longDescription: "Counseling, peer support circles, and workshops on stress management. We treat mental fitness as equally important to physical fitness.",
    stats: [{ label: "Service", value: "Counseling" }, { label: "Focus", value: "Resilience" }],
    image: "https://picsum.photos/800/600?random=5"
  },
  {
    id: 'athlete-management',
    title: 'Athlete Management',
    category: 'Management',
    shortDescription: "Build a career, not just a performance.",
    longDescription: "Scouting, commercial representation, legal safeguarding, and career transition support for elite talent.",
    stats: [{ label: "Support", value: "360 Degree" }, { label: "Outcome", value: "Livelihood" }],
    image: "https://picsum.photos/800/600?random=6"
  }
];

export const TEAM: TeamMember[] = [
  { name: "Gautham P", role: "Founder", image: "https://picsum.photos/200/200?random=10" },
  { name: "Aditi S", role: "Head of Operations", image: "https://picsum.photos/200/200?random=11" },
  { name: "Rahul K", role: "Technical Director", image: "https://picsum.photos/200/200?random=12" },
];