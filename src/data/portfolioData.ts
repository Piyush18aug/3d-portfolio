export const profile = {
  initials: "PN",
  firstName: "PIYUSH",
  lastName: "NAVANGUL",
  title: "Piyush Navangul — Software Developer",
  email: "piyushnavangul12@gmail.com",
  phone: "+92 311 8262934",
  phoneHref: "tel:+923118262934",
  emailHref: "mailto:knowledpoint202@gmail.com",
  address:
    "House No 443, Street No 7, Bhittai Colony, Korangi Creek, Karachi, Pakistan",
  location: "Karachi, Pakistan",
  nationality: "Pakistani",
  birthDate: "12 August 1998",
  gender: "Male",
  rolePrefix: "Blockchain",
  rolePrimary: "Developer",
  roleSecondary: "Researcher",
  about:
    "Highly skilled and results-driven Blockchain Developer with 5+ years of experience architecting, developing, and deploying secure, scalable blockchain solutions. My work spans Ethereum, NFT marketplaces, DeFi protocols, custom blockchain architecture, wallet and explorer development, and research-led innovation focused on blockchain security, decentralization, and real-world adoption.",
  mapHref:
    "https://www.google.com/maps/search/?api=1&query=House+No+443+Street+No+7+Bhittai+Colony+Korangi+Creek+Karachi+Pakistan",
  githubHref: "https://github.com/Kamrankamil",
  linkedinHref: "https://pk.linkedin.com/in/kamran-khan-788874187",
  linkedinLabel: "linkedin.com/in/kamran-khan-788874187",
  youtubeHref: "https://www.youtube.com/@blocklearners",
  instagramHref: "https://www.instagram.com/kamrankamil",
  instagramLabel: "@kamrankamil",
  udemyHref:
    "https://www.udemy.com/user/muhammad-kamran-kamil/?srsltid=AfmBOor6BoWobHcM_bpRU1-LBRS_VkIisWKOAFUfCVwP2b5-gz2-xu_b",
} as const;

export const careerEntries = [
  {
    role: "Sub-Lead & Software Engineer",
    company: "DTS INC. Pakistan",
    meta: "Blockchain Developer · Karachi",
    period: "2021–NOW",
    description:
      "Led and supported proprietary blockchain development on a Proof-of-Authority consensus model, customized wallet and explorer platforms from open-source foundations, built a 3D NFT marketplace, deployed smart contracts and crypto tokens, optimized mining tools, and co-authored international blockchain research publications.",
  },
  {
    role: "Lab Instructor (Part-Time)",
    company: "Iqra University",
    meta: "Computer Science Labs · Karachi",
    period: "2024–NOW",
    description:
      "Teach undergraduate lab sessions in Database Management Systems, Object-Oriented Programming in Java, and Data Structures, with emphasis on implementation, normalization, ERD design, and hands-on problem solving.",
  },
  {
    role: "Web Developer",
    company: "Brainzix Technology",
    meta: "Full-Stack Web Development · Karachi",
    period: "2020–21",
    description:
      "Delivered WordPress, PHP, and JavaScript solutions for 15+ clients, improving website performance and handling full-stack implementation across client projects.",
  },
] as const;

export const serviceCards = [
  {
    title: "BLOCKCHAIN ENGINEERING",
    subtitle: "Architecture, Smart Contracts, and DApps",
    description:
      "I design and build blockchain products end to end—from consensus architecture and wallet tooling to NFT marketplaces, explorers, token contracts, and production-ready decentralized applications.",
    tags: [
      "Ethereum",
      "Solidity",
      "PoA & PoW",
      "ERC-20 / 721 / 1155",
      "MetaMask customization",
      "Blockscout",
    ],
  },
  {
    title: "RESEARCH & TEACHING",
    subtitle: "Security, Scalability, and Applied CS",
    description:
      "I combine product delivery with research and teaching—covering blockchain security, voting-based chains, database systems, OOP, data structures, and blockchain data analytics for real-world systems.",
    tags: [
      "Blockchain security",
      "Consensus mechanisms",
      "Java & SQL labs",
      "TensorFlow & Keras",
      "Web3.js / Web3.py",
      "Data analytics",
    ],
  },
] as const;

type ProjectCard = {
  title: string;
  category: string;
  tools: string;
  image: string;
  link?: string;
};

export const projectCards: ProjectCard[] = [
  {
    title: "PoA Blockchain",
    category: "Custom Blockchain Architecture",
    tools: "Proof-of-Authority, consensus design, secure deployment, ecosystem tooling",
    image: "/images/bond.png",
  },
  {
    title: "Custom Wallet",
    category: "MetaMask-Based Wallet Product",
    tools: "Wallet customization, transaction flows, ecosystem integration, user security",
    image: "/images/radix.png",
  },
  {
    title: "3D NFT Marketplace",
    category: "ERC-20, ERC-721, ERC-1155 Marketplace",
    tools: "Bidding, buying, selling, Web3 integrations, marketplace workflows",
    image: "/images/sapphire.png",
  },
  {
    title: "Explorer & Mining Tools",
    category: "Blockchain Visibility and Mining Infrastructure",
    tools: "Blockscout fork, explorer customization, mining apps, mining pool optimization",
    image: "/images/Solidx.png",
  },
] as const;

export const education = [
  "BS Computer Science, Iqra University Main Campus — 2017–2021",
  "Intermediate, ZM Nabi Bagh College",
] as const;

export const publications = [
  'IEEE GCCE 2025 — “Late Transaction Settlement on PoA Voting Blockchain for Higher Security Crypto Token Transfer”',
  'IEEE GCCE 2024 — “Representative Node on Voting Blockchain for High Secure Mobile Wallet Users”',
] as const;

export const certifications = [
  "Certified in Information Technology (2020–2021)",
  "Certified in WordPress Development",
  "AWS Solutions Architect – Certified",
  "Data Science Specialization (Udemy — Ongoing)",
  "Blockchain Specialization (Udemy)",
] as const;