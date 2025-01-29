import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const battingData = [
  {
    name: "Josh Philippe",
    dismissal: "c Waqar b Nikhil Chaudhary",
    runs: 9,
    balls: 7,
    fours: 1,
    sixes: 0,
    strikeRate: "85.71",
  },
  {
    name: "James Vince",
    dismissal: "b Chris Jordan",
    runs: 11,
    balls: 10,
    fours: 0,
    sixes: 0,
    strikeRate: "110.00",
  },
  // Add more batting data as needed
];

export function BattingScorecard({ data, label, wicketData }) {
  if (!data) return null;
  return (
    <div className="overflow-x-auto max-w-4xl  m-auto">
      <h2 className="text-lg font-semibold mb-4">{label}</h2>
      <Table>
        <TableHeader>
          <TableRow className="bg-gray-50">
            <TableHead className="w-[300px]">Batter</TableHead>
            <TableHead className="text-center">R</TableHead>
            <TableHead className="text-center">B</TableHead>
            <TableHead className="text-center">4s</TableHead>
            <TableHead className="text-center">6s</TableHead>
            <TableHead className="text-center">SR</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.map((batter, index) => (
            <TableRow key={index}>
              <TableCell>
                <div>
                  <div className="font-medium">{batter.batName}</div>
                  <div className="text-sm text-gray-500">{batter.outDesc}</div>
                </div>
              </TableCell>
              <TableCell className="text-center">{batter.runs}</TableCell>
              <TableCell className="text-center">{batter.balls}</TableCell>
              <TableCell className="text-center">{batter.fours}</TableCell>
              <TableCell className="text-center">{batter.sixes}</TableCell>
              <TableCell className="text-center">{batter.strikeRate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="mt-4 flex">
        <h3 className="text-lg font-semibold mb-2">Fall of Wickets</h3>
      </div>
      <p className="text-sm text-gray-700 leading-relaxed">
        {wicketData?.map((wicket, index) => (
          <span key={index}>
            {wicket.wktRuns}-{wicket.wktNbr} (
            <span className="text-blue-600 hover:underline cursor-pointer">
              {wicket.batName}
            </span>
            , {wicket.wktOver})<span>-</span>
          </span>
        ))}
      </p>
    </div>
  );
}
