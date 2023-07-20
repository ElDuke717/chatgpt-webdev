
const OPENAI_KEY = "";
const price = 0.0002/1000;

const messages = [
    {"role":"system", "content": "You are a computer answering questions in a funny way."}
];
let totalTokens = 0;

async function sendChat() {
    const prompt = document.querySelector("#prompt").value;
    document.querySelector("#prompt").value = "";
    document.querySelector("ul").innerHTML += `<li><b>${prompt}</b></li>`;
   
    // WARNING - this is being done client side with a big security risk

    // messages has previous queries pushed to it
    messages.push({"role":"user", "content": prompt});
    const data = {
            "model": "gpt-4-0613",
            messages     
          }
    const response = await fetch("https://api.openai.com/v1/chat/completions",
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            "temperature": 0,
            'Authorization': `Bearer ${OPENAI_KEY}`
        },
        body: JSON.stringify(data)
    })
    const json = await response.json();
    messages.push(json.choices[0].message);
    const message = json.choices[0].message.content;
    
    document.querySelector("ul").innerHTML += `<li>${message}</li>`;

    document.querySelector("#prompt").value = "";
    document.querySelector("input").focus();
}