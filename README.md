# Talent Management System

Deployed app https://talent-management-system-seven.vercel.app/candidates

A production-ready React + TypeScript Applicant Tracking System (ATS) built with Vite, featuring a modern UI with Tailwind CSS and comprehensive candidate and company management.

## Features

- **Candidate Management**: Browse, filter, and view detailed candidate profiles
- **Company Directory**: Explore companies and their open job positions
- **Advanced Filtering**: Filter candidates by technologies, location, and experience
- **Responsive Design**: Modern, mobile-friendly interface
- **Type Safety**: Full TypeScript implementation with strict typing
- **Clean Architecture**: Well-organized component structure and data management

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router v6
- **Code Quality**: ESLint + Prettier
- **Development**: Hot Module Replacement (HMR)

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── CandidateCard.tsx
│   ├── CompanyCard.tsx
│   ├── ResumeItem.tsx
│   └── Navigation.tsx
├── pages/              # Route-based page components
│   ├── CandidatesList.tsx
│   ├── CandidateProfile.tsx
│   └── CompaniesList.tsx
├── data/               # Mock data
│   ├── candidates.ts
│   ├── companies.ts
│   └── jobs.ts
├── types/              # TypeScript type definitions
│   └── models.ts
└── App.tsx             # Main application component
```

## Getting Started

### Prerequisites

- Node.js 16+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd talent-management-system
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors automatically

## Core Entities

### Candidate

- Personal information (name, email, phone, location)
- Current job and company
- Complete resume with job history
- Skills and technologies
- Education background
- Experience level

### Company

- Company details (name, description, industry)
- Location and employee count
- Founded year and website
- Logo and branding

### Job

- Position title and description
- Required technologies
- Location and salary range
- Active/inactive status
- Associated company

## Features Overview

### Candidates Page (`/candidates`)

- Grid view of all candidates with key information
- Advanced filtering by:
  - Technologies (multi-select)
  - Location
  - Experience range (min/max years)
- Sorting by name, experience, or creation date
- Responsive card layout with hover effects

### Candidate Profile (`/candidates/:id`)

- Detailed candidate information
- Complete resume with job history
- Skills and education sections
- Contact information
- Current job highlighting

### Companies Page (`/companies`)

- Company directory with search functionality
- Industry-based filtering
- Company cards showing open positions
- Direct links to company websites

## Code Quality

- **ESLint**: Configured with TypeScript and React rules
- **Prettier**: Consistent code formatting
- **TypeScript**: Strict typing with no `any` types
- **Component Structure**: Reusable, well-documented components
- **Performance**: Optimized with React.memo and useMemo where appropriate

## Styling

- **Tailwind CSS**: Utility-first CSS framework
- **Responsive Design**: Mobile-first approach
- **Modern UI**: Clean, professional interface
- **Accessibility**: Semantic HTML and ARIA labels
- **Consistent Theming**: Unified color scheme and spacing

## Data Management

- **Mock Data**: Comprehensive sample data for testing
- **Type Safety**: Strongly typed data structures
- **Consistent Formatting**: Standardized date and currency formatting
- **Realistic Content**: Industry-relevant job titles and technologies

## Future Enhancements

- User authentication and authorization
- Real-time notifications
- Advanced search with full-text indexing
- Candidate application tracking
- Interview scheduling
- Analytics and reporting
- API integration with external job boards

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## License

This project is licensed under the MIT License.
