using Microsoft.EntityFrameworkCore;

namespace Assignment.API.Repository
{

    public class AssignmentRepositoryWrapper : IAssignmentRepositoryWrapper
    {
        private AssignmentDBContext _Context;

        public AssignmentRepositoryWrapper(AssignmentDBContext Context)
        {
            _Context = Context; 
        }


        public void Save()
        {
            _Context.SaveChanges();
        }


        #region Assignment Table

        private IAssignmentTablesRepository _AssignmentTablesRepository;

        public IAssignmentTablesRepository AssignmentTable
        {
            get
            {
                if (_AssignmentTablesRepository == null)
                {
                    _AssignmentTablesRepository = new AssignmentTablesRepository(_Context);
                }

                return _AssignmentTablesRepository;
            }
        }

        #endregion
      



    }
}
