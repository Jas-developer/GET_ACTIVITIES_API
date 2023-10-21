using Domain;
using Microsoft.EntityFrameworkCore;

namespace Persistence
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {

        }

        //access entity that we will gonna work
        public DbSet<Activity> Activities {get; set;}
        
    }
}