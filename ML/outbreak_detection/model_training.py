from sklearn.ensemble import GradientBoostingClassifier
from sklearn.metrics import classification_report
import joblib
from data_preprocessing import load_outbreak_data, preprocess_outbreak_data

def train_outbreak_model(X_train, y_train):
    model = GradientBoostingClassifier(n_estimators=150, learning_rate=0.1, random_state=42)
    model.fit(X_train, y_train)
    return model

def evaluate_outbreak_model(model, X_test, y_test):
    predictions = model.predict(X_test)
    report = classification_report(y_test, predictions)
    print("Outbreak Detection Model Report:\n", report)

if __name__ == "__main__":
    data = load_outbreak_data('outbreak_data.csv')
    X_train, X_test, y_train, y_test = preprocess_outbreak_data(data)
    model = train_outbreak_model(X_train, y_train)
    evaluate_outbreak_model(model, X_test, y_test)
    joblib.dump(model, 'outbreak_detection_model.pkl')