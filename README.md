---

# Betting API

This is a betting API built with Node.js, Express, and Sequelize. This guide will help you set up and run the project using Docker Compose and without it.

## Prerequisites

- Node.js (v18+ recommended)
- Docker & Docker Compose
- PostgreSQL (if not using Docker)

## Setup

1. Clone the repository:

```bash
git clone https://github.com/your-username/betting-API.git
cd betting-API
```

2. Install dependencies (only if running without Docker):

```bash
npm install
```

3. Copy `.env.example` to `.env` and modify the variables to fit your configuration:

```bash
cp .env.example .env
```

## Running with Docker Compose

1. Build and start the Docker containers:

```bash
docker-compose up --build
```

2. The API should now be accessible at `http://localhost:4000` (or whichever port you've specified in your `.env` file).

## Running without Docker

1. Ensure your PostgreSQL server is running and accessible.

2. Start the server:

```bash
npm run dev
```

3. The API should now be accessible at `http://localhost:4000` (or whichever port you've specified in your `.env` file).

