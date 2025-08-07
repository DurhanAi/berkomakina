# Berko Makina Website Project

## Overview

This is a full-stack web application for Berko Makina, a Turkish industrial machinery company specializing in filling, packaging, and labeling machines. The application is built using a modern tech stack with React frontend, Express backend, and includes multi-language support (Turkish, English, Bulgarian).

## System Architecture

The application follows a modern full-stack architecture with clear separation between frontend and backend:

- **Frontend**: React with TypeScript, served by Vite development server
- **Backend**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM (configured but minimal usage in current implementation)
- **Styling**: Tailwind CSS with shadcn/ui components
- **Build System**: Vite for frontend, esbuild for backend

## Key Components

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **State Management**: React Context for language management, TanStack Query for server state
- **UI Components**: shadcn/ui component library with Radix UI primitives
- **Styling**: Tailwind CSS with custom design system
- **Internationalization**: Custom translation system supporting Turkish, English, and Bulgarian

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database**: Drizzle ORM with PostgreSQL (Neon serverless)
- **Email**: SendGrid integration for contact form submissions
- **Static Assets**: Express static file serving for assets and SEO files

### Key Features
- **Multi-language Support**: Turkish (default), English, and Bulgarian
- **Responsive Design**: Mobile-first approach with responsive layouts
- **SEO Optimization**: Structured data, meta tags, sitemap.xml, and robots.txt
- **WhatsApp Integration**: Fixed WhatsApp button for customer communication
- **Contact Form**: Integrated with email service for inquiries
- **Product Catalog**: Dynamic product categories and detailed product pages

## Data Flow

1. **Client Requests**: Vite dev server handles frontend routing and asset serving
2. **API Calls**: Frontend makes requests to Express backend for contact forms and data
3. **Database Operations**: Minimal database usage currently (user schema exists for future use)
4. **Email Processing**: Contact form submissions are processed via SendGrid
5. **Asset Serving**: Static assets served directly by Express for optimal performance

## External Dependencies

### Core Dependencies
- **@radix-ui/react-\***: Headless UI components for accessibility
- **@tanstack/react-query**: Server state management and caching
- **@sendgrid/mail**: Email service integration
- **drizzle-orm**: Type-safe database queries and migrations
- **@neondatabase/serverless**: PostgreSQL serverless connection
- **wouter**: Lightweight client-side routing
- **tailwindcss**: Utility-first CSS framework

### Development Tools
- **vite**: Fast build tool and development server
- **typescript**: Type safety and development experience
- **tsx**: TypeScript execution for development
- **esbuild**: Fast JavaScript bundler for production builds

## Deployment Strategy

### Development
- Frontend: Vite development server with HMR
- Backend: tsx with auto-reload for development
- Database: Neon serverless PostgreSQL

### Production Build
1. Frontend build: `vite build` outputs to `dist/public`
2. Backend build: `esbuild` bundles server to `dist/index.js`
3. Static assets: Served directly by Express server
4. Database: Production PostgreSQL via Neon serverless

### Environment Configuration
- `NODE_ENV`: Controls development vs production behavior
- `DATABASE_URL`: PostgreSQL connection string
- `SENDGRID_API_KEY`: Email service configuration

## Changelog

- June 30, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.