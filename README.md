# Single Page CV

A modern, responsive single-page CV/resume builder created with React and Vite. This project allows users to create professional resumes with a clean, minimalist design.

## Quick Start

Clone and run this project locally by following these steps:

```bash
# Clone the repository
git clone https://github.com/yourusername/single-page-cv.git

# Navigate to project directory
cd single-page-cv

# Install dependencies
npm install

# Start development server
npm run dev
```

## Project Overview

This project is part of the [Frontend Projects on Roadmap.sh](https://roadmap.sh/projects/single-page-cv). It demonstrates modern frontend development practices including:

## Components

### Header Component

- Displays personal information and contact details
- Uses semantic HTML with <address> tags for contact information
- Implements accessible email and phone number links

### Experience Component

- Manages work history using a data-driven approach
- Implements date formatting using toLocaleDateString
- Uses semantic HTML with <article> tags for each position
- Maintains chronological order with the most recent experience first

### Skills Component

- Displays technical skills in a comma-separated format
- Implements dynamic rendering from a skills array
- Ensures proper punctuation handling

### Education Component

- Presents educational background with semantic HTML
- Includes microdata attributes for better SEO
- Uses proper time elements for dates

## Features

- Semantic HTML structure for accessibility and SEO
- Responsive design for all screen sizes
- Component-based architecture for maintainability
- Data-driven content management
- Proper date formatting
- Accessible markup
