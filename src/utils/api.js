const DATA_ENDPOINT = 'https://norma.nomoreparties.space/api/ingredients';

async function getData() {
    const response = await fetch(DATA_ENDPOINT)

    if (response.ok) {
      return response.json()
    }

    throw new Error(`Ошибка ${response.status}`);
}

export {
  getData
}