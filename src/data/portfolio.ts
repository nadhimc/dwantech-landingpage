export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  isRealProject: boolean;
  metrics?: {
    omzet?: string;
    users?: string;
    growth?: string;
    timeline?: string;
  };
  challenges?: string[];
  solutions?: string[];
  techStack?: string[];
  website?: string;
  status: "completed" | "ongoing" | "concept";
}

export const portfolioData: PortfolioItem[] = [
  {
    id: "salamcendekia",
    title: "SalamCendekia.id - Tryout Platform",
    description:
      "Platform tryout online yang dibangun dari nol untuk startup bersama tim kuliah. Mengintegrasikan sistem pembayaran, user management, dan analytics untuk optimasi konversi maksimal.",
    image: "/images/portfolio/salamcendekia.jpg",
    tags: [
      "Full-Stack Development",
      "Startup",
      "E-Learning",
      "Analytics",
      "SEO",
    ],
    isRealProject: true,
    metrics: {
      omzet: "Ratusan juta → 1M+",
      users: "10,000+ active users",
      growth: "Steady growth",
      timeline: "2022",
    },
    challenges: [
      "Membangun platform dari nol dengan tim terbatas",
      "Mengoptimalkan konversi funnel untuk pertumbuhan cepat",
      "Mengintegrasikan sistem pembayaran yang aman",
      "Mengelola traffic tinggi dengan performa optimal",
    ],
    solutions: [
      "Menggunakan tech stack modern untuk development cepat",
      "Implementasi analytics mendalam untuk optimasi konversi",
      "Landing page dan SEO yang disesuaikan berdasarkan data real",
      "Arsitektur scalable untuk menangani pertumbuhan user",
    ],
    website: "https://salamcendekia.id",
    status: "completed",
  },
  {
    id: "ecommerce-mock",
    title: "E-Commerce Platform (Concept)",
    description:
      "Platform e-commerce modern dengan fitur lengkap termasuk inventory management, multi-vendor support, dan analytics dashboard.",
    image: "/images/portfolio/ecommerce-mock.jpg",
    tags: ["E-Commerce", "Full-Stack", "Concept", "Multi-Vendor"],
    isRealProject: false,
    techStack: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Stripe",
      "Tailwind CSS",
    ],
    status: "concept",
  },
  {
    id: "terumo-elearning",
    title: "Terumo - E-Learning Platform",
    description:
      "Platform e-learning untuk rumah sakit internasional Terumo dalam bidang alat laboratorium. Sistem pembelajaran online yang komprehensif dengan fitur interaktif, assessment, dan tracking progress untuk tenaga medis.",
    image: "/images/portfolio/terumo-elearning.jpg",
    tags: [
      "Enterprise Development",
      "Healthcare",
      "E-Learning",
      "International Client",
      "Team Collaboration",
    ],
    isRealProject: true,
    metrics: {
      omzet: "$5,000 project value",
      users: "Medical professionals",
      growth: "High client satisfaction",
      timeline: "2023",
    },
    challenges: [
      "Membangun platform e-learning untuk domain medis yang kompleks",
      "Mengintegrasikan konten pembelajaran alat laboratorium",
      "Memastikan compliance dengan standar internasional",
      "Deliver dengan kualitas enterprise dan bug minimal",
    ],
    solutions: [
      "Collaborative development dengan tim yang solid",
      "Implementasi fitur interaktif untuk pembelajaran medis",
      "Sistem assessment dan tracking yang komprehensif",
      "Quality assurance yang ketat untuk meminimalisir bug",
    ],
    website: "https://terumo-elearning.com",
    status: "completed",
  },
  {
    id: "myflorist",
    title: "MyFlorist - Flower Delivery Platform",
    description:
      "Platform delivery bunga yang dibangun dengan rapid prototyping untuk validasi market. Mengintegrasikan sistem pemesanan, tracking, dan payment gateway untuk mendapatkan data market yang akurat.",
    image: "/images/portfolio/myflorist.jpg",
    tags: [
      "Full-Stack Development",
      "Startup",
      "E-Commerce",
      "Market Validation",
      "Rapid Prototyping",
    ],
    isRealProject: true,
    metrics: {
      omzet: "Prototype → Market Test",
      users: "Market validation data",
      growth: "Data-driven insights",
      timeline: "2022",
    },
    challenges: [
      "Membangun prototype secepat mungkin untuk market test",
      "Mengintegrasikan sistem yang kompleks dalam waktu singkat",
      "Mengumpulkan data market yang akurat",
      "Menyesuaikan fitur berdasarkan feedback market",
    ],
    solutions: [
      "Rapid development dengan tech stack yang efisien",
      "Implementasi analytics untuk tracking user behavior",
      "A/B testing untuk optimasi konversi",
      "Iterasi cepat berdasarkan data market real",
    ],
    website: "https://myflorist.id",
    status: "completed",
  },
  {
    id: "disabisa",
    title: "Disabisa - Disability Support Platform",
    description:
      "Platform untuk mendukung kegiatan disabilitas yang dikembangkan untuk dosen. Sistem yang inklusif dengan fitur accessibility dan user-friendly interface untuk memudahkan aksesibilitas pengguna.",
    image: "/images/portfolio/disabisa.jpg",
    tags: [
      "Accessibility",
      "Social Impact",
      "University Project",
      "Disability Support",
      "Inclusive Design",
    ],
    isRealProject: true,
    metrics: {
      omzet: "University Project",
      users: "Disability community",
      growth: "Social impact",
      timeline: "2022",
    },
    challenges: [
      "Membangun interface yang accessible untuk semua pengguna",
      "Mengintegrasikan fitur-fitur khusus untuk disabilitas",
      "Memastikan usability yang optimal untuk berbagai kebutuhan",
      "Testing dengan user yang memiliki disabilitas",
    ],
    solutions: [
      "Implementasi accessibility standards (WCAG)",
      "User testing dengan komunitas disabilitas",
      "Interface design yang inklusif dan user-friendly",
      "Fitur-fitur khusus untuk mendukung berbagai kebutuhan",
    ],
    website: "https://disabisa.com",
    status: "completed",
  },
  {
    id: "ugm-taekwondo",
    title: "UGM Taekwondo Competition Website",
    description:
      "Website informasi untuk lomba taekwondo UGM dengan jadwal pertandingan dan informasi event. Website yang responsif dan user-friendly untuk event olahraga kampus.",
    image: "/images/portfolio/ugm-taekwondo.jpg",
    tags: [
      "Event Website",
      "University",
      "Sports",
      "Information",
      "Event Details",
    ],
    isRealProject: true,
    metrics: {
      omzet: "University Event",
      users: "Participants & spectators",
      growth: "Event success",
      timeline: "2022",
    },
    challenges: [
      "Membuat website informasi yang menarik",
      "Mengorganisir jadwal dan informasi event",
      "Memastikan website mudah diakses dan dipahami",
      "Optimasi untuk berbagai device",
    ],
    solutions: [
      "Design yang clean dan informatif",
      "Struktur informasi yang jelas dan mudah dipahami",
      "Responsive design untuk berbagai device",
      "Update informasi yang mudah dilakukan",
    ],
    website: "https://ugm-taekwondo.com",
    status: "completed",
  },
  {
    id: "book-project",
    title: "Book Publishing Website",
    description:
      "Website informasi untuk proyek buku dengan preview konten dan informasi detail. Website yang memungkinkan penulis untuk mempromosikan dan memberikan informasi tentang buku mereka.",
    image: "/images/portfolio/book-project.jpg",
    tags: [
      "Information Website",
      "Publishing",
      "Digital Content",
      "Book Promotion",
      "Content Management",
    ],
    isRealProject: true,
    metrics: {
      omzet: "Book information platform",
      users: "Authors & readers",
      growth: "Digital promotion",
      timeline: "2025",
    },
    challenges: [
      "Membuat website informasi yang menarik untuk buku",
      "Mengorganisir konten buku dengan baik",
      "Memastikan website mudah diakses dan dipahami",
      "Optimasi untuk berbagai device",
    ],
    solutions: [
      "Design yang clean dan informatif",
      "Struktur konten yang jelas dan menarik",
      "Content management yang user-friendly",
      "Responsive design untuk berbagai device",
    ],
    website: "https://book-project.com",
    status: "completed",
  },
];

export const getRealProjects = () =>
  portfolioData.filter((item) => item.isRealProject);
export const getConceptProjects = () =>
  portfolioData.filter((item) => !item.isRealProject);
export const getPortfolioByStatus = (status: PortfolioItem["status"]) =>
  portfolioData.filter((item) => item.status === status);
