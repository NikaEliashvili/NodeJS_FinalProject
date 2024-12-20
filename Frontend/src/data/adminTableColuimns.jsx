import { Button } from "@/components/ui/button";
import ArrowUpDown from "@/assets/SVG/ArrowUpDown";
import useCurrentSelectedUser from "@/store/selectedUser";
import { getUser } from "@/services/auth/getUser";
const setSelectedUser = async (userID) => {
  const { setCurrentSelectedUser } = useCurrentSelectedUser.getState();
  const selectedUser = await getUser(userID);
  setCurrentSelectedUser(selectedUser);
};

export const columns = [
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
        <div
          onClick={() => {
            setSelectedUser(row?.getValue("userID"));
          }}
          className="flex flex-col justify-between items-start gap-4 text-xs sm:text-sm pl-3"
        >
          {row?.getValue("userID")}
        </div>
      );
    },
  },
  {
    accessorKey: "firstName",
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
      <div className="flex items-start pl-3">{row.getValue("firstName")}</div>
    ),
  },
  {
    accessorKey: "lastName",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="text-white"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          lastName
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="flex items-start pl-3">{row?.getValue("lastName")}</div>
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
    accessorKey: "positionID",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="text-white"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          position
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="flex flex-col gap-4 items-start pl-3">
        {row.getValue("positionID") === 1 ? "Student" : "Lecturer"}
      </div>
    ),
  },
];
