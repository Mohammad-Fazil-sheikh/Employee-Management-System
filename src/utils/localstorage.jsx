
// export const data = [
//   {
//       type: 'employee',
//       id: 1,
//       name: 'Amit',
//       email: 'emp1@company.com',
//       pass: 'password1',
//       task: 'task1'
//   },
//   {
//       type: 'employee',
//       id: 2,
//       name: 'Priya',
//       email: 'emp2@company.com',
//       pass: 'password2',
//       task: 'task2'
//   },
//   {
//       type: 'employee',
//       id: 3,
//       name: 'Rajesh',
//       email: 'emp3@company.com',
//       pass: 'password3',
//       task: 'task3'
//   },
//   {
//       type: 'employee',
//       id: 4,
//       name: 'Sneha',
//       email: 'emp4@company.com',
//       pass: 'password4',
//       task: 'task4'
//   },
//   {
//       type: 'employee',
//       id: 5,
//       name: 'Vikas',
//       email: 'emp5@company.com',
//       pass: 'password5',
//       task: 'task5'
//   },
//   {
//       type: 'admin',
//       id: 6,
//       name: 'Anjali',
//       email: 'admin1@company.com',
//       pass: 'adminpass1'
//   }
// ];
export const data = [
    {
        type: 'employee',
        id: 1,
        name: 'Amit',
        email: 'emp1@company.com',
        pass: '123',
        taskCounts: {
            active: 2,
            newTask: 1,
            completed: 1,
            failed: 0
        },
        tasks: [
            {
                active: true,
                newTask: true,
                completed: false,
                failed: false,
                taskTitle: 'UI redesign',
                taskDescription: 'Redesign the user interface for better UX',
                taskDate: '2024-10-14',
                category: 'Design'
            },
            {
                active: true,
                newTask: false,
                completed: false,
                failed: false,
                taskTitle: 'Monthly Report',
                taskDescription: 'Prepare and submit the monthly financial report.',
                taskDate: '2024-12-01',
                category: 'Reporting'
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                taskTitle: 'Team Meeting',
                taskDescription: 'Participate in the monthly team meeting to discuss goals.',
                taskDate: '2024-12-05',
                category: 'Management'
            }
        ]
    },
    {
        type: 'employee',
        id: 2,
        name: 'Priya',
        email: 'emp2@company.com',
        pass: '123',
        taskCounts: {
            active: 1,
            newTask: 1,
            completed: 1,
            failed: 0
        },
        tasks: [
            {
                active: true,
                newTask: true,
                completed: false,
                failed: false,
                taskTitle: 'Database Update',
                taskDescription: 'Update client contact information in the CRM system.',
                taskDate: '2024-12-02',
                category: 'Database'
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                taskTitle: 'Project Planning',
                taskDescription: 'Assist in planning the new project timeline.',
                taskDate: '2024-12-08',
                category: 'Planning'
            }
        ]
    },
    {
        type: 'employee',
        id: 3,
        name: 'Rajesh',
        email: 'emp3@company.com',
        pass: '123',
        taskCounts: {
            active: 1,
            newTask: 0,
            completed: 2,
            failed: 0
        },
        tasks: [
            {
                active: true,
                newTask: false,
                completed: false,
                failed: false,
                taskTitle: 'Presentation Preparation',
                taskDescription: 'Prepare slides for the upcoming project presentation.',
                taskDate: '2024-12-03',
                category: 'Presentation'
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                taskTitle: 'Report Analysis',
                taskDescription: 'Analyze last month’s performance reports for trends.',
                taskDate: '2024-12-07',
                category: 'Analysis'
            }
        ]
    },
    {
        type: 'employee',
        id: 4,
        name: 'Sneha',
        email: 'emp4@company.com',
        pass: '123',
        taskCounts: {
            active: 1,
            newTask: 1,
            completed: 1,
            failed: 0
        },
        tasks: [
            {
                active: true,
                newTask: true,
                completed: false,
                failedemployee: false,
                taskTitle: 'Client Feedback Collection',
                taskDescription: 'Collect feedback from clients about the new product.',
                taskDate: '2024-12-09',
                category: 'Feedback'
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                taskTitle: 'Team Meeting Coordination',
                taskDescription: 'Coordinate and lead the weekly team meeting.',
                taskDate: '2024-12-04',
                category: 'Management'
            }
        ]
    },
    {
        type: 'employee',
        id: 5,
        name: 'Vikas',
        email: 'emp5@company.com',
        pass: '123',
        taskCounts: {
            active: 2,
            newTask: 0,
            completed: 1,
            failed: 0
        },
        tasks: [
            {
                active: true,
                newTask: false,
                completed: false,
                failed: false,
                taskTitle: 'Sales Data Analysis',
                taskDescription: 'Analyze sales data to identify growth opportunities.',
                taskDate: '2024-12-06',
                category: 'Analysis'
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                taskTitle: 'Market Research',
                taskDescription: 'Conduct market research for the upcoming campaign.',
                taskDate: '2024-12-10',
                category: 'Research'
            }
        ]
    },
    {
        type: 'admin',
        id: 6,
        name: 'Anjali',
        email: 'admin1@company.com',
        pass: '123'
    }
  ];
  


  
export const setdata =(data)=>{
    // data.forEach(element => {
    //     localStorage.setItem(element.name, JSON.stringify(data));
    // });
    localStorage.setItem('data', JSON.stringify(data));
    // console.log('localStorage.getItem');
}

export const getdata =()=>{
    //  console.log(localStorage.getItem('data', JSON.stringify(data)));
    // return (data).forEach(element => {
    //     localStorage.getItem(element.name, JSON.stringify(data));
    // });
}




