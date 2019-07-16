let time = "12:45:54PM";

function convert(s) {
  // console.log(s)
  let pm = ["pm", "PM", "pM", "Pm"];
  let am = ["am", "AM", "aM", "Am"];
  let containsAM = containsString(s, am);
  let containsPM = containsString(s, pm);

  function containsString(time, terms) {
    let containsLabel = false;
    let arr = time.split(":");
    terms.forEach(term => {
      arr.some(el => {
        el.includes(term) ? (containsLabel = true) : containsLabel;
      });
    });
    return containsLabel ? true : false;
  }

  console.log("contains AM:", containsAM, "|| contains PM:", containsPM);
  let splitTime = s.split(":");

  let x = s => {
    splitTime[0] === "12" ? splitTime[0] : splitTime[0] = (parseInt(splitTime[0]) + 12).toString();
    // splitTime[0] = (parseInt(splitTime[0]) + 12).toString();
    splitTime[splitTime.length - 1] = splitTime[splitTime.length - 1].slice(
      0,
      2
    );
    let newTime = splitTime.join(":");
    console.log(newTime);
    return newTime;
  };
  let y = s => {
    splitTime[0] === "12" ? (splitTime[0] = "00") : splitTime[0];
    splitTime[splitTime.length - 1] = splitTime[splitTime.length - 1].slice(
      0,
      2
    );
    let newTime = splitTime.join(":");
    console.log(newTime);
    return newTime;
  };
  return containsPM ? x(s) : y(s);
}

convert(time);
