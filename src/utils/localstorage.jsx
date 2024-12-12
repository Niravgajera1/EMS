const employee = [
    {
        "id": 1,
        "email": "employee1@example.com",
        "password": "123",
        "firstName": "Aarav",
        "tasks": [
            {
                "taskTitle": "Complete project report",
                "taskDescription": "Prepare the final report for project X.",
                "taskDate": "2024-12-12",
                "category": "Documentation",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Team meeting",
                "taskDescription": "Attend the weekly team meeting.",
                "taskDate": "2024-12-13",
                "category": "Meeting",
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false
            }
        ],
        "taskNumbers": {
            "active": 1,
            "newTask": 1,
            "completed": 0,
            "failed": 0
        }
    },
    {
        "id": 2,
        "email": "employee2@example.com",
        "password": "123",
        "firstName": "Anaya",
        "tasks": [
            {
                "taskTitle": "Code review",
                "taskDescription": "Review code for module Y.",
                "taskDate": "2024-12-11",
                "category": "Development",
                "active": true,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "taskTitle": "Fix bug #123",
                "taskDescription": "Resolve the issue in the login module.",
                "taskDate": "2024-12-14",
                "category": "Bug Fix",
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false
            }
        ],
        "taskNumbers": {
            "active": 1,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        }
    },
    {
        "id": 3,
        "email": "employee3@example.com",
        "password": "123",
        "firstName": "Vihaan",
        "tasks": [
            {
                "taskTitle": "Update user documentation",
                "taskDescription": "Add recent changes to the user manual.",
                "taskDate": "2024-12-15",
                "category": "Documentation",
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Backend optimization",
                "taskDescription": "Optimize API response times.",
                "taskDate": "2024-12-16",
                "category": "Development",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            }
        ],
        "taskNumbers": {
            "active": 1,
            "newTask": 1,
            "completed": 0,
            "failed": 0
        }
    },
    {
        "id": 4,
        "email": "employee4@example.com",
        "password": "123",
        "firstName": "Ishaan",
        "tasks": [
            {
                "taskTitle": "UI Testing",
                "taskDescription": "Test the user interface for application Z.",
                "taskDate": "2024-12-12",
                "category": "Testing",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": true
            },
            {
                "taskTitle": "Prepare presentation",
                "taskDescription": "Create slides for the quarterly review.",
                "taskDate": "2024-12-13",
                "category": "Presentation",
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false
            }
        ],
        "taskNumbers": {
            "active": 1,
            "newTask": 1,
            "completed": 0,
            "failed": 1
        }
    },
    {
        "id": 5,
        "email": "employee5@example.com",
        "password": "123",
        "firstName": "Sara",
        "tasks": [
            {
                "taskTitle": "Database migration",
                "taskDescription": "Migrate database to the new server.",
                "taskDate": "2024-12-14",
                "category": "Database",
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Create API documentation",
                "taskDescription": "Document the endpoints for the new API.",
                "taskDate": "2024-12-15",
                "category": "Documentation",
                "active": true,
                "newTask": false,
                "completed": true,
                "failed": false
            }
        ],
        "taskNumbers": {
            "active": 1,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        }
    }
];


const admin = [
    {
        "id": 1,
        "firstName": "Nirav",
        "email": "admin@example.com",
        "password": "123"
    }
];


export const setLocalStorage = () => {
    localStorage.setItem("employees", JSON.stringify(employee));
    localStorage.setItem("admin", JSON.stringify(admin));
}

export const getLocalStorage = () =>  {
    const employees = JSON.parse(localStorage.getItem('employees'));
    const admin = JSON.parse(localStorage.getItem('admin'));

   return ({employees,admin})

}