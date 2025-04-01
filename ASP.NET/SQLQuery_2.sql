USE DotNetCourseDatabase

CREATE TABLE TutorialAppSchema.Auth (
    Email NVARCHAR(50)
    , PasswordHash VARBINARY(MAX)
    , PasswordSalt VARBINARY(MAX)
)

SELECT * FROM TutorialAppSchema.Auth

SELECT [Email],
[PasswordHash],
[PasswordSalt] FROM TutorialAppSchema.Auth WHERE Email = ''

INSERT INTO TutorialAppSchema (
[Email],
[PasswordHash],
[PasswordSalt]) VALUES (

)

SELECT * FROM TutorialAppSchema.Users WHERE FirstName = 'Er'

SELECT UserId FROM TutorialAppSchema.Users WHERE Email = 'ern2@ern.lt'