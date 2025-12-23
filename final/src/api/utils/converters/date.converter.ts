import dayjs from 'dayjs';
import type { Dayjs, OpUnitType } from 'dayjs';
import utc from 'dayjs/plugin/utc.js';
import timezone from 'dayjs/plugin/timezone.js';

dayjs.extend(utc);
dayjs.extend(timezone);

export class DateConverter {
    static ADJUST_TIME_PATTERN = /(now[-+]{1}\d{1,}[dmhwM]{1}(\/[dmhwM]){0,1}(\s{0,1}\([A-Z]{3}\)){0,1}(\s{0,1}\(.*?\)|\((?!UTC|EST|PST|ECT).*?\)){0,1})/;
    private static readonly TIME_COUNT_PATTERN = /\d{1,}/;
    private static readonly TIME_PERIOD_PATTERN = /(?<=\d)([dmhwM]((\/[dmhwM]){0,1}))/;
    private static readonly TIME_ZONE_PATTERN = /(?<=\()(UTC|EST|PST|ECT)/;
    private static readonly DATE_TIME_FORMAT = /(?<=\()(?!(?:UTC|EST|PST|ECT)(?:\)|$))(.*?)(?=\))/;
    private static readonly EPOCH_FORMAT = "epoch";
    private static readonly AS_STRING_FORMAT = "(asString)";
    
    public static adjustTime(timeToAdjust: string): Dayjs {
        const tzMatch = timeToAdjust.match(this.TIME_ZONE_PATTERN);
        const zone = tzMatch ? tzMatch[0] : 'UTC';
        let dt = dayjs().tz(zone);

        const countMatch = timeToAdjust.match(this.TIME_COUNT_PATTERN);
        const count = countMatch ? parseInt(countMatch[0], 10) : 0;
        const periodMatch = timeToAdjust.match(this.TIME_PERIOD_PATTERN);
        const period = periodMatch ? periodMatch[0] : "";

        return timeToAdjust.includes('+') 
            ? this.adjustUpByPeriod(period, count, dt) 
            : this.adjustDownByPeriod(period, count, dt);
    }

    private static adjustUpByPeriod(period: string, count: number, dt: Dayjs): Dayjs {
        const [unit, trunc] = period.split('/') as [string, string?];
        const map: Record<string, dayjs.ManipulateType> = { h: 'hour', d: 'day', m: 'minute', w: 'week', M: 'month' };
        let res = dt.add(count, map[unit] || 'day');
        return trunc ? res.startOf((map[trunc] || 'day') as OpUnitType) : res;
    }

    private static adjustDownByPeriod(period: string, count: number, dt: Dayjs): Dayjs {
        const [unit, trunc] = period.split('/') as [string, string?];
        const map: Record<string, dayjs.ManipulateType> = { h: 'hour', d: 'day', m: 'minute', w: 'week', M: 'month' };
        let res = dt.subtract(count, map[unit] || 'day');
        return trunc ? res.startOf((map[trunc] || 'day') as OpUnitType) : res;
    }

    public static convertToDateTime(templateString: string): string {
        const dateTime = this.adjustTime(templateString);
        const m = templateString.match(this.DATE_TIME_FORMAT);
        const formatted = m ? (m[0] === this.EPOCH_FORMAT ? dateTime.valueOf().toString() : dateTime.format(m[0])) : dateTime.toISOString();
        return templateString.replace(this.ADJUST_TIME_PATTERN, formatted);
    }

    public static isDateTimeAdjustable(table: string): boolean {
        return this.ADJUST_TIME_PATTERN.test(table);
    }

    public static convertByDateTimeVariables(template: string): string {
        return template.includes(this.AS_STRING_FORMAT) 
            ? template.replace(this.AS_STRING_FORMAT, "") 
            : this.convertToDateTime(template);
    }
}