from flask import Flask, request, jsonify
from health_screening.model_inference import load_model as load_health_model, make_prediction as predict_health
from outbreak_detection.model_inference import load_outbreak_model, predict_outbreak
from telemedicine.model_inference import load_telemedicine_model, recommend_treatment

app = Flask(__name__)

health_model = load_health_model()
outbreak_model = load_outbreak_model()
telemedicine_model, telemedicine_vectorizer = load_telemedicine_model()

@app.route('/')
def home():
    return "AI-Driven Health Platform API is Running"

@app.route('/api/health_screening', methods=['POST'])
def health_screening():
    data = request.json
    input_features = data.get('features')
    prediction = predict_health(health_model, input_features)
    return jsonify({'prediction': int(prediction[0])})

@app.route('/api/outbreak_detection', methods=['POST'])
def outbreak_detection():
    data = request.json
    input_features = data.get('features')
    prediction = predict_outbreak(outbreak_model, input_features)
    return jsonify({'prediction': prediction})

@app.route('/api/telemedicine', methods=['POST'])
def telemedicine():
    data = request.json
    symptoms = data.get('symptoms')
    recommendation = recommend_treatment(telemedicine_model, telemedicine_vectorizer, symptoms)
    return jsonify({'recommendation': recommendation})

if __name__ == '__main__':
    app.run(debug=True, port=5001)
