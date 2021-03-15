createIcon("roam-to-latex-icon");

document.getElementById("roam-to-latex-icon").addEventListener("click", function() {
    let pageTitle = document.title;
    var foo = window.roamAlphaAPI.q(`[:find (pull ?e [ :node/title :block/string :block/children {:block/children ...} ]) :where [?e :node/title "${pageTitle}"] ]`);
    alert(foo[0][0]["title"]);
});

// Button
function createIcon(id) {
    try{ document.getElementById(id).closest(".bp3-popover-wrapper").remove() } catch(e){};
    var button = document.createElement('span');
    button.classList.add('bp3-popover-wrapper');
    button.setAttribute("style", "margin-left: 4px;");
    button.innerHTML = `<span class="bp3-popover-target"><span id="${id}" status="off" class="bp3-button bp3-icon-document-share bp3-minimal bp3-small"></span>`
    document.querySelector(".rm-topbar").appendChild(button);
};