import joblib
import numpy as np

def load_outbreak_model(model_path='outbreak_detection_model.pkl'):
    return joblib.load(model_path)

def predict_outbreak(model, input_features):
    input_array = np.array(input_features).reshape(1, -1)
    prediction = model.predict(input_array)
    return 'Outbreak Detected' if prediction[0] == 1 else 'No Outbreak'
