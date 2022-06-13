app.use(UserAuthorizer({
  strategies: [
    (request, ) => {
      return "authorized"
    }
  ]
}))

app.use((request) => {
  request.authorizer.isAuthorized()
  request.authorizer.deauthorize()
  request.authorizer.authorize()
  request.authorizer.user
})