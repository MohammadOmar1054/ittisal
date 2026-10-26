# ittisal

ittisal / اتصال is a bilingual Gulf work platform for connecting job seekers, employers, and investors across the GCC. The current repository contains the initial marketing site and the documented foundation for the **Job Finder Panel**.

## Current stack

- Next.js App Router with React and JSX
- Tailwind CSS
- Framer Motion
- Supabase planned for authentication, database persistence, and file storage
- English and Arabic interface support
- Light, dark, aurora, and nocturne themes

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

Useful checks:

```bash
npm run build
```

## Current routes

| Route | Purpose |
| --- | --- |
| `/` | Landing page |
| `/hunter` | Job hunter login entry |
| `/hunter/onboarding` | Job hunter account and resume onboarding |
| `/hunter/jobs/[id]` | Job detail and apply flow |
| `/hunter/settings` | Job hunter profile settings |
| `/employers` | Employer login entry |
| `/investors` | Investor login entry |
| `/careers` | Careers at ittisal |
| `/settings` | Language and theme preferences |

## Job Finder Panel scope

The Job Finder Panel will provide:

1. Account creation and login through Supabase Auth.
2. Profile picture upload and profile management.
3. Optional one-time resume storage through Supabase Storage.
4. Easy Apply when a stored resume exists.
5. Manual application flow when no resume is stored.
6. A mocked dataset of 150 distinct jobs.
7. Search by job title.
8. Filters for experience, salary, date posted, applicant count, location, and work mode.
9. Pagination at 15 jobs per page.
10. Job detail pages and application status tracking.
11. Arabic/English language selection and light/dark theme selection.

The detailed flows are maintained in the Mermaid files in the repository root:

- `job-finder-panel-flow.mmd`
- `account-creation-resume-flow.mmd`
- `job-search-filter-logic.mmd`
- `settings-profile-menu-flow.mmd`
- `supabase-data-model.mmd`

## Planned Supabase entities

The Job Finder Panel data model includes:

- `PROFILES`
- `RESUMES`
- `COMPANIES`
- `JOBS`
- `APPLICATIONS`

The complete entity relationship diagram is in `supabase-data-model.mmd`. Employer and investor panel requirements will be documented separately when defined.

## Job Finder implementation status

The current frontend prototype includes the complete client flow with local browser persistence:

- Account onboarding and sign-in state
- Profile setup with age, profile picture, degree, field of study, location, bio, and skills
- Polished profile picture and resume file pickers
- Optional resume upload selection
- Mock GCC job dataset
- Search by title, skill, or company
- Work mode, experience, and location filters
- Paginated results
- Job detail pages
- Easy Apply when a resume is stored
- Manual apply fallback when no resume is stored
- Profile menu, logout, language, and theme controls

Supabase Auth, Database, and Storage are the next integration boundary; no credentials are committed to this repository.

## Job Finder Panel diagrams

### 1. Job Finder Panel flow

```mermaid
flowchart TD
    A[User Clicks Job Finder Panel] --> B{Has Account?}
    B -->|No| C[Create Job Hunter Account]
    B -->|Yes| D[Login to Job Finder Dashboard]
    C --> E[Upload Profile Picture]
    E --> F{Resume Storage Choice}
    F -->|Store Resume Once| G[Redirect to Resume Upload Page]
    F -->|Apply Manually| H[Skip Resume Storage]
    G --> I[Resume Stored in Supabase Storage]
    I --> J[Easy Apply ENABLED]
    H --> K[Easy Apply DISABLED<br/>Hover: 'No resume stored']
    J --> D
    K --> D
    D --> L[Job Finder Home Page]
    L --> M[Browse Mocked Jobs - Paginated 15/page]
    L --> N[Search & Filter Jobs]
    L --> O[Click Profile Picture]
    M --> P[Click Job Card]
    N --> P
    P --> Q[Job Details Page]
    Q --> R{Resume Stored?}
    R -->|Yes| S[Easy Apply Button Active]
    R -->|No| T[Manual Apply Flow]
    O --> U[Dropdown Menu]
    U --> V[Settings]
    U --> W[Logout]
    V --> X[Language: Arabic / English]
    V --> Y[Theme Toggle]
    V --> Z[Upload / Update Resume]
    V --> AA[Update Profile]
    Z --> I
    AA --> AB[Save to Supabase]
    X --> AB
    Y --> AB
```

### 2. Account creation and resume flow

```mermaid
sequenceDiagram
    participant U as User
    participant F as Frontend
    participant S as Supabase Auth
    participant DB as Supabase DB
    participant ST as Supabase Storage
    U->>F: Click "Job Finder"
    F->>S: Check session
    alt No session
        F->>U: Show signup form
        U->>F: Submit details
        F->>S: createUser()
        S-->>F: Session token
        F->>U: Prompt profile picture
        U->>F: Upload image
        F->>ST: Upload avatar
        ST-->>DB: Store URL
        F->>U: Resume choice prompt
        alt Store resume
            U->>F: Upload resume PDF
            F->>ST: Upload resume
            ST-->>DB: Store resume_url + easy_apply=true
        else Manual apply
            F->>DB: easy_apply=false
        end
    else Session exists
        F->>DB: Fetch profile
        DB-->>F: Profile + resume_url
    end
    F->>U: Load Job Finder Home
```

### 3. Job search and filter logic

```mermaid
flowchart LR
    A[Job Finder Home] --> B[Search Box: Job Title]
    A --> C[Filters Panel]
    C --> C1[Experience Level]
    C --> C2[Salary Range]
    C --> C3[Date Posted]
    C --> C4[Applicants Count]
    C --> C5[Location]
    C --> C6[Work Mode:<br/>Remote/Hybrid/Onsite]
    B --> D[Query Mock Dataset<br/>200-250 jobs]
    C1 --> D
    C2 --> D
    C3 --> D
    C4 --> D
    C5 --> D
    C6 --> D
    D --> E[Paginated Results<br/>15 per page]
    E --> F[Page 1, 2, 3 ...]
    F --> G[Click Job Card]
    G --> H[Job Detail View]
```

### 4. Settings and profile menu

```mermaid
flowchart TD
    A[Click Profile Avatar] --> B[Dropdown Menu]
    B --> C[Settings]
    B --> D[Logout]
    C --> E[Settings Page]
    E --> F[Language Selector<br/>AR / EN]
    E --> G[Theme Selector<br/>Light / Dark]
    E --> H[Resume Management<br/>Upload / Replace]
    E --> I[Update Profile<br/>Name, Bio, Photo, Skills]
    F --> J[Save to Supabase]
    G --> J
    H --> J
    I --> J
    J --> K[Apply Changes UI + DB]
```

### 5. Supabase data model

```mermaid
erDiagram
    PROFILES ||--o{ APPLICATIONS : submits
    PROFILES ||--o{ RESUMES : owns
    COMPANIES ||--o{ JOBS : posts
    JOBS ||--o{ APPLICATIONS : receives
    PROFILES {
        uuid id PK
        text email
        text full_name
        text avatar_url
        text language
        text theme
        text bio
        text[] skills
    }
    RESUMES {
        uuid id PK
        uuid profile_id FK
        text file_url
        boolean easy_apply_enabled
        timestamp uploaded_at
    }
    COMPANIES {
        uuid id PK
        text name
        text logo_url
        text industry
        text location
        text about
    }
    JOBS {
        uuid id PK
        uuid company_id FK
        text title
        text description
        text[] required_skills
        int experience_years
        int salary_min
        int salary_max
        text work_mode
        text location
        timestamp posted_at
        int applicants_count
    }
    APPLICATIONS {
        uuid id PK
        uuid job_id FK
        uuid profile_id FK
        text status
        timestamp applied_at
    }
```

## Asset placeholders

Replace the testimonial/profile placeholders in `public/images/` with the final images when available.
