using Assignment.Models;

namespace Assignment.API.Repository
{

    public class AssignmentTablesRepository : RepositoryBase<AssignmentTable>, IAssignmentTablesRepository
    {
        public AssignmentTablesRepository(AssignmentDBContext Context)
            : base(Context)
        {
        }

    }
}
