import React from "react";
import CustomTable from "@/components/CustomTable/CustomTable";
import { Button } from "@/components/ui/button";
import ArrowUpDown from "@/assets/SVG/ArrowUpDown";
import Card from "@/components/InformationCard/Card";
const data = [
  {
    id: "m5gr84i9",
    userID: "22100480",
    name: { name: "merab", lastName: "vardiashvili" },
    faculty: "computere sience",
    sector: "georgian",
    date: "2022/7/15",
  },
  {
    id: "m5gr84i9",
    userID: "22100480",
    name: { name: "merab", lastName: "vardiashvili" },
    faculty: "computere sience",
    sector: "georgian",
    date: "2022/7/15",
  },
  {
    id: "m5gr84i9",
    userID: "22100480",
    name: { name: "merab", lastName: "vardiashvili" },
    faculty: "computere sience",
    sector: "georgian",
    date: "2022/7/15",
  },
  {
    id: "m5gr84i9",
    userID: "22100480",
    name: { name: "merab", lastName: "vardiashvili" },
    faculty: "computere sience",
    sector: "georgian",
    date: "2022/7/15",
  },
  {
    id: "m5gr84i9",
    userID: "22100480",
    name: { name: "merab", lastName: "vardiashvili" },
    faculty: "computere sience",
    sector: "georgian",
    date: "2022/7/15",
  },
  {
    id: "m5gr84i9",
    userID: "22100480",
    name: { name: "merab", lastName: "vardiashvili" },
    faculty: "computere sience",
    sector: "georgian",
    date: "2022/7/15",
  },
  {
    id: "m5gr84i9",
    userID: "22100480",
    name: { name: "merab", lastName: "vardiashvili" },
    faculty: "computere sience",
    sector: "georgian",
    date: "2022/7/15",
  },
  {
    id: "m5gr84i9",
    userID: "22100480",
    name: { name: "merab", lastName: "vardiashvili" },
    faculty: "computere sience",
    sector: "georgian",
    date: "2022/7/15",
  },
  {
    id: "m5gr84i9",
    userID: "22100480",
    name: { name: "merab", lastName: "vardiashvili" },
    faculty: "computere sience",
    sector: "georgian",
    date: "2022/7/15",
  },
  {
    id: "m5gr84i9",
    userID: "22100480",
    name: { name: "merab", lastName: "vardiashvili" },
    faculty: "computere sience",
    sector: "georgian",
    date: "2022/7/15",
  },
];
const HomeAdmin = () => {
  const columns = [
    {
      accessorKey: "userID",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            className="text-white"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            userID
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      cell: ({ row }) => {
        return (
          <div className="flex flex-col justify-between items-start gap-4 text-xs sm:text-sm pl-3">
            {row?.getValue("userID")}
          </div>
        );
      },
    },
    {
      accessorKey: "name",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            className="text-white"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            name
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      cell: ({ row }) => (
        <div className="flex items-start pl-3">
          {row.getValue("name")?.name + " " + row.getValue("name")?.lastName}
        </div>
      ),
    },
    {
      accessorKey: "faculty",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            className="text-white"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Faculty
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      cell: ({ row }) => (
        <div className="flex flex-col gap-4 items-start pl-3">
          {row.getValue("faculty")}
        </div>
      ),
    },
    {
      accessorKey: "sector",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            className="text-white"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Sector
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      cell: ({ row }) => (
        <div className="flex flex-col gap-4 items-start pl-3">
          {row.getValue("sector")}
        </div>
      ),
    },
    {
      accessorKey: "date",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            className="text-white"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Date
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      cell: ({ row }) => (
        <div className="flex flex-col gap-4 items-start pl-3">
          {row.getValue("date")}
        </div>
      ),
    },
  ];

  return (
    <div className="flex items-center justify-center min-h-full max-w-full px-10">
      <div className="flex gap-10 max-w-7xl w-full">
        <Card />
        <div className="flex max-w-7xl w-full">
          <CustomTable
            columns={columns}
            data={data}
            searchBy="userID"
            searchable={true}
            className="max-w-7xl"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeAdmin;
