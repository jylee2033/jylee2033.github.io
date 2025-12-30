---
layout: post
title: Software Test Engineer
date: 2025-9-23 12:18 -0800
categories: [Co-op]
tags: [Co-op, Software Test Engineer, Embedded Firmware, Hybrid, Manual Tester]
---
*Jan 2025 – Aug 2025*

During my internship at Semtech, I worked as a Software Test Engineer Intern supporting the validation of cellular modem products such as **EM92** and **EM86**. My work focused on preparing and maintaining test environments, executing driver and firmware tests, and investigating issues when devices did not behave as expected.

A significant part of my role involved ensuring that test environments were stable and ready before testing could begin. Rather than only running test cases, I spent much of my time identifying and resolving environment-related issues that could block or invalidate testing.

## Test Environment Setup

Much of my daily work started with preparing test laptops. I worked extensively in both **Windows** and **Linux** environments, handling setup tasks directly.

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

Because many test failures originated from environment issues, it was important to first determine whether a system was in a valid and testable state.

## Driver and Firmware Work

Driver and firmware combinations often affected device behavior, so I repeatedly tested different configurations.

- Verified port exposure such as **NMEA, QMI, and MBIM** after driver installation  
- Performed **firmware upgrades and image switches** on both Windows and Linux  
- Compared behavior across different firmware versions  
- Adjusted configurations and validated changes through reboot cycles  

When issues appeared, I focused on determining whether the root cause was related to the **driver**, **firmware**, or **environment setup**.

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

## Test Execution and Tracking

Test requests and results were managed through **Jira** and **qTest**.

- Executed test cases defined in qTest  
- Recorded results as **Pass / Fail** according to defined criteria  
- Attached logs and clear reproduction steps for failed cases  
- Reviewed and closed related tickets before sprint deadlines  

Clear documentation was essential so that others could quickly understand test outcomes and continue investigations if needed.

## Automation and Test Framework Work

Some of my work involved converting existing manual test cases into automated tests.

- Modified and extended **Pytest-based test scripts**  
- Refactored tests to support multiple products  
- Extracted repeated verification logic to improve maintainability  
- Added expected failures (**xfail**) to stabilize test results  

Through this work, I learned the importance of writing test code that is **readable and maintainable**, not just functional.

## Collaboration and Communication

When I encountered blockers, I made an effort to ask **well-prepared questions**.

- Summarized what I had already tried  
- Shared logs and configuration details  
- Discussed issues in meetings to gain different perspectives  

This experience taught me that clearly communicating technical problems is as important as solving them.

## Reflection

My time at Semtech helped me understand that testing is not only about producing results, but about building and maintaining a reliable foundation.

- An unstable environment leads to unreliable tests  
- Poor documentation causes repeated issues  
- Small configuration changes can have system-wide impact  

Working behind the scenes on these foundational tasks gave me a deeper appreciation for the role of careful setup, troubleshooting, and documentation in engineering workflows.