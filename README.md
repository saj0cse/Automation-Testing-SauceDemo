# Automation Testing - SauceDemo Website

## Description
This repository contains automated tests for the **SauceDemo** website (https://www.saucedemo.com/), written using **WebDriverIO** (JavaScript) for browser automation and **Allure** for generating test reports.

The following tests are implemented:
- Login and error verification with the **locked_out_user**.
- Login with **standard_user**, product purchase flow, and verification of product details.
- Login with **performance_glitch_user**, filtering products, and verification of the purchase flow.

## Prerequisites
Before you can run the tests, ensure you have the following installed:
- **Node.js** (v14 or higher)
- **npm** (Node Package Manager)
- **Git** (For version control)

Additionally, you’ll need the following packages installed:
- **WebDriverIO**
- **Allure Reporter**
- **Mocha** (Test Framework)



## Installation
1. **Clone the Repository**  
   Clone the repository to your local machine:
   ```bash
   git clone https://github.com/saj0cse/Automation-Testing-SauceDemo.git
   ```

2. **Initialize the Project**
   Run the following commands to set up the project:
   ```bash
   npm init -y
   ```

Use the `npm init` wizard to initialize the project with the following options:
   - **Package Name**: `webdriverio_framework`
   - **Version**: `1.0.0`
   - **Description**: `webdriverio_page_object_framework`
   - **Entry Point**: `index.js`
   - **Test Command**: (Leave empty)
   - **Git Repository**: (Leave empty)
   - **Keywords**: `webdriverio_page_object_framework`
   - **Author**: `Shakil_Ahammed`
   - **License**: `ISC`

### 3. Install WebDriverIO CLI

Install the WebDriverIO CLI globally using:
```bash
npm i @wdio/cli
```

### 4. Configure WebDriverIO

Run the configuration wizard to set up WebDriverIO with the desired settings:
```bash
npx wdio config
```

The wizard will ask a series of questions to set up the framework:
- **A project named "webdriverio_framework"** was detected, correct? (Answer **yes**)
- **Testing type**: E2E Testing - of Web or Mobile Applications
- **Backend**: On my local machine
- **Environment**: Web - web applications in the browser
- **Browser**: Chrome
- **Testing Framework**: Mocha
- **Typescript**: No
- **Test Files Location**: `D:\SQA\Automation API Testing\Automation Testing Assessment\test\specs\**\*.js`
- **Page Objects**: Yes
- **Page Objects Location**: `D:\SQA\Automation API Testing\Automation Testing Assessment\test\pageobjects\**\*.js`
- **Reporter**: `spec`
- **Visual Testing**: No
- **Services**: No
- **Run `npm install`**: Yes

### 5. Install Allure Reporter

Install Allure Reporter to generate reports:
```bash
npm install @wdio/allure-reporter --save-dev
npm install -g allure-commandline --save-dev
```


## Tests to Be Executed
### 01 - Locked Out User Login Test
- **Objective**: Log in with **locked_out_user** and verify that the error message is displayed.
- **Expected Result**: Display an error message indicating that the user is locked out.

### 02 - Standard User Purchase Flow Test
- **Objective**:
  1. Login with **standard_user**.
  2. Reset App State using the hamburger menu.
  3. Add 3 items to the cart.
  4. Navigate to the final checkout page and verify product names and total price.
  5. Complete the purchase and verify a successful order message.
  6. Reset App State again and log out.

### 03 - Performance Glitch User Test
- **Objective**:
  1. Login with **performance_glitch_user**.
  2. Reset App State.
  3. Filter products by name (Z to A).
  4. Select the first product, add to cart.
  5. Navigate to checkout and verify product names and total price.
  6. Complete the purchase and verify a successful order message.
  7. Reset App State again and log out.



### 01. Running Tests and Generating Allure Report

To run your tests and generate the Allure report, follow these steps:

1. **Run the tests**:
   ```bash
   npx wdio run wdio.conf.js
   ```

2. **Generate the Allure report**:
   After the tests complete, generate the Allure report with:
   ```bash
   allure generate allure-results --clean
   ```

3. **Open the Allure report**:
   To view the generated report, run:
   ```bash
   allure open
   ```
The Allure report will open in your browser, displaying detailed information about the test execution, including passed, failed, and skipped tests.



## Contact

- GitHub: [GitHub](https://github.com/saj0cse)
- Linkedin: [Linkedin](https://www.linkedin.com/in/saj0cse)
- Email: shakil.cse40@gmail.com
