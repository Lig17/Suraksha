from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score
import joblib
from suraksha.ML.health_screening.data_preprocessing import load_data, preprocess_data

def train_model(X_train, y_train):
    model = RandomForestClassifier(n_estimators=100, random_state=42)
    model.fit(X_train, y_train)
    return model

def evaluate_model(model, X_test, y_test):
    y_pred = model.predict(X_test)
    accuracy = accuracy_score(y_test, y_pred)
    print(f"Model Accuracy: {accuracy * 100:.2f}%")

if __name__ == "__main__":
    data = load_data('health_data.csv')
    X_train, X_test, y_train, y_test = preprocess_data(data)
    model = train_model(X_train, y_train)
    evaluate_model(model, X_test, y_test)
    joblib.dump(model, 'health_screening_model.pkl')

