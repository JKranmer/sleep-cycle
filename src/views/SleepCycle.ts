export const transformTime = (qtd: number): string => {
  return new Date(90 * qtd * 60000).toISOString().substring(11, 16);
};

interface IForm {
  time: string;
  qtCycle: number;
  start: number;
}

export const calcTime = (form: IForm): string => {
  const starOrEndSleep = timeStartProcess(form.time);
  const quantidadeDormida = 90 * form.qtCycle;
  if (form.start == 0) {
    starOrEndSleep.setMinutes(starOrEndSleep.getMinutes() + quantidadeDormida);
  } else {
    starOrEndSleep.setMinutes(starOrEndSleep.getMinutes() - quantidadeDormida);
  }
  return starOrEndSleep.toISOString().substring(11, 16);
};

const timeStartProcess = (time: string): Date => {
  const timeArray = time.split(":");
  const h = parseInt(timeArray[0]);
  const m = parseInt(timeArray[1]);

  const date = new Date(0);

  date.setHours(date.getHours() + h);
  date.setMinutes(date.getMinutes() + m);

  return date;
};

export enum EWord {
  "dormir",
  "acordar",
}

export const handlePhrease = (phrease: number): string => {
  return EWord[phrease ?? 1];
};

export interface ITimeBus {
  time: string;
  duration: string;
  timeUp: string;
}

export const listTimeBus = (form: IForm): ITimeBus[] => {
  let i = 1;
  const list = [];
  while (i <= form.qtCycle) {
    list.push({
      time: form.time,
      duration: transformTime(i),
      timeUp: calcTime({ time: form.time, qtCycle: i, start: form.start }),
    });
    i++;
  }
  return list;
};
