import { useEffect, useMemo, useState } from "react";
import { useGetTimeLeftQuery, type TimeLeft } from "./christmasApi"
import { useDispatch } from "react-redux";
import { setLastData } from "./timerSlice";
import GitHubLink from "../gitHubLink/GitHubLink";
// 1. Функция нормализации данных
function normalize(t: TimeLeft) {
    return {
        days: Math.floor(t.days),
        hours: Math.floor(t.hours % 24),
        minutes: Math.floor(t.minutes % 60),
        seconds: Math.floor(t.seconds % 60),
    };
}
export function Countdown() {
    // 2. Получаем dispatch для отправки actions
    const dispatch = useDispatch();
    // 3. Запрашиваем данные с помощью RTK Query
    const { data } = useGetTimeLeftQuery();
    // 4. Мемоизируем нормализованное начальное время
    const initialTime = useMemo(() => {
        // Если data есть — нормализуем её
        // Если data ещё нет — возвращаем нули
        return data
            ? normalize(data)
            : { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }, [data]);
    // 5. Локальное состояние для текущего отображаемого времени
    const [time, setTime] = useState(initialTime);
    // 6. Сохраняем исходные данные API в Redux при каждом обновлении data
    useEffect(() => {
        if (data) {
            dispatch(setLastData(data));
        }
    }, [data, dispatch]);
    // 7. Обновляем локальное состояние при изменении initialTime
    useEffect(() => {
        setTime(initialTime);
    }, [initialTime]);

    // 8. Тикающий таймер, который каждую секунду уменьшает время
    useEffect(() => {
        // setInterval будет вызываться каждые 1000 мс
        const id = setInterval(() => {
            setTime((prev) => {
                // Распаковываем предыдущее значение времени
                let { days, hours, minutes, seconds } = prev;
                // Логика уменьшения:
                if (seconds > 0) {
                    // Если есть секунды — просто уменьшаем на 1
                    seconds--;
                } else {
                    // Если секунды 0 — нужно “занятьˮ минуту
                    seconds = 59;
                    if (minutes > 0) {
                        minutes--;
                    } else {
                        // Минуты тоже 0 “занимаемˮ час
                        minutes = 59;
                        if (hours > 0) {
                            hours--;
                        } else {
                            // Часы тоже 0 “занимаемˮ день
                            hours = 23;
                            if (days > 0) {
                                days--;
                            }
                        }
                    }
                }
                // Возвращаем новое состояние
                return { days, hours, minutes, seconds };
            });
        }, 1000);
        // ВАЖНО: очищаем интервал при размонтировании компонента
        return () => clearInterval(id);
    }, []);
    // 9. Отображение результата
    return (
        <div className="text-5xl font-bold text-center mt-8 text-green-700">
            🎄 До Рождества осталось:
            <br />
            {time.days} дн. {time.hours} ч. {time.minutes} мин. {time.seconds} сек.
            <GitHubLink href="https://github.com/dmitrined/rtc-proiects/tree/main/src/features/christmas-countdown"/>
        </div>
        
    );
}