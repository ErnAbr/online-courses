USE DotNetCourseDatabase

SELECT COUNT(*) FROM TutorialAppSchema.Users

DELETE FROM TutorialAppSchema.Users WHERE UserId = 1001

SELECT * FROM TutorialAppSchema.Users ORDER BY UserId DESC

INSERT INTO TutorialAppSchema.Users(
    [FirstName],
    [LastName],
    [Email],
    [Gender],
    [Active]
) VALUES (
    [FirstName],
    [LastName],
    [Email],
    [Gender],
    [Active]
)

UPDATE TutorialAppSchema.Users
    SET [FirstName] = 'Albertina',
    [LastName] = 'O''Bannon',
    [Email] = 'aofinan0@blogspot.com',
    [Gender] = 'Male',
    [Active] = '1'
    WHERE UserId = 1

USE DotNetCourseDatabase
SELECT [UserId],
[JobTitle],
[Department] FROM TutorialAppSchema.UserJobInfo WHERE UserId = 2

SELECT * FROM TutorialAppSchema.UserJobInfo ORDER BY UserId DESC
