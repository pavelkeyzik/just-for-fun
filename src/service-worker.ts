export function registerServiceWorker(): void {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('/public/sw.js')
      .then(value => {
        console.log('SW Registered', value);
      })
      .catch(err => {
        console.log('Something went wrong', { err });
      });
  }
}
