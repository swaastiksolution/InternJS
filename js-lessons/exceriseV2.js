const cartons = [
  { l: 32.5, b: 10, h: 8, dmUnit: "CM", wt: 20, wtUnit: "KG" },
  { l: 28.0, b: 12, h: 10, dmUnit: "IN", wt: 18, wtUnit: "KG" },
  { l: 40.0, b: 15, h: 12, dmUnit: "IN", wt: 25, wtUnit: "KG" },
  { l: 35.5, b: 10.5, h: 9.5, dmUnit: "CM", wt: 22, wtUnit: "KG" },
  { l: 30.0, b: 11, h: 8.5, dmUnit: "IN", wt: 19, wtUnit: "KG" },
  { l: 33.0, b: 10, h: 7.5, dmUnit: "CM", wt: 20.5, wtUnit: "KG" },
  { l: 36.0, b: 13, h: 10, dmUnit: "IN", wt: 23, wtUnit: "KG" },
  { l: 29.5, b: 9, h: 8, dmUnit: "CM", wt: 17.8, wtUnit: "KG" },
  { l: 38.0, b: 14, h: 11, dmUnit: "CM", wt: 26, wtUnit: "KG" },
  { l: 31.0, b: 10, h: 8, dmUnit: "IN", wt: 19.5, wtUnit: "KG" }
];

// create a function that achieves the give out the following output, assuming all dimension are given in inches
/**
  {
    lValues: "28.0,40.0,...."
    bValues: "12.0,15.0,...."
    hValues: "8.0,10.0,....",
    unit: "IN,IN,CM.......",
    weight: "20,18,22",
    weightUnit: "KG,KG,KG...",
    pieceNumber: "1,2,3...."
  } 
*/

const createWeightVaues = cartons.reduce((acc, item, idx) => {
  const separator = idx === 0 ? "" : ",";
  let { l, b, h } = item;
  if (item.dmUnit === "CM") {
    l = (l*2.54).toFixed(2)
    b = (b*2.54).toFixed(2)
    h = (h*2.54).toFixed(2)
  }
  
  acc.lValues += separator + l;
  acc.bValues += separator + b;
  acc.hValues += separator + h;
  acc.unit  += separator + item.dmUnit;

  acc.weight += separator + item.wt
  acc.weightUnit += separator + item.wtUnit
  acc.pieceNumber += separator + (idx+1);
  return acc;
}, {
  lValues: "",
  bValues: "",
  hValues: "",
  unit: "",
  weight: "",
  weightUnit: "",
  pieceNumber: ""
})

console.log(createWeightVaues);
