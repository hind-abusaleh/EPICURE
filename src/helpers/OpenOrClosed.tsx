export default function OpenOrClosed(open:number, close:number):string {
    const today = new Date();
    const time = today.getHours();
    if(time >= open && time <= close) return "Open now";
    else return "Closed";
}