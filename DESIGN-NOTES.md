# DESIGN-NOTES.md

## Week 4: Component Architecture

### Component Tree

App Router Project

RootLayout
├── Header
│   ├── Nav
│   └── ThemeToggle
├── Home Page
│   ├── Card
│   ├── Card
│   ├── Card
│   └── ContactForm
└── Footer

### Components Built

| Component | Purpose | State? | Server or Client |
|---|---|---|---|
| Header | Displays site title, navigation, and theme toggle | No | Server Component |
| Nav | Provides navigation links using Next.js Link | No | Server Component |
| Footer | Displays footer text | No | Server Component |
| Card | Reusable content block using props | No | Server Component |
| ThemeToggle | Allows user to switch light/dark theme | Yes | Client Component |
| ContactForm | Handles form input and submission | Yes | Client Component |

### State Placement

Theme state is placed inside ThemeToggle because only that component controls the theme button and localStorage persistence.

Form state is placed inside ContactForm because the email and message values only belong to the form.

### Client Components

ThemeToggle and ContactForm use `"use client"` because they use React hooks and browser interaction.

### Server Components

Header, Footer, Nav, Card, layout, and page can remain Server Components because they do not directly manage browser state.

## Week 7: Async Fetch Assignment

### Data Source

PokéAPI Endpoint:

https://pokeapi.co/api/v2/pokemon/pikachu

### Async UI States

The application handles three asynchronous states:

- Loading State: Displays a skeleton screen while data is being fetched.
- Success State: Displays Pokémon information returned from the API.
- Error State: Displays an error message if the request fails.

### Refresh Control

A refresh button allows users to fetch the latest data without reloading the page. The button is disabled while a refresh is in progress to prevent duplicate requests.

### Accessibility

The project supports `prefers-reduced-motion` through CSS media queries. Users who prefer reduced motion will experience minimal animation and transition effects.

### Motion Decisions

The skeleton screen animation is functional because it communicates that content is loading. Decorative animations were avoided because they do not improve the user's understanding of the application's state.

## Week 9: Authentication, Security, and Performance

This week I implemented GitHub authentication using Auth.js. Users must authenticate before accessing the protected messages page.

I applied two OWASP Top 10 mitigations. First, Prisma ORM protects against SQL injection through parameterized queries. Second, security headers were configured to reduce security misconfiguration risks.

Authentication was tested successfully using GitHub OAuth. Protected routes redirect unauthenticated users and display user session information after login.