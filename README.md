# Movie App

Welcome to the Movie App! This application allows users to search for movies using the OMDb API. Users can search for movies by title, view movie details, and more.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed on your local machine:

- Node.js (recommended version: 20.x)
- Yarn (optional, but recommended for package management)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/fatihes1/movie-app
```

2. Navigate to the project directory:

```bash
cd movie-app
```

3. Install dependencies:

```bash
yarn install
```

4. Create a `.env.local` file in the root directory based on `.env.example` and replace `YOUR_OMDB_API_KEY` with your actual OMDb API key.

### Local Development

To run the app locally:

```bash
yarn dev
```

This will start the development server and open the app in your default web browser.

### Docker

Alternatively, you can run the app in a Docker container:

1. Build the Docker image:

```bash
docker build -t movie-app .
```

2. Run the Docker container:

```bash
docker run -d --rm -p 5173:5173 --name movie-app movie-app
```

3. Check if the container is running:

```bash
docker ps
```
You should see the movie-app container in the list.

4. Open http://localhost:5173 in your web browser.

### Contributing

Contributions are welcome! If you have any ideas, suggestions, or found a bug, feel free to open an issue or create a pull request.
