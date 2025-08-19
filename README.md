# pycray-assignment

This is a monorepo project managed with [pnpm workspaces](https://pnpm.io/workspaces) and [Turborepo](https://turbo.build/). It contains a Next.js web application and related packages.

## Project Structure

- `apps/web/` - Main Next.js web application
- `apps/web/components/` - React components
- `apps/web/store/` - Zustand store for state management
- `apps/web/utils/` - Utility functions
- `apps/web/app/` - Next.js app directory (pages, layouts, etc.)
- `apps/web/public/` - Static assets

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or above recommended)
- [pnpm](https://pnpm.io/) (install via `npm install -g pnpm`)

### Install Dependencies

```sh
pnpm install
```

### Run the Development Server

```sh
pnpm run dev
```

The app will be available at [http://localhost:3000](http://localhost:3000).

### Build for Production

```sh
cd apps/web
pnpm build
```

### Linting

```sh
cd apps/web
pnpm lint
```

## Tech Stack
- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [Zustand](https://zustand-demo.pmnd.rs/)
- [Turborepo](https://turbo.build/)
- [pnpm](https://pnpm.io/)

## License

MIT
