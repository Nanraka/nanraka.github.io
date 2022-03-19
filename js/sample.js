// 参考URL https://web.dev/bluetooth/


// 開始したいサービス
// len service = 'battery_service'


// フィルタ（今回はなし）
navigator.bluetooth.requestDevice({
  acceptAllDevices: true,
  optionalServices: ['battery_service'] // 後でサービスにアクセスするために必要です。
})
.then(device => { /* … */ })
.catch(error => { console.error(error); });


// Bluetoothデバイスに接続
navigator.bluetooth.requestDevice({ filters: [{ services: ['battery_service'] }] })
.then(device => {
  // 人間が読み取れるデバイス名。
  console.log(device.name);
  // リモートGATTサーバーへの接続を試行。
  return device.gatt.connect();
})
.then(server => { /* … */ })
.catch(error => { console.error(error); });


// 電圧レベルの読み取り
navigator.bluetooth.requestDevice({ filters: [{ services: ['battery_service'] }] })
.then(device => device.gatt.connect())
.then(server => {
  // Battery Serviceを取得中…
  return server.getPrimaryService('battery_service');
})
.then(service => {
  // Battery Level Characteristicを取得中…
  return service.getCharacteristic('battery_level');
})
.then(characteristic => {
  // Battery Levelを読み取り中…
  return characteristic.readValue();
})
.then(value => {
  console.log(`Battery percentage is ${value.getUint8(0)}`);
})
.catch(error => { console.error(error); });


// デバイスとの接断
navigator.bluetooth.requestDevice({ filters: [{ name: 'Francois robot' }] })
.then(device => {
  // デバイスが切断されたときのイベントリスナーをセットアップ。
  device.addEventListener('gattserverdisconnected', onDisconnected);
  // リモートGATTサーバーへの接続を試行。
  return device.gatt.connect();
})
.then(server => { /* … */ })
.catch(error => { console.error(error); });

function onDisconnected(event) {
  const device = event.target;
  console.log(`Device ${device.name} is disconnected.`);
}
