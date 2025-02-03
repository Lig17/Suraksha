import pandas as pd
from sklearn.preprocessing import StandardScaler
from sklearn.model_selection import train_test_split

def load_outbreak_data(file_path):
    data = pd.read_csv(file_path)
    return data

def preprocess_outbreak_data(data):
    data.fillna(method='ffill', inplace=True)

    data['case_growth_rate'] = data['cases'].pct_change().fillna(0)

    features = data[['population_density', 'mobility_index', 'case_growth_rate']]
    target = data['outbreak_detected']

    scaler = StandardScaler()
    features_scaled = scaler.fit_transform(features)

    return train_test_split(features_scaled, target, test_size=0.2, random_state=42)

if __name__ == "__main__":
    data = load_outbreak_data('outbreak_data.csv')
    X_train, X_test, y_train, y_test = preprocess_outbreak_data(data)