import joblib
import numpy as np

def load_model(model_path='health_screening_model.pkl'):
    return joblib.load(model_path)

def make_prediction(model, input_data):
    input_array = np.array(input_data).reshape(1, -1)
    prediction = model.predict(input_array)
    return prediction
