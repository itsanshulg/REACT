self.addEventListener('install',event =>
 console.log('sw is installed',event));

 self.addEventListener('activate',event =>
 console.log('sw is activated',event));

 self.addEventListener('fetch',event =>
 console.log('sw is fetched',event));