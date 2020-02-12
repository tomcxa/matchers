/* eslint-disable linebreak-style */
import { sortByHealth } from '../app';

test('нужно отсортировать игроков по убыванию хепешечки', () => {
    const players = [
        { name: 'мечник', health: 10 },
        { name: 'маг', health: 100 },
        { name: 'лучник', health: 80 },
    ];
    const expected = [
        { name: 'маг', health: 100 },
        { name: 'лучник', health: 80 },
        { name: 'мечник', health: 10 },
    ];
    const result = sortByHealth(players);
    expect(result).toEqual(expected);
});
