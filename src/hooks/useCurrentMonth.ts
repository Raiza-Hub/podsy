

import { useState, useEffect } from 'react';

const months = [
    'January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December'
] as const;

export const useCurrentDate = () => {
    const [currentMonth, setCurrentMonth] = useState('');
    const [currentYear, setCurrentYear] = useState('');

    useEffect(() => {
        const updateDate = () => {
            const date = new Date();
            const month = date.getMonth();
            const year = date.getFullYear();
            
            setCurrentMonth(months[month]);
            setCurrentYear(year.toString());
        };

        updateDate();
        const timer = setInterval(updateDate, 86400000);

        return () => clearInterval(timer);
    }, []);

    return { currentMonth, currentYear };
};