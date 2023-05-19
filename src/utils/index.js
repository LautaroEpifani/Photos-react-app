const date = new Date();
const yyyy = date.getFullYear();
const month = date.getMonth();
const dd = date.getDay();
const hh = date.getHours();
const mm = date.getMinutes();
const today = dd + "/" + month + "/" + yyyy + " " + hh + ":" + mm;

export default today;
