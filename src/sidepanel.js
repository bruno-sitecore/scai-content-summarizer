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

    let audienceOptions = [

        {
            "value": "biking-fanatic",
            "label": "Biking Fanatic",
            "prompt": "loves mountain biking"
        },
        {
            "value": "avid-hiker",
            "label": "Avid Hiker",
            "prompt": "loves hiking in the outdoors"
        },
        {
            "value": "marathon-runner",
            "label": "Marathon Runner",
            "prompt": "regularly enjoys running marathons"
        }

    ];

    function init () {

        populateDropdowns();
        wireUI();

    }

    function populateDropdowns () {

        // Summary Type dropdown
        let summaryType = document.getElementById("SummaryType");
        buildPromptDropdown(summaryType, summaryOptions);

        // Audience modifier dropdown
        // TODO: in the future, these audiences should be pulled from Content Hub, Personalize, etc.
        let audienceType = document.getElementById("AudienceType");
        buildPromptDropdown(audienceType, audienceOptions);

    }

    function buildPromptDropdown (dropdown, data) {

        // Clear dropdown
        for (let pos = dropdown.options.length; pos >= 0; pos--) {
            dropdown.options.remove(pos);
        }

        // Populate (blank option first, then option list)
        let option = document.createElement("option");
        option.value = "";
        option.text = "";
        dropdown.add(option);

        data.forEach((item) => {

            let option = document.createElement("option");
            option.value = item.value;
            option.text = item.label;
            option.setAttribute("data-prompt", item.prompt);

            dropdown.add(option);

        });
    }

    function wireUI () {

        // "Add Summary Field" button should open the Summary Editor
        let openAddSummary = document.getElementById("OpenNewSummaryField");
        if (openAddSummary) {
            openAddSummary.addEventListener("click", (e) => openSummaryEditor(e));
        }

        // When "Type of Summary" dropdown changes value, update the form with the correct prompt
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