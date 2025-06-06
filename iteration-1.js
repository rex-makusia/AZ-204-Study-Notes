const { app } = require('@azure/functions');

app.http('appFunction', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        var mysql = require('mysql2');
        var sqlconnection = mysql.createConnection({
            host: "mysqlserver2003003.mysql.database.azure.com",
            user: "sqladmin",
            password: "Microsoft@123",
            database: "appdb"
          });
          
          sqlconnection.connect((error)=> {
            if (error) console.log(error);
            else
            {
              console.log("Connected to the MySQL database");
              var sqlquery="SELECT CourseID,CourseName,Rating FROM Course";
              sqlconnection.query(sqlquery,function(error,result) {
                  console.log(result);
              });
            }
          });
          
    }
});
