Employee_managment

<!-- api for add the employee in database
so when you try to enter same employee_id it's just update the record -->
curl --location --request POST 'http://localhost:3000/add_employee' \
--header 'Content-Type: application/json' \
--data-raw '{
    "first_name": "nikhil",
    "last_name": "verma",
    "employee_id": 127,
    "salary": 15000,
    "department": "HR"
}'


<!-- api for get the employee bye employee id -->
curl --location --request GET 'http://localhost:3000/get_employee?id=123'


<!-- api to get employee by filter -->
1. sort by salary (1 for acs , and -1 for desc)
curl --location --request POST 'http://localhost:3000/get_employee_byFilter' \
--header 'Content-Type: application/json' \
--data-raw '{
    "filter" : {
        "salary" : -1
    }
}'

2. get result department vise
curl --location --request POST 'http://localhost:3000/get_employee_byFilter' \
--header 'Content-Type: application/json' \
--data-raw '{
    "filter" : {
        "department" : "IT"
    }
}'

3. get result by department vise and also sorted by salary
curl --location --request POST 'http://localhost:3000/get_employee_byFilter' \
--header 'Content-Type: application/json' \
--data-raw '{
    "filter" : {
        "department" : "IT",
        "salary" : 1
    }
}'

4. get all employee details 
curl --location --request POST 'http://localhost:3000/get_employee_byFilter' \
--header 'Content-Type: application/json' \
--data-raw '{
    "filter" : {
    }
}'