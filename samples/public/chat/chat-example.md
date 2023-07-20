curl https://api.openai.com/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer API KEY" \
  -d '{
    "model": "gpt-4-0613",
    "messages": [{"role": "system", "content": "You are a helpful assistant."}, {"role": "user", "content": "I not that smart, can I still get a job as a web-developer if I work hard enough?"}]
  }'
