---
title: "Automation Tester — Safe Fleet"
date: "2024-10-20"
description: "Co-op internship implementing Pytest frameworks and designing standardized test templates to streamline QA processes."
tags: ["Co-op", "Pytest", "Test Automation", "Python"]
featured: false
---
*Jan 2024 – Aug 2024*

During my co-op at **Safe Fleet**, I built and maintained a **Pytest-based test automation framework** for Body Worn Camera (BWC) devices. My work evolved from writing individual test scripts to designing a reusable framework template used across the full test suite.

## Key Accomplishments

By the end of the term, the BWC test suite had a consistent, maintainable structure it did not have before. I designed the framework template that gave it that structure, centralized all verification logic into a single reusable module, and migrated every existing test file to align with it — while also refactoring the shared libraries the tests depended on.

## Framework Design

The most significant contribution was designing a **uniform test structure** that made writing new tests faster and more consistent.

Each test file consists of two components:

- `test_***` — executes the test using **8 fixed steps**: dock/mount, initialize with parameters, build expected state, undock, trigger, redock, verify, undock
- `get_expected_dict` — builds the expected state dictionary; verification logic dispatches based on its keys

This pattern meant that adding a new test required only defining the expected state — the scaffolding was already in place.

> Standardizing the test lifecycle eliminated repeated boilerplate and made each new test file easy to review and understand at a glance.

## Library Development

I spent the first months reviewing, cleaning up, and extending the shared libraries before writing tests against them.

- Fixed outdated code and removed redundant functions across `lib_bwc.py`, `lib_bwc_user.py`, `lib_bwc_rootdir.py`, and `lib_gen.py`
- Added `log_metadata_parser` and `get_inf_from_metadata` for extracting data from DCIM metadata files
- Added `init_camera` to `lib_gen.py` — automatically places required config files before test execution, removing manual setup steps
- Added consistent **docstrings and type hints** across all library and test functions

> Cleaning up the library first meant the test code built on top of it was cleaner from the start.

## Test Coverage

I wrote and migrated Pytest files covering:

**BWC features tested:** firmware flash, EnableCAT, tag events, bookmarks, multi-recording, hash verification, snapshots, encryption, and video recording.

All tests were aligned to the standardized template by the end of the term and merged into the `develop` branch.

> Using `parametrize` for multi-input scenarios and `xfail` markers for known limitations helped keep the test suite stable and honest about coverage gaps.

## Timeline

| Period | Focus |
|--------|-------|
| Jan | Onboarding; documented BWC config parameters and manual execution steps |
| Feb | Library cleanup and refactoring; merged updates into `develop` |
| Mar | New library functions for metadata parsing |
| Apr | Docstrings, type hints, converted first Unit Tests to Pytest |
| May–Jun | Expanded Pytest coverage across 6+ feature areas |
| Jul | Designed the standardized test template and `lib_bwc_verifications.py` |
| Aug | Migrated all remaining tests to the new template; final PR merges |

## Reflection

This co-op gave me hands-on experience building a test framework rather than just using one.

> Designing for reuse — so the next test is easier to write than the last — turned out to be the most valuable skill I practiced here.
