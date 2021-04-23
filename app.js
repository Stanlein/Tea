console.log('app')
if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
    .then(reg => console.log('sw is sucsesfull registzerd', reg))
    .catch( err => console.log('register sw has failed', err))
}
