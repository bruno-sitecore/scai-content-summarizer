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

    let summaryList = [];

    function init () {

        populateDropdowns();
        wireUI();
        loadData();

    }

    /**
     * Populates data in dropdown from configuration.
     */
    function populateDropdowns () {

        // Summary Type dropdown
        let summaryType = document.getElementById("SummaryType");
        buildPromptDropdown(summaryType, summaryOptions);

        // Audience modifier dropdown
        // TODO: in the future, these audiences should be pulled from Content Hub, Personalize, etc.
        let audienceType = document.getElementById("AudienceType");
        buildPromptDropdown(audienceType, audienceOptions);

    }

    /**
     * Builds a dropdown for selecting predefined prompts.
     * @param {Object} dropdown - HTML 'select' element from the DOM.
     * @param {array} data - List of  JSON objects representing the dropdown data (value, label, prompt).
     */
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

    /**
     * Attaches events to interactive UI elements.
     */
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

        // When "Add to List" button is clicked, validate the form and update the Summaries list
        let addToList = document.getElementById("AddSummaryField");
        if (addToList) {
            addToList.addEventListener("click", () => handleAddToListClick(e));
        }

        // When the "Audience" dropdown changes, save the value in localStorage
        let audienceType = document.getElementById("AudienceType");
        if (audienceType) {
            audienceType.addEventListener("change", (e) => handleAudienceTypeChange(e));
        }

    }

    /**
     * Displays the summary editor interface by updating CSS classes.
     * @param {object} e - 'click' event object.
     */
    function openSummaryEditor (e) {

        let panel = document.getElementById("NewSummaryField");
        panel.classList.remove("closed");
        panel.classList.add("opened");

    }

    /**
     * Closes the summary editor interface by updated CSS classes.
     * @param {object} e - 'click' event object.
     */
    function closeSummaryEditor (e) {

        let panel = document.getElementById("NewSummaryField");
        panel.classList.remove("opened");
        panel.classList.add("closed");

    }

    function renderSummaries () {

        // Build HTML

        // Display HTML

        // Wire-up delete buttons

    }

    /**
     * Saves form state data to localStorage.
     */
    function saveData () {

        // List of summaries already set up by the user
        localStorage.setItem("summaryList", JSON.stringify(summaryList));

        // Audience type selection
        localStorage.setItem("audienceType", document.getElementById("AudienceType").value);
    }

    /**
     * Loads form state data from localStorage.
     */
    function loadData () {

        // List of summaries already set up by the user
        let rawSummaries = localStorage.getItem("summaryList");
        if (rawSummaries)
            summaryList = JSON.parse(rawSummaries);

        // Audience type selection
        let rawAudience = localStorage.getItem("audienceType");
        if (rawAudience)
            document.getElementById("AudienceType").value = rawAudience || '';
    }

    /**
     * When the SummaryType dropdown changes, load the 'data-prompt' attribute from the 'option' element and display it in the prompt field.
     * @param {object} e - 'change' event object. 
     */
    function handleSummaryTypeChange (e) {
        let promptText = e.currentTarget.options[e.currentTarget.selectedIndex].getAttribute("data-prompt");
        document.getElementById("SummaryPrompt").value = promptText;
    }

    function handleAddToListClick (e) {

        // Validate form (ensure something is selected)

        // If existing type is in list, update numeric label (items in list + 1)

        // Add to summaryList

        // Save data

    }

    /**
     * When the Audience dropdown changes, save all form data.
     * @param {object} e - 'change' event object.
     */
    function handleAudienceTypeChange (e) {
        saveData();
    }

    init();

})();