## Intro to RAG

Retrieval-Augmented Generation (RAG) is a pattern that combines two ideas:

1. **Retrieval**: find relevant information from an external knowledge source (documents, PDFs, databases, vector stores, etc.).
2. **Generation**: use a language model to produce an answer using that retrieved information as context.

Instead of relying only on what the model learned during training, RAG lets the model read fresh or domain-specific data at query time.

### Why RAG is useful

- Reduces hallucinations by grounding answers in real documents.
- Gives access to up-to-date information without retraining a model.
- Works well for private or company-specific knowledge bases.
- Improves trust because answers can include sources.

### Basic RAG flow

1. User asks a question.
2. The question is converted into an embedding.
3. A retriever searches for similar chunks in a vector database.
4. Top matching chunks are added to the model prompt.
5. The model generates an answer based on that context.

### Common components

- **Chunking**: split long documents into smaller pieces.
- **Embeddings model**: turns text into vectors.
- **Vector database**: stores vectors and supports similarity search.
- **Retriever**: fetches relevant chunks.
- **LLM**: writes the final response.

### Challenges in RAG

- Poor chunking can miss important context.
- Weak retrieval leads to wrong or incomplete answers.
- Prompt design affects answer quality.
- Latency and cost can increase with large contexts.

### Summary

RAG helps language models answer questions more accurately by retrieving relevant knowledge first, then generating responses grounded in that knowledge.
