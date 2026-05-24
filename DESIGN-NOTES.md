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