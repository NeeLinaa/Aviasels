class ApiServices {
  api = 'https://aviasales-test-api.java-mentor.com';

  mainRequest = async (url, options) => {
    // try {
    const request = await fetch(url, options);
    if (!request.ok) throw new Error();
    return request.json();
    // } catch (err) {
    //   throw new Error(err);
    // }
  };

  getSearchId = () => this.mainRequest(`${this.api}/search`);

  sendRequest = (id) => this.mainRequest(`${this.api}/tickets?searchId=${id}`);
}

export default ApiServices;
