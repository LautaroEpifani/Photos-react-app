const date = new Date();
const yyyy = date.getFullYear();
const month = date.getMonth() + 1;
const dd = date.getDate();
const hh = date.getHours();
const mm = date.getMinutes();
const today = dd + "/" + month + "/" + yyyy + " " + hh + ":" + mm;

export default today;

export const download  = async (url) => {
    const a = document.createElement("a");
    a.href = await toDataURL(url);
    a.download = "myImage.png";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

const toDataURL = async (url) => {
    const response = await fetch(url);
    const blob = await response.blob();
    return URL.createObjectURL(blob);
}
