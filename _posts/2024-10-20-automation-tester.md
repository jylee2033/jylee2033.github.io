---
layout: post
title: Automation Tester - Embedded Firmware Team
date: 2024-10-20 06:16 -0800
categories: [Co-op]
tags: [Co-op, Automation Tester, Embedded Firmware, Hybrid, Manual Tester]
---
# Outline / Agenda
- Key Accomplishments (January - August)
- Co-op Experience Summary

# January
- Jan 8 : First day! 😆
- Went through the Confluence documents to understand devices
- Explored BWC’s config parameters
- Jan 17 : First sprint meeting
- Listed test cases and wrote test execution steps for 6 parameters : 
<a href="https://real-thyme-6b7.notion.site/12f8e490fe854ae189f6cefe58c07157?v=cdfb0843c41b443bb18087fccdc6a1aa">X2 Test Executions</a> 
    - DoubleClick
    - EnableCAT
    - TagEvent
    - OSDPDName
    - DefaultEvent
    - PreEventLength

    → enhanced my understanding of the parameters needed when writing test code

# February
- Reviewed all the functions in the libraries
- Updated outdated code
- Fixed any errors that occurred
- Removed redundant functions
- Added new necessary functions
    - lib_bwc.py
    - lib_bwc_user.py
    - lib_bwc_rootdir.py
    - lib_gen.py

- Feb 21 : Got access to Github  
→ Merged them into the develop branch

# March
- Developed new functions in the library
    - log_metadata_parser
    - get_inf_from_metadata : A function that extracts specific information from all metadata files in all subfolders within DCIM

# April
- Added consistent docstrings for all the library and test functions
- Added Python parameter hints
- Wrote Unit Test code
    - test_BWC_fw_flash.py
    - test_BWC_EnableCAT.py

- Converted Unit Test → Pytest
    - test_BWC_fw_flash.py
    - test_BWC_EnableCAT.py
    - test_BWC_tag.py

# May
- Wrote More Pytests
    - test_BWC_tag.py
    - test_BWC_bookmark.py
    - test_BWC_multi_rec.py

- lib_gen.py : init_camera
    - Automatically place the necessary files (config.ini / config.json + related files) in the root folder to set up the test environment before starting the test

        → Enabled more flexible use of the pytest framework

# June
- Wrote More Pytests
    - test_BWC_multi_rec.py
    - test_BWC_hash.py
    - test_BWC_snapshot.py
    - test_BWC_encryption.py
    - test_BWC_video.py

- Used parametrize

# July
- Created a test file template
    - Test file contains 2 types of functions  
    → To reuse the repetitive verifications for each new test  
    → To create new tests more efficiently with a framework

        1. test_*** : function used to execute the actual tests
            - 8 predefined steps
                1. BWC dock and mount
                2. Initialize BWC with given parameters
                3. Generate an expected_dict (#2)
                4. Undock BWC
                5. Trigger the test
                6. BWC dock and mount
                7. Verifications
                8. Undock BWC

                → These 8 steps are applied uniformly to all tests and do not require any special modifications

        2. get_expected_dict : a helper function to create expected_dict
            - By changing the elements of the `expected_dict` for each test, the corresponding verification is executed
            - As verification progresses, elements used for future verifications are added to the dictionary

- Created a new file : lib_bwc_verifications.py
    - Contains all the verification functions
    - Main function : verification_test(expected_dict: dict) → bool
        - Checks the elements of the expected_dict and executes the corresponding functions

- Finished modifying test files to align with the new template
    - test_BWC_multi_rec.py
    - test_BWC_snapshot.py
    - test_BWC_hash.py
    - test_BWC_tag.py
    - test_BWC_bookmark.py

# August
- Modified the remaining test functions that have not yet been aligned with the new template
    - test_BWC_fw_flash.py
    - test_BWC_EnableCAT.py
    - test_BWC_encryption.py

- Merged all the created pull requests into the develop branch
- Ensured that all the written tests are working correctly without any errors

# Co-op Experience Summary
- Learning to write unit tests and use pytest within a framework 

    → a valuable opportunity to enhance my Python skills and deepen my understanding of Git
- Reflecting on my journey

    → proud to see how BWC has gradually become more integrated into the test framework
- Starting new tasks before merging previous PRs presented challenges, leading to conflicts

    → studying Git flow made it easier to resolve these issues
- Truly grateful and lucky for having this opportunity to gain valuable work experience and for the support provided to successfully complete my tasks 😊