/* eslint-disable import/prefer-default-export */
export function sortByHealth(players) {
    const sortPlayers = [...players].sort((a, b) => b.health - a.health);

    return sortPlayers;
}
