(function() {

    function init() {

        wireUI();

    }

    function wireUI() {

        let openAddSummary = document.getElementById("OpenNewSummaryField");
        if (openAddSummary) {
            openAddSummary.addEventListener("click", (e) => openSummaryEditor(e));
        }

    }

    function openSummaryEditor(e) {

        let panel = document.getElementById("NewSummaryField");
        panel.classList.remove("closed");
        panel.classList.add("opened");

    }

    function closeSummaryEditor(e) {

        let panel = document.getElementById("NewSummaryField");
        panel.classList.remove("opened");
        panel.classList.add("closed");

    }

    init();

})();