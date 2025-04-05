let API = 'http://localhost:8000';

async function getdata(endpoint) {
    const res = await fetch(`${API}/${endpoint}`);
    const data = await res.json();
    return data;
}
