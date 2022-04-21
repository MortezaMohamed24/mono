import s from "./style";
import React from "react";
import {Day} from "../logic/types";
import {Props} from "./types";
import isToday from "../logic/isToday";
import classNames from "classnames";
import {useState} from "react";
import {useEffect} from "react";
import useCalendar from "../logic/useCalendar";


const Calendar = React.memo<Props>(({meta = {}, initial = Date.now()}) => {
  /** Selected day */
  const [value, setValue] = useState<Day | null>(null);
  /** Calendar */
  const {curr, weeks, backward, forward} = useCalendar(initial);


  useEffect(() => {
    meta.value = value ? new Date(value.year, value.month, value.date) : null;
    meta.forward = forward;
    meta.backward = backward;
  });


  return (
    <table className={s.calendar}>
      <caption>
        <div>
          <p>{`${curr.name} ${curr.year}`}</p>
          <button type="button" onClick={backward} />
          <button type="button" onClick={forward} />
        </div>
      </caption>

      <thead>
        <tr>
          <th>SUN</th>
          <th>MON</th>
          <th>TUE</th>
          <th>WED</th>
          <th>THU</th>
          <th>FRI</th>
          <th>SAT</th>
        </tr>
      </thead>

      <tbody>
        {weeks.map((week, i) => 
          <tr key={i}>
            {week.map(day => 
              <td key={day.id}>
                <button 
                  onClick={() => setValue(day)} 
                  children={day.date}
                  className={classNames(
                    {[s.today]: isToday(day)},
                    {[s.muted]: day.month !== curr.number},
                    {[s.selected]: day.id === value?.id},
                  )}
                />
              </td>
            )}
          </tr>
        )}
      </tbody>
    </table>
  );
});


export default Calendar;