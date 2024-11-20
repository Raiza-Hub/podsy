"use client"

import { useCurrentDate } from "@/hooks/useCurrentMonth";


export const DateDisplay = () => {
    const { currentMonth, currentYear } = useCurrentDate();

    return (
        <h2 className="text-2xl sticky top-0 font-bold mb-6">
            {currentMonth} {currentYear}
        </h2>
    );
};