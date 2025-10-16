String.Format("function(element, input) {{ " & _
"try {{ " & _
"var codes = [{0}]; " & _
"var list = document.getElementById('crViewer_p2AvailableList'); " & _
"if (!list) return 'ERROR: List not found'; " & _
"for (var i = 0; i < list.options.length; i++) {{ list.options[i].selected = false; }} " & _
"var count = 0; " & _
"for (var i = 0; i < list.options.length; i++) {{ " & _
"if (codes.indexOf(list.options[i].value) !== -1) {{ " & _
"list.options[i].selected = true; count++; }} }} " & _
"if (count > 0) {{ " & _
"var btn = document.querySelector('img[alt=""Add a discrete Value""]'); " & _
"if (!btn) btn = document.querySelector('img[src*=""addfield.gif""]'); " & _
"if (btn) {{ btn.click(); return 'SUCCESS: Added ' + count + ' companies'; }} " & _
"return 'ERROR: Button not found'; }} " & _
"return 'WARNING: No companies found'; " & _
"}} catch(e) {{ return 'ERROR: ' + e.message; }} " & _
"}}", _
String.Join(", ", companiesToSelect.Select(Function(c) """" & c & """")))