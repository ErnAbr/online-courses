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

USE DotNetCourseDatabase

CREATE TABLE TutorialAppSchema.Posts (
    PostId INT IDENTITY(1,1),
    UserId INT,
    PostTitle NVARCHAR(255),
    PostContent NVARCHAR(MAX),
    PostCreated DATETIME,
    PostUpdated DATETIME
)

CREATE CLUSTERED INDEX cix_Posts_UserId_PostId ON TutorialAppSchema.Posts(UserId, PostId)

SELECT [PostId],
[UserId],
[PostTitle],
[PostContent],
[PostCreated],
[PostUpdated] FROM TutorialAppSchema.Posts

SELECT [PostId],
[UserId],
[PostTitle],
[PostContent],
[PostCreated],
[PostUpdated] FROM TutorialAppSchema.Posts

INSERT INTO TutorialAppSchema.Posts(
    [PostId],
    [UserId],
    [PostTitle],
    [PostContent],
    [PostCreated],
    [PostUpdated]
) VALUES ();

UPDATE TutorialAppSchema.Posts 
    SET UserId = 1002
    WHERE PostId = 1

SELECT * FROM TutorialAppSchema.Posts 
    WHERE PostTitle LIKE '%search%'
        OR PostContent LIKE '%search%'