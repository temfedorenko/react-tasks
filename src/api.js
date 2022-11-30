const BASE_URL = "https://mate-academy.github.io/react_dynamic-list-of-todos/api";

function wait(delay) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

async function get(url) {
  const fullURL = BASE_URL + url + ".json";

  return await wait(300)
    .then(() => fetch(fullURL))
    .then((res) => res.json());
}

export const getTodos = () => get("/todos");

export const getUser = (userId) => get(`/users/${userId}`);
