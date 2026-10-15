function daysBetweenDates(date1: string, date2: string): number {
    const [year1, month1, day1] = date1.split("-").map(Number);
    const [year2, month2, day2] = date2.split("-").map(Number);

    const time1 = Date.UTC(year1, month1 - 1, day1);
    const time2 = Date.UTC(year2, month2 - 1, day2);

    const difference = Math.abs(time2 - time1);

    return Math.round(difference / (1000 * 60 * 60 * 24));
}