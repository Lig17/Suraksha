import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler

def load_data(file_path):
    data = pd.read_csv(file_path)
    return data

def preprocess_data(data):
    data.fillna(data.mean(), inplace=True)

    data = pd.get_dummies(data, drop_first=True)

    X = data.drop('target', axis=1)
    y = data['target']

    scaler = StandardScaler()
    X_scaled = scaler.fit_transform(X)

    return train_test_split(X_scaled, y, test_size=0.2, random_state=42)

if __name__ == "__main__":
    data = load_data('health_data.csv')
    X_train, X_test, y_train, y_test = preprocess_data(data)