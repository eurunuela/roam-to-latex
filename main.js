let pageTitle = document.title;

getChildren = async (pageTitle)=> {
    var foo = await window.roamAlphaAPI.q(`[:find (pull ?e [ :node/title :block/string :block/children {:block/children ...} ]) :where [?e :node/title "${pageTitle}"] ]`);
    return foo;
}

alert(getChildren)
