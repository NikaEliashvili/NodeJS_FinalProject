import React, { useState } from "react";
import CustomTable from "@/components/CustomTable/CustomTable";
import { Button } from "@/components/ui/button";
import ArrowUpDown from "@/assets/SVG/ArrowUpDown";
import AlarmClock from "@/assets/SVG/AlarmClock";
const data = [
  {
    id: "m5gr84i9",
    subject: { name: "Backend programming", group: 2, code: "CS137" },
    schedule: {
      lecturer: "Anri Morchiladze",
      day: "Wednesday",
      time: "13:30-15:20",
      lab: "B301",
    },
    examTimes: {
      midterm: "not announced",
      final: "not announced",
    },
  },
  {
    id: "m5gr84i9",
    subject: { name: "Backend programming", group: 2, code: "CS137" },
    schedule: {
      lecturer: "Anri Morchiladze",
      day: "Wednesday",
      time: "13:30-15:20",
      lab: "B301",
    },
    examTimes: {
      midterm: "not announced",
      final: "not announced",
    },
  },
  {
    id: "m5gr84i9",
    subject: { name: "Backend programming", group: 2, code: "CS137" },
    schedule: {
      lecturer: "Anri Morchiladze",
      day: "Wednesday",
      time: "13:30-15:20",
      lab: "B301",
    },
    examTimes: {
      midterm: "not announced",
      final: "not announced",
    },
  },
  {
    id: "m5gr84i9",
    subject: { name: "Backend programming", group: 2, code: "CS137" },
    schedule: {
      lecturer: "Anri Morchiladze",
      day: "Wednesday",
      time: "13:30-15:20",
      lab: "B301",
    },
    examTimes: {
      midterm: "not announced",
      final: "not announced",
    },
  },
  {
    id: "m5gr84i9",
    subject: { name: "Backend programming", group: 2, code: "CS137" },
    schedule: {
      lecturer: "Anri Morchiladze",
      day: "Wednesday",
      time: "13:30-15:20",
      lab: "B301",
    },
    examTimes: {
      midterm: "not announced",
      final: "not announced",
    },
  },
  {
    id: "m5gr84i9",
    subject: { name: "Backend programming", group: 2, code: "CS137" },
    schedule: {
      lecturer: "Anri Morchiladze",
      day: "Wednesday",
      time: "13:30-15:20",
      lab: "B301",
    },
    examTimes: {
      midterm: "not announced",
      final: "not announced",
    },
  },
];

const HomeStudent = () => {
  const [selectedRows, setSelectedRows] = useState([]);
  const columns = [
    {
      accessorKey: "subject",
      header: <span className="text-blue-300 ">Subject</span>,
      cell: ({ row }) => {
        return (
          <div className="flex flex-col justify-between items-start gap-4 text-xs sm:text-sm ">
            <h4 className="text-lg font-semibold capitalize text-blue-400 ">
              {row.getValue("subject")?.name}
            </h4>
            <div className="flex justify-start gap-4">
              <span className="bg-blue-900/30 text-white font-bold py-1 rounded-md flex items-center w-fit px-2 text-nowrap uppercase">
                {row.getValue("subject")?.code}
              </span>
              <span className="text-white font-bold py-1 rounded-md flex items-center w-fit px-2 text-nowrap capitalize bg-green-600">
                Group:{" " + row.getValue("subject")?.group}
              </span>
              <span
                className="mt-auto text-blue-300 text-sm cursor-pointer underline hover:brightness-75 transition-all duration-1000
                "
                title="See Points"
              >
                View
              </span>
            </div>
          </div>
        );
      },
    },
    {
      accessorKey: "schedule",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            className="text-white"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Schedule
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      cell: ({ row }) => (
        <div className="flex flex-col gap-4 items-start">
          <div className="w-fit text-sm font-semibold flex gap-2 justify-between items-center rounded text-white">
            {row.getValue("schedule")?.day},
            {" " + row.getValue("schedule")?.time}
            <AlarmClock className="w-5 text-white" />
          </div>
          <div className="w-fit flex justify-between gap-5">
            <span className="text-xs font-bold bg-blue-900/30  text-white py-1 px-2 rounded">
              {row.getValue("schedule")?.lab}
            </span>
            <span className="text-xs font-bold bg-blue-900/30 text-white py-1 px-2 rounded">
              {row.getValue("schedule")?.lecturer}
            </span>
          </div>
        </div>
      ),
    },
    {
      accessorKey: "examTimes",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            className="text-green-300"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Exams
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      cell: ({ row }) => (
        <div className="flex flex-col gap-4 items-start ">
          <div className="w-fit text-sm font-semibold flex gap-2 justify-between items-center rounded text-green-300">
            Midterm: {row.getValue("examTimes")?.midterm}
            {/* <AlarmClock className="w-5 text-green-300" /> */}
          </div>
          <div className="w-fit text-sm font-semibold flex gap-2 justify-between items-center rounded text-green-300">
            Final: {row.getValue("examTimes")?.final}
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center min-h-full w-full pl-10 pr-3">
      <CustomTable
        columns={columns}
        data={data}
        searchBy="subject"
        searchable={false}
        className="max-w-7xl"
      />
      <div className="flex w-full justify-between items-center max-w-7xl select-none">
        <p className="w-full text-xl text-blue-400 font-semibold">
          &copy; IBSU Student Information System
        </p>
        <div className="flex justify-end items-center  text-white-400 font-semibold cursor-pointer">
          <p className="text-green-300 mr-3">English</p> |
          <p className="text-blue-400 ml-3">ქართული</p>
        </div>
      </div>
    </div>
  );
};

export default HomeStudent;
