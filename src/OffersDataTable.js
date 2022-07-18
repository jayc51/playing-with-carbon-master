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
  TableToolbarMenu,
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
    header: "Offer Name",
  },
  {
    key: "owner",
    header: "Owner",
  },
  {
    key: "created",
    header: "Created",
  },
  {
    key: "open",
    header: "Open",
  },
  {
    key: "close",
    header: "Close",
  },
  {
    key: "uses",
    header: "Uses",
  },
];

const initialRows = [
  {
    id: "2",
    name: "Best-Offer1",
    owner: "Smith, Ben",
    created: "01/01/01",
    open: "12/01/00",
    close: "10/03/21",
    uses: "10",
  },
  {
    id: "3",
    name: "offer2",
    owner: "Vas, Max",
    created: "01/01/01",
    open: "12/01/00",
    close: "10/03/21",
    uses: "10",
  },
  {
    id: "4",
    name: "offer3",
    owner: "Sen, Robert",
    created: "01/01/01",
    open: "12/01/00",
    close: "10/03/21",
    uses: "10",
  },
  {
    id: "5",
    name: "offer4",
    owner: "Harvy, Alica",
    created: "01/01/01",
    open: "12/01/00",
    close: "10/03/21",
    uses: "10",
  },
  {
    id: "6",
    name: "offer5",
    owner: "White, Mike",
    created: "01/01/01",
    open: "12/01/00",
    close: "10/03/21",
    uses: "10",
  },
];
export default () => (
  <DataTable rows={initialRows} headers={headers}>
    {({ rows, headers, getHeaderProps, getTableProps }) => (
      <TableContainer title="Active Custom Offers">
        <TableToolbar>
          <TableToolbarContent>
            <TableToolbarSearch onChange="" />
            <Button
              kind="secondary"
              className="some-class"
              onClick={null}
              onFocus={null}
            >
              Create Custom Offer +
            </Button>
          </TableToolbarContent>
        </TableToolbar>
        <p>
          This list highlights the offers that have been created by the team for
          NBO offers over a set time. This perspective will give understanding
          of what active offers are being presented or highlighted, and when
          they will expire.
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
