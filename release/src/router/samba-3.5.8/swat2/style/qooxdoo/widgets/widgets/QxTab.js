/* Copyright (c): 2002-2005 (Germany): United Internet, 1&1, GMX, Schlund+Partner, Alturo */
function QxTab(vText,vIcon,vIconWidth,vIconHeight,vChecked){QxAtom.call(this,vText,vIcon,vIconWidth,vIconHeight);if(isValid(vChecked)){this.setChecked(vChecked);};this.setTabIndex(1);this.addEventListener("mousedown",this._g1);this.addEventListener("keyup",this._g5);};QxTab.extend(QxAtom,"QxTab");QxTab.addProperty({name:"page",type:Object});QxTab.addProperty({name:"group"});QxTab.addProperty({name:"name",type:String});QxTab.addProperty({name:"checked",type:Boolean});proto._modifyGroup=function(_b1,_b2,_b3,_b4){if(_b2){_b2.remove(this,_b4);};if(_b1){_b1.add(this,_b4);};return true;};proto._modifyParent=function(_b1,_b2,_b3,_b4){QxToolBarRadioButton.prototype._modifyParent.call(this,_b1,_b2,_b3,_b4);if(_b2){_b2.getManager().remove(this);};if(_b1){_b1.getManager().add(this);};return true;};proto._modifyPage=function(_b1,_b2,_b3,_b4){if(_b2){_b2.setTab(null,_b4);};if(_b1){_b1.setTab(this,_b4);};return true;};proto._modifyChecked=function(_b1,_b2,_b3,_b4){if(this.getGroup()){this.getGroup().setSelected(this,_b4);};var vPage=this.getPage();if(vPage){vPage.setVisible(_b1);};this.setState(_b1?"checked":null,_b4);return true;};proto._visualizeFocus=function(){};proto._visualizeBlur=function(){};proto._g5=function(e){var vPrevious;switch(e.getKeyCode()){case QxKeyEvent.keys.left:vPrevious=this.getParent().getAlignTabsToLeft();break;case QxKeyEvent.keys.right:vPrevious=!this.getParent().getAlignTabsToLeft();break;default:return;};var vChild=vPrevious?this.isFirstChild()?this.getParent().getLastChild():this.getPreviousSibling():this.isLastChild()?this.getParent().getFirstChild():this.getNextSibling();vChild.setFocused(true);vChild.setChecked(true);};proto._g1=function(e){this.setFocused(true);this.setChecked(true);};proto.dispose=function(){if(this.getDisposed()){return;};this.removeEventListener("mousedown",this._g1);this.removeEventListener("keyup",this._g5);QxAtom.prototype.dispose.call(this);};