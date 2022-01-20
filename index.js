// http://ihope_top.gitee.io/word-ticket/

function trigger() {
  document.querySelector(".word-input").dispatchEvent(new Event("input"));
}

function setVal(val) {
  document.querySelector(".word-input").value = val;
}
function wait() {
  return new Promise((r) => requestAnimationFrame(r));
}
async function main() {
  setVal("abandon");
  trigger();
  while (1) {
    await wait();
    const v = document.querySelector(".game-wrap .word")?.innerText;
    if (!v) {
      break;
    }
    setVal(v);
    trigger();
  }
}
