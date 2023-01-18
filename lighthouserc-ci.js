module.exports = {
  ci: {
    collect: {
      startServerCommand: "npm run start",
      numberOfRuns: 1,
      url: [
        "http://localhost:8080",
        "http://localhost:8080/about",
        "http://localhost:8080/service",
      ],
    },
    assert: {
      assertions:{
        'categories:performance': ['error', {minScore: .6}],
        'categories:accessibility': ['error', {minScore: .7}],
        'categories:best-practices': ['error', {minScore: .7}],
        'categories:seo': ['error', {minScore: .7}],
        'categories:pwa': 'off',
      }
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};
