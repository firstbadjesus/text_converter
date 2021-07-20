const runLogic = str => {
  let resultData = [] 
  let data = str.split('_');


  data.map(x => {
    const res = x.charAt(0).toUpperCase() + x.substr(1);
    resultData.push(res)
    return res
  });

  return resultData.join('').charAt(0).toLowerCase() + resultData.join('').substr(1);
};
export default runLogic;
