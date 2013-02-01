Feature: Logging events
	In order to log different event
	As a developer
	I want to log events

	Scenario: wrote my first scenario
		Given a variable set to 1
		When I increment the variable by 2
		Then the variable should contain 3

	Scenario: log debug event
		Given a debug event
		When I excute debug function
		then execute all handlers