using Microsoft.EntityFrameworkCore;
using Assignment.Models;

namespace Assignment.API
{
    public class AssignmentDBContext : DbContext
    {
        public AssignmentDBContext(DbContextOptions<AssignmentDBContext> options) : base(options)
        {
        }


        #region Assignment
        public DbSet<AssignmentTable> AssignmentTables { get; set; }    

        #endregion

       
     
    }
}
