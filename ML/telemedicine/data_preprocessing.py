import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.feature_extraction.text import TfidfVectorizer

def load_telemedicine_data(file_path):
    data = pd.read_csv(file_path)
    return data

def preprocess_telemedicine_data(data):
    data.fillna('', inplace=True)

    vectorizer = TfidfVectorizer(max_features=1000)
    X = vectorizer.fit_transform(data['symptoms'])
    y = data['recommendation']

    return train_test_split(X, y, test_size=0.2, random_state=42), vectorizer

if __name__ == "__main__":
    data = load_telemedicine_data('telemedicine_data.csv')
    (X_train, X_test, y_train, y_test), vectorizer = preprocess_telemedicine_data(data)

