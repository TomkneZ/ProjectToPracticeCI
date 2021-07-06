Feature: StudentToCoursePart
	You can select a student from drop-down with all available students
	You can select a course from drop-down with all available corses
	To add student to course you should click Add button

Scenario: Add a student to a course
	Given that the user is on the studenttocourse page
	And select a course "NPO"
	And select a student "Alla Sin"
	When the user click on Add button
	Then the message "Added" appears