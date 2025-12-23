# Calazans Lumina - Invoice & Estimate System

Professional invoicing and estimate management system for **Painting**, **Construction**, and **House Cleaning** service businesses in the USA. Built with Next.js 15, TypeScript, Prisma, and Tailwind CSS.

## Features

- **Professional Invoices** - Create beautiful, customizable invoices
- **Quick Estimates** - Send estimates and convert them to invoices with one click
- **Customer Management** - Keep all client information organized
- **Service Categories** - Specialized for Painting, Construction, and House Cleaning
- **PDF Generation** - Download and share professional PDFs
- **Dashboard Analytics** - Track revenue, pending payments, and more
- **Payment Tracking** - Record payments via cash, check, card, Zelle, Venmo
- **Modern UI** - Dark theme with responsive design

## Service Categories

### Painting Services
- Interior & Exterior painting
- Residential & Commercial projects
- Track by square footage or room

### Construction
- Renovations & Remodeling
- Repairs & New construction
- Detailed itemized billing

### House Cleaning
- Regular cleaning
- Deep cleaning
- Move-in/Move-out services

## Tech Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type safety
- **Prisma** - Database ORM
- **SQLite** - Database (easily switch to PostgreSQL/MySQL)
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **jsPDF** - PDF generation
- **bcryptjs** - Password hashing

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
\`\`\`bash
git clone <repository-url>
cd construction-invoice-system
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Set up environment:
\`\`\`bash
cp .env.example .env
\`\`\`

4. Initialize database:
\`\`\`bash
npx prisma migrate dev --name init
npx prisma generate
\`\`\`

5. Start development server:
\`\`\`bash
npm run dev
\`\`\`

6. Open http://localhost:3000

## Project Structure

\`\`\`
construction-invoice-system/
├── app/
│   ├── api/                    # API Routes
│   │   ├── auth/              # Authentication
│   │   ├── customers/         # Customer CRUD
│   │   ├── invoices/          # Invoice CRUD
│   │   └── estimates/         # Estimate CRUD
│   ├── auth/                  # Auth pages
│   │   ├── login/
│   │   └── register/
│   ├── dashboard/             # Dashboard pages
│   │   ├── invoices/          # Invoice management
│   │   ├── estimates/         # Estimate management
│   │   ├── customers/         # Customer management
│   │   └── settings/          # User settings
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx               # Landing page
├── lib/
│   ├── db.ts                  # Prisma client
│   ├── utils.ts               # Utilities
│   └── pdf.ts                 # PDF generation
├── prisma/
│   └── schema.prisma          # Database schema
└── public/
\`\`\`

## Database Models

- **User** - Account information
- **Customer** - Client details
- **Invoice** - Billing documents
- **InvoiceItem** - Line items for invoices
- **Estimate** - Quote documents
- **EstimateItem** - Line items for estimates
- **Payment** - Payment records

## Available Scripts

\`\`\`bash
npm run dev      # Development server
npm run build    # Production build
npm run start    # Production server
npm run lint     # Run linter
\`\`\`

## Environment Variables

\`\`\`env
DATABASE_URL="file:./dev.db"
\`\`\`

## Security

- Passwords hashed with bcryptjs
- HTTP-only session cookies
- Input validation on all API routes

## Roadmap

- [ ] Email notifications
- [ ] Multi-currency support
- [ ] Advanced reporting
- [ ] QuickBooks integration
- [ ] Mobile app
- [ ] Recurring invoices

## License

MIT License - free for personal and commercial use.

## Support

For issues or feature requests, please open an issue on GitHub.

---

Built with love by the Calazans Lumina Team
