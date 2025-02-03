import joblib

def load_telemedicine_model(model_path='telemedicine_recommendation_model.pkl'):
    model, vectorizer = joblib.load(model_path)
    return model, vectorizer

def recommend_treatment(model, vectorizer, symptoms):
    symptoms_vectorized = vectorizer.transform([symptoms])
    recommendation = model.predict(symptoms_vectorized)
    return recommendation[0]

if __name__ == "__main__":
    model, vectorizer = load_telemedicine_model()
    sample_symptoms = "fever, cough, difficulty breathing"
    recommendation = recommend_treatment(model, vectorizer, sample_symptoms)
    print(f"Recommended Treatment: {recommendation}")
