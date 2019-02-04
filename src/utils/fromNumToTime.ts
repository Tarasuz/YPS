export const fromNumToTime = (time: number) => {
  let TimeH: string;
  if (Math.floor(time / 60) < 10) {
    TimeH = `0${Math.floor(time / 60)}`;
  } else {
    TimeH = `${Math.floor(time / 60)}`;
  }
  let TimeM: string;
  if (time % 60 < 10) {
    TimeM = "0" + String(time % 60);
  } else {
    TimeM = String(time % 60);
  }
  return `${TimeH}:${TimeM}`;
};
