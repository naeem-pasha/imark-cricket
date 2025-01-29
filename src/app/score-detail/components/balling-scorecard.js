import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const bowlingData = [
  {
    name: "Riley Meredith",
    overs: 3,
    maidens: 0,
    runs: 12,
    wickets: 1,
    economy: "4.00",
  },
  {
    name: "Billy Stanlake",
    overs: 3,
    maidens: 0,
    runs: 17,
    wickets: 1,
    economy: "5.70",
  },
  // Add more bowling data as needed
];

export function BowlingScorecard({ data, label }) {
  if (!data) return null;
  return (
    <div className="overflow-x-auto max-w-4xl  m-auto">
      <h2 className="text-lg font-semibold mb-4">{label}</h2>
      <Table>
        <TableHeader>
          <TableRow className="bg-gray-50">
            <TableHead className="w-[300px]">Bowler</TableHead>
            <TableHead className="text-center">O</TableHead>
            <TableHead className="text-center">M</TableHead>
            <TableHead className="text-center">R</TableHead>
            <TableHead className="text-center">W</TableHead>
            <TableHead className="text-center">ECON</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.map((bowler, index) => (
            <TableRow key={index}>
              <TableCell>
                <div className="font-medium">{bowler.bowlName}</div>
              </TableCell>
              <TableCell className="text-center">{bowler.overs}</TableCell>
              <TableCell className="text-center">{bowler.maidens}</TableCell>
              <TableCell className="text-center">{bowler.runs}</TableCell>
              <TableCell className="text-center">{bowler.wickets}</TableCell>
              <TableCell className="text-center">{bowler.economy}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
