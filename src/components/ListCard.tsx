import { Play } from "lucide-react";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface MessageCardProps {
    index: number;
    title: string;
    author: string[];
    organization: string;
    duration: string;
    date: string;
    thumbnailSrc: string;
}

export function MessageCard({
    index,
    title,
    author,
    organization,
    duration,
    date,
    thumbnailSrc,
}: MessageCardProps) {
    return (
        <TooltipProvider>
            <Card className="bg-zinc-900 border-zinc-800 hover:bg-zinc-800">
                <div className="p-2 flex items-center gap-2 sm:gap-4 overflow-hidden">
                    <span className="text-sm font-medium text-zinc-500 flex-shrink-0 w-6 text-right">{index}</span>
                    <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-lg overflow-hidden flex-shrink-0">
                        <Image
                            alt="Workout thumbnail"
                            className="object-cover"
                            height="48"
                            src={thumbnailSrc}
                            style={{
                                aspectRatio: "48/48",
                                objectFit: "cover",
                            }}
                            width="386"
                        />
                    </div>
                    <div className="flex flex-col min-w-0 flex-shrink overflow-hidden">
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <h2 className="text-xs sm:text-sm font-medium text-emerald-500 truncate cursor-default">
                                    {title}
                                </h2>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p className="text-sm">{title}</p>
                            </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <p className="text-xs text-zinc-400 truncate cursor-default">{author.join(", ")}</p>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p className="text-sm">{author.join(", ")}</p>
                            </TooltipContent>
                        </Tooltip>
                    </div>
                    <div className="hidden sm:flex flex-grow justify-center items-center gap-2 px-2 min-w-0 overflow-hidden">
                        <p className="text-xs text-zinc-400 whitespace-nowrap overflow-hidden text-ellipsis">
                            {organization}
                        </p>
                        <span className="text-xs text-zinc-600">•</span>
                        <p className="text-xs text-zinc-400 whitespace-nowrap overflow-hidden text-ellipsis">{duration}</p>
                    </div>
                    <time className="text-xs text-zinc-400 whitespace-nowrap flex-shrink-0 hidden lg:inline-block">
                        {date}
                    </time>
                    <button
                        className="h-8 w-8 flex-shrink-0 flex items-center justify-center rounded-full bg-zinc-800 hover:bg-zinc-700 transition-colors ml-auto sm:ml-0"
                        aria-label={`Play ${title}`}
                    >
                        <Play className="w-4 h-4 text-zinc-100" />
                    </button>
                </div>
            </Card>
        </TooltipProvider>
    );
}
