
// install sw
self.addEventListener('install', evt => {
    console.log('sw is insalled')
})

// activate sw
self.addEventListener('activate', evt => {
    console.log('sw is now active')
})

// fetch event
self.addEventListener('fetch', evt => {
    console.log('fetch ecent', evt)
})