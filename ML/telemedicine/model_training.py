from sklearn.naive_bayes import MultinomialNB
from sklearn.metrics import accuracy_score, classification_report
import joblib
from data_preprocessing import load_telemedicine_data, preprocess_telemedicine_data

# Train model
def train_telemedicine_model(X_train, y_train):
    model = MultinomialNB()
    model.fit(X_train, y_train)
    return model

# Evaluate model
def evaluate_telemedicine_model(model, X_test, y_test):
    predictions = model.predict(X_test)
    print("Classification Report:\n", classification_report(y_test, predictions))
    print("Accuracy:", accuracy_score(y_test, predictions))

if __name__ == "__main__":
    data = load_telemedicine_data('telemedicine_data.csv')
    (X_train, X_test, y_train, y_test), vectorizer = preprocess_telemedicine_data(data)
    model = train_telemedicine_model(X_train, y_train)
    evaluate_telemedicine_model(model, X_test, y_test)
    joblib.dump((model, vectorizer), 'telemedicine_recommendation_model.pkl')