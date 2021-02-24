const ServiceApi = () => {
    const api = 'https://front-test.beta.aviasales.ru';
    const searchId = '';
    const ticketsArr = [];

    const getSearchId = async () => {
        searchId = await fetch(`${api}/search`)
        .then(response => response.json())
        .then(data => data.searchId)
    }

    const getTickets = async () => {
        ticketsArr = await fetch(`${api}/tickets?searchId=${searchId}`)
        .then(response => response.json())
        .then(data => data.tickets)
    }

}

export default ServiceApi;