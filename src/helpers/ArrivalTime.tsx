

export default function ArrivalTime(preparationTime_inMins:number):any{
    var now = new Date();
  const z = (now.getMinutes()+preparationTime_inMins);
  const hours_toAdd =  Math.floor(z/60);
  const mins_toAdd = (z-(60*hours_toAdd));
  const hours =  hours_toAdd + now.getHours();
  const mins = mins_toAdd ;
  const hour_text = hours.toString();
  const mins_text = mins.toString();
  const day = now.getDate();
  const month = now.getMonth()+1;
  const year = now.getFullYear();
  // Set the date we're counting down to
  let arrive_time;
  if(month <10) 
    arrive_time =  year + "-" +"0"+ month + "-" + day + "T" + hour_text +":"+ mins_text + ":00";

  else  arrive_time =  year + "-" + month + "-" + day + "T" + hour_text +":"+ mins_text + ":00";
  return arrive_time as any;
}