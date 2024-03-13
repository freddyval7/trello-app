import { FormPopover } from "@/components/form/form-popover";
import { Hint } from "@/components/hint";
import { HelpCircle, User2 } from "lucide-react";

export default function BoardList() {
  return (
    <div className="space-y-4">
      <div className="flex items-center font-semibold text-lg text-neutral-600">
        <User2 className="w-6 h-6 mr-2" />
        Your boards
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        <FormPopover side="right" sideOffset={10}>
          <div
            role="button"
            className="aspect-video hover:opacity-75 transition relative h-full w-full bg-muted rounded-sm flex flex-col gap-y-1 items-center justify-center"
          >
            <p className="text-sm">Create new board</p>
            <span className="text-xs">5 remaining</span>
            <Hint
              description={`Free Workspaces can have up to 5 open boards. For unlimited boards upgrade this workspace.`}
              sideOffset={40}
            >
              <HelpCircle className="w-[14px] absolute bottom-2 right-2 h-[14px]" />
            </Hint>
          </div>
        </FormPopover>
      </div>
    </div>
  );
}
