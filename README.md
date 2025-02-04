Here is the complete README file for your **Automation Testing - SauceDemo Website** project in the correct format:

```markdown
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

Additionally, you’ll need the following packages installed:
- **WebDriverIO**
- **Allure Reporter**
- **Mocha** (Test Framework)

## Installation

1. **Clone the Repository**  
   Clone the repository to your local machine:
   ```bash
   git clone https://github.com/yourusername/saucedemo-automation-tests.git
   cd saucedemo-automation-tests
   ```

2. **Install Dependencies**  
   Run the following command to install all the necessary dependencies:
   ```bash
   npm install
   ```

3. **Configure WebDriverIO**  
   The WebDriverIO configuration file is pre-configured with the necessary browser capabilities and Allure reporter settings.

## Tests to Be Executed

### Q1 [Mark 20] - Locked Out User Login Test
- **Objective**: Log in with **locked_out_user** and verify that the error message is displayed.
- **Expected Result**: Display an error message indicating that the user is locked out.

### Q2 [Mark 50] - Standard User Purchase Flow Test
- **Objective**:
  1. Login with **standard_user**.
  2. Reset App State using the hamburger menu.
  3. Add 3 items to the cart.
  4. Navigate to the final checkout page and verify product names and total price.
  5. Complete the purchase and verify a successful order message.
  6. Reset App State again and log out.

### Q3 [Mark 30] - Performance Glitch User Test
- **Objective**:
  1. Login with **performance_glitch_user**.
  2. Reset App State.
  3. Filter products by name (Z to A).
  4. Select the first product, add to cart.
  5. Navigate to checkout and verify product names and total price.
  6. Complete the purchase and verify a successful order message.
  7. Reset App State again and log out.

## Test Execution Process

### 1. Run the Tests  
To run all the tests, execute the following command:

```bash
npx wdio run wdio.conf.js
```

This will:
- Launch a browser (by default Chrome).
- Execute the tests.
- Generate the Allure report.

### 2. Generate and View the Allure Report  
After the tests complete, you can generate and view the Allure report:

1. Install Allure globally (if you haven't done so yet):
   ```bash
   npm install -g allure-commandline --save-dev
   ```

2. Generate the Allure report:
   ```bash
   allure generate allure-results --clean
   ```

3. Open the Allure report:
   ```bash
   allure open
   ```

The Allure report will open in your browser, displaying detailed information about the test execution, including passed, failed, and skipped tests.

### 3. Reports after Each Test Execution  
After each test run, WebDriverIO will automatically generate the Allure results in the `allure-results/` directory.  
You can regenerate and view these results at any time using the `allure generate` and `allure open` commands.

## Test Framework and Tools

### WebDriverIO  
**WebDriverIO** is a test automation framework for Node.js. It controls a browser through the WebDriver protocol and allows you to run tests across multiple browsers and devices.

### Allure Reporter  
**Allure** is used for generating detailed and interactive reports of test executions. This reporter is integrated into WebDriverIO to provide insights into the test outcomes.

### Mocha (Test Framework)  
**Mocha** is the test framework used for structuring and running the tests.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add feature'`).
5. Push to your branch (`git push origin feature-branch`).
6. Create a pull request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

- GitHub: [Your GitHub Profile](https://github.com/yourusername)
- Email: your.email@example.com
```

---

This README is ready to be copied and pasted directly into your project. It includes detailed setup instructions, test execution steps, and how to generate and view the Allure report.