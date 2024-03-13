import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";

interface HintProps {
    children: React.ReactNode;
    description: string;
    side?: "left" | "right" | "top" | "bottom";
    sideOffset?: number;
}

export function Hint({ children, description, side = "bottom", sideOffset = 0 }: HintProps) {
    return (
        <TooltipProvider>
            <Tooltip delayDuration={0}>
                <TooltipTrigger>
                    {children}
                </TooltipTrigger>
                <TooltipContent className="text-xs maw-w-[220px] break-words" side={side} sideOffset={sideOffset}>
                    {description}
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}