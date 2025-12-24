# Expense Tracker Frontend

Frontend application for the Expense Tracker built with React, TypeScript, Vite, Bun, and shadcn/ui.

## Features

- File upload for Excel bank statements (.xls, .xlsx)
- Interactive charts:
  - Credit transactions over time (line chart)
  - Debit transactions over time (line chart)
  - Expense categories breakdown (pie chart)
- Modern UI with shadcn/ui components
- Responsive design
- No authentication required

## Prerequisites

- [Bun](https://bun.sh/) installed on your system
  ```bash
  curl -fsSL https://bun.sh/install | bash
  ```

## Setup

1. Install dependencies:
```bash
bun install
```

2. Create a `.env` file (optional):
```env
VITE_BACKEND_BASE_URL=http://localhost:8080/api
```

3. Run the development server:
```bash
bun dev
```

The app will start on `http://localhost:5173`

## Available Scripts

- `bun dev` - Start development server
- `bun build` - Build for production
- `bun run type-check` - Run TypeScript type checking
- `bun run lint` - Run ESLint
- `bun run lint:fix` - Fix ESLint errors
- `bun run format` - Format code with Prettier
- `bun preview` - Preview production build

## Project Structure

```
src/
  ├── components/
  │   ├── expense/       # Expense tracking components
  │   │   ├── Dashboard.tsx
  │   │   ├── FileUpload.tsx
  │   │   └── Charts.tsx
  │   └── ui/            # shadcn/ui components
  ├── services/          # API services
  │   └── transactionService.ts
  └── types/             # TypeScript types
      └── transaction.ts
```

## Usage

1. Start the backend server (see backend README)
2. Start the frontend: `bun dev`
3. Open `http://localhost:5173` in your browser
4. Upload your Excel bank statement (.xls or .xlsx)
5. View your expense analytics in the dashboard:
   - Credit transactions timeline
   - Debit transactions timeline
   - Expense categories breakdown

## Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Bun** - Package manager and runtime
- **shadcn/ui** - UI component library
- **Recharts** - Chart library
- **Tailwind CSS** - Styling
- **Sonner** - Toast notifications
