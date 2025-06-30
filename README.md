
# Ghala Technical Intern Challenge – Core Systems Simulation

## Overview
This project simulates Ghala's core system for handling **merchant payment configurations** and **order processing**. Built with modern web technologies and designed for scalability.

## Features
- Backend simulation for merchant preferences and order processing
- React + Vite + Tailwind frontend with admin UI
- Merchant settings management
- Order tracking system
- Payment simulation capabilities

---

## Prerequisites

Before setting up the project, ensure you have the following installed:

- **Node.js** (version 18 or higher) - [Download here](https://nodejs.org/)
- **npm** or **yarn** package manager
- **Git** - [Download here](https://git-scm.com/)
- **VS Code** - [Download here](https://code.visualstudio.com/)

## Setup Instructions

### 1. Clone the Repository

```bash
git clone <repository-url>
cd ghala-core-systems
```

### 2. Install Dependencies

Using npm:
```bash
npm install
```

Or using yarn:
```bash
yarn install
```

### 3. Environment Setup

Create a `.env` file in the root directory (if needed for API keys or configuration):
```bash
touch .env
```

### 4. VS Code Setup

#### Recommended Extensions
Install these VS Code extensions for the best development experience:

1. **ES7+ React/Redux/React-Native snippets** - Provides useful React snippets
2. **Tailwind CSS IntelliSense** - Autocomplete for Tailwind classes
3. **TypeScript Importer** - Auto import for TypeScript
4. **Prettier - Code formatter** - Code formatting
5. **ESLint** - Code linting
6. **Auto Rename Tag** - Automatically rename paired HTML/JSX tags
7. **Bracket Pair Colorizer** - Color matching brackets
8. **GitLens** - Enhanced Git capabilities

#### VS Code Settings
Add these settings to your VS Code workspace (`.vscode/settings.json`):

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "emmet.includeLanguages": {
    "javascript": "javascriptreact",
    "typescript": "typescriptreact"
  },
  "typescript.preferences.importModuleSpecifier": "relative"
}
```

### 5. Start Development Server

```bash
npm run dev
```

Or with yarn:
```bash
yarn dev
```

The application will be available at `http://localhost:8080`

### 6. Build for Production

```bash
npm run build
```

Or with yarn:
```bash
yarn build
```

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Shadcn/ui components
│   ├── Auth/           # Authentication components
│   └── ...
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── pages/              # Page components
└── main.tsx           # Application entry point
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Technology Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn/ui
- **State Management**: React Query (TanStack Query)
- **Routing**: React Router v6
- **Icons**: Lucide React
- **Charts**: Recharts

## Architecture

### Merchant Configuration
Each merchant's payment method and settings are stored in a structured object:
```json
{
  "merchantId": "merchant-123",
  "paymentMethod": {
    "type": "mobile",
    "provider": "M-Pesa",
    "config": { "accountNumber": "07xxxxxxxx" }
  }
}
```

## Development Guidelines

1. **Component Organization**: Keep components small and focused
2. **TypeScript**: Use proper typing throughout the application
3. **Styling**: Use Tailwind CSS for consistent styling
4. **State Management**: Use React Query for server state, React hooks for local state
5. **Code Formatting**: Prettier and ESLint are configured for consistent code style

## Troubleshooting

### Common Issues

1. **Port already in use**: Change the port in `vite.config.ts` or kill the process using port 8080
2. **Module not found**: Run `npm install` to ensure all dependencies are installed
3. **TypeScript errors**: Check that all imports are correct and types are properly defined

### Getting Help

If you encounter issues:
1. Check the console for error messages
2. Ensure all dependencies are installed
3. Verify Node.js version compatibility
4. Clear node_modules and reinstall if needed: `rm -rf node_modules package-lock.json && npm install`

## Contributing

1. Create a feature branch: `git checkout -b feature/your-feature`
2. Make your changes following the project guidelines
3. Test your changes thoroughly
4. Submit a pull request with a clear description

## Author

Built by **Japhtech**
