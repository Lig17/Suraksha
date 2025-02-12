import joblib
import logging
import os

# Configure logging
logging.basicConfig(level=logging.INFO, format="%(asctime)s - %(levelname)s - %(message)s")

MODEL_PATH = 'telemedicine_recommendation_model.pkl'

def load_telemedicine_model(model_path=MODEL_PATH):
    """Load the trained telemedicine recommendation model and vectorizer."""
    if not os.path.exists(model_path):
        logging.error(f"Model file not found: {model_path}")
        raise FileNotFoundError(f"Model file not found: {model_path}")

    try:
        model, vectorizer = joblib.load(model_path)
        logging.info("Model and vectorizer loaded successfully.")
        return model, vectorizer
    except Exception as e:
        logging.error(f"Error loading model: {e}")
        raise

def recommend_treatment(model, vectorizer, symptoms):
    """Predict treatment recommendation based on input symptoms."""
    if not symptoms or not isinstance(symptoms, str):
        logging.error("Invalid input: Symptoms must be a non-empty string.")
        raise ValueError("Symptoms must be a non-empty string.")

    try:
        symptoms_vectorized = vectorizer.transform([symptoms])
        recommendation = model.predict(symptoms_vectorized)
        return recommendation[0]
    except Exception as e:
        logging.error(f"Error during recommendation: {e}")
        raise

if __name__ == "__main__":
    try:
        model, vectorizer = load_telemedicine_model()
        sample_symptoms = "fever, cough, difficulty breathing"
        recommendation = recommend_treatment(model, vectorizer, sample_symptoms)
        logging.info(f"Recommended Treatment: {recommendation}")
    except Exception as e:
        logging.error(f"Failed to generate recommendation: {e}")

