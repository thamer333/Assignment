namespace Assignment.API.Repository
{

    public interface IAssignmentRepositoryWrapper
    {
        #region Assignment
        IAssignmentTablesRepository AssignmentTable { get; }
        #endregion



        void Save();
    }
}
