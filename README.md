# Todo App - React + TypeScript + Vite + shadcn/ui

A lean todo application built with React, TypeScript, Vite, Tailwind CSS, and shadcn/ui components.

## 🚀 Quick Start

```bash
# Install dependencies
yarn install

# Start development server
yarn dev

# Build for production
yarn build

# Run linting
yarn lint

# Fix linting issues
yarn lint:fix

# Format code
yarn format

# Type checking
yarn type-check
```

## 🎯 Features

### **✅ Todo Management**

- **Create Todos** - Add new todos with title and optional description
- **View Todos** - Display all todos in a clean card layout
- **Toggle Completion** - Mark todos as complete or incomplete
- **Delete Todos** - Remove todos with confirmation
- **Statistics** - Shows completed count and total count
- **Responsive Design** - Works on desktop and mobile
- **Real-time Updates** - Automatic refresh after operations

### **✅ shadcn/ui Components**

- **Modern UI Components** - Beautiful, accessible components
- **Tailwind CSS Integration** - Seamless styling with utility classes
- **TypeScript Support** - Fully typed components
- **Dark Mode Ready** - Built-in dark mode support
- **Accessible** - WCAG compliant components

## 🏗️ Project Structure

```
├── src/
│   ├── App.tsx                    # Main React component
│   ├── main.tsx                  # Application entry point
│   ├── index.css                 # Global styles with Tailwind
│   ├── components/
│   │   ├── todo/                 # Todo components
│   │   │   ├── TodoApp.tsx      # Main todo app component
│   │   │   ├── TodoList.tsx     # Todo list display
│   │   │   ├── TodoItem.tsx     # Individual todo item
│   │   │   └── TodoForm.tsx     # Todo create/edit form
│   │   └── ui/                   # shadcn/ui components
│   ├── services/
│   │   └── todoService.ts       # API service for todos
│   └── types/
│       └── todo.ts               # TypeScript types
├── public/                        # Public assets
├── tsconfig.json                 # TypeScript configuration
├── eslint.config.js              # ESLint configuration
├── vite.config.ts                # Vite configuration
└── package.json                  # Project dependencies
```

## 🔌 API Integration

The frontend connects to the backend API at `http://localhost:8080/api`. Make sure the backend is running before starting the frontend.

### API Endpoints Used

- `GET /api/todos` - Fetch all todos
- `POST /api/todos` - Create new todo
- `PUT /api/todos/:id` - Update todo
- `PATCH /api/todos/:id/toggle` - Toggle completion
- `DELETE /api/todos/:id` - Delete todo

## 🎨 Using shadcn/ui Components

### Available Components

- **Button** - Various button styles and variants
- **Card** - Content containers with header and content sections
- **Input** - Text input fields
- **Label** - Form labels
- **Sonner** - Toast notifications

### Adding New Components

To add new shadcn/ui components:

```bash
npx shadcn@latest add [component-name]
```

## 🔧 Configuration

### API Base URL

The API base URL is configured in `src/services/todoService.ts`. To change it:

```typescript
const API_BASE_URL = 'http://localhost:8080/api';
```

## 📝 TypeScript Configuration

- **Strict mode enabled** - Maximum type safety
- **Modern ES2022** target
- **React optimized** - Perfect for frontend applications
- **Source maps** - Better debugging experience

## 🧪 Testing

```bash
# Type checking
yarn type-check

# Linting
yarn lint

# Format checking
yarn format:check
```

## 🎉 Benefits

- **🔒 Type Safe** - Strict TypeScript configuration
- **🚫 Prevents Runtime Errors** - Comprehensive type checking
- **🧹 Clean Code** - Consistent formatting and style
- **🎨 Modern UI** - Beautiful shadcn/ui components
- **⚡ Fast Performance** - Vite for rapid development
- **📱 Responsive** - Works on all devices

## 📚 Additional Resources

- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org)
- [Vite Documentation](https://vitejs.dev)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Tailwind CSS Documentation](https://tailwindcss.com)
