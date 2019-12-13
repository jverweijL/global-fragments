const content = fragmentElement.querySelector('.targetgroup');
document.cookie = "targetgroup=" + configuration.targetgroupApplied + "; expires=Thu, 7 Dec 2035 12:00:00 UTC; path=/";

var editing = !!document.getElementsByClassName('fragments-editor').length;

if (editing) {
    content.text(".....");
}