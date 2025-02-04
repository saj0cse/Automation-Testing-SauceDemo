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


