using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using System.Data.SqlClient;
using System.Data;

namespace POC.GetAllDoctors
{
    public static class GetAllDoctors
    {
        [FunctionName("GetAllDoctors")]
        public static async Task<IActionResult> Run(
            [HttpTrigger(AuthorizationLevel.Anonymous, "get", "post", Route = null)] HttpRequest req,
            ILogger log)
        {
            var str = "Server=tcp:sql-pwapoc-ea2-dev-001.database.windows.net,1433;Initial Catalog=sqldb-pwapoc-ea2-dev-001;Persist Security Info=False;User ID=pwa;Password=poc2022!;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;";
            DataTable data = new DataTable();

            using (SqlConnection conn = new SqlConnection(str))

            {
                conn.Open();
                var text = "Select * from dbo.Doctors";

                using (SqlCommand cmd = new SqlCommand(text, conn))
                {
                    // Execute the command and log the # rows affected.
                    var reader = await cmd.ExecuteReaderAsync();
                    data.Load(reader);
                }
            }
            return new OkObjectResult(data);
        }
    }
}
