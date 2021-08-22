chrome.storage.local.get(["canvasplus-setting-sidebar-smaller-icons", "canvasplus-setting-sidebar-more-spacing"], function(toggle) {
  if(toggle["canvasplus-setting-sidebar-smaller-icons"]) {
    for(let el of document.querySelectorAll(".menu-item-icon-container svg")) {
      el.style = "width:22px";
    }
  }
  if(toggle["canvasplus-setting-sidebar-more-spacing"]) {
    for(let el of document.querySelectorAll(".menu-item.ic-app-header__menu-list-item .ic-app-header__menu-list-link")) {
      el.style = "--custom-padding:.75rem;";
    }
  }
});

chrome.storage.local.get(["canvasplus-setting-sidebar-hidelogo"], function(data) {
  if(data["canvasplus-setting-sidebar-hidelogo"]) {
    document.getElementsByClassName("ic-app-header__logomark-container")[0].remove();
  };
});

var sidebarStyle = '';

chrome.storage.local.get(["canvasplus-setting-sidebar-color"], function(data) {
  const color = data["canvasplus-setting-sidebar-color"];
  if(color.match(/^#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/)) {
    sidebarStyle += `--ic-brand-global-nav-bgd: ${ color };--ic-brand-global-nav-ic-icon-svg-fill--active: ${ color };--ic-brand-global-nav-avatar-border: ${ color };`;
    document.querySelector('#header').style = sidebarStyle;
  }
});

chrome.storage.local.get(["canvasplus-setting-sidebar-icon-color"], function(data) {
  const color = data["canvasplus-setting-sidebar-icon-color"];
  if(color !== "unset") {
    sidebarStyle += `--ic-brand-global-nav-ic-icon-svg-fill: ${ color };`;
    document.querySelector('#header').style = sidebarStyle;
  }
});