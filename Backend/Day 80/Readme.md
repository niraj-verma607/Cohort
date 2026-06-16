# Set Secret Key in Kubernetes

To use the AI services, you need to create a Kubernetes secret containing your Mistral API key. This ensures that your key is stored securely.

Run the following command in your terminal, replacing `<your-mistral-api-key>` with your actual key:

```bash
kubectl create secret generic ai-secret --from-literal=MISTRAL_API_KEY=<your-mistral-api-key>
```
