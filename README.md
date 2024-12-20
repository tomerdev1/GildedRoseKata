Gilded Rose Inventory System

Welcome to the Gilded Rose Inventory System! This repository implements a solution for the Gilded Rose Kata, a classic refactoring exercise. The application simulates the daily quality updates of various inventory items, following specific rules for each type of item.

--------------------------------
Overview

The Gilded Rose Inventory System manages an inventory of items, updating their quality and sell-by values daily according to predefined rules. The repository includes both the application logic and a comprehensive test suite written in Jest to validate the functionality.

--------------------------------
Getting Started

Prerequisites

Ensure you have the following installed on your machine:

Node.js (v14 or later)

npm (Node Package Manager, typically included with Node.js)

Installation

Clone the repository:

git clone git@github.com:tomerdev1/GildedRoseKata.git

cd GildedRoseKata

Install dependencies:

npm install

--------------------------------
Running the Application

To run the application and simulate inventory updates:

Open a terminal in the project directory.

Run the application script with a predefined simulation:

npx ts-node src/app.ts

This will output the updated inventory for each simulated day.

Alternatively, you can modify the items in the src/app.ts file to simulate different scenarios.

--------------------------------
Running Tests

This repository uses Jest for testing. To run the test suite:

npm run test:jest

--------------------------------
Building the Application

After making changes to .ts files, make sure to run the following command to compile the TypeScript files:

npm run compile
