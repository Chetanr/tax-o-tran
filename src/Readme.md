The project mainly consists of 3 files
1. form.js - This file handled all the from handling required to perform the tax calculation. Appropriate validations are made and error messages are displayed to make sure the user provides all the required data. Once the all the data is obtained, it is stored as session variables
  a. amount : stores the annual taxable income
  b. country : stores the country of which the tax has to be calculated
  c. year: stores the year for the tax is to be calculated
2. calculate.js - This file performs the calculation of the tax along with its breakdown. Once the calculation is done, the result is stores in the tax session variable
3. result.js - This file is used to display all the relavant information required. When the user wishes to start again from the beginning, he can click on 'Go back to previous screen' (in this case, all the session data is cleared).

Frontend:
1. All the fronend elements has been impletemented using the Material UI (https://material-ui.com/) with 'Lato' font.
2. Background (graphic) images have been rendered using css except for the InfoOutlinedIcon which is taken from Material UI (https://material-ui.com/components/material-icons/)

Advantages of the code design:
1. Easy to maintain and extend with new features. For example, if we plan to display more countries and extend the calculation to other coutries, we can just add them in the countries variable (line 23 in Form.js). The same applies to the year where we add new values to year variable (line 22 in Form.js).
2. Since the project has been divided into components, it is also easy to refactor. 
3. Have tried to adhere to DRY principles as much as possible so that the above advantages are achieved.

Improvements that can be made:
1. Calculation part of the code can be better written to make it more accurate.
2. Refactoring the Frontend part of the code to handle the windows resizing.
