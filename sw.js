// 알림을 띄우고, 알림을 누르면 사이트로 돌아오게 하는 작은 파일 (캐시는 하지 않음)
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('notificationclick', e => {
  e.notification.close();
  e.waitUntil(self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then(cs => cs[0] ? cs[0].focus() : self.clients.openWindow('/')));
});
