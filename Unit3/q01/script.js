var now = new Date;
var lastDayOfTheYear = new Date(now.getFullYear()+1, 0, 0);

document.write(lastDayOfTheYear-now);
