module.exports = {
    "modulePaths": ["<rootDir>/src/main/"],
    "moduleFileExtensions": [ "ts", "js" ],
    "testMatch": [ "**/__tests__/**/*.(ts|js)", "**/?(*.)+(spec|test).(ts|js)" ],
    "transform": {
          "^.+\\.(ts|tsx)$": "ts-jest"
        },
        "globals": {
          "ts-jest": {
            "tsConfigFile": "tsconfig.json"
          }
        }
}
