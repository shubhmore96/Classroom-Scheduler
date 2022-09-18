
export const columns = [
    { field: "id",
    headerName: "ID",
     width: 90 },
    {
      field: "name",
      headerClassName: 'theme--header',
      headerAlign: 'center',
      headerName: "Module Name",
      width: 150,
      editable: true,
    },
    ,
    {
      field: "duration",
      headerClassName: 'theme--header',
      headerAlign: 'center',
      headerName: "Duration",
      width: 90,
      editable: true,
    },
  ];
  
  export const rows = [
    {
        id: 1,
        name: "COP",
        duration: 14,
        classcoordinator_id: 1
    },
    {
        id: 2,
        name: "OS",
        duration: 15,
        classcoordinator_id: 1
    },
    {
        id: 3,
        name: "DataStructure",
        duration: 14,
        classcoordinator_id: 3
    },
    {
        id: 4,
        name: "WPT",
        duration: 15,
        classcoordinator_id: 3
    }
]