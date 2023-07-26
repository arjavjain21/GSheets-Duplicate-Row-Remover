# GSheets-Duplicate-Row-Remover

The "GSheets Duplicate Row Remover" is a script designed to remove duplicate rows from a data range in GSheets. The script adds a custom menu option, "Remove duplicates," to the Google Sheets UI, making it easy for users to remove duplicate rows from the active sheet. It utilizes multiple sheets to identify and delete duplicate rows efficiently.

## Features:
- **Custom Menu:** Upon opening the Google Sheet, the script automatically creates a custom menu called "Remove duplicates" with an option to "Remove duplicate rows."
- **Remove Duplicate Rows:** When users select "Remove duplicate rows" from the custom menu, the script identifies duplicate rows in the active data range. It compares the data in the active sheet with the data stored in the "MASTER" sheet to determine which rows are duplicates.
- **Exact Matching:** The script performs an exact match comparison of rows based on the contents of columns "A" and "F" in the "MASTER" sheet. Rows with the same values in columns "A" and "F" are considered duplicates.
- **Deletion of Duplicate Rows:** Once the duplicate rows are identified, the script deletes them from the active sheet, resulting in a data range without duplicate entries.

## Usage:
1. Open your Google Sheet containing the data from which you want to remove duplicate rows.
2. Click on the "Remove duplicates" option in the menu bar, and then select "Remove duplicate rows."
3. The script will compare the active data range with the data stored in the "MASTER" sheet.
4. Duplicate rows will be identified and deleted from the active sheet.

## Important Notes:
- This script is intended for Google Sheets and requires users to have edit access to the sheet for it to work correctly.
- The script compares rows based on exact matches in columns "A" and "F" of the "MASTER" sheet. Modify the script if different column comparisons are needed.

Feel free to contribute to the project by forking the repository, making your changes, and submitting a pull request for review.

## License:
This script is open-source and is provided under the MIT License. Feel free to use, modify, and distribute it as per the terms of the license.

## Support:
If you encounter any issues or have questions regarding the script's usage, feel free to create an issue in the repository. The maintainers and the community will be glad to assist you.
