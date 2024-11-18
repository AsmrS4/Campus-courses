import { transformDateFromJSON } from "../converter/index.js";

export const getCurrentDay = () => {
    let cdate = new Date();
    let today = cdate.toISOString().slice(0, 10);
    return today;
}

export const birthDateIsValid = (birthDate) => {
    const today = getCurrentDay();
    return (birthDate < today);
}

export const nextDateIsValid = (nextDate) => {
    let now = (new Date())
    now = new Date(now.getTime() + 420 * 60 * 1000).toISOString().slice(0, 16)
    if (nextDate) {
        nextDate = transformDateFromJSON(nextDate);
        return nextDate > now
    } else {
        return false
    }
}

