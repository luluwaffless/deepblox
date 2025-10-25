const copy = document.getElementById('copy');
const openBtn = document.getElementById('open');
const urlEl = document.getElementById('url');
const params = {};
let url = `${window.location.origin}/experiences/start`;
const updateUrl = () => {
    url = `${window.location.origin}/experiences/start${Object.keys(params).length ? `?${new URLSearchParams(params).toString()}` : ""}`
    urlEl.innerHTML = url;
};
['placeId', 'gameInstanceId', 'userId', 'accessCode', 'linkCode', 'launchData'].forEach(param => {
    const element = document.getElementById(param);
    element.addEventListener('input', () => {
        if (element.value) params[param] = element.value;
        else delete params[param];
        updateUrl();
    });
});
copy.addEventListener('click', () => {
    navigator.clipboard.writeText(url.innerHTML).then(() => {
        copy.innerHTML = 'copied!';
        setTimeout(() => copy.innerHTML = 'copy URL', 2000);
    });
});
openBtn.addEventListener('click', () => window.location.href = url);