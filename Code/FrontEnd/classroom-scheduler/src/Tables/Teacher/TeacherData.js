
export const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "first_name",
    headerClassName: 'theme--header',
    headerAlign: 'center',
    headerName: "First name",
    width: 150,
    editable: true,
  },
  ,
  {
    field: "middle_name",
    headerClassName: 'theme--header',
    headerAlign: 'center',
    headerName: "Middle name",
    width: 150,
    editable: true,
  },
  {
    field: "last_name",
    headerClassName: 'theme--header',
    headerAlign: 'center',
    headerName: "Last name",
    width: 150,
    editable: true,
  },
  {
    field: "username",
    headerClassName: 'theme--header',
    headerAlign: 'center',
    headerName: "Username",
    width: 150,
    editable: true,
  },
  //   {
  //     field: 'password',
  //     headerName: 'Password',
  //     description: 'This column has a value getter and is not sortable.',
  //     sortable: false,
  //     width: 160,
  //     valueGetter: (params) =>
  //       `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  //   },
  {
    field: "password",
    headerClassName: 'theme--header',
    headerAlign: 'center',
    headerName: "Password",
    width: 150,
    editable:true,
    // valueGetter: (params) =>
    //   `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
  {
    field: "email_id",
    headerClassName: 'theme--header',
    headerAlign: 'center',
    headerName: "Email Id",
    width: 150,
    editable: true,
  },
  {
    field: "phone",
    headerClassName: 'theme--header',
    headerAlign: 'center',
    headerName: "Phone",
    width: 150,
    editable: true,
  }
];

export const rows = [
    {
      id: 1,
      first_name: "Prachi",
      middle_name: "A",
      last_name: "Godbole",
      photo: null,
      username: "prachiG@gmail",
      password: "prachi1234",
      email_id: "prachiG@gmail",
      phone: 9967845401,
      classcoordinator_id: 1,
    },
    {
      id: 2,
      first_name: "Smita",
      middle_name: "B",
      last_name: "Prashant",
      photo: null,
      username: "smija@gmail",
      password: "smija1235",
      email_id: "smija@gmail",
      phone: 9762816002,
      classcoordinator_id: 1,
    },
    {
      id: 3,
      first_name: "Ram",
      middle_name: "B",
      last_name: "Tambade",
      photo: null,
      username: "ram@gmail",
      password: "ram1235",
      email_id: "ram@gmail",
      phone: 9762816002,
      classcoordinator_id: 3,
    }
  ];
  
