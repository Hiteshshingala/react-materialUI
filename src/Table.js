import React, { useEffect } from "react";
import data from "./data.json";
import MUIDataTable from "mui-datatables";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const columns = [
  { name: "id", label: "id", minWidth: 100 },
  { name: "first_name", label: "First Name", minWidth: 120 },
  {
    name: "last_name",
    label: "Last Name",
    minWidth: 170,
  },
  {
    name: "email",
    label: "Email",
    minWidth: 170,
  },
  {
    name: "gender",
    label: "gender",
    minWidth: 170,
  },
];

const getMuiTheme = createMuiTheme({
  overrides: {
    MuiTableCell: {
      root: {            
        fontSize: "1.3rem"
      },
      head: {
        backgroundColor: "#172be8d9 !important"
    }
    },
    MuiToolbar: {
      root: {            
        fontSize: "1.3rem"
      },
    },
    MUIDataTableToolbar: {
      titleRoot: {
        color: 'blue'
      }
    },
    MuiTypography: {
      body2: {      
        fontSize: "1.3rem"
      },
      h6: {      
        fontSize: "1.9rem",
        fontWeight: "bold"
      }
    },
    MUIDataTableHeadCell: {
      data: {
        fontSize: "1.5rem",
        fontWeight: "bold",
        // backgroundColor: "blue"
      }
    }
  }
});

export default function StickyHeadTable() {
  const options = {
    filterType: "checkbox",
    downloadOptions: {
        filename: "user.csv"
      },
    responsive: "scroll",

  };


  return (
      <>
        <ThemeProvider theme={getMuiTheme}>
            <MUIDataTable
                title={"User List"}
                data={data}
                columns={columns}
                options={options}
            />
        </ThemeProvider>
      </>
  );
}
