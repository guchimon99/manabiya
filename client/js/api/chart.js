export const getPrice = (coin) =>
    fetch(`/api/v1/chart/${coin}`).then(res => res.json())
