---
title: "Software Test Engineer — Semtech"
date: "2025-01-01"
description: "Internship validating cellular modem products (EM92, EM86), managing test environments across Windows and Linux, and investigating firmware issues."
tags: ["Co-op", "Embedded Firmware", "Linux", "Testing"]
featured: true
---
*Jan 2025 – Aug 2025*

During my internship at **Semtech**, I worked as a **Software Test Engineer Intern** on the validation of cellular modem products (**EM92**, **EM86**). My work covered test environment setup, driver and firmware testing, issue investigation, and test automation — with a strong focus on keeping environments stable and reliable before any test execution.

## Test Environment Setup

Much of my daily work started with preparing test laptops. I worked extensively in both **Windows** and **Linux** environments, handling setup tasks in both.

### Windows
- Performed **OS imaging (ghosting)** using Macrium Reflect
- Installed **EXE and INF drivers** for PCIe and USB devices
- Verified device and port visibility using **Device Manager**
- Stabilized systems through driver reinstallation, configuration updates, and reboots

### Linux
- Installed drivers and SDK packages
- Built required tools from source
- Verified device detection using system commands
- Resolved permission issues by adjusting user groups and access rights

> Environment stability is a prerequisite for trustworthy test results — most blocking issues came from setup, not the tests themselves.

## Driver and Firmware Work

Driver and firmware pairings directly affected device behavior, so I tested across multiple combinations to isolate their effects.

- Verified port exposure such as **NMEA, QMI, and MBIM** after driver installation
- Performed **firmware upgrades and image switches** on both Windows and Linux
- Compared behavior across different firmware versions
- Adjusted configurations and validated changes through reboot cycles

> Isolating whether a failure was caused by the driver, firmware, or environment was the first step before any escalation.

## Troubleshooting and Issue Investigation

When problems occurred, I did not immediately file bug reports. Instead, I first checked **reproducibility and scope**.

- Verified whether the issue occurred on other modules or devices
- Compared behavior against previous releases using **qTest records**
- Collected and reviewed logs to understand failure conditions
- Used **AT commands** to directly inspect device state when needed

On Linux systems, I frequently diagnosed **connectivity-related issues**:

- Checked network interfaces and routing tables
- Verified DNS configuration and restored connectivity step by step
- Confirmed device status before escalating issues

> Chasing a bug that turns out to be a known issue or an environment problem wastes everyone's time. Verifying scope and history first kept escalations meaningful.

## Test Execution and Tracking

Test requests and results were managed through **Jira** and **qTest**.

- Executed test cases defined in qTest
- Recorded results as **Pass / Fail** according to defined criteria
- Attached logs and clear reproduction steps for failed cases
- Reviewed and closed related tickets before sprint deadlines

> Clear documentation of failures — with logs and reproduction steps — reduced repeated work across the team.

## Automation and Test Framework Work

I converted existing manual test cases into automated **Pytest** tests, extending the framework to support multiple products.

- Modified and extended **Pytest-based test scripts**
- Refactored tests to support multiple products
- Extracted repeated verification logic to improve maintainability
- Added expected failures (**xfail**) to stabilize test results

> Converting manual tests to Pytest taught me that test code needs to be as maintainable as production code.

## Collaboration and Communication

When I encountered blockers, I asked **well-prepared questions**.

- Summarized what I had already tried
- Shared logs and configuration details
- Discussed issues in meetings to gain different perspectives

> A well-prepared question gets a useful answer. Engineers respond better when you show your work — what you tried, what you observed, what you ruled out.

## Reflection

Working at Semtech showed me that testing is about more than producing results — it's about building a **reliable foundation**.

> An unstable environment, poor documentation, or a missed configuration change can undermine an entire test cycle. Getting these right is the real work.
