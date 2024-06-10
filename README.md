# Personal Bookshelf React Application

This project is a React application that allows users to search for books using the Open Library API and maintain a personal bookshelf stored in the browser using localStorage. The application features real-time search results and trending books display.

## Features

- Search for books using the Open Library API
- View trending books
- Add books to a personal bookshelf
- Persist bookshelf using localStorage
- Responsive design

## Prerequisites

Make sure you have the following installed:

- Node.js (v12 or higher)
- npm (v6 or higher) or yarn (v1.22 or higher)

## Setup Instructions

### Clone the Repository

Open your terminal and clone the repository using the following command:

```bash
git clone https://github.com/your-username/my-bookshelf.git
Navigate to the Project Directory
Change to the project directory:
cd my-bookshelf
Install Dependencies
Install the project dependencies using npm or yarn:
npm install
# or
yarn install
Running the Application

To start the application on your local machine, run the following command:
npm start
# or
yarn start

This will start the development server and open the application in your default web browser. The application will be available at http://localhost:3000.

Building the Application
To create a production build of the application, run:
npm run build
# or
yarn build

The build artifacts will be stored in the build directory.
Linting and Formatting
To check the code for linting errors, run:
npm run lint
# or
yarn lint

Project Structure
Here is a brief overview of the project structure:

my-bookshelf/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── BookCard.js
│   │   ├── BookCard.css
│   │   ├── BookSearch.js
│   │   ├── Bookshelf.js
│   │   └── ...
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   ├── index.css
│   └── ...
├── package.json
├── README.md
└── ...

Dependencies
- React
- React Router DOM
- Axios