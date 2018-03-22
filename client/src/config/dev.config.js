export default {
  timeout: 30000,
  serverUrl: 'http://localhost:3001',
  getReduxTools: () => window.devToolsExtension ? window.devToolsExtension() : f => f
}
