//Name: Josue Rosales



/* global $ DiskStacksView.js DiskStacks.js */
$(document).ready(function () {
  const stackModel = new DiskStacks();
  const stackView = new DiskStacksView(stackModel);
  stackView.init();
})
