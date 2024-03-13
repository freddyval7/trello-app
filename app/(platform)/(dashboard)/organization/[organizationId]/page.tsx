import { db } from "@/lib/db";
import { Info } from "./_components/info";

export default async function OrganizationIdPage() {
  const boards = await db.board.findMany();

  return (
    <div className="flex flex-col space-y-4 w-full mb-20">
      <Info />
    </div>
  );
}
