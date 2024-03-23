import { Info } from "./_components/info";
import { Separator } from "@/components/ui/separator";
import BoardList from "./_components/board-list";
import { Suspense } from "react";
import { checkSubscription } from "@/lib/subscription";

export default async function OrganizationIdPage() {
  const isPro = await checkSubscription();

  return (
    <div className="flex flex-col space-y-4 w-full mb-20">
      <Info isPro={isPro} />
      <Separator className="my-4" />
      <div className="px-2 md:px-4">
        <Suspense fallback={<BoardList.Skeleton />}>
          <BoardList />
        </Suspense>
      </div>
    </div>
  );
}
