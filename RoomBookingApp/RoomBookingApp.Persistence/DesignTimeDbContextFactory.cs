using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;

namespace RoomBookingApp.Persistence
{
    public class DesignTimeDbContextFactory : IDesignTimeDbContextFactory<RoomBookingAppDbContext>
    {
        public RoomBookingAppDbContext CreateDbContext(string[] args)
        {
            var optionsBuilder = new DbContextOptionsBuilder<RoomBookingAppDbContext>();
            optionsBuilder.UseSqlite("DataSource=mydb.db");

            return new RoomBookingAppDbContext(optionsBuilder.Options);
        }
    }
}