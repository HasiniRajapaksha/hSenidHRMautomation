  var codes = ['000003', '000044', '000133', '000146', '000210', '000383'];
  var list = document.getElementById('crViewer_p2AvailableList');
  
  console.log('List found:', list !== null);
  console.log('Total options:', list ? list.options.length : 0);
  
  if (list) {
    for (var i = 0; i < Math.min(5, list.options.length); i++) {
      console.log('Option', i, '- Value:', list.options[i].value, '- Text:', list.options[i].text);
    }
  }
  
  if (list) {
    for (var i = 0; i < list.options.length; i++) {
      // Convert string to number using parseFloat() or parseInt()
      var optionValue = parseFloat(list.options[i].value);
      
      // Check if the value exists in the codes array
      if (codes.indexOf(list.options[i].value) !== -1) {
        console.log('MATCH FOUND:', list.options[i].value, "-", list.options[i].text);
        list.options[i].selected = true;
      }
    }
  }
  
  var selectedList = document.getElementById('crViewer_p2ListBox');
  console.log('Selected list found:', selectedList !== null);
  console.log('Selected count:', selectedList ? selectedList.options.length : 0);
  
  var buttons = document.querySelectorAll('img[alt*="Add"]');
  console.log('Buttons found:', buttons.length);
  buttons.forEach(function(btn, idx) {
    console.log('Button', idx, '- Alt:', btn.alt, '- Src:', btn.src);
      
  if (btn.alt === "Add a discrete Value" && btn.src ==="https://expolanka.peopleshr.com/aspnet_client/system_web/4_0_30319/crystalreportviewers13/prompting/images/addfield.gif") {
      console.log("Clicking the 'Add a discrete Value' button...");
      btn.click();  // Simulate the click
    }
  });