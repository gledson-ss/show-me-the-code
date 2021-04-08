import React, { useEffect, useState } from 'react';

import * as St from './styles';

interface dateProps{
  year: number;
  hours: number;
  min: number;
  sec: number;
}

const DateBlock: React.FC = () => {
  const [currentDate, setCurrentDate] = useState<dateProps>({
    year: new Date().getFullYear(),
    hours: new Date().getHours(),
    min: new Date().getMinutes(),
    sec: new Date().getSeconds(),
  });

  useEffect(() => {
    setInterval(() => {
      const data = new Date();
      const year = data.getFullYear(); // Current Year
      const hours = data.getHours(); // Current Hours
      const min = data.getMinutes(); // Current Minutes
      const sec = data.getSeconds(); // Current Seconds
      setCurrentDate({
        year, hours, min, sec,
      });
    }, 1000);
  }, []);
  return (
    <St.Container>
      <St.ContentData>
        <St.Text>
          Pt-Br |
          {' '}
          {currentDate?.hours < 10 ? `0${currentDate.hours}` : currentDate.hours}
          :
          {currentDate?.min < 10 ? `0${currentDate.min}` : currentDate.min}
          :
          {currentDate?.sec < 10 ? `0${currentDate.sec}` : currentDate.sec}
        </St.Text>
      </St.ContentData>

    </St.Container>
  );
};
export default DateBlock;
