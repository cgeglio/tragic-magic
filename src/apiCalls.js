export const getCards = (spreadCount) => {
  const endpoint = `https://rws-cards-api.herokuapp.com/api/v1/cards/random?n=${spreadCount}`;
  return fetch(endpoint).then((response) => {
    if (!response.ok) {
      throw Error("Error fetching cards");
    }
    return response.json();
  });
};

export const getFortune = () => {
  return fetch("https://api.quotable.io/random").then((response) => {
    if (!response.ok) {
      throw Error("Error fetching fortune");
    }
    return response.json();
  });
};
