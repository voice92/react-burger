const DATA_ENDPOINT = 'https://norma.nomoreparties.space/api/ingredients';

async function getData() {
    const response = await fetch(DATA_ENDPOINT)

    return response.json()
}

export {
  getData
}