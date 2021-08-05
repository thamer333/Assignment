using Assignment.API.Repository;
using Assignment.Models;
using Microsoft.AspNetCore.Mvc;
using System.Linq;
using System.Transactions;


namespace Assignment.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AssignmentController : ControllerBase
    {
        private readonly IAssignmentRepositoryWrapper _Wrapper;
        public AssignmentController(IAssignmentRepositoryWrapper Wrapper)
        {
            _Wrapper = Wrapper;
        }

        [HttpGet]
        public IActionResult GetAssignmentTables()
        {

            var items = _Wrapper.AssignmentTable.FindAll();

            return new OkObjectResult(items);
        }

       
        [HttpGet]
        [Route("{id}")]
        public IActionResult GetAssignmentTablesById(int id)
        {

            var item = _Wrapper.AssignmentTable.FindByCondition(a => a.Id == id)
    
                 .FirstOrDefault();

            return new OkObjectResult(item);
        }

        [HttpDelete("{id}")]
        [Route("{id}")]
        public IActionResult DeleteAssignmentTables(int id)
        {
            var item = _Wrapper.AssignmentTable.FindByCondition(x => x.Id == id).FirstOrDefault();
            _Wrapper.AssignmentTable.Delete(item);
            _Wrapper.Save();
            return new OkResult();
        }

        // POST: api/Lookups
        [HttpPost]
        public IActionResult CreateAssignmentTables([FromBody] AssignmentTable AssignmentTables)
        {
            using (var scope = new TransactionScope())
            {


                _Wrapper.AssignmentTable.Create(AssignmentTables);
                _Wrapper.Save();
                scope.Complete();
               
                return CreatedAtAction(nameof(GetAssignmentTables), new { id = AssignmentTables.Id }, AssignmentTables);
            }
        }

        [HttpPut("{id}")]
        public IActionResult UpdateAssignmentTables([FromBody] AssignmentTable AssignmentTables)
        {
            if (AssignmentTables != null)
            {
                using (var scope = new TransactionScope())
                {
                    _Wrapper.AssignmentTable.Update(AssignmentTables);
                    _Wrapper.Save();
                    scope.Complete();
                    return new OkResult();
                }
            }
            return new NoContentResult();
        }
    }
}
