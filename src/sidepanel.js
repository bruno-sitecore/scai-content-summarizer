(function() {

    let summaryOptions = [
        {
            "value": "title",
            "label": "Title",
            "prompt": "Create a title for this article"
        },
        {
            "value": "summary-short",
            "label": "Short Summary (1-sentence)",
            "prompt": "Create a 1-sentence summary of this article"
        },
        {
            "value": "long-summary",
            "label": "Long Summary (1 paragraph)",
            "prompt": "Create a 1-paragraph summary of this article"
        },
        {
            "value": "social-linkedin",
            "label": "Social: LinkedIn",
            "prompt": "Write a two sentence summary of this article for a professional business audience"
        },
        {
            "value": "social-facebook",
            "label": "Social: Facebook",
            "prompt": "Write a short, fun summary of this article for a Facebook audience"
        },
        {
            "value": "social-x",
            "label": "Social: X",
            "prompt": "Write a 1-sentence summary of this article for a Twitter post"
        },
        {
            "value": "meta-keywords",
            "label": "Meta: Keyword",
            "prompt": "Create a list of 5 to 10 keywords separated by commas from this article"
        },
        {
            "value": "meta-description",
            "label": "Meta: Description",
            "prompt": "Create am SEO-ready 1-sentence description of this article"
        }
    ];

    function init () {

        populateSummaryTypeDropdown();
        wireUI();

    }

    function populateSummaryTypeDropdown () {

        let summaryType = document.getElementById("SummaryType");

        // Clear dropdown
        for (let pos = summaryType.options.length; pos >= 0; pos--) {
            summaryType.options.remove(pos);
        }

        // Populate (blank option first, then option list)
        let option = document.createElement("option");
        option.value = "";
        option.text = "";
        summaryType.add(option);

        summaryOptions.forEach((item) => {

            let option = document.createElement("option");
            option.value = item.value;
            option.text = item.label;
            option.setAttribute("data-prompt", item.prompt);

            summaryType.add(option);

        });

    }

    function wireUI () {

        let openAddSummary = document.getElementById("OpenNewSummaryField");
        if (openAddSummary) {
            openAddSummary.addEventListener("click", (e) => openSummaryEditor(e));
        }

        let summaryType = document.getElementById("SummaryType");
        if (summaryType) {
            summaryType.addEventListener("change", (e) => handleSummaryTypeChange(e));
        }

    }

    function openSummaryEditor (e) {

        let panel = document.getElementById("NewSummaryField");
        panel.classList.remove("closed");
        panel.classList.add("opened");

    }

    function closeSummaryEditor (e) {

        let panel = document.getElementById("NewSummaryField");
        panel.classList.remove("opened");
        panel.classList.add("closed");

    }

    function handleSummaryTypeChange (e) {
        var promptText = e.currentTarget.options[e.currentTarget.selectedIndex].getAttribute("data-prompt");
        document.getElementById("SummaryPrompt").value = promptText;
    }

    init();

})();