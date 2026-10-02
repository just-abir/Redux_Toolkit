# Redux Toolkit Media Explorer

A React-based media discovery app built to explore Redux Toolkit, API integration, routing, and client-side favorites. The application lets users search for photos and videos, browse media categories, and save favorites to a personal collection.

## Features

- Search and browse photos from Unsplash
- Search and browse videos from Pexels
- Separate photo, video, and GIF navigation routes
- Save and view favorite media items
- Global state management with Redux Toolkit
- Client-side routing with React Router
- Toast notifications with React Hot Toast
- Responsive styling with Tailwind CSS
- Fast local development and production builds with Vite

## Tech Stack

- React
- JavaScript (ES Modules)
- Redux Toolkit and React Redux
- React Router
- Axios
- Unsplash API
- Pexels API
- Tailwind CSS
- Vite

## Project Structure

```text
Redux_Toolkit/
└── frontend/
    ├── public/
    ├── src/
    │   ├── api/              # External media API requests
    │   ├── components/       # Reusable React components
    │   ├── redux/
    │   │   ├── Features/     # Redux slices
    │   │   └── store.js       # Redux store configuration
    │   ├── App.jsx            # Application routes and layout
    │   └── main.jsx           # Application entry point
    ├── package.json
    └── vite.config.js
```

## Getting Started

### Prerequisites

- Node.js 18 or later
- npm
- Unsplash API credentials
- Pexels API credentials

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/just-abir/Redux_Toolkit.git
   cd Redux_Toolkit/frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file inside the `frontend` directory:

   ```env
   VITE_ACCESS_KEY=your_unsplash_access_key
   VITE_PEXELS_KEY=your_pexels_api_key
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL shown in your terminal, usually `http://localhost:5173`.

## Available Scripts

Run these commands from the `frontend` directory:

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Create a production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint checks |

## Routes

| Route | Description |
| --- | --- |
| `/` | Main media discovery page |
| `/photos` | Photo browsing view |
| `/videos` | Video browsing view |
| `/gif` | GIF browsing view |
| `/favourite` | Saved favorite media collection |

## Redux State

The Redux store currently includes:

- `search`: Handles search-related state
- `favourite`: Stores favorite media items

The store is configured in `frontend/src/redux/store.js`, while feature logic lives in `frontend/src/redux/Features/`.

## Environment Variables

The following Vite environment variables are required for API requests:

| Variable | Purpose |
| --- | --- |
| `VITE_ACCESS_KEY` | Unsplash API access key |
| `VITE_PEXELS_KEY` | Pexels API key |

Do not commit real API keys to the repository. Keep them in a local `.env` file and ensure that file remains ignored by Git.

## Contributing

1. Fork the repository.
2. Create a feature branch:

   ```bash
   git checkout -b feature/your-feature
   ```

3. Make your changes and run the lint and build checks:

   ```bash
   npm run lint
   npm run build
   ```

4. Commit your changes and open a pull request.

## License

No license has been specified for this repository yet.
