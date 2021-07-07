Feature: ProfessorsPart
	You can select a professor from the dropdown with all professors
	After the professor is selected info about this professor should appear
	After the  professor is selected info about professor's courses should appear
	After click on the button with a professor's school name the list with all active students from this school should appear
	After click on the Add course button the form to add a new course should appear

Background: 
	Given that the user is logged in
	| username | password |
	| Allisa   | Allisa   |
	And select the professor as "Kirill Surkov"

Scenario: Info about selected professor's courses should be on the page
	Then Info about selected professor's courses should be on the page
	| name | uniqueCode |
	| SPP  | 111        |
	| OLK  | 789        |
	| AAA  | 666        |

Scenario: Click on the school button should show list of students	
	When I click on the school button 
	Then the list with all active students of this school should appear

Scenario: Click on the add course button should show the page to add a new course	
	When I click on the add course button 
	Then form to add a new course should appear

Scenario: Add a new course of selected professor
	When I click on the add course button 
	When I fill in the form to add a course
	| name   | uniqueCode |
	| RPOdMV | 237        |
	And click on the add course button
	Then message "Course was added!" should appear
