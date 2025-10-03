# NuCampsite - React Camping Website

![React](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react)
![Redux](https://img.shields.io/badge/Redux-Toolkit-764ABC?logo=redux)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.1-7952B3?logo=bootstrap)
![License](https://img.shields.io/badge/license-MIT-blue)
![Status](https://img.shields.io/badge/status-active-success)

A modern, responsive camping website built with React, Redux Toolkit, and Bootstrap. Browse campsites, view details, read and submit comments, and explore camping promotions with a beautiful single-page application.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Screenshots](#screenshots)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Technologies](#technologies)
- [Available Scripts](#available-scripts)
- [Testing](#testing)
- [Deployment](#deployment)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Overview

NuCampsite is a full-featured camping website application that demonstrates modern React development practices including:

- React 18 with functional components and hooks
- Redux Toolkit for state management
- React Router for navigation
- Bootstrap 5 and Reactstrap for responsive UI
- Formik for form handling
- React Spring for animations

## Features

### Campsite Management
- **Browse Campsites**: View a complete list of available camping locations
- **Campsite Details**: Detailed information pages for each campsite with images and descriptions
- **Comments System**: Read and submit comments for campsites
- **Ratings**: View campsite ratings and reviews from other users

### User Interface
- **Responsive Design**: Fully responsive layout using Bootstrap 5
- **Modern Navigation**: Smooth page transitions with React Router
- **Animations**: Engaging animations using React Spring
- **Custom Fonts**: Lobster and Open Sans typography
- **Font Awesome Icons**: Rich iconography throughout

### Data Management
- **Redux Store**: Centralized state management with Redux Toolkit
- **Redux Logger**: Development logging for debugging
- **Mock Data**: Pre-loaded campsites, comments, promotions, and partners

### Additional Features
- **Promotions Section**: Featured camping promotions and deals
- **Partners Display**: Showcase of camping partners and affiliates
- **Contact Information**: Easy access to contact details
- **About Page**: Information about NuCampsite

## Screenshots

> **Note:** Screenshots will be added soon. For now, follow the installation instructions below to see the project in action at http://localhost:3000

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: version 14.0 or higher
- **npm**: version 6.0 or higher (comes with Node.js)
- **Git**: For cloning the repository

To check your versions:
```bash
node --version
npm --version
```

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd CampingWebsiteReact
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## Usage

### Running the Application

```bash
npm start
```
Runs the app in development mode at [http://localhost:3000](http://localhost:3000).
The page will hot-reload when you make changes.

### Building for Production

```bash
npm run build
```
Creates an optimized production build in the `build/` folder.

### Running Tests

```bash
npm test
```
Launches the test runner in interactive watch mode.

## Project Structure

```
CampingWebsiteReact/
├── public/               # Static files
├── src/
│   ├── app/
│   │   ├── assets/       # Images and static assets
│   │   ├── shared/       # Shared data (campsites, comments, etc.)
│   │   └── store.js      # Redux store configuration
│   ├── components/       # Reusable components
│   │   ├── Header.js
│   │   └── Footer.js
│   ├── features/         # Feature-specific components
│   │   ├── campsites/    # Campsite components
│   │   └── counter/      # Redux counter example
│   ├── App.js            # Main application component
│   ├── App.css           # Global styles
│   └── index.js          # Application entry point
├── package.json          # Dependencies and scripts
└── README.md
```

## Technologies

### Core
- **React 18.3.1** - UI library
- **React Router 6.2.1** - Client-side routing
- **Redux Toolkit 1.9.7** - State management
- **React Redux 8.1.3** - React bindings for Redux

### UI Framework
- **Bootstrap 5.1.3** - CSS framework
- **Reactstrap 9.2.2** - Bootstrap components for React
- **Bootstrap Social 5.1.1** - Social media buttons
- **Font Awesome 4.7.0** - Icon library

### Forms & Validation
- **Formik 2.2.9** - Form management
- **Yup** - Form validation (if configured)

### Animations
- **React Spring 9.4.5** - Spring-physics based animations

### Development Tools
- **Redux Logger 3.0.6** - Redux action logging
- **React Scripts 5.0.1** - Build tooling (Create React App)
- **Testing Library** - Component testing utilities

### Typography
- **Typeface Lobster** - Display font
- **Typeface Open Sans** - Body font

## Available Scripts

### `npm start`
Runs the app in development mode with hot-reloading.

**Note:** Uses `NODE_OPTIONS=--openssl-legacy-provider` for compatibility with older OpenSSL versions.

### `npm test`
Launches the test runner in interactive watch mode.

### `npm run build`
Builds the app for production to the `build` folder with optimized bundles.

### `npm run eject`
**Warning:** This is a one-way operation. Ejects from Create React App, giving you full control over configuration files.

## Testing

This project uses React Testing Library and Jest for testing.

### Running Tests
```bash
npm test
```

### Test Structure
- Unit tests for individual components
- Integration tests for feature components
- Redux slice tests for state management

### Writing Tests
Tests are colocated with components:
```
Component.js
Component.test.js
```

## Deployment

### Building for Production

1. **Create production build**
   ```bash
   npm run build
   ```

2. **Deploy the `build/` folder** to your hosting service:

#### Option 1: GitHub Pages
```bash
npm install -g gh-pages
npm run build
gh-pages -d build
```

#### Option 2: Netlify
1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `build`

#### Option 3: Vercel
```bash
npm install -g vercel
vercel
```

#### Option 4: Traditional Hosting
Upload the contents of the `build/` folder to your web server.

### Environment Variables

If you add environment variables:
1. Create `.env` file (already in .gitignore)
2. Prefix variables with `REACT_APP_`
3. Access via `process.env.REACT_APP_VARIABLE_NAME`

## Troubleshooting

### Common Issues

**Issue:** `Error: error:0308010C:digital envelope routines::unsupported`

**Solution:** This is an OpenSSL compatibility issue. The scripts already include `NODE_OPTIONS=--openssl-legacy-provider` to fix this. If it persists:
```bash
export NODE_OPTIONS=--openssl-legacy-provider
npm start
```

---

**Issue:** `Cannot find module 'bootstrap'` or other dependencies

**Solution:** Delete node_modules and reinstall:
```bash
rm -rf node_modules package-lock.json
npm install
```

---

**Issue:** Port 3000 is already in use

**Solution:** Either kill the process using port 3000 or specify a different port:
```bash
PORT=3001 npm start
```

---

**Issue:** Build fails with warnings treated as errors

**Solution:** Create `.env` file with:
```
GENERATE_SOURCEMAP=false
CI=false
```

---

**Issue:** `Module not found: Can't resolve 'typeface-lobster'`

**Solution:** Ensure all font packages are installed:
```bash
npm install typeface-lobster typeface-open-sans
```

---

**Issue:** Redux store is not working

**Solution:** Check that `Provider` wraps your app in `index.js`:
```javascript
import { Provider } from 'react-redux';
import { store } from './app/store';

<Provider store={store}>
  <App />
</Provider>
```

For additional help, please [open an issue](https://github.com/your-repo/issues) or contact support.

## Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/AmazingFeature
   ```
5. **Open a Pull Request**

### Coding Standards
- Follow existing code style and formatting
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed
- Ensure all tests pass before submitting PR

### Code Style
- Use functional components with hooks
- Follow React best practices
- Use Redux Toolkit for state management
- Keep components small and focused
- Write self-documenting code with clear naming

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact & Support

- **Repository**: [GitHub](https://github.com/your-username/CampingWebsiteReact)
- **Issues**: Please report bugs and feature requests via [GitHub Issues](https://github.com/your-username/CampingWebsiteReact/issues)
- **Author**: Jose Santiago Echevarria

## Learn More

- [React Documentation](https://reactjs.org/)
- [Redux Toolkit Documentation](https://redux-toolkit.js.org/)
- [React Router Documentation](https://reactrouter.com/)
- [Bootstrap Documentation](https://getbootstrap.com/)
- [Reactstrap Documentation](https://reactstrap.github.io/)
- [Create React App Documentation](https://facebook.github.io/create-react-app/docs/getting-started)

---

**Built with ❤️ using React and Redux Toolkit**
