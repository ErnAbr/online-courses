using AutoMapper;
using DotnetAPI.Data;
using DotnetAPI.Dtos;
using DotnetAPI.Models;
using Microsoft.AspNetCore.Mvc;

namespace DotnetAPI.Controllers;

[ApiController]
[Route("[controller]")]
public class UserEFController : ControllerBase
{
    DataContextEF _entityFramework;
    IMapper _mapper;
    public UserEFController(IConfiguration config)
    {
        _entityFramework = new DataContextEF(config);

        _mapper = new Mapper(new MapperConfiguration((cfg) =>
        {
            cfg.CreateMap<UserToAddDto, User>();
            cfg.CreateMap<UserSalary, UserSalary>();
        }));
    }

    [HttpGet("GetUsers")]
    public IEnumerable<User> GetUsers()
    {
        IEnumerable<User> users = _entityFramework.Users.ToList<User>();

        return users;
    }

    [HttpGet("GetSingleUsers/{userId}")]
    public User GetSingleUser(int userId)
    {
        User? user = _entityFramework.Users
            .Where(u => u.UserId == userId)
            .FirstOrDefault<User>();

        if (user != null)
        {
            return user;
        }

        throw new Exception("Failed to Get User");
    }

    [HttpPut("EditUser")]
    public IActionResult EditUser(User user)
    {
        User? userDb = _entityFramework.Users
            .FirstOrDefault(u => u.UserId == user.UserId);

        if (userDb != null)
        {
            userDb.Active = user.Active;
            userDb.FirstName = user.FirstName;
            userDb.LastName = user.LastName;
            userDb.Email = user.Email;
            userDb.Gender = user.Gender;
            if (_entityFramework.SaveChanges() > 0)
            {
                return Ok();
            }
        }

        throw new Exception("Failed to Update User");
    }

    [HttpPost("AddUser")]
    public IActionResult AddUser(UserToAddDto user)
    {
        User userDb = _mapper.Map<User>(user);

        _entityFramework.Add(userDb);
        if (_entityFramework.SaveChanges() > 0)
        {
            return Ok();
        }

        throw new Exception("Failed to Add User");
    }

    [HttpDelete("DeleteUser/{userId}")]
    public IActionResult DeleteUser(int userId)
    {
        User? userDb = _entityFramework.Users
            .Where(u => u.UserId == userId)
            .FirstOrDefault<User>();

        if (userDb != null)
        {
            _entityFramework.Users.Remove(userDb);
            if (_entityFramework.SaveChanges() > 0)
            {
                return Ok();
            }
        }

        throw new Exception("Failed to Delete User");
    }

    //UserSalaryEF Endpoint

    [HttpGet("GetUserSalary/{userId}")]
    public UserSalary GetUserSalary(int userId)
    {
        UserSalary? userSalary = _entityFramework.UserSalary.FirstOrDefault(u => u.UserId == userId);

        if (userSalary != null)
        {
            return userSalary;
        }

        throw new Exception("Failed to Get UserSalary");
    }

    [HttpPut("EditUserSalary")]
    public IActionResult EditUserSalary(UserSalary userSalaryToChange)
    {
        UserSalary? userSalaryDb = _entityFramework.UserSalary
        .FirstOrDefault(u => u.UserId == userSalaryToChange.UserId);

        if (userSalaryDb != null)
        {
            _mapper.Map(userSalaryToChange, userSalaryDb);
            if (_entityFramework.SaveChanges() > 0)
            {
                return Ok();
            }
        }

        throw new Exception("Failed to Update UserSalary");
    }

    [HttpPost("AddUserSalary")]
    public IActionResult AddUserSalary(UserSalary userSalary)
    {
        UserSalary userDb = _mapper.Map<UserSalary>(userSalary);

        _entityFramework.Add(userDb);
        if (_entityFramework.SaveChanges() > 0)
        {
            return Ok();
        }

        throw new Exception("Failed to Add UserSalary");
    }

    [HttpDelete("DeleteUserSalary/{userId}")]
    public IActionResult DeleteUserSalary(int userId)
    {
        UserSalary? userDb = _entityFramework.UserSalary
            .FirstOrDefault(u => u.UserId == userId);

        if (userDb != null)
        {
            _entityFramework.UserSalary.Remove(userDb);
            if (_entityFramework.SaveChanges() > 0)
            {
                return Ok();
            }
        }

        throw new Exception("Failed to Delete User");
    }
}