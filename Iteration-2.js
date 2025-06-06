const { app } = require('@azure/functions');

app.http('appFunction', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request,context) => {
        var mysql = require('mysql2/promise');
        var jsonBody;
        var sqlconnection = mysql.createPool({
            host: "mysqlserver2003003.mysql.database.azure.com",
            user: "sqladmin",
            password: "Microsoft@123",
            database: "appdb"
          });         

         
              var sqlquery="SELECT CourseID,CourseName,Rating FROM Course";              
              var result = await sqlconnection.query(sqlquery);             
              return { body: JSON.stringify(result[0])};
    }
});
