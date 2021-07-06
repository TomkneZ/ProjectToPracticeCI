function sendActivationRequest(studentId, url) {
    return response = await fetch(url+ "/" +studentId, {
        method: "GET",
        headers: {
            "Accept": "application/json",
            "Authorization": "Bearer " + token
        }
    });
}