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

// 定期的に GET リクエストを発行する
export function pooring(props) {
  const { startAction, finishAction, interval } = props;
  setInterval(() => {
    startAction();
    execHttpGet(props);
    finishAction();
  }, interval);
}