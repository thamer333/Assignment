using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace Assignment.API.Repository
{
    public abstract class RepositoryBase<T> : IRepositoryBase<T> where T : class
    {
        protected AssignmentDBContext FreelancerContext { get; set; }

        public RepositoryBase(AssignmentDBContext Context)
        {
            this.FreelancerContext = Context;
        }

        public IQueryable<T> FindAll()
        {
            return this.FreelancerContext.Set<T>().AsNoTracking();
        }

        public IQueryable<T> FindByCondition(Expression<Func<T, bool>> expression)
        {
            return this.FreelancerContext.Set<T>().Where(expression).AsNoTracking();
        }

        public void Create(T entity)
        {
            this.FreelancerContext.Set<T>().Add(entity);
        }

        public void Update(T entity)
        {
            this.FreelancerContext.Set<T>().Update(entity);
        }

        public void Delete(T entity)
        {
            this.FreelancerContext.Set<T>().Remove(entity);
        }

        public IQueryable<T> FromSqlRaw(string sqlText, params SqlParameter[] param)
        {
            return this.FreelancerContext.Set<T>().FromSqlRaw<T>(sqlText, param).AsNoTracking();

        }
    }
}
