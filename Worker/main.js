
if (window.Worker) {
  var myWorker = new Worker('worker.js');

  myWorker.onmessage = function (e) {
    console.log(e.data);
    console.log('Message received from worker');
  }

  myWorker.postMessage([4, 6]);
}
