// fetch メソッドを使って GET リクエストを発行する
export function execHttpGet(props) {
  const { url, successAction, failuerAction } = props;
  fetch(url)
    .then(res => res.json())
    .then(
      result => successAction(result),
      error => failuerAction(error)
    );
}

// fetch メソッドを使って POST リクエストを発行する
export function execHttpPost(props) {
  const { url, body, successAction, failuerAction } = props;
  fetch(url, {
    method: 'POST',
    body: body,
  })
    .then(res => res.json())
    .then(
      result => successAction(result),
      error => failuerAction(error)
    );
}

// 定期的 (interval ミリ秒ごと) に GET リクエストを発行する
export function pooring(props) {
  const { startAction, finishAction, interval } = props;
  setInterval(
    () => {
      startAction();
      execHttpGet(props);
      finishAction();
    },
    interval ? interval : 5000
  );
}
