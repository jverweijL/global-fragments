var editing = !!document.getElementsByClassName('fragments-editor').length;

if (editing) {
  console.log("In editing mode... time to reveal text");
  fragmentElement.find("[id$=tweettext]").first().css("display","block");
} else {
  

}