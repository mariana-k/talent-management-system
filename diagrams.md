# Talent Management System - UML Class Diagram

```mermaid
classDiagram
    class Candidate {
        +String id
        +String firstName
        +String lastName
        +String email
        +String? phone
        +String location
        +CurrentJob? currentJob
        +ResumeItem[] resume
        +String[] skills
        +Number experience
        +Education? education
        +String? avatar
        +Date createdAt
        +Date updatedAt
    }

    class CurrentJob {
        +String title
        +String company
    }

    class ResumeItem {
        +String id
        +String jobTitle
        +String companyName
        +Date startDate
        +Date? endDate
        +String description
        +String[] technologies
        +Boolean isCurrentJob
    }

    class Education {
        +String degree
        +String institution
        +Number graduationYear
    }

    class Company {
        +String id
        +String name
        +String description
        +String industry
        +String location
        +String website
        +String? logo
        +Number foundedYear
        +Number employeeCount
    }

    class Job {
        +String id
        +String title
        +String companyId
        +String description
        +String[] requiredTechnologies
        +String location
        +Salary? salary
        +Boolean isActive
        +Date createdAt
    }

    class Salary {
        +Number min
        +Number max
        +String currency
    }

    class FilterOptions {
        +String[]? technologies
        +String? location
        +Number? experienceMin
        +Number? experienceMax
    }

    class SortOptions {
        +String field
        +String direction
    }
```

## Key Relationships Diagram

```mermaid
erDiagram
    Candidate {
        string id PK
        string firstName
        string lastName
        string email
        string phone
        string location
        number experience
        date createdAt
        date updatedAt
    }

        CurrentJob {
        string id PK
        string candidateId FK
        string title
        string company
    }

    ResumeItem {
        string id PK
        string candidateId FK
        string jobTitle
        string companyName
        date startDate
        date endDate
        string description
        boolean isCurrentJob
    }

    Education {
        string id PK
        string candidateId FK
        string degree
        string institution
        number graduationYear
    }

    Company {
        string id PK
        string name
        string description
        string industry
        string location
        string website
        number foundedYear
        number employeeCount
    }

    Job {
        string id PK
        string title
        string companyId FK
        string description
        string location
        boolean isActive
        date createdAt
    }

    Salary {
        string id PK
        string jobId FK
        number min
        number max
        string currency
    }

    Candidate ||--o{ ResumeItem : "has"
    Candidate ||--o| CurrentJob : "has"
    Candidate ||--o| Education : "has"
    Company ||--o{ Job : "has"
    Job ||--o| Salary : "has"
```

## Key Relationships

1. **Candidate → ResumeItem**: One-to-many (a candidate has multiple resume items)
2. **Candidate → CurrentJob**: One-to-one (optional - a candidate may have a current job)
3. **Candidate → Education**: One-to-one (optional - a candidate may have education info)
4. **Company → Job**: One-to-many (a company can post multiple jobs)
5. **Job → Salary**: One-to-one (optional - a job may have salary information)
6. **Job → Company**: Many-to-one (each job belongs to one company)

## Component Architecture

```mermaid
graph TD
    A[App.tsx] --> B[Navigation]
    A --> C[Router]
    C --> D[CandidatesList]
    C --> E[CandidateProfile]
    C --> F[CompaniesList]

    D --> G[CandidateCard]
    E --> H[ResumeItem]
    F --> I[CompanyCard]

    D --> J[FilterOptions]
    D --> K[SortOptions]
```

## Data Flow

```mermaid
flowchart LR
    A[Static Data] --> B[Components]
    B --> C[UI Rendering]
    C --> D[User Interaction]
    D --> E[State Updates]
    E --> C
```

## Notes

- **Data Source**: Currently uses static mock data in `src/data/` folder
- **State Management**: Local React state with hooks
- **Routing**: Client-side routing with React Router
- **Styling**: Tailwind CSS utility classes
- **Type Safety**: Full TypeScript implementation with interfaces
