# Cognitive Crafts Website

## Project Description

This repository contains the codebase for the Cognitive Crafts website, a modern, responsive web application built using React and Tailwind CSS. The website serves as a digital presence for Cognitive Crafts, showcasing their expertise in AI and Java development, their services, products, leadership, and industry insights.

The project follows a component-based architecture, making it modular and easy to maintain. It features smooth scrolling between sections, dark mode support, and responsive design for various devices.

## Technologies Used

- **React:** Frontend JavaScript library for building user interfaces.
- **Tailwind CSS:** A utility-first CSS framework for rapid styling.
- **Framer Motion:** A React library for production-ready animations.
- **React Router DOM:** For handling navigation (though primarily used for single-page smooth scrolling).
- **React Helmet Async:** For managing document head tags, including the favicon.
- **Lucide React:** A library of open-source icons.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

- Node.js and npm (or yarn) installed.

### Installation

1. Clone the repository:
   ```bash
   git clone <repository_url>
   cd cognitive-crafts-website
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

### Available Scripts

In the project directory, you can run the standard Create React App scripts:

- `npm start` or `yarn start`: Runs the app in development mode.
- `npm test` or `yarn test`: Launches the test runner.
- `npm run build` or `yarn build`: Builds the app for production.

## Website Sections and Features

The Cognitive Crafts website is structured into several key sections, accessible via the header navigation:

### Header

A sticky navigation bar at the top of the page. Features include:
- Company logo (using `icon.png` from `src/assets/images`)
- Company name "Cognitive Crafts" with a dynamic blue to purple gradient.
- Navigation links with smooth scrolling to respective sections.
- Active link highlighting in blue based on the clicked section.
- Theme toggle button (Light/Dark mode).
- Responsive mobile menu.

### Overview Section

The introductory section providing a brief overview of Cognitive Crafts. Features:
- Large, gradient-colored heading: "Welcome to Cognitive Crafts".
- Sub-text introducing the company.
- Three key feature points (AI-Powered Solutions, Custom Development, Expert Consultation).
- Animations using Framer Motion.

### Approach Section

Positioned between the Overview and Products sections, this section outlines the company's approach with key points.

### Products Section

Showcases the company's flagship products and upcoming projects. Features:
- Details for "DrishyaScan" and "TestAura".
- A list of "Upcoming Projects".
- Animations using Framer Motion.

### About Section

Provides detailed information about the company. Features:
- An "Our Story" timeline with key events.
- A "Why AI + Java?" section detailing advantages with titles and descriptions.
- Animations using Framer Motion.

### Service Section

Lists the various services offered by Cognitive Crafts.

### Technology Section

Details the technologies the company works with, categorized for clarity.

### Leadership Section

Introduces the leadership team (currently featuring Yash Desai). Features:
- Profile picture (using `profileimage.png` from `src/assets/images`).
- Name, title, and specialization.
- Social media links (LinkedIn, GitHub).
- Detailed sections on about, technical expertise, and key projects.
- Animations using Framer Motion.

### Insights Section

Provides industry statistics and trends related to AI and Java development. Features:
- A grid of insight cards with icons, categories, titles, and descriptions.
- Data covering market growth, technology dominance, integration trends, developer demand, performance, and innovation.
- Animations using Framer Motion.

### Contact Section

Allows users to get in touch with Cognitive Crafts. Features:
- "Get In Touch" heading and descriptive text.
- Contact information (Email, Phone, Address - placeholders initially, updated with provided details).
- A contact form with fields for Name, Email, and Message.
- Animations using Framer Motion.

### Footer

A simple footer at the bottom of the page. Features:
- Copyright notice with the current year.
- (Optional) Placeholder for social links.
- Animations using Framer Motion.

## Contributing

Instructions for contributing to the project.

## License

Information about the project's license.
