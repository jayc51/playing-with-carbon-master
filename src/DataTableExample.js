import React from "react";
import { iconDownload, iconEdit, iconSettings } from "carbon-icons";
import { Button, DataTable } from "carbon-components-react";
const {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableHeader,
  TableRow,
  TableToolbar,
  TableToolbarAction,
  TableToolbarContent,
  TableToolbarSearch,
} = DataTable;

const headers = [
  {
    key: "id",
    header: "ID",
  },
  {
    key: "name",
    header: "Display Name",
  },
  {
    key: "color",
    header: "Color",
  },
  {
    key: "added_date",
    header: "Added",
  },
  {
    key: "stock",
    header: "Stock",
  },
  {
    key: "cost",
    header: "Cost",
  },
];

const initialRows = [
  {
    id: "12345",
    name: "AirPods PRO",
    color: "White",
    added_date: "12/01/00",
    stock: 15,
    cost: "$399.49",
  },
  {
    id: "12346",
    name: "Powerbeats",
    color: "Navy",
    added_date: "04/12/20",
    stock: 320,
    cost: "$250.00",
  },
  {
    id: "12347",
    name: "Silicon Cas",
    color: "Blue",
    added_date: "05/12/22",
    stock: 75,
    cost: "$199.99",
  },
  {
    id: "12348",
    name: "Magana Vox",
    color: "Yellow",
    added_date: "08/01/00",
    stock: 75,
    cost: "$199.99",
  },
  {
    id: "12349",
    name: "Sony Power Belt",
    color: "Black",
    added_date: "08/01/21",
    stock: 75,
    cost: "$79.99",
  },
];

export default () => (
  <DataTable rows={initialRows} headers={headers}>
    {({ rows, headers, getHeaderProps, getTableProps }) => (
      <TableContainer title="AccessoryList">
        <TableToolbar>
          <TableToolbarContent>
            <TableToolbarSearch onChange="" />
          </TableToolbarContent>
        </TableToolbar>
        <p>
          Filterable by a number of parameters, this list highlights key
          products to be considered for NBO offers. This will give the user
          freedom to see, at a glance, what products are available for creating
          a custom offer.
        </p>
        <Table {...getTableProps()}>
          <TableHead>
            <TableRow>
              {headers.map((header) => (
                <TableHeader {...getHeaderProps({ header, isSortable: true })}>
                  {header.header}
                </TableHeader>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                {row.cells.map((cell) => (
                  <TableCell key={cell.id}>{cell.value}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )}
  </DataTable>
);

/*
export default () => (
  <DataTable
    className="my-data-table"
    rows={initialRows}
    headers={headers}
    render={({ rows, headers, getHeaderProps, getRowProps, onInputChange }) => (
      <TableContainer >
        <TableToolbar>
          <TableToolbarSearch onChange={onInputChange} className="data-table-search" />
          <TableToolbarContent>
            <TableToolbarAction
              icon={iconDownload}
              iconDescription="Download"
              onClick={null}
            />
            <TableToolbarAction
              icon={iconEdit}
              iconDescription="Edit"
              onClick={null}
            />
            <TableToolbarAction
              icon={iconSettings}
              iconDescription="Settings"
              onClick={null}
            />
            <Button onClick={null} small kind="primary" className="data-table-add-new">
              Add new
            </Button>
          </TableToolbarContent>
        </TableToolbar>
        <Table>
          <TableHead>
            <TableRow>
              {headers.map(header => (
                <TableHeader {...getHeaderProps({ header })}>
                  {header.header}
                </TableHeader>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow {...getRowProps({ row })}>
                {row.cells.map(cell => (
                  <TableCell key={cell.id}>{cell.value}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )}
  />
);
*/
