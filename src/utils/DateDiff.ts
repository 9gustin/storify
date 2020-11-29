class DateDiff {
    days: number | null;
    hours: number | null;
    minutes: number | null;
    seconds: number | null;
    date1: Date | null;
    date2: Date | null;

    constructor(date1: Date, date2: Date) {
        this.days = null;
        this.hours = null;
        this.minutes = null;
        this.seconds = null;
        this.date1 = date1;
        this.date2 = date2;

        this.init();
    }
    init() {
        if (this.date1 && this.date2) {
            let numberDiff: number = (this.date1 ? this.date1.getTime() : 0) - (this.date2 ? this.date2.getTime() : 0)
            let data = DateMeasure(numberDiff);
            this.days = data.days;
            this.hours = data.hours;
            this.minutes = data.minutes;
            this.seconds = data.seconds;
        }
    };

}

function DateMeasure(miliseconds: number) {
    var days, hours, minutes, seconds;
    seconds = Math.floor(miliseconds / 1000);
    minutes = Math.floor(seconds / 60);
    seconds = seconds % 60;
    hours = Math.floor(minutes / 60);
    minutes = minutes % 60;
    days = Math.floor(hours / 24);
    hours = hours % 24;

    return { days, hours, minutes, seconds };
};

export default function dateDiff(date1: Date, date2: Date): DateDiff {
    return new DateDiff(date1, date2);
};
