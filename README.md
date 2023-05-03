# CourseFuse
Python, Neo4j based project for graph-based similarity using BERT and cosine similarity.  
Case Study - Syllabus Matching   

Supervised by:- Dr Ujwala Bharambe

# Subjects
Currently works for the following Subjects:-  
1) Artificial Intelligence and Machine Learning (AI and ML)  
2) Software Engineering and Project Management (SE and PM)  
More subjects to be added in the near future.  

# Project Components
1) PreProcessing:-  
OCR implemented using Tesseract OCR from PyTesseract.  
Keyword Extraction done using Gensim Library.  
2) GraphQL:-  
Used Neo4j for creating Graphs using Cypher Queries.   
3) Similarity Prediction:-   
Made a fine tuned BERT model to tokenise the nodes of the graph and predict the final global similarity by normalising the Similarity Matrix created using Cosine Similarity.   
4) Output:-   
Created a Website to display all the studies found out by implementing the above steps. 
