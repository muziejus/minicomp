Feature: Fake data generator

  A fake data generator is a good way to build up data for a project when that
  project doesn't yet exist.

  Scenario: Read a format file
    Given a file called "format.yml"
    When it has a column specification
    Then it generates some data

