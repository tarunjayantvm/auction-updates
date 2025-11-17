async function apiGET(url) {
    const res = await fetch(url);
    return await res.json();
}

async function apiPOST(url, body) {
    const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
    });
    return await res.json();
}
