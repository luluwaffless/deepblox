const copy = document.getElementById('copy');
const openBtn = document.getElementById('open');
const url = document.getElementById('url');
const params = {};
const updateUrl = () => url.innerHTML = `${window.location.origin}/experiences/start${Object.keys(params).length ? `?${new URLSearchParams(params).toString()}` : ""}`;
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
openBtn.addEventListener('click', () => window.location.href = url.innerHTML);