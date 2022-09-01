// function fixText(txt) {
//   for (let i = 0; i < txt.length; i++) {
//     removeSpaceTxt = txt.replace(" ", "");
//     hugeFirstLetterTxt =
//       removeSpaceTxt.charAt(0).toUpperCase() + removeSpaceTxt.slice(1);
//     return hugeFirstLetterTxt.replace(" ", "");
//   }
// }

// function fixText(txt) {
//   let newTxt;
//   let fixed;
//   newTxt = txt.replace(" ", "");
//   fixed = newTxt.charAt(0).toUpperCase() + newTxt.slice(1);
//   return fixed.replace(" ", "");
// }

function fixText(txt) {
  noSpaceTxt = txt.split(" ").join("");
  fixedTxt = noSpaceTxt.charAt(0).toUpperCase() + noSpaceTxt.slice(1);
  return fixedTxt;
}

// kun en test for å se hvordan arrayet ser ut.
// function fixText(txt) {
//   noSpaceTxt = txt.split(" ");
//   return noSpaceTxt;
// }
