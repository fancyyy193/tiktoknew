module.exports = {
  preset: 'react-native',
  transformIgnorePatterns: [
    "node_modules/(?!(react-native|@react-native|react-native-gesture-handler|react-redux)/)"
  ],
  transform: {
    "^.+\\.(js|ts|tsx)$": "babel-jest"
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};
