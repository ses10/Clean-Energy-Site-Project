/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//configure upButton            
upButton = document.getElementsByClassName("upButton")[0];
upButton.onmouseover = function(){ upButton.src="resources/images/upPress.gif"; };
upButton.onmouseout = function(){ upButton.src="resources/images/up.gif"; };
upButton.onclick = function(){ document.getElementsByClassName("side-bar")[0].scrollTop -= 40; };
      
            
//configure downButton
downButton = document.getElementsByClassName("downButton")[0];
downButton.onmouseover = function(){ downButton.src="resources/images/downPress.gif"; };
downButton.onmouseout = function(){ downButton.src="resources/images/down.gif"; };
downButton.onclick = function(){ document.getElementsByClassName("side-bar")[0].scrollTop += 40; };

