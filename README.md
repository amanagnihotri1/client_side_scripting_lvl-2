[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
# Client Side Scripting Level-2 Assignment

## Description

The Job Apply doctype is designed to manage job applications with specific roles such as Developer, QA, or Graphic Designer. It includes a parent-child relationship where each parent record represents a job application with associated details.

## Parent Doctype: Job Apply

### Fields:

- **Role**: A select field with options (Developer, QA, Graphic Designer).
- **Details**: A child table containing the following fields:

### Child Table: Details

#### For Developer Role:

- **Language**: Select Field with options: Python, JavaScript, PHP.
- **Framework**: Read Only Field dynamically populated based on the selected language.
- **IDEs**: Select Field with options: VS Code, IntelliJ IDEA, etc.
- **Applied Date**: Read Only Date Field automatically populated when IDEs field is filled.
- **Initials**: Data Field automatically populated with user's full name alongside the applied date.

#### For QA Role:

- **Testing Tools**: Select Field with options: Selenium, Appium, JUnit, etc.
- **Bug Tracking System**: Select Field with options: Jira, Bugzilla, etc.
- **Automation Experience**: Integer Field.
- **Test Environments**: Data Field.
- **Applied Date**: Read Only Date Field automatically populated when Test Environments field is filled.
- **Initials**: Data Field automatically populated wi

## Technologies Used

- Frappe
- Docker


## Prerequisites

Before running this project, ensure you have the following installed:

- #### Docker Desktop (Docker)
    Docker Desktop is a one-click-install application for your Mac, Linux, or Windows environment that lets you build, share, and run containerized applications and microservices.It provides a straightforward GUI (Graphical User Interface) that lets you manage your containers, applications, and images directly from your machine. Docker Desktop reduces the time spent on complex setups so you can focus on writing code. It takes care of port mappings, file system concerns, and other default settings, and is regularly updated with bug fixes and security updates.To Install Docker Desktop <a href="https://docs.docker.com/desktop/" alt="not found">Click Here</a>

- #### Frappe
    Frappe, pronounced fra-pay, is a full stack, batteries-included, web framework written in Python and Javascript with MariaDB as the database. It is the framework which powers ERPNext, is pretty generic and can be used to build database driven apps. To install latest version <a href="https://frappeframework.com/docs/user/en/introduction" alt="not found">Click Here</a>


## Installation
1. Install Docker desktop and open command prompt.
2. Inside command promt type this command
   ```bash
   docker pull ubuntu:22.04
   docker run -dt --name bench -p 8000:8000 ubuntu:22.04 /bin/bash
   ```
4. Next setup frappe framework, to setup <a href="https://wiki.nestorbird.com/wiki/install-frappe-v15">Click here</a>
5. Navigate to **Customization > DocType**
6. Create a new DocType named "Student".
7. Add the specified fields according to the provided instructions.
## Usage
1. open bench directory and inside that enable developer mode -
 ```bash
bench set-config -g developer_mode 1
  ```
2. start postgres service by running this command
   ```bash
   sudo service postgresql start
   ```
3. Start Bench with 2 commands
   ```bash
   bench use your_bench_name
   bench start
   ```
## Authors

- [@amanagnihotri1](https://www.github.com/amanagnihotri1)
