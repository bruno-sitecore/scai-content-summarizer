export default class OpenAI {

    constructor(apiKey, model, temperature) {

        this.apiKey = apiKey;
        this.model = model;
        this.maxTokens = 500;
        this.temperature = temperature;
        this.url = `https://api.openai.com/v1/engines/${this.model}/completions`;

    }

    // Sends a prompt to OpenAI and returns the response
    // TODO: verify that this works once we have access to OpenAI
    async sendPrompt(prompt) {

        let body = {
            prompt: prompt,
            max_tokens: _maxTokens,
            temperature: _temperature
        };

        let response = await fetch(url, {

            method: "POST",
            mode: "cors",
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${_apiKey}`
            }

        });

        // About the Response object: https://developer.mozilla.org/en-US/docs/Web/API/Response
        if (response.ok) {

            let result = await response.json();
            result.choices[0].text;

        } else {

            console.log(`Error with OpenAPI request: ${response.statusText}`);

        }
    }
}