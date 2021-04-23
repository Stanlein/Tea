console.log('app')
if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/Tea/sw.js', {scope:'/Tea/'})
    .then(reg => console.log('sw is sucsesfull registzerd', reg))
    .catch( err => console.log('register sw has failed', err))
}
